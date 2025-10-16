import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const platforms = [
    { name: "Creatium", icon: "Code2" },
    { name: "Tilda", icon: "Palette" },
    { name: "uCraft", icon: "Layers" },
    { name: "WordPress", icon: "Globe" },
  ];

  const advantages = [
    {
      title: "Прозрачные цены",
      description: "Фиксированная стоимость без скрытых платежей",
      icon: "DollarSign",
    },
    {
      title: "Быстрый запуск",
      description: "Готовый сайт через 2 недели",
      icon: "Zap",
    },
    {
      title: "Гарантия качества",
      description: "Бесплатные правки в течение месяца",
      icon: "Shield",
    },
    {
      title: "Поддержка 24/7",
      description: "Всегда на связи в любое время",
      icon: "Headphones",
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
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">WEB STUDIO</div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#services" className="text-sm font-medium hover:opacity-60 transition-opacity">Услуги</a>
              <a href="#advantages" className="text-sm font-medium hover:opacity-60 transition-opacity">Преимущества</a>
              <a href="#process" className="text-sm font-medium hover:opacity-60 transition-opacity">Процесс</a>
              <a href="#portfolio" className="text-sm font-medium hover:opacity-60 transition-opacity">Портфолио</a>
            </div>
            <Button className="bg-black text-white hover:bg-black/90">Обсудить проект</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6 bg-primary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-black leading-tight">
              Создаём сайты
              <br />
              под ключ
            </h1>
            <p className="text-xl md:text-2xl text-black/80 mb-10 max-w-3xl mx-auto font-medium">
              На конструкторах и с помощью кода. Creatium, Tilda, uCraft, WordPress — выбираем лучшее решение для вашего бизнеса
            </p>
            <Button size="lg" className="text-lg px-10 bg-black text-white hover:bg-black/90">
              Начать проект
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">Почему мы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, idx) => (
              <div
                key={idx}
                className="p-8 border-2 border-black rounded-2xl hover:bg-primary transition-all duration-300"
              >
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6">
                  <Icon name={advantage.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-lg text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">Платформы</h2>
          <p className="text-center text-xl text-muted-foreground mb-16">
            Подбираем оптимальное решение под ваши задачи и бюджет
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border-2 border-black rounded-2xl text-center hover:bg-primary transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name={platform.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">Как работаем</h2>
          <p className="text-center text-xl text-muted-foreground mb-16">
            Прозрачный процесс от идеи до запуска
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`p-8 border-2 border-black rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeStep === idx ? "bg-primary scale-105" : "bg-white hover:bg-secondary"
                }`}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                      <Icon name={step.icon} size={24} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-3xl font-bold">{step.number}</span>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">Портфолио</h2>
          <p className="text-center text-xl text-muted-foreground mb-16">
            Примеры наших работ
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, idx) => (
              <div key={idx} className="bg-white border-2 border-black rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-56 bg-gradient-to-br from-primary via-yellow-300 to-yellow-400"></div>
                <div className="p-6">
                  <div className="text-sm font-bold mb-3 bg-black text-primary px-3 py-1 rounded-full inline-block">
                    {project.platform}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.category}</p>
                  <Button variant="outline" className="w-full border-2 border-black hover:bg-primary">
                    Посмотреть проект
                    <Icon name="ExternalLink" className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">Обсудим проект?</h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Оставьте заявку, и мы свяжемся с вами в течение часа
          </p>
          <div className="p-8 bg-secondary border-2 border-black rounded-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2">Ваше имя</label>
                <Input placeholder="Иван Иванов" className="border-2 border-black" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <Input type="email" placeholder="ivan@example.com" className="border-2 border-black" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Телефон</label>
                <Input type="tel" placeholder="+7 (999) 123-45-67" className="border-2 border-black" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Расскажите о проекте</label>
                <Textarea placeholder="Опишите задачу, бюджет и сроки" rows={4} className="border-2 border-black" />
              </div>
              <Button className="w-full bg-black text-white hover:bg-black/90" size="lg">
                Отправить заявку
                <Icon name="Send" className="ml-2" size={18} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">WEB STUDIO</h3>
              <p className="text-white/70">
                Создаём сайты под ключ на конструкторах и с помощью кода
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Услуги</h4>
              <ul className="space-y-3 text-white/70">
                <li className="hover:text-primary transition-colors cursor-pointer">Разработка на Creatium</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Разработка на Tilda</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Разработка на uCraft</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Разработка на WordPress</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                  <Icon name="Mail" size={18} />
                  hello@webstudio.com
                </li>
                <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            © 2024 WEB STUDIO. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
