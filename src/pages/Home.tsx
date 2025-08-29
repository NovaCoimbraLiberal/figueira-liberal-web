import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Target, Heart, Lightbulb, Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-figueira.jpg";

const Home = () => {
  const principles = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Liberdade Económica",
      description: "Promover o empreendedorismo e a livre iniciativa para um crescimento sustentável."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Liberdade Social",
      description: "Defender os direitos individuais e a igualdade de oportunidades para todos."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Liberdade Política",
      description: "Transparência, descentralização e participação cidadã ativa na democracia."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Foco Local",
      description: "Soluções adaptadas às necessidades específicas da Figueira da Foz."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Figueira para Todos
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            A Iniciativa Liberal na Figueira da Foz trabalha por uma cidade mais livre, 
            próspera e com oportunidades para todos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="shadow-glow">
              <Link to="/program">
                Ver Programa Político
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-background/10 backdrop-blur border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
              <Link to="/team">Conhecer a Equipa</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Os Nossos Princípios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Baseamos o nosso trabalho em valores liberais que promovem a liberdade, 
              responsabilidade e progresso para a Figueira da Foz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-gradient-hero p-3 rounded-full w-fit mb-4">
                    <div className="text-primary-foreground">
                      {principle.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Próximos Eventos
            </h2>
            <p className="text-xl text-muted-foreground">
              Não percam os nossos próximos eventos e iniciativas em Figueira da Foz.
            </p>
          </div>

          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-hero p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl">
                Apresentação do Programa Eleitoral e dos Candidatos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center space-x-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>6 de Setembro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>19:00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Figueira da Foz</span>
                </div>
              </div>
              <CardDescription className="text-center text-base">
                Venham conhecer as nossas propostas para Figueira da Foz e os candidatos 
                que irão representar a Iniciativa Liberal nas próximas eleições.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Junta-te a Nós!
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Façam parte da mudança na Figueira da Foz. Juntos podemos construir 
            uma cidade mais livre e próspera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="shadow-elegant">
              <Link to="/contact">
                Entrem em Contacto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/team">Saber Mais</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;