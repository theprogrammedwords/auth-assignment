import { ChangeEvent, ReactNode } from "react";
import { BoxComponent } from "../Components/BoxComponent";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";

export const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="/svgs/logo.svg"
        width={40}
        height={40}
        alt="Logo"
        className="logo my-8"
      />
      <BoxComponent>
        <div className="py-10 px-6 bg-[#26292c] w-[460px] h-[420px] rounded-lg">
          <div className="text-secondaryGray uppercase text-sm mb-[8px] font-medium">
            Welcome Back
          </div>
          <div className="font-bold text-lg">Log into your account</div>
          <div className="mt-[45px]">
            <Input
              label="Email or Username"
              type="email"
              value={""}
              onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              }}
              placeholder="Enter your email or username"
            />
            <Input
              label="Password"
              type={"email"}
              value={""}
              onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              }}
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-5">
            <Button width="100%" label={"Login now"} />
          </div>
          <div className="text-left mt-3 text-sm text-secondaryGray">
            Not registered yet ? <span className="text-white">Register →</span>
          </div>
        </div>
      </BoxComponent>
    </div>
  );
};
