
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import InteractiveDemo from "@/components/Interactive";
import Integrations from "@/components/Integrations";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-yros-dark-blue text-yros-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <InteractiveDemo />
        <Integrations />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
