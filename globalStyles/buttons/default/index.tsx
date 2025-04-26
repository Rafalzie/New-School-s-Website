"use client";
import { Button } from "./style";

type Props = {
  onClick?:
    | (() => void)
    | ((Event: React.MouseEvent<HTMLButtonElement>) => void);
  children: React.ReactNode;
  style: "default" | "outlined";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const DefaultButton = ({ onClick, children, style, disabled, type }: Props) => {
  return (
    <Button
      onClick={onClick}
      $styletype={style}
      disabled={disabled}
      type={type}
    >
      {children}
    </Button>
  );
};

export default DefaultButton;
