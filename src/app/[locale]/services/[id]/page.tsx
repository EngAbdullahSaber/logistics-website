import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesDetails from "@/components/ServicesDetails";
import Slider from "@/components/Slider";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <Header />
      <Slider />
      <ServicesDetails />
      <Footer />
    </div>
  );
};

export default page;
