import { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Link,
  Container,
  Drawer,
  Modal,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SignUpForm from "./SignUpForm";
import AuthContext from "../store/auth-context";

const links = ["Product", "Template", "Blog", "Pricing"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const authCtx = useContext(AuthContext);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Container>
        <AppBar position="static" color="transparent" sx={{ py: "28px" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", fontSize: "20px" }}
            >
              AR SHAKIR
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {links.map((link) => (
                <Link key={link} href="#" underline="none">
                  <Typography
                    sx={{
                      mx: 2,
                      fontSize: "14px",
                      fontWeight: "medium",
                      color: "#000",
                    }}
                  >
                    {link}
                  </Typography>
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                alignItems: "center",
              }}
            >
              {!authCtx.isLoggedIn && (
                <Button
                  onClick={handleOpenModal}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "medium",
                    color: "#000",
                  }}
                >
                  Sign In
                </Button>
              )}

              <Button
                onClick={authCtx.isLoggedIn ? authCtx.logout : handleOpenModal}
                variant="contained"
                color="primary"
                sx={{ borderRadius: 0 }}
              >
                {authCtx.isLoggedIn ? "Log Out" : "Start Free"}
              </Button>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={toggleDrawer(true)}
                color="inherit"
                sx={{ ml: "auto", p: 0 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    width: 250,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt: 20,
                  }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                >
                  {links.map((link) => (
                    <MenuItem key={link} onClick={toggleDrawer(false)}>
                      <Link href="#" underline="none">
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "#000",
                            fontWeight: "medium",
                          }}
                        >
                          {link}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                  <MenuItem onClick={toggleDrawer(false)}>
                    {!authCtx.isLoggedIn && (
                      <Button
                        onClick={handleOpenModal}
                        sx={{
                          fontSize: "14px",
                          fontWeight: "medium",
                          color: "#000",
                        }}
                      >
                        Sign In
                      </Button>
                    )}
                  </MenuItem>
                  <Button
                    onClick={
                      authCtx.isLoggedIn ? authCtx.logout : handleOpenModal
                    }
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: 0 }}
                  >
                    {authCtx.isLoggedIn ? "Log Out" : "Start Free"}
                  </Button>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
      <Modal open={openModal} onClose={handleCloseModal}>
        <SignUpForm closeModal={handleCloseModal} />
      </Modal>
    </>
  );
};

export default Navbar;
