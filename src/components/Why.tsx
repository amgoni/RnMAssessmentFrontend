import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import earnings from "../assets/why/earnings.svg";
import goals from "../assets/why/goals.svg";
import losses from "../assets/why/losses.svg";
import worth from "../assets/why/worth.svg";
import Capsule from "./Capsule";
import { CheckCircle } from "@mui/icons-material";
import { RadioButtonUncheckedOutlined } from "@mui/icons-material";
import profile1 from "../assets/why/profile1.png";
import profile2 from "../assets/why/profile2.png";

const summaries = [
  {
    icon: worth,
    title: "Total net worth",
    value: "$5,250.90",
  },
  {
    icon: earnings,
    title: "Total earnings",
    value: "$10,596.80",
  },
  {
    icon: losses,
    title: "Harvested losses",
    value: "$0.00",
  },
  {
    icon: goals,
    title: "Total for all goals",
    value: "$5,596.80",
  },
];

const wallets = [
  { bgcolor: "#fff", title: "BTC", value: "69%", border: "solid" },
  { bgcolor: "#fff", title: "LTC", value: "82%", border: "solid" },
  { bgcolor: "#4F46BA", title: "XRP", value: "99%", border: "solid" },
  { bgcolor: "#fff", title: "BLT", value: "69%", border: "solid" },
  { bgcolor: "transparent", title: "+ADD NEW", value: "Wal", border: "dashed" },
];

const Why = () => {
  return (
    <Container sx={{ mt: 15, mb: 30 }}>
      <Stack direction="column" spacing={2}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontSize: "18px", color: "#3734A9" }}
        >
          WHY AR SHAKIR
        </Typography>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontSize: "40px", fontWeight: "bold" }}
        >
          Specially Designed For Crypto Payments
        </Typography>
        <Grid container spacing={4}>
          <Grid size={4}>
            <Stack direction="column">
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  p: 3,
                  height: "250px",
                  bgcolor: "#F8F8FE",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#FF7F5C",
                    borderRadius: "50%",
                    position: "absolute",
                    top: 20,
                    left: 15,
                    zIndex: -1,
                  }}
                />
                <Grid
                  container
                  spacing={4}
                  sx={{ bgcolor: "white", py: 4, px: 2 }}
                >
                  {summaries.map((summary, index) => (
                    <Grid
                      size={6}
                      sx={{ display: "flex", justifyContent: "center" }}
                      key={index}
                    >
                      <Stack direction="row">
                        <Box
                          component="img"
                          src={summary.icon}
                          sx={{ mr: 1, width: 30 }}
                        />
                        <Stack direction="column">
                          <Typography
                            sx={{ fontSize: "9px", color: "#6F767E" }}
                          >
                            {summary.title}
                          </Typography>
                          <Typography sx={{ fontSize: "14px", color: "black" }}>
                            {summary.value}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Typography
                variant="body2"
                sx={{ mt: 5, mb: 2, fontSize: "26px" }}
              >
                Quick Summaries
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                Warmly little before cousin sussex entire men set. Blessing it
                ladyship on sensible judgment settling outweigh.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack direction="column">
              <Box
                sx={{
                  p: 3,
                  backgroundColor: "#F8F8FE",
                  height: "250px",
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#FF7F5C",
                    borderRadius: "50%",
                    position: "absolute",
                    bottom: 12,
                    left: 15,
                    zIndex: -1,
                  }}
                />
                <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                  My
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-around"
                  sx={{ height: "100%" }}
                >
                  {wallets.map((wallet, index) => (
                    <Capsule
                      key={index}
                      bgColor={wallet.bgcolor}
                      title={wallet.title}
                      value={wallet.value}
                      border={wallet.border}
                    />
                  ))}
                </Stack>
              </Box>
              <Typography
                variant="body2"
                sx={{ mt: 5, mb: 2, fontSize: "26px" }}
              >
                Manage your wallets
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                Worse linen an of civil jokes leave offer. Parties all clothes
                removal cheered calling prudent her. Latter person am secure.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={4}>
            <Stack direction="column">
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  p: 3,
                  backgroundColor: "#F8F8FE",
                  height: "250px",
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#FF7F5C",
                    borderRadius: "50%",
                    position: "absolute",
                    top: 6,
                    right: 15,
                    zIndex: -1,
                  }}
                />
                <Stack
                  direction="column"
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-between",
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
                    }}
                  >
                    <CheckCircle
                      color="primary"
                      fontSize="large"
                      sx={{ mr: 2 }}
                    />
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
              <Typography
                variant="body2"
                sx={{ mt: 5, mb: 2, fontSize: "26px" }}
              >
                Request Payments
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                And residence for met the estimable disposing. Mean if he they
                been no hold mr. Is at much do made took held help.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Why;
