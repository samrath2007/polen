import { CSSProperties, MouseEventHandler } from "react";

interface ButtonPropTypes {
  type?: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
  style?: CSSProperties | undefined;
  bg?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<ButtonPropTypes> = ({
  children,
  style,
  type,
  loading,
  onClick,
  bg,
}) => {
  return (
    <button
      type={type}
      className={`
        flex items-center justify-center 
        transition duration-100 ease-in
        whitespace-nowrap m-0 h-11 text-sm rounded p-4 
        ${loading ? "cursor-not-allowed" : "cursor-pointer"}
        ${bg && bg}
        ${!loading && "hover:opacity-[0.7]"}
      `}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
