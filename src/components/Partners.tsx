import { Box, Container, Stack, Typography } from "@mui/material";
import monday from "../assets/partners/monday.png";
import morpheus from "../assets/partners/morpheus.png";
import openZeppelin from "../assets/partners/openZeppelin.png";
import oracle from "../assets/partners/oracle.png";
import protonet from "../assets/partners/protonet.png";
import samsung from "../assets/partners/samsung.png";
import segment from "../assets/partners/segment.png";

const partners = [
  monday,
  morpheus,
  openZeppelin,
  oracle,
  protonet,
  samsung,
  segment,
];

const Partners = () => {
  return (
    <Container
      sx={{
        my: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ my: 5, color: "#000", fontWeight: "bold" }}>
        Companies we have helped grow
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        sx={{
          width: "80%",
        }}
      >
        {partners.map((partner, index) => (
          <Box
            key={index}
            component="img"
            src={partner}
            sx={{ width: "100px", height: "100%" }}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default Partners;
