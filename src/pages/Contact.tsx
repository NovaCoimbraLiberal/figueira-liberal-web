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
      description: "Obrigado pelo seu contacto. Responderemos brevemente.",
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
            Estamos aqui para o ouvir. Entre em contacto connosco para saber mais sobre 
            as nossas propostas ou para se juntar ao nosso movimento em Figueira da Foz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Envie-nos uma Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entraremos em contacto consigo.
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
                      placeholder="O seu nome"
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
                      placeholder="o.seu.email@exemplo.com"
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
                    placeholder="Assunto da sua mensagem"
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
                    placeholder="Escreva aqui a sua mensagem..."
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
                <CardTitle className="text-2xl">Contacto Direto</CardTitle>
                <CardDescription>
                  Entre em contacto diretamente através dos nossos canais.
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
                  Siga-nos nas redes sociais para se manter atualizado.
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
                <CardTitle className="text-2xl">Juntar-se a Nós</CardTitle>
                <CardDescription>
                  Interessado em ser voluntário ou membro da nossa equipa?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Procuramos pessoas comprometidas com os valores liberais e o desenvolvimento 
                  de Figueira da Foz. Se quer fazer a diferença, contacte-nos!
                </p>
                <Button size="lg" asChild className="w-full shadow-elegant">
                  <a href="mailto:figueiradafoz@iniciativaliberal.pt?subject=Voluntariado">
                    Quero Ser Voluntário
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