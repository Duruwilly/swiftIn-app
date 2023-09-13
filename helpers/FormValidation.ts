import { omit } from "lodash";

type PasswordErrors = {
  password: string;
  newPassword: string;
};

type EmailErrors = {
  emailError: string;
};

type validationProps = {
  id: string;
  value: string;
};

interface PasswordValidationProps extends validationProps {
  passwordErrors: PasswordErrors;
  setPasswordErrors: React.Dispatch<React.SetStateAction<PasswordErrors>>;
}

interface EmailValidationProps extends validationProps {
  emailErrors: EmailErrors;
  setEmailErrors: React.Dispatch<React.SetStateAction<EmailErrors>>;
}

const validatePassword = ({
  id,
  value,
  passwordErrors,
  setPasswordErrors,
}: PasswordValidationProps) => {
  switch (id) {
    case "password":
      if (
        !new RegExp(
          /(?=.*[0-9])(?=.*[!@#$%^&*_-])(?=.*[a-z])(?=.*[A-Z]).{8,}/
        ).test(value)
      ) {
        setPasswordErrors({
          ...passwordErrors,
          password:
            "password must contain at least one special character, uppercase and lowercase letters with at least a number, and must be 8 characters or more",
        });
      } else {
        let newObj = omit(passwordErrors, "password");
        setPasswordErrors(newObj);
      }
      break;

    case "newPassword":
      if (value !== passwordErrors.password) {
        setPasswordErrors({
          ...passwordErrors,
          newPassword: "Password does not match",
        });
      } else {
        let newObj = omit(passwordErrors, "newPassword");
        setPasswordErrors(newObj);
      }
      break;

    default:
      break;
  }
};

const validateEmail = ({
  id,
  value,
  emailErrors,
  setEmailErrors,
}: EmailValidationProps) => {
  switch (id) {
    case "email":
      if (
        !new RegExp(
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        ).test(value)
      ) {
        setEmailErrors({
          ...emailErrors,
          emailError: "Email not valid",
        });
      } else {
        let newObj = omit(emailErrors, "emailError");
        setEmailErrors(newObj);
      }
      break;

    default:
      break;
  }
};

export { validatePassword, validateEmail };
