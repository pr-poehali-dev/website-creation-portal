import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const platforms = [
    { name: "Creatium", icon: "Code2", color: "bg-blue-500" },
    { name: "Tilda", icon: "Palette", color: "bg-purple-500" },
    { name: "uCraft", icon: "Layers", color: "bg-green-500" },
    { name: "WordPress", icon: "Globe", color: "bg-orange-500" },
  ];

  const steps = [
    {
      number: 1,
      title: "Брифинг",
      description: "Изучаем ваш бизнес и цели проекта",
      icon: "MessageSquare",
    },
    {
      number: 2,
      title: "Прототипирование",
      description: "Создаем структуру и UX сайта",
      icon: "Layout",
    },
    {
      number: 3,
      title: "Дизайн",
      description: "Разрабатываем визуальную концепцию",
      icon: "Palette",
    },
    {
      number: 4,
      title: "Разработка",
      description: "Реализуем функционал на выбранной платформе",
      icon: "Code2",
    },
    {
      number: 5,
      title: "Тестирование",
      description: "Проверяем работу на всех устройствах",
      icon: "CheckCircle2",
    },
    {
      number: 6,
      title: "Запуск",
      description: "Публикуем сайт и передаем вам",
      icon: "Rocket",
    },
  ];

  const portfolio = [
    {
      title: "E-commerce для моды",
      category: "Интернет-магазин",
      platform: "WordPress",
    },
    {
      title: "Корпоративный сайт IT-компании",
      category: "Корпоративный",
      platform: "Creatium",
    },
    {
      title: "Landing для стартапа",
      category: "Лендинг",
      platform: "Tilda",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-foreground">WEB STUDIO</div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">Процесс</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button size="sm">Обсудить проект</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              Создаём сайты
              <br />
              <span className="text-primary">под ключ</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Разрабатываем сайты на конструкторах и с помощью кода.
              Creatium, Tilda, uCraft, WordPress — выбираем лучшее решение для вашего бизнеса.
            </p>
            <Button size="lg" className="text-lg px-8">
              Начать проект
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Платформы для разработки</h2>
          <p className="text-center text-muted-foreground mb-12">
            Подбираем оптимальное решение под ваши задачи и бюджет
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, idx) => (
              <Card
                key={idx}
                className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className={`${platform.color} w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                  <Icon name={platform.icon} size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg">{platform.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Этапы работы</h2>
          <p className="text-center text-muted-foreground mb-16">
            Прозрачный процесс от идеи до запуска
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <Card
                key={idx}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  activeStep === idx ? "ring-2 ring-primary shadow-xl scale-105" : "hover:shadow-lg"
                }`}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={step.icon} size={24} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12">
            Примеры наших работ
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600"></div>
                <div className="p-6">
                  <div className="text-xs text-primary font-semibold mb-2">{project.platform}</div>
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                  <Button variant="outline" className="mt-4 w-full">
                    Посмотреть проект
                    <Icon name="ExternalLink" className="ml-2" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Обсудим ваш проект?</h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку, и мы свяжемся с вами в течение часа
          </p>
          <Card className="p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input placeholder="Иван Иванов" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="ivan@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input type="tel" placeholder="+7 (999) 123-45-67" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Расскажите о проекте</label>
                <Textarea placeholder="Опишите задачу, бюджет и сроки" rows={4} />
              </div>
              <Button className="w-full" size="lg">
                Отправить заявку
                <Icon name="Send" className="ml-2" size={18} />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-primary-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">WEB STUDIO</h3>
              <p className="text-sm opacity-80">
                Создаём сайты под ключ на конструкторах и с помощью кода
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Разработка на Creatium</li>
                <li>Разработка на Tilda</li>
                <li>Разработка на uCraft</li>
                <li>Разработка на WordPress</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  hello@webstudio.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            © 2024 WEB STUDIO. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
