import { CSSProperties, MouseEventHandler } from 'react';

interface ButtonPropTypes {
  type?: 'button' | 'submit' | 'reset' | undefined;
  loading?: boolean;
  style?: CSSProperties | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<ButtonPropTypes> = ({
  children,
  style,
  type,
  loading,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center transition duration-100 ease-in ${
        loading ? 'cursor-not-allowed' : 'cursor-pointer'
      } ${loading ? 'bg-loading' : 'bg-accent'} h-11 text-sm rounded p-4 ${
        !loading && 'hover:bg-hover'
      }`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
