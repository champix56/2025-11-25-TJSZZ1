import type React from "react";

interface IButtonProps {
  color?: string;
  type?: "reset" | "submit" | "button";
  children :React.ReactNode|string|Array<React.ReactElement|string>;
}

const Button: React.FC<IButtonProps> = ({type='button', children}) => {
  
  return <div>{children}</div>;
};
export default Button;
