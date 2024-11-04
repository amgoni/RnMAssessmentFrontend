import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import linkedin from "../assets/footer/linkedin.png";
import messenger from "../assets/footer/messenger.png";
import twitter from "../assets/footer/twitter.png";
import twoo from "../assets/footer/twoo.png";
import { MailOutline, PhoneInTalk } from "@mui/icons-material";

const socials = [
  { icon: linkedin, link: "#" },
  { icon: messenger, link: "#" },
  { icon: twitter, link: "#" },
  { icon: twoo, link: "#" },
];

const links = [
  {
    title: "Company",
    links: [
      { name: "About", link: "#" },
      { name: "Careers", link: "#" },
      { name: "Blog", link: "#" },
      { name: "Pricing", link: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { name: "Invoicing", link: "#" },
      { name: "Contract", link: "#" },
      { name: "Accounting", link: "#" },
      { name: "Proposal", link: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Proposal Template", link: "#" },
      { name: "Invoice Template", link: "#" },
      { name: "Tutorial", link: "#" },
      { name: "How to write a contract", link: "#" },
    ],
  },
];

const contact = [
  { icon: <MailOutline />, text: "shakir260@gmail.com" },
  { icon: <PhoneInTalk />, text: "+92-300-848-8985" },
];

const Footer = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Typography
            sx={{
              fontSize: "21px",
              fontWeight: "bold",
              color: "#1B1C31",
              mb: 1,
            }}
          >
            AR
          </Typography>
          <Typography sx={{ fontSize: "16px", mr: 16, mb: 4 }}>
            Finance helps companies manage payments easily.
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            {socials.map((social, index) => (
              <Box
                key={index}
                component="img"
                src={social.icon}
                width="5%"
                height="5%"
              />
            ))}
          </Stack>
        </Grid>
        {links.map((link, index) => (
          <Grid key={index} size={2}>
            <Typography
              sx={{
                fontSize: "21px",
                fontWeight: "bold",
                color: "#1B1C31",
                mb: 1,
              }}
            >
              {link.title}
            </Typography>
            {link.links.map((item, index) => (
              <Typography key={index} sx={{ fontSize: "16px", mb: 1 }}>
                {item.name}
              </Typography>
            ))}
          </Grid>
        ))}
        <Grid size={2}>
          <Typography
            sx={{
              fontSize: "21px",
              fontWeight: "bold",
              color: "#1B1C31",
              mb: 1,
            }}
          >
            Contact
          </Typography>
          {contact.map((item, index) => (
            <Stack direction="row" key={index} spacing={1}>
              {item.icon}
              <Typography sx={{ fontSize: "16px", mb: 1 }}>
                {item.text}
              </Typography>
            </Stack>
          ))}
        </Grid>
      </Grid>
      <Typography
        sx={{
          fontSize: "12px",
          textAlign: "center",
          my: 5,
          pt: 5,
          borderTop: "2px solid #EDEDED",
        }}
      >
        Copyright @ AR Shakir 2022. All Rights Reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
