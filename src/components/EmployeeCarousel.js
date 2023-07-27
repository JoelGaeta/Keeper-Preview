import React from "react";
import Carousel from "react-elastic-carousel";
import Employee from "../components/employee/Employee";

const EmployeeCarousel = () => {
  return (
    <Carousel>
      <Employee />
      <Employee />
    </Carousel>
  );
};

export default EmployeeCarousel;
