import React, { ReactNode } from "react";
import "./../index.css";

interface BoxComponentProps {
  children: ReactNode;
}

export const BoxComponent: React.FC<BoxComponentProps> = ({ children }) => {
  return (
    <div className="gradient-border">
      <div className="inner-box">{children}</div>
    </div>
  );
};
