import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const contactInfo = [
    {
      icon: "Phone",
      title: "Диспетчерская служба",
      value: "8-800-123-45-67",
      description: "Круглосуточно, звонок бесплатный",
    },
    {
      icon: "Mail",
      title: "Электронная почта",
      value: "info@vodokanal.ru",
      description: "Ответим в течение 24 часов",
    },
    {
      icon: "MapPin",
      title: "Адрес офиса",
      value: "ул. Водопроводная, д. 15",
      description: "Пн-Пт: 8:00-17:00, обед 12:00-13:00",
    },
    {
      icon: "Clock",
      title: "Приёмная директора",
      value: "+7 (495) 123-45-67",
      description: "Пн-Чт: 9:00-16:00, Пт: 9:00-15:00",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />

      <section className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Контакты</h1>
          <p className="text-muted-foreground">Свяжитесь с нами удобным способом</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Аварийная служба</h3>
                    <p className="text-primary-foreground/90">Работаем 24/7</p>
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">8-800-123-45-67</div>
                <p className="text-primary-foreground/90">
                  При аварии на водопроводе звоните немедленно
                </p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                      <Icon name={contact.icon} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-base">{contact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-bold mb-1">{contact.value}</p>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  Как нас найти
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Map" size={48} className="text-muted-foreground" />
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">МУП "Городской водоканал"</p>
                  <p className="text-muted-foreground">г. Москва, ул. Водопроводная, д. 15</p>
                  <p className="text-muted-foreground">Ближайшее метро: Площадь Революции</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MessageSquare" size={24} className="text-primary" />
                Оставить заявку
              </CardTitle>
              <CardDescription>
                Заполните форму, и мы свяжемся с вами в течение рабочего дня
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Иванов Иван Иванович"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account">Лицевой счёт (необязательно)</Label>
                  <Input
                    id="account"
                    placeholder="123456789"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Опишите вашу проблему или вопрос"
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full gap-2" size="lg">
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  * Обязательные для заполнения поля
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/50">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-1">Быстрый ответ</h3>
                <p className="text-sm text-muted-foreground">
                  Ответим на вашу заявку в течение рабочего дня
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-1">Квалифицированные специалисты</h3>
                <p className="text-sm text-muted-foreground">
                  Наши сотрудники имеют многолетний опыт работы
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-1">Надёжность</h3>
                <p className="text-sm text-muted-foreground">
                  Работаем для вас с 1965 года
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Contacts;
