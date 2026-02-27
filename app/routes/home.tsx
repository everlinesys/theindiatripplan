import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Header from "~/Components/Header";
import Hero from "~/Components/Hero";
import Services from "~/Components/Services";
import Plans from "~/Components/Plans";
import Footer from "~/Components/Footer";
import Features from "~/Components/Features";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The India Trip Plan" },
    {
      name: "description",
      content:
        "One-stop destination for seamless and customized travel planning across India.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Plans />
      <Features />
      <Footer />
    </>
  );
}
