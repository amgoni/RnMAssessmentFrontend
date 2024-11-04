interface ValidationErrors {
  name?: string;
  email?: string;
  password?: string;
}

export const validateSignUpForm = (
  name: string,
  email: string,
  password: string
): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!name.trim()) {
    errors.name = "Name is required.";
  }
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!password || password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  return errors;
};
