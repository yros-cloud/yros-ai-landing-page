
import { Github } from 'lucide-react';

const integrations = [
  { name: 'Prometheus', logoUrl: 'https://raw.githubusercontent.com/cncf/artwork/main/projects/prometheus/icon/color/prometheus-icon-color.svg' },
  { name: 'GitHub', logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
  { name: 'Slack', logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original.svg' },
  { name: 'Kubernetes', logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Grafana', logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg' },
  { name: 'Docker', logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
];

const Integrations = () => (
  <section className="py-20 sm:py-32 bg-yros-blue">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Integração Contínua</h2>
      <p className="text-yros-light-grey max-w-2xl mx-auto mb-12">
        YROS.AI se conecta perfeitamente às ferramentas que você já usa.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {integrations.map((integration) => (
          <div key={integration.name} className="flex items-center" title={integration.name}>
            <img src={integration.logoUrl} alt={integration.name} className="h-12 w-12 md:h-16 md:w-16 grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Integrations;
