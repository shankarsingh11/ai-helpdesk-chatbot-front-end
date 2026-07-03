import Navbar from "@/components/home/Navbar";
import Hero from "../../components/home/Hero";
import Companies from "@/components/home/Companies";
import Features from "@/components/home/Features";
import WhyChoose from "@/components/home/WhyChoose";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950">
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <WhyChoose />
      <CTA />
      <Footer />
    </main>
  );
}