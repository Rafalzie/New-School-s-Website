import { Slider } from "UIcomponents/slider/Slider";
import { SubTitle, SubTitleLabel } from "globalStyles/text";
import { startTransition, useActionState, useEffect, useState } from "react";
import { ButtonContainer, GradeContainer, SubmitButton } from "./style";

import { returnGrade } from "serverActions/returnGrade";

const gradeMeanings = [
  '1 - The feedback was not helpfull at all (could be something like just "good" or "bad")',
  '2- The feedback was not very helpfull (could be something like "good job" or "I liked it")',
  "3 - The feedback was not helpfull (maybe just one line of text or something like that)",
  "4 - The feedback was hardly helpfull (was maybe less than a paragraph long)",
  "5 - The feedback pointed out some specific things that could be improved or that they liked (maybe a few sentences)",
  "6 - The feedback was helpfull (it was clear that the reviewer had looked at the project and thought about it)",
  "7 - The feedback was very helpfull (it was clear that the reviewer had looked at the project and thought about it and they gave some specific advice)",
  "8 - The feedback was very helpfull (it was a thoughtful and a very thorough review with specific advice)",
  "9 - The feedback was very helpfull (it was a thoughtful and thorough review with specific advice and suggestions for improvement OR praise for the good parts)",
  "10 - The feedback was very helpfull (it was a thoughtful and thorough review with specific advice and suggestions for improvement AND praise for the good parts)",
];

export const Grade = ({
  grade,
  gradeable,
  reviewId,
}: {
  grade: number | null | undefined;
  gradeable: boolean;
  reviewId?: string;
}) => {
  const [tempGrade, setTempGrade] = useState<number>(grade ?? 5);
  const [canGrade, setCanGrade] = useState(gradeable);
  const [state, formAction, isPending] = useActionState(returnGrade, undefined);

  const handleOnGradeChange = (newGrade: number) => {
    setTempGrade(newGrade);
  };

  useEffect(() => {
    if (state?.success && state.data) {
      setCanGrade(false);
      window.location.reload(); // lazy way to force state update as we have no DB listeners setup yet
    }
  }, [state?.success, state?.data]);

  const handleSubmit = () => {
    startTransition(async () => {
      await formAction({ grade: tempGrade, reviewId });
    });
  };

  if (!grade && !gradeable) return null;
  if (gradeable && !reviewId)
    throw new Error(
      "Grade component requires a reviewId when gradeable is true"
    );

  return (
    <GradeContainer>
      <SubTitleLabel htmlFor="grade-slider">GRADE</SubTitleLabel>
      <Slider
        options={Array.from({ length: 10 }, (_, i) => i + 1)}
        value={tempGrade}
        selectable={canGrade}
        helpLink={
          "https://docs.google.com/document/d/1MbGhamGJQmKHkVQHTCZP91Szmca0T7NQOG8ZNrTCp_U/edit?tab=t.0#heading=h.a3sfbxwldt9"
        }
        handleOnChange={handleOnGradeChange}
        id="grade-slider"
        titles={gradeMeanings}
      />
      {canGrade && (
        <ButtonContainer>
          <SubmitButton
            $styletype="default"
            onClick={handleSubmit}
            disabled={isPending}
          >
            SUBMIT GRADE
          </SubmitButton>
        </ButtonContainer>
      )}
    </GradeContainer>
  );
};
