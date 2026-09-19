import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import YourPets from "@/components/YourPets";
import MakePals from "@/components/MakePals";
import BuildYourHome from "@/components/BuildYourHome";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />

      <div className="relative z-30">
        <Hero />
      </div>
      
      <section className="relative z-10" >
        <LatestNews />
      </section>
      <section className="relative z-20 bg-black/45">
        <YourPets />
      </section>
      <section className="relative z-30 bg-black/45">
        <MakePals />
      </section>
      <section className="relative z-40 bg-black/45">
        <BuildYourHome />
      </section>
      <FooterCTA />
      <Footer />
    </main>
  );
}