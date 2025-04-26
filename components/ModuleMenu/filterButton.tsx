"use client";
import React, { useState } from "react";
import {
  FilterContainer,
  FilterDropdown,
  FilterItem,
  FilterButtonStyled,
} from "./style";
import { FilterIcon } from "./../../assets/Icons";

interface FilterButtonProps {
  setFilter: React.Dispatch<
    React.SetStateAction<{ tagStatus: string; guideCategory: string }>
  >;
  setModule: (
    value: number | ((prev: number | null) => number | null) | null
  ) => void;
  filter: { tagStatus: string; guideCategory: string };
}

export const FilterButton = ({
  setFilter,
  filter,
  setModule,
}: FilterButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterSelection = (category: string) => {
    console.log("Selected Filter:", category);

    if (category === "") {
      setModule(1);
    } else {
      setModule(null);
    }

    setFilter((prev) => ({
      ...prev,
      guideCategory: category,
    }));

    setIsOpen(false);
  };

  return (
    <FilterContainer>
      <FilterButtonStyled onClick={() => setIsOpen(!isOpen)}>
        <FilterIcon />
        <span>
          {filter.guideCategory
            ? `Sort By: ${filter.guideCategory}`
            : "Sort By"}
        </span>
      </FilterButtonStyled>

      {isOpen && (
        <FilterDropdown>
          <FilterItem onClick={() => handleFilterSelection("")}>
            All Categories
          </FilterItem>
          <FilterItem onClick={() => handleFilterSelection("code")}>
            Code
          </FilterItem>
          <FilterItem onClick={() => handleFilterSelection("design")}>
            Design
          </FilterItem>
        </FilterDropdown>
      )}
    </FilterContainer>
  );
};
