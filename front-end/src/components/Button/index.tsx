import { ButtonHTMLAttributes } from "react";

interface IButtonProps {
  children: React.ReactNode;
  isClicked?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button = ({
  children,
  isClicked,
  type = "submit",
  onClick,
}: IButtonProps) => {
  return (
    <button isClicked={isClicked} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
