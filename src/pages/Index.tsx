import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: "Droplet",
      title: "Водоснабжение",
      description: "Круглосуточная подача холодной и горячей воды",
    },
    {
      icon: "Trash2",
      title: "Водоотведение",
      description: "Современные очистные сооружения",
    },
    {
      icon: "Phone",
      title: "Служба поддержки",
      description: "Техподдержка 24/7 по всем вопросам",
    },
    {
      icon: "FileText",
      title: "Онлайн-документы",
      description: "Все документы и договоры в личном кабинете",
    },
  ];

  const quickActions = [
    {
      icon: "CreditCard",
      title: "Оплатить счёт",
      description: "Быстрая оплата через интернет",
      link: "/dashboard",
      variant: "default" as const,
    },
    {
      icon: "Gauge",
      title: "Передать показания",
      description: "Показания счётчиков воды",
      link: "/dashboard",
      variant: "outline" as const,
    },
    {
      icon: "MessageSquare",
      title: "Оставить заявку",
      description: "Сообщить о проблеме",
      link: "/contacts",
      variant: "outline" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Городской водоканал
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Надёжное водоснабжение и водоотведение для вашего комфорта
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/dashboard">
              <Button size="lg" className="gap-2">
                <Icon name="User" size={20} />
                Личный кабинет
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Phone" size={20} />
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <Link key={index} to={action.link}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={action.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Круглосуточная диспетчерская служба</h3>
                <p className="text-primary-foreground/90">
                  Сообщите об аварии или задайте вопрос в любое время
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-2xl font-bold">
                  <Icon name="Phone" size={28} />
                  <span>8-800-123-45-67</span>
                </div>
                <span className="text-sm text-primary-foreground/80 text-center">
                  Звонок бесплатный
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2024 Городской Водоканал. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
