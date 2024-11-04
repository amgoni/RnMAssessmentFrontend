import { Box, Stack, Typography } from "@mui/material";
import Capsule from "./Capsule";

const wallets = [
  { bgcolor: "#fff", title: "BTC", value: "69%", border: "solid" },
  { bgcolor: "#fff", title: "LTC", value: "82%", border: "solid" },
  { bgcolor: "#4F46BA", title: "XRP", value: "99%", border: "solid" },
  { bgcolor: "#fff", title: "BLT", value: "69%", border: "solid" },
  { bgcolor: "transparent", title: "+ADD NEW", value: "Wal", border: "dashed" },
];

const WalletsGraphic = () => {
  return (
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
  );
};

export default WalletsGraphic;
