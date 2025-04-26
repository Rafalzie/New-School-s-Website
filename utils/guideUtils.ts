"use server";
import { ReturnDocument } from "models/return";
import { FeedbackDocument, GradedFeedbackDocument, Vote } from "models/review";
import {
  ReturnStatus,
  FeedbackStatus,
  GradesReceivedStatus,
  GradesGivenStatus,
  ExtendedGuideInfo,
  GuideInfo,
  Module,
} from "types/guideTypes";

export const extendGuides = async (
  guides: GuideInfo[]
): Promise<ExtendedGuideInfo[]> => {
  return Promise.all(
    guides.map(async (guide) => {
      const returnStatus = await calculateReturnStatus(
        guide.returnsSubmitted,
        guide.feedbackReceived
      );
      const feedbackStatus = await calculateFeedbackStatus(
        guide.feedbackGiven,
        guide.availableForFeedback
      );
      const gradesReceivedStatus = await calculateGradesReceivedStatus(
        guide.gradesReceived
      );
      const grade = await calculateGrade(guide.gradesReceived);
      const gradesGivenStatus = await calculateGradesGivenStatus(
        guide.gradesGiven,
        guide.availableToGrade
      );

      const extendedGuide = {
        ...guide,
        link: `/guides/${guide._id}`,
        returnStatus,
        feedbackStatus,
        gradesReceivedStatus,
        grade,
        gradesGivenStatus,
      };

      return extendedGuide;
    })
  );
};

export const calculateReturnStatus = async (
  returnsSubmitted: ReturnDocument[],
  feedbackReceived: FeedbackDocument[]
): Promise<ReturnStatus> => {
  if (returnsSubmitted.length === 0) {
    return ReturnStatus.NOT_RETURNED;
  }

  const latestSubmission = returnsSubmitted.reduce(
    (latestSubmission, submission) => {
      if (submission.createdAt > latestSubmission.createdAt) {
        return submission;
      }
      return latestSubmission;
    }
  );
  const feedbackOnLatestSubmission = feedbackReceived.filter((feedback) => {
    return feedback.return === latestSubmission._id;
  });

  if (
    feedbackOnLatestSubmission.filter(
      (feedback) => feedback.vote === Vote.NO_PASS
    ).length > 1
  ) {
    return ReturnStatus.FAILED;
  }
  if (feedbackOnLatestSubmission.length < 2) {
    return ReturnStatus.AWAITING_FEEDBACK;
  }

  if (
    feedbackOnLatestSubmission.filter(
      (feedback) => feedback.vote === Vote.RECOMMEND_TO_GALLERY
    ).length > 0
  ) {
    return ReturnStatus.HALL_OF_FAME;
  }

  return ReturnStatus.PASSED;
};

export const calculateFeedbackStatus = async (
  feedbackGiven: FeedbackDocument[],
  availableForFeedback: ReturnDocument[]
): Promise<FeedbackStatus> => {
  if (feedbackGiven.length < 2) {
    if (availableForFeedback.length === 0) {
      return FeedbackStatus.AWAITING_PROJECTS;
    }
    return FeedbackStatus.NEED_TO_PROVIDE_FEEDBACK;
  }
  return FeedbackStatus.FEEDBACK_GIVEN;
};

export const calculateGradesReceivedStatus = async (
  gradesReceived: GradedFeedbackDocument[]
): Promise<GradesReceivedStatus> => {
  if (gradesReceived.length < 2) {
    return GradesReceivedStatus.AWAITING_GRADES;
  }
  return GradesReceivedStatus.GRADES_RECEIVED;
};

export const calculateGrade = async (
  gradesReceived: GradedFeedbackDocument[]
): Promise<number | undefined> => {
  if (gradesReceived.length < 2) {
    return undefined;
  }
  const highestTwoGrades = gradesReceived
    .sort((a, b) => b.grade - a.grade)
    .slice(0, 2);

  return (highestTwoGrades[0].grade + highestTwoGrades[1].grade) / 2;
};

export const calculateGradesGivenStatus = async (
  gradesGiven: GradedFeedbackDocument[],
  availableToGrade: FeedbackDocument[]
): Promise<GradesGivenStatus> => {
  if (availableToGrade.length) return GradesGivenStatus.NEED_TO_GRADE;

  if (gradesGiven.length < 2) return GradesGivenStatus.AWAITING_FEEDBACK;

  return GradesGivenStatus.GRADES_GIVEN;
};

export const fetchModules = async (extendedGuides: ExtendedGuideInfo[]) => {
  return extendedGuides
    .reduce((acc: Module[], guideToCheck) => {
      if (
        !acc.some(
          (existingGuide) =>
            (+guideToCheck.module.title[0] as number) === existingGuide.number
        )
      ) {
        acc.push({
          title: guideToCheck.module.title,
          number: +guideToCheck.module.title[0] as number,
        });
      }
      return acc;
    }, [] as { title: string; number: number }[])
    .sort((a, b) => a.number - b.number);
};
