import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";
import HomeAbout from "~/components/about/HomeAbout";
import AppLayout from "~/components/appLayout/AppLayout";
import Blog from "~/components/Blog/Blog";
import ChargingNetwork from "~/components/chargingNetwork/ChargingNetwork";
import FAQ from "~/components/FAQ/FAQ";
import Footer from "~/components/footer/Footer";
import Hero from "~/components/Hero/Hero";
import Navbar from "~/components/Navbar/Navbar";
import Network from "~/components/network/Network";
import Portfolio from "~/components/portfolio/Portfolio";
import WhoWeAre from "~/components/section1/WhoWeAre";
import Services from "~/components/services/Services";
import AOS from "aos";
import "aos/dist/aos.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Charging In Bhubaneswar" },
    { name: "description", content: "Vidyutva Charging station in India" },
  ];
};

export default function Index() {
  const [bgColor, setBgColor] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("text-black");

  const homeAboutRef = useRef<HTMLDivElement>(null);
  const whoWeAreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const homeAboutSection = homeAboutRef.current;
      const whoWeAreSection = whoWeAreRef.current;

      if (homeAboutSection && whoWeAreSection) {
        const homeAboutRect = homeAboutSection.getBoundingClientRect();
        const whoWeAreRect = whoWeAreSection.getBoundingClientRect();

        if (
          homeAboutRect.top <= window.innerHeight / 2 &&
          homeAboutRect.bottom >= window.innerHeight / 2
        ) {
          setBgColor("bg-[#00a181]");
          setTextColor("text-white");
        } else if (
          whoWeAreRect.top <= window.innerHeight / 2 &&
          whoWeAreRect.bottom >= window.innerHeight / 2
        ) {
          setBgColor("bg-[#00a181]");
          setTextColor("text-white");
        } else {
          setBgColor("bg-green-50");
          setTextColor("text-black");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className={`relative transition-all duration-500 ease-in-out ${bgColor} ${textColor}`}>
        <div ref={homeAboutRef}>
          <HomeAbout />
        </div>
        <Network />
        <Portfolio />
        <AppLayout />
        <Services />
        <div ref={whoWeAreRef}>
          <WhoWeAre />
        </div>
        <ChargingNetwork />
        <FAQ />
        <Blog />
        <Footer />
      </div>
    </>
  );
}
