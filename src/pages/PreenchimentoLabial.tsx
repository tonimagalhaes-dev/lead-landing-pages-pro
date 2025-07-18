import ProcedurePage from '@/components/ProcedurePage';

const PreenchimentoLabial = () => {
  const benefits = [
    "Procedimento rápido e seguro",
    "Resultado visível na hora",
    "Duração média de 8 a 12 meses",
    "Recuperação tranquila"
  ];

  const indications = [
    "Lábios finos ou com pouco volume",
    "Contorno labial apagado",
    "Lábios ressecados ou com rugas finas",
    "Reposição de volume com naturalidade"
  ];

  const differentials = [
    "Técnica personalizada para evitar exageros",
    "Resultado harmônico e delicado",
    "Ácido hialurônico de alta qualidade"
  ];

  return (
    <ProcedurePage
      title="Lábios naturais, definidos e hidratados"
      description="O preenchimento labial é feito com ácido hialurônico e pode dar volume, definir o contorno ou apenas hidratar os lábios, sempre respeitando o formato natural do seu rosto."
      emoji="💋"
      benefits={benefits}
      indications={indications}
      differentials={differentials}
      procedureName="Preenchimento Labial"
      heroImage='/lovable-uploads/labios2.jpg'
      benefitImage='/lovable-uploads/labios1.jpg'
    />
  );
};

export default PreenchimentoLabial;