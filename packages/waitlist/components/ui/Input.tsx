import { ChangeEventHandler, CSSProperties } from 'react';

interface InputPropTypes {
  type?: string;
  name?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  style?: CSSProperties | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input: React.FC<InputPropTypes> = ({
  type,
  name,
  id,
  value,
  placeholder,
  style,
  onChange,
}) => {
  return (
    <input
      className="h-11 text-sm rounded m-0 p-4 bg-darkGray outline-none"
      style={style}
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
