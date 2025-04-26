import { Types } from "mongoose";
import { ModuleType } from "../app/models/guide";
import { FeedbackDocument, GradedFeedbackDocument } from "../app/models/review";
import { ReturnDocument } from "../app/models/return";

export type FeedbackDocumentWithReturn = FeedbackDocument & {
  associatedReturn?: ReturnDocument;
};

export type GuideInfo = {
  _id: Types.ObjectId;
  title: string;
  description: string;
  category: string;
  order: number;
  module: ModuleType;

  // this user's project returns
  returnsSubmitted: ReturnDocument[];
  feedbackReceived: FeedbackDocument[];

  // giving feedback on others' returns
  availableForFeedback: ReturnDocument[];
  feedbackGiven: FeedbackDocumentWithReturn[];

  // grades received by others on feedback given by this user
  gradesReceived: GradedFeedbackDocument[];

  // grading others' feedback
  gradesGiven: GradedFeedbackDocument[];
  availableToGrade: FeedbackDocument[];
};

export type GuideWithLink = GuideInfo & { link: string };

export type Module = {
  title: string;
  number: number;
};

export type ExtendedGuideInfo = GuideWithLink & {
  link: string;
  returnStatus: ReturnStatus;
  feedbackStatus: FeedbackStatus;
  gradesReceivedStatus: GradesReceivedStatus;
  grade: number | undefined;
  gradesGivenStatus: GradesGivenStatus;
};

export enum ReturnStatus {
  NOT_RETURNED = "Not Returned",
  AWAITING_FEEDBACK = "AWAITING FEEDBACK",
  PASSED = "PASSED",
  HALL_OF_FAME = "HALL OF FAME",
  FAILED = "FAILED",
}

export enum FeedbackStatus {
  AWAITING_PROJECTS = "Awaiting projects to give feedback",
  NEED_TO_PROVIDE_FEEDBACK = "GIVE FEEDBACK",
  FEEDBACK_GIVEN = "Feedback given",
}

export enum GradesGivenStatus {
  AWAITING_FEEDBACK = "Awaiting feedback to grade",
  NEED_TO_GRADE = "GIVE GRADE",
  GRADES_GIVEN = "Grades given",
}

export enum GradesReceivedStatus {
  AWAITING_GRADES = "Awaiting grades",
  GRADES_RECEIVED = "Grades received",
}
export interface GuideType {
  _id: string;
  title: string;
  category: string;
  returnStatus: string;
  feedbackStatus: string;
  gradesGivenStatus: string;
  grades?: number[];
}

export interface ProgressDataType {
  moduleTitle: string;
  progress: number;
}

export interface FilterType {
  status?: string;
  category?: string;
  minGrade?: number;
  maxGrade?: number;
}
