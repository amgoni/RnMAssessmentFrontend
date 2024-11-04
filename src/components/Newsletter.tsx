import {
  Container,
  Box,
  Stack,
  Typography,
  Input,
  Button,
} from "@mui/material";
import confetti from "../assets/newsletter/confetti.png";

const Newsletter = () => {
  return (
    <Container
      sx={{
        bgcolor: "#F8F8FE",
        my: 15,
        py: 10,
        px: 20,
        position: "relative",
        borderRadius: "20px",
      }}
    >
      <Box
        component="img"
        src={confetti}
        sx={{ position: "absolute", right: 30, top: -20 }}
      />
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Stack direction="column" sx={{ width: "45%" }}>
          <Typography sx={{ color: "#3734A9", fontSize: "18px", mb: "25px" }}>
            OUR NEWSLETTER
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: "50px",
              fontWeight: "bolder",
              letterSpacing: "-1px",
              lineHeight: "1",
            }}
          >
            Stay updated with our weekly newsletter
          </Typography>
          <Typography sx={{ fontSize: "18px", mt: "20px" }}>
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </Typography>
        </Stack>
        <Stack direction="column" spacing={2} sx={{ width: "25%" }}>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "bold", color: "#3734A9" }}
          >
            Signup For Newsletter
          </Typography>
          <Box component="form">
            <Input
              placeholder="Email"
              name="email"
              fullWidth
              sx={{ bgcolor: "white", mb: "24px", p: "12px" }}
            />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              fullWidth
              sx={{ bgcolor: "white", mb: "24px", p: "12px" }}
            />
            <Button
              //   type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ color: "white" }}
            >
              Get Started
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Newsletter;
