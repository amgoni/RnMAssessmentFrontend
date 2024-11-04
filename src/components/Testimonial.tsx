import { Container, Typography, Box, Rating, Stack } from "@mui/material";
import profile1 from "../assets/testimonial/profile1.png";
import profile2 from "../assets/testimonial/profile2.png";
import profile3 from "../assets/testimonial/profile3.png";
import profile4 from "../assets/testimonial/profile4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Serhiy Hipskyy",
    position: "CEO WebWorld",
    image: profile1,
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and.",
  },
  {
    name: "Justus Menke",
    position: "CEO GetNextDesign",
    image: profile2,
    text: "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
  },
  {
    name: "Britain Eriksen",
    position: "CEO Eureka",
    image: profile3,
    text: "Accusamus et iusto odi ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    name: "Justus Menke",
    position: "CEO GetNextDesign",
    image: profile4,
    text: "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
  },
];

const Testimonial = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Container sx={{ mt: "100px" }}>
      <Typography
        sx={{
          color: "#3734A9",
          fontSize: "18px",
          mb: "25px",
          textAlign: "center",
        }}
      >
        TESTIMONIAL
      </Typography>
      <Typography
        sx={{
          color: "#000",
          fontSize: { xs: "28px", md: "50px" },
          fontWeight: "bolder",
          letterSpacing: "-1px",
          textAlign: "center",
          lineHeight: "1",
          mb: "50px",
        }}
      >
        What Our Happy User Says
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ position: "relative", my: 4 }}>
            <Box
              sx={{
                width: { xs: 25, md: 50 },
                height: { xs: 25, md: 50 },
                backgroundColor: "#3734A9",
                borderRadius: "50%",
                position: "absolute",
                top: { xs: -12, md: -25 },
                left: 25,
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                border: "1px solid #EDEDED",
                width: "300px",
                height: "250px",

                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Stack spacing={2} sx={{ padding: "20px", paddingTop: "50px" }}>
                <Rating name="read-only" value={5} readOnly size="small" />
                <Typography sx={{ fontSize: "12px", color: "#797979" }}>
                  {testimonial.text}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  padding: "20px",
                  borderTop: "1px solid #EDEDED",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={testimonial.image}
                  sx={{ width: "36px", height: "36px" }}
                />
                <Stack>
                  <Typography
                    sx={{ fontSize: "14px", color: "#000", fontWeight: "bold" }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#797979" }}>
                    {testimonial.position}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimonial;
