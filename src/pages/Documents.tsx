import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Documents = () => {
  const documents = [
    {
      title: "Договор на водоснабжение",
      description: "Договор № 123456 от 15.01.2020",
      size: "245 КБ",
      icon: "FileText",
    },
    {
      title: "Тарифы на 2024 год",
      description: "Действующие тарифы на услуги",
      size: "180 КБ",
      icon: "FileSpreadsheet",
    },
    {
      title: "Акт сверки",
      description: "За период январь-октябрь 2024",
      size: "120 КБ",
      icon: "FileCheck",
    },
    {
      title: "Справка об отсутствии задолженности",
      description: "Выдана 20.10.2024",
      size: "95 КБ",
      icon: "FileCheck2",
    },
  ];

  const tariffs = [
    { service: "Холодное водоснабжение", price: "45.80", unit: "м³" },
    { service: "Горячее водоснабжение", price: "198.50", unit: "м³" },
    { service: "Водоотведение", price: "32.40", unit: "м³" },
    { service: "Обслуживание счётчиков", price: "150.00", unit: "шт/год" },
  ];

  const faqs = [
    {
      question: "Как передать показания счётчиков?",
      answer: "Показания можно передать в личном кабинете во вкладке 'Показания' с 15 по 25 число каждого месяца. Также можно позвонить по телефону 8-800-123-45-67.",
    },
    {
      question: "Как оплатить счёт за воду?",
      answer: "Оплатить можно в личном кабинете банковской картой, через мобильное приложение банка по реквизитам, или в кассах 'Почта России' и отделениях банков.",
    },
    {
      question: "Что делать при обнаружении утечки?",
      answer: "Немедленно сообщите в диспетчерскую службу по телефону 8-800-123-45-67. Наши специалисты приедут в кратчайшие сроки. Звонки принимаются круглосуточно.",
    },
    {
      question: "Как получить справку об отсутствии задолженности?",
      answer: "Справку можно заказать в личном кабинете или получить лично в офисе водоканала при предъявлении паспорта. Срок изготовления - 1 рабочий день.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />

      <section className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Документы</h1>
          <p className="text-muted-foreground">Все документы и нормативная информация</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="FileText" size={24} className="text-primary" />
                Мои документы
              </CardTitle>
              <CardDescription>Договоры, акты и справки</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={doc.icon} size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{doc.title}</p>
                        <p className="text-sm text-muted-foreground">{doc.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{doc.size}</span>
                      <Button size="icon" variant="ghost">
                        <Icon name="Download" size={18} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="DollarSign" size={24} className="text-primary" />
                Тарифы на 2024 год
              </CardTitle>
              <CardDescription>Действующие цены на услуги</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tariffs.map((tariff, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted rounded-lg"
                  >
                    <p className="font-medium">{tariff.service}</p>
                    <div className="text-right">
                      <p className="font-bold text-lg text-primary">{tariff.price} ₽</p>
                      <p className="text-sm text-muted-foreground">за {tariff.unit}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 gap-2">
                <Icon name="Download" size={18} />
                Скачать полный прайс-лист
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="HelpCircle" size={24} className="text-primary" />
              Часто задаваемые вопросы
            </CardTitle>
            <CardDescription>Ответы на популярные вопросы</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Documents;
