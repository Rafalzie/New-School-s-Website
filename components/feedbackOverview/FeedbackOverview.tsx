import { SubTitle } from "globalStyles/text";
import { useMemo, useState } from "react";
import {
  FeedbackDocumentWithReturn,
  GradesGivenStatus,
} from "types/guideTypes";
import MarkdownReader from "UIcomponents/markdown/reader";
import { Toggle, ToggleOption } from "UIcomponents/toggle/Toggle";
import { OptionNavigator } from "UIcomponents/optionNavigator/OptionNavigator";
import { useGuide } from "providers/GuideProvider";
import { ReturnOverview } from "components/returnOverview/ReturnOverview";
import {
  FeedbackContainer,
  FeedbackInfoContainer,
  ContentAndNavigatorContainer,
  ToggleContainer,
  CommentWrapper,
  FeedbackContentWrapper,
} from "./style";
import { Border } from "globalStyles/globalStyles";
import { StyleColors } from "globalStyles/colors";
import { Vote } from "models/review";

export const FeedbackOverview = () => {
  const { guide } = useGuide();
  const isFeedbackGiven = useMemo(
    () => guide?.feedbackGiven?.length > 0,
    [guide]
  );
  const isFeedbackReceived = useMemo(
    () => guide?.feedbackReceived?.length > 0,
    [guide]
  );

  const [showGivenOrReceived, setShowGivenOrReceived] = useState<
    "given" | "received" | null
  >(isFeedbackReceived ? "received" : isFeedbackGiven ? "given" : null);

  const [selectedGivenIndex, setSelectedGivenIndex] = useState<number>(0);
  const [selectedReceivedIndex, setSelectedReceivedIndex] = useState<number>(0);

  if (!guide) return null;
  const {
    feedbackGiven,
    feedbackReceived,
    returnsSubmitted,
    availableToGrade,
  } = guide;

  const theFeedback =
    showGivenOrReceived === "given"
      ? feedbackGiven[selectedGivenIndex]
      : feedbackReceived[selectedReceivedIndex];

  if (!showGivenOrReceived) {
    const theReturn = returnsSubmitted[0];
    return <ReturnOverview theReturn={theReturn} />;
  }

  const gradeable =
    showGivenOrReceived === "received" && theFeedback && !theFeedback.grade;

  const toggleOptions = () => {
    let options: ToggleOption[] = [];
    if (isFeedbackGiven) {
      options.push(["given", () => setShowGivenOrReceived("given")]);
    }
    if (isFeedbackReceived) {
      options.push([
        "received",
        () => setShowGivenOrReceived("received"),
        guide.gradesGivenStatus === GradesGivenStatus.NEED_TO_GRADE,
      ]);
    }

    return options;
  };

  const NavigatorOptions = () => {
    if (showGivenOrReceived === "given") {
      return feedbackGiven.map((feedback) =>
        feedback.grade ? StyleColors.purple : StyleColors.lightGrey
      );
    }
    return feedbackReceived.map((feedback) => {
      if (feedback.vote === Vote.PASS) return StyleColors.green;
      if (feedback.vote === Vote.NO_PASS) return StyleColors.red;
      return StyleColors.lightGrey;
    });
  };

  return (
    <FeedbackContainer>
      <ToggleContainer>
        <Toggle
          currentSelection={showGivenOrReceived}
          options={toggleOptions()}
        />
      </ToggleContainer>
      <FeedbackInfoContainer>
        <ReturnOverview
          theFeedback={
            showGivenOrReceived === "given"
              ? feedbackGiven[selectedGivenIndex]
              : feedbackReceived[selectedReceivedIndex]
          }
          gradeable={gradeable}
        />
        <ContentAndNavigatorContainer>
          <FeedbackContent
            currentFeedback={
              showGivenOrReceived === "given"
                ? feedbackGiven[selectedGivenIndex]
                : feedbackReceived[selectedReceivedIndex]
            }
            subtitle={`FEEDBACK YOU ${
              showGivenOrReceived === "given" ? "GAVE" : "RECEIVED"
            }`}
          />
          <OptionNavigator
            optionsWithColor={NavigatorOptions()}
            selectedOption={
              showGivenOrReceived === "given"
                ? selectedGivenIndex
                : selectedReceivedIndex
            }
            selectOption={
              showGivenOrReceived === "given"
                ? (index) => {
                    setSelectedGivenIndex(index);
                  }
                : (index) => {
                    setSelectedReceivedIndex(index);
                  }
            }
          />
        </ContentAndNavigatorContainer>
      </FeedbackInfoContainer>
    </FeedbackContainer>
  );
};

const FeedbackContent = ({
  currentFeedback,
  subtitle,
}: {
  subtitle: string;
  currentFeedback: FeedbackDocumentWithReturn | null;
}) => {
  return (
    <FeedbackContentWrapper>
      <SubTitle>{subtitle}</SubTitle>
      <Border>
        <CommentWrapper>
          <MarkdownReader>
            {currentFeedback?.comment ?? "No feedback yet"}
          </MarkdownReader>
        </CommentWrapper>
      </Border>
    </FeedbackContentWrapper>
  );
};
