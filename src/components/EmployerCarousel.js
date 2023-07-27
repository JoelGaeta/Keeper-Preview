import React from "react";
import Carousel from "react-elastic-carousel";
import Employer from "../components/employer/Employer";

const EmployerCarousel = () => {
  return (
    <Carousel>
      <Employer />
      <Employer />
    </Carousel>
  );
};

export default EmployerCarousel;
