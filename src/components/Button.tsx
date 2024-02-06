import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "button" | "submit";
  onClick: () => void;
};
function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
