import { Box, Typography } from "@mui/material";

type CapsuleProps = {
  bgColor: string;
  title: string;
  value: string;
  border: string;
};

const Capsule = ({ bgColor, title, value, border }: CapsuleProps) => {
  return (
    <Box
      sx={{
        width: "60px",
        backgroundColor: bgColor,
        borderRadius: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        border: `2px ${border} #E2E2E2`,
        position: "relative",
        py: 2.5,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          transform: "rotate(-90deg)",
          transformOrigin: " center",
          fontSize: "8px",
        }}
      >
        {title}
      </Typography>
      <Typography variant="body2">{value}</Typography>
    </Box>
  );
};

export default Capsule;
