"use client";
import Modal from "UIcomponents/modal/modal";
import Button from "globalStyles/buttons/default";

import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import { ReturnFormData, returnGuide } from "serverActions/returnGuide";
import { Form } from "globalStyles/globalStyles";
import { Input } from "UIcomponents/input/Input";
import { useSessionState } from "react-session-hooks";

export const ReturnForm = ({ guideId }: { guideId: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const FormContent = () => {
    const [formData, setFormData, loading] = useSessionState<ReturnFormData>(
      `returnForm-${guideId}`
    );
    // const [formData, setFormData] = useState<ReturnFormData | null>(null);
    const [state, formAction, isPending] = useActionState(
      returnGuide,
      undefined
    );

    useEffect(() => {
      if (state?.success) {
        setFormData(null);
        // lazy way to force state update as we have no DB listeners setup yet
        window.location.replace("/guides");
      }
    }, [state?.success, setFormData]);

    if (!guideId || loading) return null;

    const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
      event.preventDefault();
      startTransition(() => {
        formAction({ ...formData, guideId });
      });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
      <Form>
        <Input
          id={"projectUrl"}
          type={"text"}
          name={"projectUrl"}
          label={"Github or Figma URL"}
          required={true}
          disabled={isPending}
          value={formData?.projectUrl || ""}
          onChange={handleInputChange}
          error={
            state?.errors?.projectUrl && !isPending
              ? state.errors.projectUrl[0]
              : undefined
          }
        />
        <Input
          id={"liveVersion"}
          type={"text"}
          name={"liveVersion"}
          label={"Live version or prototype(Figma)"}
          value={formData?.liveVersion || ""}
          onChange={handleInputChange}
          required={true}
          disabled={isPending}
          error={
            state?.errors?.liveVersion && !isPending
              ? state.errors.liveVersion[0]
              : undefined
          }
        />
        <Input
          id={"imageOfProject"}
          type={"text"}
          name={"imageOfProject"}
          value={formData?.imageOfProject || ""}
          onChange={handleInputChange}
          label={"Image that suits your project (optional)"}
          required={false}
          disabled={false}
        />
        <Input
          id={"projectName"}
          type={"text"}
          name={"projectName"}
          label={"Project title"}
          value={formData?.projectName || ""}
          onChange={handleInputChange}
          required={true}
          disabled={false}
          error={
            state?.errors?.projectName && !isPending
              ? state.errors.projectName[0]
              : undefined
          }
        />
        <Input
          id={"comment"}
          type={"textarea"}
          name={"comment"}
          label={"Short project description"}
          value={formData?.comment || ""}
          onChange={handleInputChange}
          required={true}
          disabled={false}
          error={
            state?.errors?.comment && !isPending
              ? state.errors.comment[0]
              : undefined
          }
        />
        <Button style="default" onClick={handleSubmit}>
          SUBMIT
        </Button>
      </Form>
    );
  };

  return (
    <Modal
      modalTrigger={<Button style="default">RETURN</Button>}
      modalContent={FormContent()}
      state={[isModalOpen, setIsModalOpen]}
    />
  );
};
