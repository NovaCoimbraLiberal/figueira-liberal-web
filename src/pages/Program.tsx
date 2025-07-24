import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Briefcase, GraduationCap, Heart, Leaf, Users, Home, Car, Wifi, Shield } from "lucide-react";

const Program = () => {
  const programAreas = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Economia e Empreendedorismo",
      priority: "Alta",
      measures: [
        "Simplificação de licenciamentos para empresas locais",
        "Criação de um balcão único digital para serviços municipais",
        "Incentivos fiscais para startups e PMEs",
        "Programa de mentoria para jovens empreendedores",
        "Redução da burocracia municipal em 50%"
      ]
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Habitação e Urbanismo",
      priority: "Alta",
      measures: [
        "Liberalização de terrenos para construção habitacional",
        "Programa municipal de arrendamento jovem",
        "Revitalização do centro histórico",
        "Criação de espaços de coworking municipais",
        "Melhoria da eficiência energética dos edifícios públicos"
      ]
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Mobilidade e Transportes",
      priority: "Média",
      measures: [
        "Expansão da rede de ciclovias",
        "Melhoria dos transportes públicos urbanos",
        "Criação de mais estacionamento gratuito",
        "Implementação de sistema de partilha de bicicletas",
        "Otimização dos semáforos com tecnologia inteligente"
      ]
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Educação e Formação",
      priority: "Alta",
      measures: [
        "Autonomia das escolas na gestão de recursos",
        "Programa de formação digital para seniores",
        "Parcerias com universidades para estágios locais",
        "Criação de um centro de formação profissional",
        "Bolsas de estudo para estudantes carenciados"
      ]
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Saúde e Bem-estar",
      priority: "Alta",
      measures: [
        "Criação de mais equipamentos desportivos públicos",
        "Programa municipal de prevenção da saúde",
        "Melhoria dos cuidados de saúde primários",
        "Apoio a lares de idosos privados",
        "Criação de espaços verdes terapêuticos"
      ]
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Ambiente e Sustentabilidade",
      priority: "Média",
      measures: [
        "Programa de energia solar em edifícios públicos",
        "Expansão da recolha seletiva de resíduos",
        "Criação de hortas urbanas comunitárias",
        "Proteção e valorização da orla costeira",
        "Incentivos para veículos elétricos"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Cultura e Turismo",
      priority: "Média",
      measures: [
        "Festival anual de inovação e tecnologia",
        "Promoção do turismo de natureza",
        "Valorização do património histórico local",
        "Apoio a iniciativas culturais privadas",
        "Criação de rotas turísticas temáticas"
      ]
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Modernização Digital",
      priority: "Alta",
      measures: [
        "WiFi gratuito em espaços públicos",
        "Digitalização completa dos serviços municipais",
        "Portal da transparência municipal",
        "App municipal para cidadãos",
        "Programa de literacia digital"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Segurança e Proteção Civil",
      priority: "Média",
      measures: [
        "Modernização dos equipamentos de bombeiros",
        "Sistema de videovigilância inteligente",
        "Programa de segurança escolar",
        "Melhoria da iluminação pública",
        "Plano municipal de emergência atualizado"
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
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            O nosso compromisso com Figueira da Foz baseia-se numa visão liberal que promove 
            a liberdade individual, a responsabilidade pessoal e o desenvolvimento económico sustentável.
          </p>
          
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

        {/* Principles Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Princípios Orientadores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-elegant">
              <CardHeader>
                <CardTitle className="text-liberal-blue">Transparência</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Todas as decisões municipais serão tomadas de forma transparente, 
                  com acesso público à informação e prestação de contas regular.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-elegant">
              <CardHeader>
                <CardTitle className="text-liberal-blue">Eficiência</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Otimização dos recursos públicos, eliminação da burocracia desnecessária 
                  e foco nos resultados que beneficiam os cidadãos.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-elegant">
              <CardHeader>
                <CardTitle className="text-liberal-blue">Participação</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Envolvimento ativo dos cidadãos nas decisões que afetam a cidade, 
                  através de consultas públicas e plataformas de participação.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;