import { Container, Box, Typography, Button, Stack } from "@mui/material";
import marks from "../assets/getstarted/marks.png";

const GetStarted = () => {
  return (
    <Container
      sx={{
        bgcolor: "#F8F8FE",
        mt: 15,
        py: 10,
        position: "relative",
        borderRadius: "20px",
      }}
    >
      <Box
        component="img"
        src={marks}
        sx={{ position: "absolute", left: { xs: 60, md: 100 }, top: -50 }}
      />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "100%", md: "60%" },
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontSize: { xs: "28px", md: "50px" },
            fontWeight: "bolder",
            letterSpacing: "-1px",
            lineHeight: "1",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Get Started With AR Shakir
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px" },
            mt: "20px",
            textAlign: "center",
          }}
        >
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient not.
        </Typography>
        <Button variant="contained" sx={{ mt: "28px" }}>
          Get Started
        </Button>
      </Stack>
    </Container>
  );
};

export default GetStarted;
