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
        py: { xs: 5, md: 10 },
        px: { xs: 5, md: 20 },
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
        direction={{ xs: "column", md: "row" }}
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Stack
          direction="column"
          sx={{ width: { xs: "100%", md: "45%" }, mb: { xs: 2, md: 0 } }}
        >
          <Typography sx={{ color: "#3734A9", fontSize: "18px", mb: "25px" }}>
            OUR NEWSLETTER
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: { xs: "28px", md: "50px" },
              fontWeight: "bolder",
              letterSpacing: "-1px",
              lineHeight: "1",
            }}
          >
            Stay updated with our weekly newsletter
          </Typography>
          <Typography sx={{ fontSize: { xs: "14px", md: "18px" }, mt: "20px" }}>
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          sx={{ width: { xs: "100%", md: "25%" } }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "24px" },
              fontWeight: "bold",
              color: "#3734A9",
            }}
          >
            Signup For Newsletter
          </Typography>
          <Box component="form">
            <Input
              placeholder="Email"
              name="email"
              fullWidth
              sx={{
                bgcolor: "white",
                mb: { xs: "12px", md: "24px" },
                p: "12px",
              }}
            />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              fullWidth
              sx={{
                bgcolor: "white",
                mb: { xs: "12px", md: "24px" },
                p: "12px",
              }}
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
