import { useState } from "react";
import {
  SubheaderContainer,
  ModuleContainer,
  ModuleOptionContainer,
  Bar,
  DropdownContainer,
  StyledButton,
} from "./style";
import { FilterButton } from "./filterButton";

export type ModuleOption = {
  optionName: string;
  onClick: () => void;
};

interface ModuleProps {
  options: ModuleOption[];
  currentOption?: ModuleOption;
  filter: {
    tagStatus: string;
    guideCategory: string;
  };
  style?: React.CSSProperties;
  zIndex?: number;
  setFilter: React.Dispatch<
    React.SetStateAction<{ tagStatus: string; guideCategory: string }>
  >;
  setModule: (
    value: number | ((prev: number | null) => number | null) | null
  ) => void;
}

export const Module = ({
  options,
  style,
  currentOption,
  zIndex,
  setFilter,
  setModule,
  filter,
}: ModuleProps) => {
  const [shownOption, setShownOption] = useState(
    currentOption?.optionName ?? options[0]?.optionName
  );
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleOnClick = (optionName: string, onClick: () => void) => {
    setShownOption(optionName);
    onClick();
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <SubheaderContainer style={style}>
      <ModuleContainer $zIndex={zIndex}>
        <div className="desktop-view">
          {options.map((option, index) => {
            const { optionName, onClick } = option;
            const isActive = optionName === shownOption;

            return (
              <ModuleOptionContainer
                key={index}
                onClick={() => handleOnClick(optionName, onClick)}
                $isActive={isActive}
              >
                <p>{optionName}</p>
              </ModuleOptionContainer>
            );
          })}
        </div>

        <div className="mobile-view">
          <StyledButton onClick={toggleDropdown}>{shownOption} ▼</StyledButton>
          {isDropdownVisible && (
            <DropdownContainer>
              {options.map((option, index) => {
                const { optionName, onClick } = option;

                return (
                  <ModuleOptionContainer
                    key={index}
                    onClick={() => {
                      handleOnClick(optionName, onClick);
                      setIsDropdownVisible(false);
                    }}
                    $isActive={optionName === shownOption}
                  >
                    <p>{optionName}</p>
                  </ModuleOptionContainer>
                );
              })}
            </DropdownContainer>
          )}
        </div>

        <FilterButton
          setFilter={setFilter}
          setModule={setModule}
          filter={filter}
        />

        <Bar />
      </ModuleContainer>
    </SubheaderContainer>
  );
};
export default Module;
