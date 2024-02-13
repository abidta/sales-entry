import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "button" | "submit";
  className?: string;
  onClick?: () => void;
};
function Button({ children, type, onClick, className }: ButtonProps) {
  return (
    <button
      className={`bg-blue-600 p-1 border rounded-md text-white ${
        className ?? ""
      }`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
