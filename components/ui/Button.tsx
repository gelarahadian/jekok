import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <button
      className="py-[2px] px-4 rounded-lg border border-button-secondary bg-button-secondary shadow-button-secondary backdrop-blur font-normal tracking-wide "
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
