import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoxComponent } from "../Components/BoxComponent";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";

interface InputConfig {
  label: string;
  type: "email" | "password" | "text" | "username";
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
}

interface ButtonConfig {
  label: string;
  width: string;
  onClick: () => void;
}

interface FooterConfig {
  text: string;
  linkText: string;
}

interface FormConfig {
  type: "SIGNUP" | "LOGIN";
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  subheading: string;
  header: string;
  inputs: InputConfig[];
  button: ButtonConfig;
  footer: FooterConfig;
}

const OnboardingForm: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const navigate = useNavigate();
  const [signupInputs, setSignupInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [loginInputs, setLoginInputs] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [signupErrors, setSignupErrors] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({
    emailOrUsername: "",
    password: "",
  });

  const handleSignupInputChange =
    (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setSignupInputs({ ...signupInputs, [field]: e.target.value });
      setSignupErrors({ ...signupErrors, [field]: "" });
    };

  const handleLoginInputChange =
    (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setLoginInputs({ ...loginInputs, [field]: e.target.value });
      setLoginErrors({ ...loginErrors, [field]: "" });
    };

  const validateSignupForm = () => {
    const errors = {
      email: "",
      username: "",
      password: "",
    };
    let isValid = true;

    if (!signupInputs.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(signupInputs.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!signupInputs.username) {
      errors.username = "Username is required";
      isValid = false;
    }

    if (!signupInputs.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (signupInputs.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setSignupErrors(errors);
    return isValid;
  };

  const validateLoginForm = () => {
    const errors = {
      emailOrUsername: "",
      password: "",
    };
    let isValid = true;

    if (!loginInputs.emailOrUsername) {
      errors.emailOrUsername = "Email or Username is required";
      isValid = false;
    }

    if (!loginInputs.password) {
      errors.password = "Password is required";
      isValid = false;
    }

    setLoginErrors(errors);
    return isValid;
  };

  const handleSubmit = () => {
    if (isRegistered) {
      if (validateLoginForm()) {
        localStorage.setItem("atlys-login", JSON.stringify(loginInputs));
        console.log("Login form submitted with values:", loginInputs);

        navigate("feeds");
      }
    } else {
      if (validateSignupForm()) {
        localStorage.setItem("atlys-signup", JSON.stringify(signupInputs));
        console.log("Signup form submitted with values:", signupInputs);

        setSignupInputs({ email: "", username: "", password: "" });
        setIsRegistered(true);

        alert("Sign-up is successful, please log in to continue");
      }
    }
  };

  const signupConfig: FormConfig = {
    type: "SIGNUP",
    logoSrc: "/svgs/logo.svg",
    logoAlt: "Logo",
    logoWidth: 40,
    logoHeight: 40,
    subheading: "Sign Up",
    header: "Create an account to continue",
    inputs: [
      {
        label: "Email",
        type: "email",
        value: signupInputs.email,
        onChange: handleSignupInputChange("email"),
        placeholder: "Enter your email",
        error: signupErrors.email,
      },
      {
        label: "Username",
        type: "username",
        value: signupInputs.username,
        onChange: handleSignupInputChange("username"),
        placeholder: "Choose a preferred username",
        error: signupErrors.username,
      },
      {
        label: "Password",
        type: "password",
        value: signupInputs.password,
        onChange: handleSignupInputChange("password"),
        placeholder: "Enter your password",
        error: signupErrors.password,
      },
    ],
    button: {
      label: "Continue",
      width: "100%",
      onClick: handleSubmit,
    },
    footer: {
      text: "Already have an account?",
      linkText: "Login →",
    },
  };

  const loginConfig: FormConfig = {
    type: "LOGIN",
    logoSrc: "/svgs/logo.svg",
    logoAlt: "Logo",
    logoWidth: 40,
    logoHeight: 40,
    subheading: "Welcome Back",
    header: "Log into your account",
    inputs: [
      {
        label: "Email or Username",
        type: "email",
        value: loginInputs.emailOrUsername,
        onChange: handleLoginInputChange("emailOrUsername"),
        placeholder: "Enter your email or username",
        error: loginErrors.emailOrUsername,
      },
      {
        label: "Password",
        type: "password",
        value: loginInputs.password,
        onChange: handleLoginInputChange("password"),
        placeholder: "Enter your password",
        error: loginErrors.password,
      },
    ],
    button: {
      label: "Login now",
      width: "100%",
      onClick: handleSubmit,
    },
    footer: {
      text: "Not registered yet?",
      linkText: "Register →",
    },
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {isRegistered ? (
        <Form
          config={loginConfig}
          isRegistered={isRegistered}
          setIsRegistered={setIsRegistered}
        />
      ) : (
        <Form
          config={signupConfig}
          isRegistered={isRegistered}
          setIsRegistered={setIsRegistered}
        />
      )}
    </div>
  );
};

interface FormProps extends FormWrapperProps {
  config: FormConfig;
}

interface FormWrapperProps {
  isRegistered: boolean;
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<FormProps> = ({
  config,
  isRegistered,
  setIsRegistered,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={config.logoSrc}
        width={config.logoWidth}
        height={config.logoHeight}
        alt={config.logoAlt}
        className="logo my-8"
      />
      <BoxComponent>
        <div className="py-10 px-6 bg-[#26292c] w-[460px] rounded-lg">
          <div className="text-secondaryGray uppercase text-sm mb-[8px] font-medium">
            {config.subheading}
          </div>
          <div className="font-bold text-lg">{config.header}</div>
          <div className="mt-[45px]">
            {config.inputs.map((inputConfig, index) => (
              <div key={index} className="mb-4">
                <Input
                  label={inputConfig.label}
                  type={inputConfig.type}
                  value={inputConfig.value}
                  onChange={inputConfig.onChange}
                  placeholder={inputConfig.placeholder}
                />
                {inputConfig.error && (
                  <div className="text-red-500 text-sm mt-1 text-right">
                    {inputConfig.error}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Button
              width={config.button.width}
              label={config.button.label}
              handleClick={config.button.onClick}
            />
          </div>
          <div className="text-left mt-3 text-sm text-secondaryGray">
            {config.footer.text}{" "}
            <span
              className="text-white cursor-pointer"
              onClick={() => setIsRegistered(!isRegistered)}
            >
              {config.footer.linkText}
            </span>
          </div>
        </div>
      </BoxComponent>
    </div>
  );
};

export default OnboardingForm;
