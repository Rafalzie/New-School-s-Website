import { SmallText } from "globalStyles/text";
import {
  FeedbackStatus,
  GradesGivenStatus,
  ReturnStatus,
} from "types/guideTypes";
import { Grade, IconContainer, Status, StatusesWrapper } from "./style";

import { Bell, GreenTick, PurpleStar, RedCross, Hourglass } from "assets/Icons";

export const GuideCardStatuses = ({
  returnStatus,
  feedbackStatus,
  gradesGivenStatus,
  grade,
}: {
  returnStatus: ReturnStatus;
  feedbackStatus: FeedbackStatus;
  gradesGivenStatus: GradesGivenStatus;
  grade?: number;
}) => {
  if (returnStatus === ReturnStatus.NOT_RETURNED) return null;

  return (
    <StatusesWrapper>
      <Status>
        <IconContainer>
          <ReturnStatusIcon returnStatus={returnStatus} />
        </IconContainer>
        <SmallText>{returnStatus}</SmallText>
      </Status>
      <Status>
        <FeedbackAndGradeStatus
          returnStatus={returnStatus}
          grade={grade}
          feedbackStatus={feedbackStatus}
          gradesGivenStatus={gradesGivenStatus}
        />
      </Status>
    </StatusesWrapper>
  );
};

const ReturnStatusIcon = ({ returnStatus }: { returnStatus: ReturnStatus }) => {
  switch (returnStatus) {
    case ReturnStatus.PASSED:
      return <GreenTick />;
    case ReturnStatus.HALL_OF_FAME:
      return <PurpleStar />;
    case ReturnStatus.FAILED:
      return <RedCross />;
    case ReturnStatus.AWAITING_FEEDBACK:
      return <Hourglass />;
    default:
      return null;
  }
};

const FeedbackAndGradeStatus = ({
  returnStatus,
  gradesGivenStatus,
  feedbackStatus,
  grade,
}: {
  returnStatus: ReturnStatus;
  gradesGivenStatus: GradesGivenStatus;
  feedbackStatus: FeedbackStatus;
  grade: number | undefined;
}) => {
  if (feedbackStatus === FeedbackStatus.NEED_TO_PROVIDE_FEEDBACK) {
    return (
      <>
        <IconContainer>
          <Bell />
        </IconContainer>
        <SmallText>{FeedbackStatus.NEED_TO_PROVIDE_FEEDBACK}</SmallText>
      </>
    );
  }

  if (gradesGivenStatus === GradesGivenStatus.NEED_TO_GRADE) {
    return (
      <>
        <IconContainer>
          <Bell />
        </IconContainer>
        <SmallText>{GradesGivenStatus.NEED_TO_GRADE}</SmallText>
      </>
    );
  }

  if (grade) {
    return (
      <>
        <IconContainer>
          <Bell />
        </IconContainer>
        <SmallText>GRADE</SmallText>
        <Grade>{grade}</Grade>
      </>
    );
  }
  return null;
};
