import AboutArea from "@/components/AboutArea";
import CounterArea from "@/components/CounterArea";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Service from "@/components/Service";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {" "}
      <Header />
      <Slider />
      <AboutArea />
      <CounterArea />
      <Service />
      <Footer />
    </div>
  );
}
