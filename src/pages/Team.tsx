import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import teamPhoto from "@/assets/team-photo.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Manuel Carlos Soares~",
      role: "Coordenador Local",
      description: "Economista e empresário local, com vasta experiência em gestão pública e privada.",
      expertise: ["Economia", "Gestão Pública", "Empreendedorismo"],
      email: "joao.silva@iniciativaliberal.pt",
      linkedin: "#"
    },
    {
      name: "Maria Santos",
      role: "Coordenadora de Políticas Sociais",
      description: "Advogada especializada em direitos humanos e políticas sociais inclusivas.",
      expertise: ["Direitos Humanos", "Políticas Sociais", "Legislação"],
      email: "maria.santos@iniciativaliberal.pt",
      linkedin: "#"
    },
    {
      name: "Pedro Costa",
      role: "Responsável pelo Ambiente",
      description: "Engenheiro ambiental comprometido com o desenvolvimento sustentável da região.",
      expertise: ["Ambiente", "Sustentabilidade", "Energia"],
      email: "pedro.costa@iniciativaliberal.pt",
      linkedin: "#"
    },
    {
      name: "Ana Rodrigues",
      role: "Responsável pela Cultura",
      description: "Gestora cultural com experiência em projectos de valorização do património local.",
      expertise: ["Cultura", "Património", "Turismo"],
      email: "ana.rodrigues@iniciativaliberal.pt",
      linkedin: "#"
    },
    {
      name: "Miguel Ferreira",
      role: "Responsável pela Juventude",
      description: "Jovem empreendedor focado em criar oportunidades para a juventude local.",
      expertise: ["Juventude", "Inovação", "Tecnologia"],
      email: "miguel.ferreira@iniciativaliberal.pt",
      linkedin: "#"
    },
    {
      name: "Teresa Lopes",
      role: "Responsável pela Educação",
      description: "Professora e investigadora em ciências da educação, defensora da qualidade no ensino.",
      expertise: ["Educação", "Investigação", "Formação"],
      email: "teresa.lopes@iniciativaliberal.pt",
      linkedin: "#"
    }
  ];

  const municipalCandidates = [
    {
      name: "Carlos Monteiro",
      role: "Candidato à Câmara Municipal",
      description: "Engenheiro civil e gestor com 20 anos de experiência em administração pública local.",
      expertise: ["Gestão Municipal", "Obras Públicas", "Planeamento Urbano"],
      email: "carlos.monteiro@iniciativaliberal.pt",
      linkedin: "#",
      photo: "/placeholder.svg"
    },
    {
      name: "Isabel Fernandes",
      role: "Candidata #2",
      description: "Economista especializada em finanças públicas e desenvolvimento económico local.",
      expertise: ["Finanças Públicas", "Desenvolvimento Local", "Turismo"],
      email: "isabel.fernandes@iniciativaliberal.pt",
      linkedin: "#",
      photo: "/placeholder.svg"
    },
    {
      name: "Rui Pereira",
      role: "Candidato #3",
      description: "Advogado com experiência em direito autárquico e políticas de habitação.",
      expertise: ["Direito Autárquico", "Habitação", "Licenciamento"],
      email: "rui.pereira@iniciativaliberal.pt",
      linkedin: "#",
      photo: "/placeholder.svg"
    }
  ];

  const assemblyMembers = [
    {
      name: "Ana Sousa",
      role: "Candidata à Assembleia Municipal",
      description: "Professora universitária especializada em ciência política e governação local.",
      expertise: ["Ciência Política", "Governação Local", "Participação Cidadã"],
      email: "ana.sousa@iniciativaliberal.pt",
      linkedin: "#",
      photo: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Nossa Equipa
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Conhecei as pessoas comprometidas em construir uma Figueira da Foz mais livre, 
            próspera e com oportunidades para todos.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="autarquicas" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="autarquicas">Autárquicas</TabsTrigger>
            <TabsTrigger value="coordenacao">Coordenação</TabsTrigger>
          </TabsList>

          <TabsContent value="coordenacao">
            {/* Team Photo */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <img 
                src={teamPhoto} 
                alt="Coordenação da Iniciativa Liberal Figueira da Foz"
                className="w-full h-[400px] object-cover rounded-xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{member.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {member.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {member.description}
                    </p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Contact Buttons */}
                    <div className="flex space-x-2 pt-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${member.email}`} aria-label="Email">
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.linkedin} aria-label="LinkedIn">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Join Us Section */}
            <div className="mt-16 text-center bg-gradient-subtle rounded-xl p-8 shadow-elegant">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Quereis Juntar-vos à Nossa Coordenação?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Estamos sempre à procura de pessoas comprometidas com os valores liberais 
                e interessadas em contribuir para o desenvolvimento de Figueira da Foz.
              </p>
              <Button size="lg" asChild className="shadow-elegant">
                <a href="mailto:figueiradafoz@liberal.pt">
                  Contactai-nos
                  <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="autarquicas">
            <div className="space-y-12">
              {/* Municipal Candidates */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                  Candidatos à Câmara Municipal
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {municipalCandidates.map((candidate, index) => (
                    <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                          <img 
                            src={candidate.photo} 
                            alt={candidate.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardTitle className="text-xl">{candidate.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {candidate.role}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          {candidate.description}
                        </p>
                        
                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2">
                          {candidate.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Contact Buttons */}
                        <div className="flex space-x-2 pt-4 justify-center">
                          <Button variant="outline" size="sm" asChild>
                            <a href={`mailto:${candidate.email}`} aria-label="Email">
                              <Mail className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={candidate.linkedin} aria-label="LinkedIn">
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Assembly Candidates */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                  Candidatos à Assembleia Municipal
                </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {assemblyMembers.map((member, index) => (
                     <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                       <CardHeader className="text-center">
                         <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                           <img 
                             src={member.photo} 
                             alt={member.name}
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <CardTitle className="text-xl">{member.name}</CardTitle>
                         <CardDescription className="text-primary font-medium">
                           {member.role}
                         </CardDescription>
                       </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          {member.description}
                        </p>
                        
                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Contact Buttons */}
                        <div className="flex space-x-2 pt-4">
                          <Button variant="outline" size="sm" asChild>
                            <a href={`mailto:${member.email}`} aria-label="Email">
                              <Mail className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={member.linkedin} aria-label="LinkedIn">
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Team;