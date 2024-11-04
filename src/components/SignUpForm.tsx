import { useState, useRef, useContext } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
import { validateSignUpForm } from "../utils/validation";

const SignUpForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const switchAuthModeHandler = () => {
    setIsSignUp((prevState) => !prevState);
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const enteredName = nameInputRef.current?.value || "";
    const enteredEmail = emailInputRef.current?.value || "";
    const enteredPassword = passwordInputRef.current?.value || "";

    const errors = validateSignUpForm(
      enteredName,
      enteredEmail,
      enteredPassword
    );

    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        borderRadius: 4,
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", textAlign: "center", mb: 2, color: "#000" }}
      >
        Sign up to AR SHAKIR
      </Typography>
      <Box component="form" onSubmit={submitHandler}>
        {isSignUp && (
          <TextField
            label="Name"
            name="name"
            inputRef={nameInputRef}
            error={!!errorMessage.name}
            helperText={errorMessage.name}
            fullWidth
            sx={{
              bgcolor: "white",
              mb: "12px",
            }}
          />
        )}
        <TextField
          label="Email"
          name="email"
          inputRef={emailInputRef}
          error={!!errorMessage.email}
          helperText={errorMessage.email}
          fullWidth
          sx={{
            bgcolor: "white",
            mb: "12px",
          }}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          inputRef={passwordInputRef}
          error={!!errorMessage.password}
          helperText={errorMessage.password}
          fullWidth
          sx={{
            bgcolor: "white",
            mb: "12px",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ color: "white", mb: 2 }}
        >
          {isLoading ? (
            <CircularProgress
              size={24}
              sx={{
                color: "white",
              }}
            />
          ) : isSignUp ? (
            "Sign Up"
          ) : (
            "Login"
          )}
        </Button>
        <Button
          onClick={switchAuthModeHandler}
          sx={{ fontWeight: "bold" }}
          fullWidth
        >
          {isSignUp ? "Already have an account" : "Create new account"}
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpForm;
