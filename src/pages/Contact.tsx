import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contacto. Responderemos em breve.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            as nossas propostas ou para se juntarem ao nosso movimento em Figueira da Foz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Envie-nos uma Mensagem</CardTitle>
              <CardDescription>
                Preencham o formulário abaixo e entraremos em contacto convosco.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Vosso nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="vosso.email@exemplo.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Assunto da vossa mensagem"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Escrevam aqui a vossa mensagem..."
                    rows={6}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full shadow-elegant">
                  Enviar Mensagem
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
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
                    <p className="text-muted-foreground">figueiradafoz@iniciativaliberal.pt</p>
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
                    <a href="#" aria-label="Twitter">
                      <Twitter className="h-5 w-5 mr-2" />
                      Twitter
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Join Us */}
            <Card className="bg-gradient-subtle shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Juntarem-se a Nós</CardTitle>
                <CardDescription>
                  Interessados em ser voluntários ou membros da nossa equipa?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Procuramos pessoas comprometidas com os valores liberais e o desenvolvimento 
                  de Figueira da Foz. Se querem fazer a diferença, contactem-nos!
                </p>
                <Button size="lg" asChild className="w-full shadow-elegant">
                  <a href="mailto:figueiradafoz@iniciativaliberal.pt?subject=Voluntariado">
                    Quero Ser Voluntário(a)
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