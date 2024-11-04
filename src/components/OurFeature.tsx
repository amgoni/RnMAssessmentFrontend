import { Box, Button, Container, Stack, Typography } from "@mui/material";
import person from "../assets/ourfeature/person.png";
import circles from "../assets/ourfeature/circles.png";
import { CheckCircle } from "@mui/icons-material";
import { RadioButtonUncheckedOutlined } from "@mui/icons-material";
import profile1 from "../assets/why/profile1.png";
import profile2 from "../assets/why/profile2.png";

const OurFeature = () => {
  return (
    <Container>
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            width: "35%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: "#F8F8FE",
              position: "absolute",
              top: 0,
              left: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)", // Clipping bottom-right corner
              zIndex: 0,
            }}
          />
          <Box
            component="img"
            src={person}
            sx={{
              position: "absolute",
              height: "130%",
              top: -100,
              left: 30,
              zIndex: 2,
            }}
          />
          <Box
            component="img"
            src={circles}
            sx={{ position: "absolute", right: 30, top: -20 }}
          />
          <Stack
            direction="column"
            spacing={1}
            sx={{
              width: "70%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              right: -50,
              bottom: -40,
            }}
          >
            <Stack
              direction="row"
              sx={{
                bgcolor: "#fff",
                borderRadius: "8px",
                p: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <RadioButtonUncheckedOutlined
                color="primary"
                fontSize="large"
                sx={{ mr: 2 }}
              />
              <Stack direction="column">
                <Typography variant="body2" sx={{ fontSize: "12px" }}>
                  John Do
                </Typography>
                <Typography sx={{ fontSize: "10px", color: "#C6C6C6" }}>
                  Mon, Feb 28
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              sx={{
                bgcolor: "#fff",
                borderRadius: "8px",
                p: 1,
                display: "flex",
                alignItems: "center",
                zIndex: 3,
              }}
            >
              <CheckCircle color="primary" fontSize="large" sx={{ mr: 2 }} />
              <Stack direction="column">
                <Typography variant="body2" sx={{ fontSize: "12px" }}>
                  Mike Taylor
                </Typography>
                <Typography sx={{ fontSize: "10px", color: "#C6C6C6" }}>
                  Tue, Feb 21
                </Typography>
              </Stack>
              <Box component="img" src={profile2} sx={{ ml: "auto" }} />
            </Stack>
            <Stack
              direction="row"
              sx={{
                bgcolor: "#fff",
                borderRadius: "8px",
                p: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <RadioButtonUncheckedOutlined
                color="primary"
                fontSize="large"
                sx={{ mr: 2 }}
              />
              <Stack direction="column">
                <Typography variant="body2" sx={{ fontSize: "12px" }}>
                  Angela Taylor
                </Typography>
                <Typography sx={{ fontSize: "10px", color: "#C6C6C6" }}>
                  Tue, Feb 21
                </Typography>
              </Stack>
              <Box component="img" src={profile1} sx={{ ml: "auto" }} />
            </Stack>
          </Stack>
        </Box>
        <Stack
          direction="column"
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          <Typography sx={{ color: "#3734A9", fontSize: "18px", mb: "25px" }}>
            OUR FEATURE
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
            Receive payments quickly from anywhere
          </Typography>
          <Typography sx={{ fontSize: "18px", mt: "20px" }}>
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </Typography>
          <Button
            variant="contained"
            sx={{ alignSelf: "flex-start", mt: "28px" }}
          >
            Get Started
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default OurFeature;
