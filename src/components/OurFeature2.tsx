import { AddCircleOutline } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import profile from "../assets/ourfeature2/profile.png";
import dots from "../assets/ourfeature2/dots.png";

const days = [
  { day: "Mon", color: "#4F46BA" },
  { day: "Tue", color: "#F9896B" },
  { day: "Wed", color: "#4F46BA" },
  { day: "Thur", color: "#F9896B" },
  { day: "Fri", color: "#4F46BA" },
  { day: "Sat", color: "#F9896B" },
  { day: "Sun", color: "#4F46BA" },
];

const OurFeature2 = () => {
  return (
    <Container>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Stack
          direction="column"
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          <Typography
            sx={{
              color: "#3734A9",
              fontSize: "18px",
              mb: "25px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            OUR FEATURE
          </Typography>
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
            Manage all expenses & incomes from your dashboard
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "18px" },
              mt: "20px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </Typography>
          <Button
            variant="contained"
            sx={{ alignSelf: { xs: "center", md: "flex-start" }, mt: "28px" }}
          >
            Get Started
          </Button>
        </Stack>

        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "40%",
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
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)",
              zIndex: 0,
            }}
          />
          <Stack
            direction="column"
            sx={{
              zIndex: 2,
              bgcolor: "#fff",
              p: 4,
              position: "absolute",
              borderRadius: "10px",
              boxShadow: "0px 42px 36px #0000001C",
              top: -30,
              left: -40,
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontSize: "18px",
                fontWeight: "bold",
                zIndex: 2,
              }}
            >
              Daily Activities
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: "20px" }}>
              {days.map((day, index) => (
                <Stack
                  key={index}
                  direction="column"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "10px",
                      height: "94px",
                      backgroundColor: day.color,
                      borderRadius: "50px",
                      position: "relative",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "10px",
                      mt: "10px",
                      zIndex: 2,
                      color: "#A9A9A9",
                    }}
                  >
                    {day.day}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>

          <Stack
            direction="column"
            spacing={1}
            sx={{
              zIndex: 2,
              bgcolor: "#fff",
              p: 2,
              position: "absolute",
              top: 30,
              right: -10,
              borderRadius: "10px",
              boxShadow: "0px 42px 36px #0000001C",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000",
              }}
            >
              Create Invoice
            </Typography>
            <Stack
              direction="column"
              sx={{
                bgcolor: "#EDEDF3",
                width: "292px",
                height: "120px",
                p: "15px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#B0B0B0",
                  width: "149px",
                  height: "19px",
                  mb: "13px",
                }}
              />
              <Box
                sx={{
                  bgcolor: "#fff",
                  width: "201px",
                  height: "19px",
                  mb: "40px",
                }}
              />
              <Box
                sx={{
                  bgcolor: "#fff",
                  width: "92px",
                  height: "19px",
                }}
              />
            </Stack>
            <Typography sx={{ fontSize: "12px", color: "#000" }}>
              For to
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <Box component="img" src={profile} />
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                AR Shakir
              </Typography>
              <AddCircleOutline />
            </Stack>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold", color: "#000" }}
            >
              USD 2000
            </Typography>
            <Box
              sx={{
                bgcolor: "#EDEDF3",
                borderRadius: "4px",
                width: "100%",
                py: "12px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "12px", fontWeight: "bold", color: "#000" }}
              >
                DON
              </Typography>
            </Box>
          </Stack>
          <Box
            component="img"
            src={dots}
            sx={{ position: "absolute", left: 30, bottom: 50 }}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default OurFeature2;
