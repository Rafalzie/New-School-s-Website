"use client";

import MarkdownReader from "UIcomponents/markdown/reader";
import { ReturnForm } from "components/returnForm/ReturnForm";
import { Border, Wrapper, MaterialButton } from "globalStyles/globalStyles";
import { Title, SubTitle, BlackSubTitle } from "globalStyles/text";
import { GuideType } from "models/guide";
import {
  Main,
  Side,
  MaterialsWrapper,
  ReturnWrapper,
  Requirements,
  Content,
  Container,
} from "./style";

export const GuideOverview = ({ guide }: { guide: GuideType }) => {
  if (!guide) {
    return <h1>Guide not found</h1>;
  }

  const {
    title,
    description,
    knowledge,
    skills,
    themeIdea,
    resources,
    classes: cMaterials,
  } = guide;

  // make rMaterials structure is the same as cMaterials
  const rMaterials = resources.map((material) => {
    return { title: material.description, link: material.link };
  });
  const allMaterials = rMaterials.concat(cMaterials);

  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <Main>
          <Wrapper>
            <SubTitle>DESCRIPTION</SubTitle>
            <MarkdownReader>{description}</MarkdownReader>
          </Wrapper>
          <Wrapper>
            {(knowledge.length > 0 || skills.length > 0) && (
              <>
                <SubTitle>GOALS</SubTitle>
                <Border>
                  <Requirements>
                    {knowledge.length > 0 && (
                      <Wrapper>
                        <BlackSubTitle>KNOWLEDGE</BlackSubTitle>
                        {knowledge.map((knowledge, index) => {
                          return (
                            <MarkdownReader key={index}>
                              {String(knowledge.knowledge)}
                            </MarkdownReader>
                          );
                        })}
                      </Wrapper>
                    )}
                    {skills.length > 0 && (
                      <Wrapper>
                        <BlackSubTitle>SKILLS</BlackSubTitle>
                        {skills.map((skills, index) => {
                          return (
                            <MarkdownReader key={index}>
                              {String(skills.skill)}
                            </MarkdownReader>
                          );
                        })}
                      </Wrapper>
                    )}
                  </Requirements>
                </Border>
              </>
            )}
          </Wrapper>
          <Wrapper>
            <SubTitle>REQUIREMENTS</SubTitle>
            <MarkdownReader>{themeIdea.description}</MarkdownReader>
          </Wrapper>
        </Main>
        <Side>
          {allMaterials.length > 0 && (
            <Wrapper>
              <SubTitle>MATERIALS</SubTitle>
              <Border>
                <MaterialsWrapper>
                  {allMaterials.map((material, index) =>
                    /* Checking if the link has title if not it won't be displayed ---- FIX IT THE DATA BASE*/
                    material.title ? (
                      <a
                        key={index}
                        style={{ textDecoration: "none" }}
                        href={material.link}
                        target="_blank"
                      >
                        <MaterialButton $styletype="default">
                          {material.title}
                        </MaterialButton>
                      </a>
                    ) : null
                  )}
                </MaterialsWrapper>
              </Border>
            </Wrapper>
          )}
        </Side>
      </Content>

      <ReturnWrapper>
        <ReturnForm guideId={guide._id.toString()} />
      </ReturnWrapper>
    </Container>
  );
};
