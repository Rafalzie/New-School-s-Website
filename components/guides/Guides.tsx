"use client";

import { useState } from "react";
import { Container } from "./style";
import { ExtendedGuideInfo, Module } from "types/guideTypes";
import { useLocalState } from "react-session-hooks";
import { GuidesClient } from "components/guidesClient/GuidesClient";
import ProgressBar from "../progressBar/progressBar";
import {
  GradeAverageContainer,
  AverageRow,
  AverageLabel,
  AverageValue,
  ProgressBarWrapper,
  ProgressText,
} from "./style";
import { Module as ModuleMenu } from "components/ModuleMenu/ModuleMenu";

const LOCAL_STORAGE_KEY = "selectedModule";

export const Guides = ({
  extendedGuides,
  modules,
}: {
  extendedGuides: ExtendedGuideInfo[];
  modules: Module[];
}) => {
  const [selectedModule, setSelectedModule, loading] =
    useLocalState<number>(LOCAL_STORAGE_KEY);
  const [filter, setFilter] = useState<{
    tagStatus: string;
    guideCategory: string;
  }>({ tagStatus: "", guideCategory: "" });

  if (!extendedGuides || !modules || loading) return null;

  const filteredGuides = filterGuides(selectedModule, extendedGuides, filter);
  const options = createOptions(modules, setSelectedModule);

  const { guidesPassedCount, totalGuidesCount } =
    getPassedGuidesCount(filteredGuides);
  const progress = totalGuidesCount
    ? (guidesPassedCount / totalGuidesCount) * 100
    : 0;

  const { codeAverage, designAverage } =
    calculateCategoryAverages(filteredGuides);

  return (
    <Container>
      <ModuleMenu
        options={options}
        setFilter={setFilter}
        setModule={setSelectedModule}
        filter={filter}
      />

      <GradeAverageContainer>
        <AverageRow>
          <AverageLabel>Coding </AverageLabel>
          <AverageValue $isPassed={codeAverage >= 5}>
            {codeAverage >= 0 ? codeAverage.toFixed(1) : "No Grades"}
          </AverageValue>
          <span
            style={{ margin: "0 10px", color: "var(--secondary-light-200)" }}
          >
            |
          </span>

          <AverageLabel>Design </AverageLabel>
          <AverageValue $isPassed={designAverage >= 5}>
            {designAverage >= 0 ? designAverage.toFixed(1) : "No Grades"}
          </AverageValue>
        </AverageRow>
        <ProgressBarWrapper>
          <ProgressText>
            {guidesPassedCount}/{totalGuidesCount} Complete
          </ProgressText>
          <ProgressBar progress={progress} />
        </ProgressBarWrapper>
      </GradeAverageContainer>

      <GuidesClient guides={filteredGuides} useGuideOrder={!!selectedModule} />
    </Container>
  );
};

const createOptions = (
  modules: Module[],
  setSelectedModule: React.Dispatch<number | null>
) => {
  return modules
    .filter((module) => module.number !== 0)
    .map((module) => ({
      optionName: "Module " + module.number,
      onClick: () => setSelectedModule(module.number),
    }));
};

const filterGuides = (
  selectedModule: number | null,
  extendedGuides: ExtendedGuideInfo[],
  filter: { tagStatus: string; guideCategory: string }
) => {
  return extendedGuides.filter((guide) => {
    const isFilteringByCategory = filter.guideCategory !== "";

    if (typeof guide.category !== "string") {
      return false;
    }

    const guideCategoryLower = guide.category.trim().toLowerCase();
    const filterCategoryLower = filter.guideCategory.trim().toLowerCase();

    const isCodeRelated = [
      "html",
      "css",
      "javascript",
      "react",
      "typescript",
      "coding",
      "code",
    ].some((keyword) => guideCategoryLower.includes(keyword));

    const isDesignRelated = guideCategoryLower.includes("design");

    const matchesCategory =
      filterCategoryLower === "code"
        ? isCodeRelated
        : filterCategoryLower === "design"
        ? isDesignRelated
        : filterCategoryLower
        ? guideCategoryLower === filterCategoryLower
        : true;

    const matchesModule = isFilteringByCategory
      ? true
      : selectedModule !== null
      ? guide.module.title[0] === "" + selectedModule
      : true;

    return matchesModule && matchesCategory;
  });
};

const getPassedGuidesCount = (guides: ExtendedGuideInfo[]) => {
  let guidesPassedCount = 0;
  let totalGuidesCount = guides.length;
  guides.forEach((guide) => {
    if (guide.returnStatus === "PASSED") {
      guidesPassedCount++;
    }
  });

  return { guidesPassedCount, totalGuidesCount };
};

const calculateCategoryAverages = (guides: ExtendedGuideInfo[]) => {
  let codeTotal = 0;
  let designTotal = 0;
  let codeCount = 0;
  let designCount = 0;

  guides.forEach((guide) => {
    if (guide.grade !== undefined && guide.grade !== null) {
      if (guide.category === "code") {
        codeTotal += guide.grade;
        codeCount++;
      } else if (guide.category === "design") {
        designTotal += guide.grade;
        designCount++;
      }
    }
  });

  const codeAverage = codeCount > 0 ? codeTotal / codeCount : 0;
  const designAverage = designCount > 0 ? designTotal / designCount : 0;

  return { codeAverage, designAverage };
};
