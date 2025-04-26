import { Button } from "./style";
import { ExitIcon } from "../../../assets/Icons";

type Props = {
  onClick: () => void;
};

const ExitButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <ExitIcon />
    </Button>
  );
};

export default ExitButton;
