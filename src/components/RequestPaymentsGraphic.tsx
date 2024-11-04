import { Box, Stack, Typography } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";
import { RadioButtonUncheckedOutlined } from "@mui/icons-material";
import profile1 from "../assets/why/profile1.png";
import profile2 from "../assets/why/profile2.png";

const RequestPaymentsGraphic = () => {
  return (
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
  );
};

export default RequestPaymentsGraphic;
