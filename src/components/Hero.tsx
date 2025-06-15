
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="relative w-full h-[85vh] flex items-center justify-center text-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-yros-dark-blue via-yros-blue to-yros-dark-blue animate-background-pan bg-[length:200%_200%] z-0"></div>
    <div className="absolute inset-0 bg-black/40 z-10"></div>
    <div className="relative z-20 container px-4 md:px-6">
      <div className="grid gap-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-in [animation-delay:200ms] opacity-0">
          Seu novo engenheiro SRE.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yros-light-grey to-yros-white">
            Inteligente. Proativo. 24/7.
          </span>
        </h1>
        <p className="mx-auto max-w-[700px] text-yros-light-grey md:text-xl/relaxed animate-fade-in [animation-delay:400ms] opacity-0">
            YROS.AI é o agente de IA que se integra à sua equipe de engenharia para automatizar, analisar e resolver incidentes antes que eles afetem seus clientes.
        </p>
        <div className="animate-fade-in [animation-delay:600ms] opacity-0">
          <Button size="lg" className="bg-yros-white text-yros-dark-blue hover:bg-yros-light-grey transition-all duration-300 shadow-lg shadow-yros-white/10">
            Quero testar
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
