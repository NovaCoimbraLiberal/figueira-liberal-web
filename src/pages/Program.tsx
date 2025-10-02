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
        "Foco na sustentabilidade e garantir que empresas seguem as práticas ambientais especialmente onde a poluição se concentra na margem sul da Figueira",
        "Proteção e valorização da orla costeira com pressão politica para a obra do bypass que o Estado Central prometeu à Figueira da Foz para solucionar o problema da erosão costeira no sul do concelho",
        "Valorização do Espaço verde nas ruas e zonas de lazer da nossa cidade"
      ]
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Mobilidade e Urbanismo",
      priority: "Alta",
      measures: [
        "Expansão da rede de ciclovias",
        "Reforma total dos transportes públicos na Figueira com a entrada no CIM/SIT com novas linhas de transportes com a centralidade na Estação Ferroviária",
        "Investimento nos abrigos de autocarros com paineis digitais com as linhas e tempos de espera nas zonas urbanas e nas zonas rurais informação com um QR Code para uma web app da CMFF que inclui toda a informação em tempo real, tempos de espera e avisos (e.g problemas no serviço, redução de horários por feriados, etc)",
        "Mais estacionamento de bicicletas",
        "Estacionamento regulado com as operadoras privadas para as trotinetes",
        "Estudo de custos e logistica de operação para sistema bike sharing na Figueira (ou abrir a operadores privados)",
        "Park & Ride para a Estação Ferroviária, ou seja mais estacionamento para que os figueirenses possam estacionar e usar os transportes públicos ferroviarios e rodoviários e para reduzir a pressão turistica rodoviária na cidade",
        "Trabalhar com o agrupamento escolar para soluções do problema da mobilidade/transito nas suas escolas especialmente em horas de ponta - sistema kiss and ride, redução de estacionamento público em prol de trabalhadores da escola, etc",
        "Passe Municipal e Regional para Transportes Públicos com a possibilidade de no futuro ter o sistema de bike sharing incluído no passe"
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
        "Apoio à criação de postos de trabalho locais",
        "Redução da taxa de participação do IRS em 0.5% ao ano",
        "Redução da taxa municipal de IRC em 0.25% ao ano",
        "Redução de burocracia através da fusão de regulamentos da CMFF num documento simples, indexado e pesquisável",
        "Otimizações dos processos de gestão para que os prazos da câmara sejam cumpridos utilizando novas ferramentas e reduzindo bottlenecks no trabalho dos nossos funcionários públicos",
        "Redução de Taxas e taxinhas municipais, propondo a remoção de taxas inferiores a 10€ e agregando o máximo possivel nas restantes"
      ]
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Transparência e Digitalização",
      priority: "Alta",
      measures: [
        "Portal da transparência municipal com dados abertos",
        "Digitalização completa dos serviços municipais",
        "Gravação e publicação das sessões da assembleia municipal",
        "Relatório Anual simplificado das contas da CMFF para os municipes",
        "Portal da Transparência com tempos de resposta aos municipes adequado ao tema, em função de uma classificação de urgência, importância e complexidade",
        "Divulgar anualmente o registo de interesses de todos os membros eleitos da Câmara Municipal",
        "Divulgar Anualmente, as métricas da CMFF em relação a pedidos (aprovações, certidões,etc), quantos pedidos excederam o tempo máximo de resposta permitido na lei e o tempo médio por tipo de pedido",
        "Criação do Portal das Associações/Coletividade para facilitar as candidaturas a fundos municipais e criar uma ponte com as associações culturais e desportivas do nosso concelho para colaborações de eventos, publicidade, etc"
      ]
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Habitação e Território",
      priority: "Média",
      measures: [
        "Liberalização de terrenos para construção habitacional",
        "Programa municipal de arrendamento jovem",
        "Planeamento urbano sustentável",
        "Melhoria da eficiência energética dos edifícios públicos",
        "Criação de espaços de coworking municipais",
        "Criação de Residencias estudantis para acompanhar as necessidades do campus da Figueira da Foz da Universidade de Coimbra",
        "Reabilitação urbana com incentivos fiscais para proprietários que renovem imóveis degradados",
        "Promoção de habitação acessível através de parcerias público-privadas com foco em especial nos jovens e idosos",
        "Revisão do Plano Diretor Municipal (PDM) para garantir um crescimento ordenado e sustentável do território"
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
        "Bolsas de estudo para estudantes carenciados",
        "Programas de atração de jovens talentos para a Figueira da Foz",
        "Promoção de atividades extracurriculares em cooperação com associações e coletividades locais"
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