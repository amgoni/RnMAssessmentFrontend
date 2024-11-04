import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import Partners from "./components/Partners";
import Why from "./components/Why";
import OurFeature from "./components/OurFeature";
import Newsletter from "./components/Newsletter";
import OurFeature2 from "./components/OurFeature2";
import Testimonial from "./components/Testimonial";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Box position="relative">
        {/* Background with clip-path */}
        <Box
          sx={{
            backgroundColor: "#f4f4ff",
            clipPath: "polygon(100% 0, 100% 75%, 75% 100%, 0 100%, 0 0)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        />

        {/* Content */}
        <Box position="relative" zIndex={1}>
          <Navbar />
          <HeroSection />
        </Box>
      </Box>
      <Partners />
      <Why />
      <OurFeature />
      <Newsletter />
      <OurFeature2 />
      <Testimonial />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
