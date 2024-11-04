import { Box } from "@mui/material";

type ParallelogramProps = {
  bottom: string;
  right: string;
};

const Parallelogram = ({ bottom, right }: ParallelogramProps) => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        position: "absolute",
        height: "150px",
        width: "500px",
        bottom: bottom,
        right: right,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: "2px solid #E2E2FB",
          transform: "skewY(-30deg)",
        },
      }}
    />
  );
};

export default Parallelogram;
