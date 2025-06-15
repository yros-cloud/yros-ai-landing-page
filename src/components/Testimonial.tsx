
import { Button } from "@/components/ui/button";

const Testimonial = () => (
  <section className="py-20 sm:py-32">
    <div className="container mx-auto px-4 text-center">
      <blockquote className="text-2xl md:text-3xl font-medium max-w-3xl mx-auto mb-6">
        “Nunca estivemos tão preparados. O YROS cuida da operação enquanto focamos na evolução.”
      </blockquote>
      <p className="text-yros-light-grey mb-8">- CTO, Empresa Inovadora</p>
      <Button size="lg" className="bg-yros-white text-yros-dark-blue hover:bg-yros-light-grey transition-all duration-300 shadow-lg shadow-yros-white/10">
        Transforme seu SRE
      </Button>
    </div>
  </section>
);

export default Testimonial;
