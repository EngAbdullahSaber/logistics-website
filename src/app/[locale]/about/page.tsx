import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import StepArea from "@/components/StepArea ";
import WhyChoose from "@/components/WhyChoose";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <Header />
      <Slider />
      <WhyChoose />
      <StepArea />
      <Footer />
    </div>
  );
};

export default page;
