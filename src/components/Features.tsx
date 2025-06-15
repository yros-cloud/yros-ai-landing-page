
import { Bot, FileText, Activity, Code } from 'lucide-react';

const features = [
  {
    icon: <Activity className="w-8 h-8 text-yros-white" />,
    title: 'Diagnóstico de Incidentes',
    description: 'YROS detecta e analisa anomalias em tempo real, usando IA para identificar a causa raiz e sugerir soluções.',
  },
  {
    icon: <Bot className="w-8 h-8 text-yros-white" />,
    title: 'Participação em Dailys',
    description: 'Comece o dia com um resumo inteligente do estado do sistema, com insights e atualizações do YROS.',
  },
  {
    icon: <FileText className="w-8 h-8 text-yros-white" />,
    title: 'Geração de Postmortem',
    description: 'Após cada incidente, YROS gera automaticamente um documento de postmortem detalhado para aprendizado.',
  },
  {
    icon: <Code className="w-8 h-8 text-yros-white" />,
    title: 'Automação DevOps',
    description: 'Desde Dockerfiles a pipelines de CI/CD, YROS automatiza tarefas repetitivas para acelerar seu time.',
  },
];

const Features = () => (
  <section className="py-20 sm:py-32 bg-yros-blue">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-8 border border-yros-grey rounded-xl hover:bg-yros-grey/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex justify-center items-center h-16 w-16 bg-yros-grey/30 rounded-full mx-auto mb-6">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-yros-white">{feature.title}</h3>
            <p className="text-yros-light-grey">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
