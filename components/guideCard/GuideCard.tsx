import Modal from "UIcomponents/modal/modal";
import {
  ExtendedGuideInfo,
  FeedbackStatus,
  GradesGivenStatus,
  ReturnStatus,
} from "types/guideTypes";
import { GuideProvider } from "providers/GuideProvider";
import { GuideCardOverview } from "components/guideCardOverview/GuideCardOverview";
import { CardWrapper, InfoWrapper } from "./style";
import { RedIconContainer } from "UIcomponents/toggle/style";
import { RedIcon } from "assets/Icons";
import { Suspense, lazy } from "react";

const GuideModal = lazy(() =>
  import("../guideModal.tsx/GuideModal").then((mod) => ({
    default: mod.GuideModal,
  }))
);

const capitalizeFirstLetter = (text: string) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const GuideCard = ({
  guide,
  order,
}: {
  guide: ExtendedGuideInfo;
  order?: number;
}) => {
  const { returnStatus, feedbackStatus, gradesGivenStatus, grade } = guide;

  const link =
    guide.returnStatus === ReturnStatus.NOT_RETURNED ? guide.link : undefined;

  return (
    <GuideProvider guide={guide}>
      <CardWrapper>
        <InfoWrapper>
          {link ? (
            <GuideCardOverview
              moduleTitle={capitalizeFirstLetter(guide.module.title[0])}
              guideTitle={capitalizeFirstLetter(guide.title)}
              link={link}
              order={order}
              category={guide.category}
              returnStatus={returnStatus}
              feedbackStatus={feedbackStatus}
              gradesGivenStatus={gradesGivenStatus}
              grade={grade}
            />
          ) : (
            <>
              {(feedbackStatus === FeedbackStatus.NEED_TO_PROVIDE_FEEDBACK ||
                gradesGivenStatus === GradesGivenStatus.NEED_TO_GRADE) && (
                <Notification />
              )}
              <Modal
                modalTrigger={
                  <GuideCardOverview
                    moduleTitle={capitalizeFirstLetter(guide.module.title[0])}
                    guideTitle={capitalizeFirstLetter(guide.title)}
                    order={order}
                    category={guide.category}
                    returnStatus={returnStatus}
                    feedbackStatus={feedbackStatus}
                    gradesGivenStatus={gradesGivenStatus}
                    grade={grade}
                  />
                }
                modalContent={
                  <Suspense fallback={<div>loading</div>}>
                    <GuideModal />
                  </Suspense>
                }
              />
            </>
          )}
        </InfoWrapper>
      </CardWrapper>
    </GuideProvider>
  );
};

const Notification = () => {
  return (
    <RedIconContainer>
      <RedIcon />
    </RedIconContainer>
  );
};

export default GuideCard;
