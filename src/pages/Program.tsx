import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Briefcase, GraduationCap, Heart, Leaf, Users, Home, Car, Wifi, Shield } from "lucide-react";

const Program = () => {
  const programAreas = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Ambiente e Sustentabilidade",
      priority: "Alta",
      measures: [
        "Programa de energia solar em edifícios públicos",
        "Expansão da recolha seletiva de resíduos",
        "Criação de hortas urbanas comunitárias",
        "Proteção e valorização da orla costeira",
        "Incentivos para veículos elétricos"
      ]
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Mobilidade e Urbanismo",
      priority: "Alta",
      measures: [
        "Expansão da rede de ciclovias",
        "Melhoria dos transportes públicos urbanos",
        "Revitalização do centro histórico",
        "Implementação de sistema de partilha de bicicletas",
        "Otimização dos semáforos com tecnologia inteligente"
      ]
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Desenvolvimento Económico e Emprego",
      priority: "Alta",
      measures: [
        "Simplificação de licenciamentos para empresas locais",
        "Criação de um balcão único digital para serviços empresariais",
        "Incentivos fiscais para startups e PMEs",
        "Programa de mentoria para jovens empreendedores",
        "Apoio à criação de postos de trabalho locais"
      ]
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Transparência e Digitalização",
      priority: "Alta",
      measures: [
        "Portal da transparência municipal com dados abertos",
        "Digitalização completa dos serviços municipais",
        "WiFi gratuito em espaços públicos",
        "App municipal para cidadãos",
        "Orçamento participativo digital"
      ]
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Ordenamento e Território",
      priority: "Média",
      measures: [
        "Liberalização de terrenos para construção habitacional",
        "Programa municipal de arrendamento jovem",
        "Planeamento urbano sustentável",
        "Melhoria da eficiência energética dos edifícios públicos",
        "Criação de espaços de coworking municipais"
      ]
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Educação e Juventude",
      priority: "Média",
      measures: [
        "Autonomia das escolas na gestão de recursos",
        "Programa de formação digital para jovens",
        "Parcerias com universidades para estágios locais",
        "Criação de espaços de estudo e coworking para estudantes",
        "Bolsas de estudo para estudantes carenciados"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Turismo Sustentável",
      priority: "Média",
      measures: [
        "Promoção do turismo de natureza responsável",
        "Valorização do património histórico local",
        "Criação de rotas turísticas sustentáveis",
        "Apoio ao turismo gastronómico local",
        "Desenvolvimento de infraestruturas turísticas eco-friendly"
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta":
        return "bg-red-500/10 text-red-600 border-red-200";
      case "Média":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-200";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Programa Político
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            O nosso compromisso com Figueira da Foz baseia-se numa visão liberal que promove 
            a liberdade individual, a responsabilidade pessoal e o desenvolvimento económico sustentável.
          </p>
          
          {/* Billboard Image */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-[3/1] rounded-xl overflow-hidden shadow-elegant">
                <img 
                  src="/lovable-uploads/figueira-outdoor-billboard.jpg" 
                  alt="Outdoor da campanha - João Pedro Cardoso e Paulo Sousa - Por uma Figueira Próspera Liberal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Vision Statement */}
          <div className="bg-gradient-subtle rounded-xl p-8 shadow-elegant max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">A Nossa Visão</h2>
            <p className="text-lg text-muted-foreground">
              "Uma Figueira da Foz moderna, próspera e livre, onde cada cidadão tem oportunidade 
              de realizar o seu potencial, onde as empresas podem crescer sem entraves burocráticos 
              e onde a qualidade de vida é uma prioridade para todos."
            </p>
          </div>
        </div>

        {/* Program Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programAreas.map((area, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-hero p-2 rounded-lg">
                      <div className="text-primary-foreground">
                        {area.icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                    </div>
                  </div>
                  <Badge className={getPriorityColor(area.priority)}>
                    {area.priority} Prioridade
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {area.measures.map((measure, measureIndex) => (
                    <li key={measureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{measure}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Program;