import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Pouches from "@/components/sections/Pouches";
import Bags from "@/components/sections/bag";
import Scrunchies from "@/components/sections/Scrunchies";
import About from "@/components/sections/About";
import Reviews from "@/components/sections/Reviews";
import InstagramSection from "@/components/sections/InstagramSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          100,
        );
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Featured />
      <Pouches />
      <Scrunchies />
      <Bags />
      <About />
      <Reviews />
      <InstagramSection />
      <Contact />
    </>
  );
}
