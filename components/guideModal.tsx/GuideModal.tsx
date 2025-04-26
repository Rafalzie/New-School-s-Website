import { SmallText, Title } from "globalStyles/text";
import { useGuide } from "providers/GuideProvider";
import { FeedbackStatus } from "types/guideTypes";
import { calculateReturnStyle } from "./calculateReturnStyle";
import { Button } from "globalStyles/buttons/default/style";
import { FeedbackOverview } from "components/feedbackOverview/FeedbackOverview";
import { GiveFeedbackView } from "components/giveFeedbackView/GiveFeedbackView";
import {
  ColouredCircle,
  Header,
  GuideModalWrapper,
  ReturnStatusContainer,
  TitleContainer,
} from "./style";
import { UnstyledLinkNoWrap } from "globalStyles/globalStyles";

export const GuideModal = () => {
  const { guide } = useGuide();
  if (!guide) return null;

  const { link, returnStatus, title, feedbackStatus } = guide;

  const RenderedContent = () => {
    if (feedbackStatus === FeedbackStatus.NEED_TO_PROVIDE_FEEDBACK) {
      return <GiveFeedbackView guideTitle={title} />;
    }
    return <FeedbackOverview />;
  };

  return (
    <GuideModalWrapper>
      <Header>
        <TitleContainer>
          <Title>{title}</Title>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ReturnStatusContainer>
              <ColouredCircle
                $backgroundColor={calculateReturnStyle(returnStatus)}
              />
              <SmallText>{returnStatus}</SmallText>
            </ReturnStatusContainer>
            <UnstyledLinkNoWrap href={link} target="_blank">
              <Button $styletype="outlined">VIEW THIS GUIDE</Button>
            </UnstyledLinkNoWrap>
          </div>
        </TitleContainer>
      </Header>
      <RenderedContent />
    </GuideModalWrapper>
  );
};
