import React, { useState, ChangeEvent } from "react";

interface InputProps {
  type: "email" | "password" | "text" | "username" | "content";
  label: string;
  placeholder?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  onForgotPassword?: () => void;
  className?: string;
  adornment?: string;
}

export const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  readOnly = false,
  onForgotPassword,
  className,
  adornment,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const eyeIcon = "/svgs/eye.svg";
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleSpanVisibility = () => {
    setIsVisible(false);
  };

  const inputStyles = {
    padding: type === "content" ? "28px 32px" : "8px",
  };

  return (
    <div className="mt-[16px] text-sm font-medium relative">
      <div className="flex justify-between items-center">
        <div className="text-left">{label}</div>
        {type === "password" && onForgotPassword && (
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-blue-500 hover:underline text-xs"
          >
            Forgot password?
          </button>
        )}
      </div>
      <div className="relative mt-1">
        <input
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          value={!readOnly ? value : ""}
          onChange={onChange}
          style={inputStyles}
          readOnly={readOnly}
          className={`w-full ${
            type === "content"
              ? "border-none bg-[#141218] rounded-lg"
              : "bg-[#26292c]"
          } border-1.5 border-[#7F8084] rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-2 flex items-center text-[#7F8084] hover:text-white"
          >
            {<img src={eyeIcon} alt="see password" />}
          </button>
        )}
        {type === "content" && (
          <div className="absolute inset-y-0 left-2 flex items-center text-[#7F8084] ">
            {isVisible && (
              <div className="p-2 bg-[#26292c] rounded-[24px] text-[18px]">
                {readOnly ? adornment : "💬"}
              </div>
            )}
            {isVisible && (
              <span
                onClick={!readOnly ? toggleSpanVisibility : () => {}}
                className="px-4"
              >
                {readOnly ? value : "How are you feeling today ?"}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
