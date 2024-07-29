import React, { ChangeEvent } from "react";

interface InputProps {
  type: "email" | "password" | "text" | "username";
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mt-[16px] text-sm">
      <div className="text-left">{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 bg-[#26292c] border border-secondaryGray rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
