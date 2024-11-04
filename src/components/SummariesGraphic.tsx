import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import earnings from "../assets/why/earnings.svg";
import goals from "../assets/why/goals.svg";
import losses from "../assets/why/losses.svg";
import worth from "../assets/why/worth.svg";

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

const SummariesGraphic = () => {
  return (
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
      <Grid container spacing={4} sx={{ bgcolor: "white", py: 4, px: 2 }}>
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
                <Typography sx={{ fontSize: "9px", color: "#6F767E" }}>
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
  );
};

export default SummariesGraphic;
