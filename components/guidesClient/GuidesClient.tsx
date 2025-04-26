import GuideCard from "components/guideCard/GuideCard";

import { ExtendedGuideInfo } from "types/guideTypes";
import { GuideContainer } from "./style";

type GuidesClientProps = {
  guides: ExtendedGuideInfo[];
  useGuideOrder: boolean;
};
export const GuidesClient = ({ guides, useGuideOrder }: GuidesClientProps) => {
  return (
    <GuideContainer>
      {guides.map((guide, index) => {
        return (
          <GuideCard
            guide={guide}
            key={index}
            order={useGuideOrder ? index + 1 : undefined}
          />
        );
      })}
    </GuideContainer>
  );
};
