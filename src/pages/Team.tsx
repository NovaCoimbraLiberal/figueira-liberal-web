import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import teamPhoto from "@/assets/team-photo.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Manuel Carlos Soares",
      role: "Coordenador Local",
      description: "Consultor na àrea do Turismo",
      expertise: ["Turismo", "Gestão", "Empreendedorismo"],
      linkedin: "#"
    },
    {
      name: "Paulo Sousa",
      role: "Vice Coordenador",
      description: "Licenciado em Comunicação Organizacional",
      expertise: ["Ambiente", "Comunicação", "Marketing"],
      linkedin: "#"
    },
    {
      name: "João Costa",
      role: "Vogal",
      description: "Estudante de Gestão",
      expertise: ["Juventude", "Gestão"],
      linkedin: "#"
    }
  ];

  const municipalCandidates = [
    {
      name: "João Pedro Cardoso",
      role: "Candidato à Câmara Municipal",
      description: "Mestrado em Engenharia Eletrotécnica e de Computadores pelo IST. Arquiteto Cloud Sénior na NTT Data. Membro da Coordenação Local da IL Coimbra desde 2023",
      expertise: ["Tecnologia", "Modernização", "Inteligência Artificial","Mobilidade"],
      linkedin: "#",
      photo: "/lovable-uploads/42ed592f-a8fc-419a-afd7-2ca981214b72.png"
    },
    {
      name: "Carolina Rouxinol",
      role: "Candidata #2",
      description: "Estudante de Estudos Europeus na UC",
      expertise: ["Finanças Públicas", "Desenvolvimento Local"],
      linkedin: "#",
      photo: "/lovable-uploads/34014e81-43c3-4749-8e9d-c15051c6593f.png"
    },
    {
      name: "Manuel Carlos Soares",
      role: "Candidato #3",
      description: "Consultor na àrea do Turismo",
      expertise: ["Turismo", "Gestão", "Empreendedorismo"],
      linkedin: "#",
      photo: "/lovable-uploads/c158e20e-e988-403e-99af-880f1e0b1861.png"
    },
    {
      name: "Paulo Sousa",
      role: "Candidato #4",
      description: "Vendedor, Licenciado em Comunicação Organizacional",
      expertise: ["Vendas", "Comércio", "Ambiente","Gestão"],
      linkedin: "#",
      photo: "/lovable-uploads/77cb4955-fd71-41b7-bdfd-8aa467088a99.png"
    },
    {
      name: "Fatima Elena Reis Simões",
      role: "Candidata #5",
      description: "Quadro superior grupo JM",
      expertise: ["Gestão", "Administração", "Liderança"],
      linkedin: "#",
      photo: "/placeholder.svg"
    },
    {
      name: "João Tomás Cadete Costa",
      role: "Candidato #6",
      description: "Estudante",
      expertise: ["Educação", "Juventude", "Aprendizagem"],
      linkedin: "#",
      photo: "/placeholder.svg"
    },
  ];

  const assemblyMembers = [
    {
      name: "Paulo Sousa",
      role: "Candidato à Assembleia Municipal",
      description: "Vendedor, Licenciado em Comunicação Organizacional",
      expertise: ["Vendas", "Comércio", "Ambiente","Gestão"],
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
            Conheça as pessoas comprometidas em construir uma Figueira da Foz mais livre, 
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
                src="/lovable-uploads/04dbe6b2-2d16-4151-84a5-ac69f1bd8bd3.png" 
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
                    
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Join Us Section */}
            <div className="mt-16 text-center bg-gradient-subtle rounded-xl p-8 shadow-elegant">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Querem Juntar-se à Nossa Coordenação?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Estamos sempre à procura de pessoas comprometidas com os valores liberais 
                e interessadas em contribuir para o desenvolvimento de Figueira da Foz.
              </p>
              <Button size="lg" asChild className="shadow-elegant">
                <a href="mailto:figueiradafoz@liberal.pt">
                  Contacta-nos
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