import { RegisterUserErrors } from "../api/registerUser";
import { UserRegistrationDataType } from "../pages/registration/RegistrationFormType";

export function getPasswordErrors(
  formData: UserRegistrationDataType,
  errors: RegisterUserErrors
) {
  if (errors.password) {
    return errors.password.join(". ");
  }

  if (
    formData.password &&
    formData.confirmPassword &&
    formData.password !== formData.confirmPassword
  ) {
    return "Passwords do not match";
  }
  if (errors.global) {
    return errors.global.join(". ");
  }

  console.log(errors.email);

  return "";
}
