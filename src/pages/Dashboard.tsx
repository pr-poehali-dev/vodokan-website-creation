import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("1547.50");
  const [coldWater, setColdWater] = useState("");
  const [hotWater, setHotWater] = useState("");

  const paymentHistory = [
    { date: "15.09.2024", amount: "1547.50", status: "Оплачено" },
    { date: "15.08.2024", amount: "1432.20", status: "Оплачено" },
    { date: "15.07.2024", amount: "1389.00", status: "Оплачено" },
  ];

  const handlePayment = () => {
    toast({
      title: "Платёж обрабатывается",
      description: "Перенаправляем на страницу оплаты...",
    });
    setTimeout(() => {
      toast({
        title: "Успешно!",
        description: `Счёт на сумму ${amount} ₽ оплачен`,
      });
    }, 2000);
  };

  const handleMetersSubmit = () => {
    if (!coldWater || !hotWater) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Показания приняты",
      description: `Холодная вода: ${coldWater} м³, Горячая вода: ${hotWater} м³`,
    });
    setColdWater("");
    setHotWater("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />

      <section className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Личный кабинет</h1>
          <p className="text-muted-foreground">Лицевой счёт: 123456789</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardDescription>Текущий баланс</CardDescription>
              <CardTitle className="text-3xl">-1 547,50 ₽</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Рекомендуем пополнить счёт</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Расход за месяц</CardDescription>
              <CardTitle className="text-3xl">12.5 м³</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Холодная + горячая вода</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Следующий платёж</CardDescription>
              <CardTitle className="text-3xl">15.11.2024</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">До платежа 18 дней</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="payment" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="payment" className="gap-2">
              <Icon name="CreditCard" size={18} />
              Оплата
            </TabsTrigger>
            <TabsTrigger value="meters" className="gap-2">
              <Icon name="Gauge" size={18} />
              Показания
            </TabsTrigger>
          </TabsList>

          <TabsContent value="payment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CreditCard" size={24} className="text-primary" />
                  Оплата счёта
                </CardTitle>
                <CardDescription>
                  Оплатите задолженность банковской картой
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="account">Лицевой счёт</Label>
                  <Input id="account" value="123456789" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Сумма к оплате</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                  />
                </div>
                <Button onClick={handlePayment} className="w-full gap-2" size="lg">
                  <Icon name="CreditCard" size={20} />
                  Оплатить {amount} ₽
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>История платежей</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {paymentHistory.map((payment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{payment.date}</p>
                        <p className="text-sm text-muted-foreground">{payment.status}</p>
                      </div>
                      <p className="font-bold text-lg">{payment.amount} ₽</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="meters" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Gauge" size={24} className="text-primary" />
                  Передать показания счётчиков
                </CardTitle>
                <CardDescription>
                  Укажите текущие показания ваших счётчиков воды
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cold">Холодная вода (м³)</Label>
                  <Input
                    id="cold"
                    type="number"
                    value={coldWater}
                    onChange={(e) => setColdWater(e.target.value)}
                    placeholder="Введите показания"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hot">Горячая вода (м³)</Label>
                  <Input
                    id="hot"
                    type="number"
                    value={hotWater}
                    onChange={(e) => setHotWater(e.target.value)}
                    placeholder="Введите показания"
                  />
                </div>
                <Button onClick={handleMetersSubmit} className="w-full gap-2" size="lg">
                  <Icon name="Send" size={20} />
                  Отправить показания
                </Button>
                <p className="text-sm text-muted-foreground">
                  Последние показания переданы: 15.10.2024
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>История показаний</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">15.10.2024</p>
                      <p className="text-sm text-muted-foreground">Приняты</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Хол: 145 м³</p>
                      <p className="font-medium">Гор: 98 м³</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">15.09.2024</p>
                      <p className="text-sm text-muted-foreground">Приняты</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Хол: 139 м³</p>
                      <p className="font-medium">Гор: 92 м³</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default Dashboard;
