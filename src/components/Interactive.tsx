
import { useState, useEffect } from 'react';

const messages = [
  { from: 'system', text: '🚨 Incidente detectado: Latência elevada na API de pagamentos.' },
  { from: 'yros', text: 'Analisando logs e métricas... 🧐' },
  { from: 'yros', text: 'Causa provável: Aumento de 300% em queries lentas no DB `pg-payments-prod`.' },
  { from: 'yros', text: 'Sugestão: Reverter o deploy `v2.5.1` da API, que introduziu a nova consulta.' },
  { from: 'system', text: 'Status da página atualizado: "Investigando problemas na API de pagamentos".' },
  { from: 'yros', text: 'Notificação enviada para #eng-incidentes no Slack. ✅' },
];

const InteractiveDemo = () => {
  const [visibleMessages, setVisibleMessages] = useState([]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setVisibleMessages(prev => {
        if (prev.length < messages.length) {
          return [...prev, messages[prev.length]];
        }
        clearInterval(messageInterval);
        return prev;
      });
    }, 2000);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Veja o YROS em ação</h2>
        <p className="text-yros-light-grey max-w-2xl mx-auto mb-12">
          Simulação de como o YROS.AI responde a um incidente em tempo real.
        </p>
        <div className="w-full max-w-3xl mx-auto bg-yros-blue border border-yros-grey rounded-lg p-6 text-left font-mono text-sm h-96 overflow-y-auto shadow-2xl shadow-yros-blue/50">
          {visibleMessages.map((msg, index) => (
            <div key={index} className={`flex items-start mb-4 animate-fade-in opacity-0`} style={{ animationDelay: `${index * 100}ms`}}>
              <span className={`font-bold mr-2 ${msg.from === 'yros' ? 'text-yros-white' : 'text-yros-light-grey'}`}>
                {msg.from === 'yros' ? '[YROS.AI]:' : '[SYSTEM]:'}
              </span>
              <span className="flex-1">{msg.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
