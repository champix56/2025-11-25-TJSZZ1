import type React from "react";
import style from "./Button.module.css";
import {  useEffect, useState } from "react";

interface IButtonProps {
  color?: string;
  type?: "reset" | "submit" | "button";
  children: React.ReactNode | string | Array<React.ReactElement | string>;
  onButtonClick?:()=>void;
}

const Button: React.FC<IButtonProps> = ({
  onButtonClick=()=>{},
  type = "button",
  children,
  color,
}) => {

  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsClicked(false);
    }, 350);
  }, [isClicked])
  return (
    <button
      type={type}
      style={{ backgroundColor: color }}
      className={style.Button+(isClicked?' '+style.clicked:'')}
      onClick={()=>{
        setIsClicked(true);
        onButtonClick();
      }}
    >
      {children}
    </button>
  );
};
export default Button;
