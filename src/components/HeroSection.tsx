import { Stack, Typography, Button, Box, Container } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import mainHeroImage from "../assets/hero/mainHeroImage.png";
import miniHeroImage1 from "../assets/hero/miniHeroImage1.png";
import miniHeroImage2 from "../assets/hero/miniHeroImage2.png";
import Parallelogram from "./Parallelogram";

const heroImages = [
  { src: mainHeroImage, width: "150%", top: -90, left: "40px", zIndex: 1 },
  { src: miniHeroImage1, width: "40%", top: "140px", left: "-30px", zIndex: 2 },
  { src: miniHeroImage2, width: "60%", top: "250px", left: "-40px", zIndex: 3 },
];

const HeroSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "40px" },
        minHeight: "80vh",
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box sx={{ mb: "20px" }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "40px", md: "60px" },
                fontWeight: "medium",
                color: "#000",
              }}
            >
              Managing business payments has never been easier
            </Typography>
          </Box>
          <Box sx={{ mb: "40px" }}>
            <Typography sx={{ fontWeight: "medium", width: "80%" }}>
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </Typography>
          </Box>
          <Stack direction="row" spacing={{ xs: 0, md: 2 }} sx={{ mb: "50px" }}>
            <Button variant="contained">Get Started</Button>
            <Button>See How It Works</Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Box display="flex" alignItems="center">
              <CheckCircle color="primary" fontSize="small" />
              <Typography
                variant="body1"
                sx={{ ml: 1, fontSize: { xs: "11px", md: "16px" } }}
              >
                Free Register
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <CheckCircle color="primary" fontSize="small" />
              <Typography
                variant="body1"
                sx={{ ml: 1, fontSize: { xs: "11px", md: "16px" } }}
              >
                Great Service
              </Typography>
            </Box>
          </Stack>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            width: "50%",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {heroImages.map((image) => (
            <Box
              key={image.src}
              component="img"
              src={image.src}
              alt=""
              sx={{
                width: image.width,
                position: "absolute",
                top: image.top,
                left: image.left,
                zIndex: image.zIndex,
              }}
            />
          ))}
        </Box>
        <Parallelogram bottom="50px" right="350px" />
        <Parallelogram bottom="0px" right="250px" />
      </Container>
    </Box>
  );
};

export default HeroSection;
