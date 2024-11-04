import { useState, useRef, useContext } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
import { validateSignUpForm } from "../utils/validation";
import AuthContext from "../store/auth-context";

type SignUpFormProps = {
  closeModal: () => void;
};

const SignUpForm = ({ closeModal }: SignUpFormProps) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  const authCtx = useContext(AuthContext);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const switchAuthModeHandler = () => {
    setIsSignUp((prevState) => !prevState);
    setErrorMessage({});
  };

  const submitHandler = (event: React.FormEvent) => {
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

    if (isSignUp && !enteredName) {
      setErrorMessage({
        name: "Name is required",
      });
      setIsLoading(false);
      return;
    }

    if (!enteredEmail || !enteredPassword) {
      setErrorMessage({
        email: !enteredEmail ? "Email is required" : "",
        password: !enteredPassword ? "Password is required" : "",
      });
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setIsLoading(false);
      authCtx.login();
      closeModal();
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
        width: { xs: "90%", sm: "50%", md: "30%" },
        borderRadius: 4,
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", textAlign: "center", mb: 2, color: "#000" }}
      >
        {isSignUp ? "Sign up to AR SHAKIR" : "Login to AR SHAKIR"}
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
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress size={24} />
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
