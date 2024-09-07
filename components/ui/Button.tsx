import clsx from "clsx";
import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary" | "white";
}

const Button: FC<ButtonProps> = (props) => {
  const { children, variant = "default", ...rest } = props;
  return (
    <button
      className={clsx(
        " rounded-lg border font-normal tracking-wide",
        variant === "primary" &&
          "py-[2px] px-4 border-button-primary bg-button-primary text-button-primary ",
        variant === "secondary" ||
          (variant === "default" &&
            "py-[2px] px-4 text-white border-button-secondary bg-button-secondary shadow-button-secondary backdrop-blur"),
        variant === "white" && "py-1 px-4 bg-white text-black"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
