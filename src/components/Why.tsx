import { Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SummariesGraphic from "./SummariesGraphic";
import WalletsGraphic from "./WalletsGraphic";
import RequestPaymentsGraphic from "./RequestPaymentsGraphic";

const Why = () => {
  return (
    <Container sx={{ mt: 15, mb: { xs: 10, md: 30 } }}>
      <Stack direction="column" spacing={2}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontSize: "18px", color: "#3734A9" }}
        >
          WHY AR SHAKIR
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "#000",
            fontSize: { xs: "28px", md: "50px" },
            fontWeight: "bolder",
            letterSpacing: "-1px",
            lineHeight: "1",
          }}
        >
          Specially Designed For Crypto Payments
        </Typography>
        <Grid container spacing={{ xs: 8, md: 4 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="column">
              <SummariesGraphic />
              <Typography
                variant="body2"
                sx={{
                  mt: { xs: 2, md: 5 },
                  mb: 2,
                  fontSize: { xs: "18px", md: "26:px" },
                }}
              >
                Quick Summaries
              </Typography>
              <Typography sx={{ fontSize: { xs: "14px", md: "18px" } }}>
                Warmly little before cousin sussex entire men set. Blessing it
                ladyship on sensible judgment settling outweigh.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="column">
              <WalletsGraphic />
              <Typography
                variant="body2"
                sx={{
                  mt: { xs: 2, md: 5 },
                  mb: 2,
                  fontSize: { xs: "18px", md: "26:px" },
                }}
              >
                Manage your wallets
              </Typography>
              <Typography sx={{ fontSize: { xs: "14px", md: "18px" } }}>
                Worse linen an of civil jokes leave offer. Parties all clothes
                removal cheered calling prudent her. Latter person am secure.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="column">
              <RequestPaymentsGraphic />
              <Typography
                variant="body2"
                sx={{
                  mt: { xs: 2, md: 5 },
                  mb: 2,
                  fontSize: { xs: "18px", md: "26:px" },
                }}
              >
                Request Payments
              </Typography>
              <Typography sx={{ fontSize: { xs: "14px", md: "18px" } }}>
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
