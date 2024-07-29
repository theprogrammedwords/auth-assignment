import React from "react";

interface ButtonProps {
  width?: string;
  label: string;
  handleClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  width = "auto",
  label,
  handleClick,
  disabled,
}) => {
  return (
    <input
      type="submit"
      value={label}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
      style={{ width }}
      onClick={() => handleClick()}
      disabled={disabled}
    />
  );
};
