import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const platforms = [
    { name: "Creatium", icon: "Code2", gradient: "from-purple-500 to-indigo-600" },
    { name: "Tilda", icon: "Palette", gradient: "from-pink-500 to-rose-600" },
    { name: "uCraft", icon: "Layers", gradient: "from-blue-500 to-cyan-600" },
    { name: "WordPress", icon: "Globe", gradient: "from-emerald-500 to-teal-600" },
  ];

  const advantages = [
    {
      title: "Прозрачные цены",
      description: "Фиксированная стоимость без скрытых платежей",
      icon: "DollarSign",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      title: "Быстрый запуск",
      description: "Готовый сайт через 2 недели",
      icon: "Zap",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      title: "Гарантия качества",
      description: "Бесплатные правки в течение месяца",
      icon: "Shield",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      title: "Поддержка 24/7",
      description: "Всегда на связи в любое время",
      icon: "Headphones",
      gradient: "from-blue-500 to-indigo-600",
    },
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
      gradient: "from-purple-400 via-pink-400 to-rose-400",
    },
    {
      title: "Корпоративный сайт IT-компании",
      category: "Корпоративный",
      platform: "Creatium",
      gradient: "from-blue-400 via-cyan-400 to-teal-400",
    },
    {
      title: "Landing для стартапа",
      category: "Лендинг",
      platform: "Tilda",
      gradient: "from-violet-400 via-purple-400 to-indigo-400",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-border/50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              WEB STUDIO
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#services" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Услуги</a>
              <a href="#advantages" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Преимущества</a>
              <a href="#process" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Процесс</a>
              <a href="#portfolio" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Портфолио</a>
            </div>
            <Button className="rounded-full shadow-lg shadow-primary/20">Обсудить проект</Button>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">Разработка сайтов под ключ</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-foreground leading-tight">
              Создаём сайты
              <br />
              для вашего бизнеса
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              На конструкторах и с помощью кода. Creatium, Tilda, uCraft, WordPress — 
              выбираем лучшее решение для ваших задач
            </p>
            <Button size="lg" className="text-lg px-10 rounded-full shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all">
              Начать проект
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Профессиональный подход к каждому проекту</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, idx) => (
              <Card
                key={idx}
                className="p-8 hover:shadow-2xl transition-all duration-500 border-none bg-white group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${advantage.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon name={advantage.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Платформы для разработки</h2>
            <p className="text-xl text-muted-foreground">
              Подбираем оптимальное решение под ваши задачи и бюджет
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, idx) => (
              <Card
                key={idx}
                className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border-none bg-white group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${platform.gradient} rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <Icon name={platform.icon} size={36} className="text-white" />
                </div>
                <h3 className="font-bold text-xl">{platform.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground">
              Прозрачный процесс от идеи до запуска
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <Card
                key={idx}
                className={`p-8 cursor-pointer transition-all duration-500 border-none bg-white ${
                  activeStep === idx ? "shadow-2xl shadow-primary/20 scale-105" : "hover:shadow-xl"
                }`}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      activeStep === idx 
                        ? "bg-gradient-to-br from-primary to-purple-600" 
                        : "bg-secondary"
                    } transition-all duration-500`}>
                      <Icon name={step.icon} size={26} className={activeStep === idx ? "text-white" : "text-primary"} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-3xl font-bold ${activeStep === idx ? "text-primary" : "text-muted-foreground"} transition-colors`}>
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">
              Примеры наших работ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-none bg-white group">
                <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500"></div>
                </div>
                <div className="p-8">
                  <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
                    <span className="text-xs font-bold text-primary">{project.platform}</span>
                  </div>
                  <h3 className="font-bold text-2xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.category}</p>
                  <Button variant="outline" className="w-full rounded-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    Посмотреть проект
                    <Icon name="ExternalLink" className="ml-2" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Обсудим ваш проект?</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение часа
            </p>
          </div>
          <Card className="p-10 shadow-2xl border-none bg-white">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3 text-foreground">Ваше имя</label>
                <Input placeholder="Иван Иванов" className="h-12 rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3 text-foreground">Email</label>
                <Input type="email" placeholder="ivan@example.com" className="h-12 rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3 text-foreground">Телефон</label>
                <Input type="tel" placeholder="+7 (999) 123-45-67" className="h-12 rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3 text-foreground">Расскажите о проекте</label>
                <Textarea placeholder="Опишите задачу, бюджет и сроки" rows={4} className="rounded-xl" />
              </div>
              <Button className="w-full h-14 rounded-full shadow-xl shadow-primary/30 text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all" size="lg">
                Отправить заявку
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-foreground to-gray-900 text-white py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                WEB STUDIO
              </h3>
              <p className="text-white/60 leading-relaxed">
                Создаём сайты под ключ на конструкторах и с помощью кода
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Услуги</h4>
              <ul className="space-y-3 text-white/60">
                <li className="hover:text-primary transition-colors cursor-pointer">Разработка на Creatium</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Разработка на Tilda</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Разработка на uCraft</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Разработка на WordPress</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Контакты</h4>
              <ul className="space-y-4 text-white/60">
                <li className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer">
                  <Icon name="Mail" size={20} />
                  hello@webstudio.com
                </li>
                <li className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer">
                  <Icon name="Phone" size={20} />
                  +7 (999) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50">
            © 2024 WEB STUDIO. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
