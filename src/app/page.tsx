import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";
import YourPets from "@/components/YourPets";
import MakePals from "@/components/MakePals";
import BuildYourHome from "@/components/BuildYourHome";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="relative">
        
        <Hero />

        
      </div>

      <section className="relative z-20 bg-black/45">
        <LatestNews />
      </section>
      <section className="relative z-20 bg-black/45">
    <YourPets />
      </section>
      <section className="relative z-20 bg-black/45">
    <MakePals />
      </section>
      <section className="relative z-20 bg-black/45">
    <BuildYourHome />
      </section>
      <Footer />
    </main>
  );
}