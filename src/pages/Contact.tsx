import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Send } from "lucide-react";

const Contact = () => {

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contacto
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para vos ouvir. Entrem em contacto connosco para saber mais sobre 
            as nossas propostas ou para se juntarem ao nosso movimento na Figueira da Foz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Google Forms Widget */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Envie-nos uma Mensagem</CardTitle>
              <CardDescription>
                Este formulário pode ser totalmente anónimo. Queremos as vossas perguntas, sugestões e feedback!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[600px] rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf7EjZ4EqaX58ckRov56_converted_id/viewform?embedded=true"
                  title="Formulário de Contacto"
                  className="border-0"
                >
                  A carregar...
                </iframe>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Estamos sempre a ouvir!
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Contacto Directo</CardTitle>
                <CardDescription>
                  Entrem em contacto directamente através dos nossos canais.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-hero p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">figueiradafoz@liberal.pt</p>
                  </div>
                </div>
                
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Redes Sociais</CardTitle>
                <CardDescription>
                  Sigam-nos nas redes sociais para se manterem actualizados.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="lg" asChild className="flex-1">
                    <a href="https://www.facebook.com/profile.php?id=61576707222189" aria-label="Facebook">
                      <Facebook className="h-5 w-5 mr-2" />
                      Facebook
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="flex-1">
                    <a href="https://www.instagram.com/figueiradafozliberal/" aria-label="Instagram">
                      <Instagram className="h-5 w-5 mr-2" />
                      Instagram
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="flex-1">
                    <a href="https://x.com/JoHei13" aria-label="Twitter">
                      <Twitter className="h-5 w-5 mr-2" />
                      Twitter
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Join Us */}
            <Card className="bg-gradient-subtle shadow-elegant overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">Junta-te a Nós</CardTitle>
                <CardDescription>
                  Interessados em serem membros da Iniciativa Liberal?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/688e1bcf-397f-4923-b6f1-4c7ec13e5850.png" 
                    alt="Mais Liberdade Social, Política e Económica - Iniciativa Liberal"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  Procuramos pessoas comprometidas com os valores liberais e o desenvolvimento 
                  da Figueira da Foz. Se querem fazer a diferença, junta-te a nós!
                </p>
                <Button size="lg" asChild className="w-full shadow-elegant">
                  <a href="https://www.liberal.pt/adere">
                    Aderir
                    <Mail className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
