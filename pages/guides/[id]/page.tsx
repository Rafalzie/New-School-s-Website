"use server";
import { getGuide } from "serverActions/getGuide";
import { GuideOverview } from "components/guideOverview/GuideOverview";
import { GuideType } from "models/guide";

type ParamsType = Promise<{ id: string }>;

const GuidePage = async ({ params }: { params: ParamsType }) => {
  const { id } = await params;
  const guideJSON = await getGuide(id);
  const guide: GuideType = JSON.parse(JSON.stringify(guideJSON));

  if (!guide) {
    return (
      <>
        <h1>Guide not found</h1>
        <h2>{id}</h2>
      </>
    );
  }

  return <GuideOverview guide={guide} />;
};

export default GuidePage;
