import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const workwearCategories = [
    {
      title: "Защитные каски",
      description: "Каски различных классов защиты",
      icon: "HardHat",
      price: "от 850 ₽",
      image: "/img/05b694ee-88f3-42ee-95e1-88ef8516549a.jpg"
    },
    {
      title: "Спецодежда",
      description: "Куртки, комбинезоны, костюмы",
      icon: "Shirt",
      price: "от 2 400 ₽",
      image: "/img/05b694ee-88f3-42ee-95e1-88ef8516549a.jpg"
    },
    {
      title: "Защитные перчатки",
      description: "Перчатки для различных видов работ",
      icon: "Hand",
      price: "от 180 ₽",
      image: "/img/05b694ee-88f3-42ee-95e1-88ef8516549a.jpg"
    },
    {
      title: "Обувь спецназначения",
      description: "Ботинки с металлическим подноском",
      icon: "FootPrints",
      price: "от 3 200 ₽",
      image: "/img/05b694ee-88f3-42ee-95e1-88ef8516549a.jpg"
    },
    {
      title: "Средства защиты",
      description: "Респираторы, очки, наушники",
      icon: "Shield",
      price: "от 320 ₽",
      image: "/img/05b694ee-88f3-42ee-95e1-88ef8516549a.jpg"
    },
    {
      title: "Сигнальная одежда",
      description: "Жилеты и костюмы повышенной видимости",
      icon: "AlertTriangle",
      price: "от 1 150 ₽",
      image: "/img/05b694ee-88f3-42ee-95e1-88ef8516549a.jpg"
    }
  ];

  const services = [
    {
      title: "Подбор спецодежды",
      description: "Профессиональный подбор СИЗ под ваши требования и нормы охраны труда",
      icon: "Search",
      features: ["Анализ рабочих мест", "Расчет потребности", "Соответствие ГОСТам"]
    },
    {
      title: "Комплексные поставки",
      description: "Полный цикл поставок для предприятий любого масштаба",
      icon: "Truck",
      features: ["Склад 2000+ позиций", "Доставка по ДФО", "Работа с НДС"]
    },
    {
      title: "Техническое сопровождение",
      description: "Консультации по выбору и эксплуатации средств защиты",
      icon: "Settings",
      features: ["Экспертные консультации", "Обучение персонала", "Сертификация"]
    }
  ];

  return (
    <div className="min-h-screen bg-industrial-light">
      {/* Header */}
      <header className="bg-primary text-white shadow-2xl border-b-4 border-accent">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="HardHat" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">ДАЛЬНЕВОСТОЧНАЯ БАЗА СПЕЦОДЕЖДЫ</h1>
                <p className="text-industrial-metal text-sm">Профессиональные средства защиты с 2010 года</p>
              </div>
            </div>
            <nav className="flex space-x-6">
              <a href="#catalog" className="hover:text-accent transition-colors font-medium">Каталог</a>
              <a href="#services" className="hover:text-accent transition-colors font-medium">Услуги</a>
              <a href="#contacts" className="hover:text-accent transition-colors font-medium">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-secondary to-industrial-dark text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/img/111c54a3-17c0-4541-b9ca-4e2c0fb7bf16.jpg')` }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-white px-4 py-2 text-sm">
              <Icon name="Award" size={16} className="mr-2" />
              Сертифицированный поставщик СИЗ
            </Badge>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Безопасность на производстве — 
              <span className="text-accent"> наша специализация</span>
            </h2>
            <p className="text-xl mb-8 text-industrial-metal leading-relaxed max-w-3xl mx-auto">
              Более 13 лет обеспечиваем предприятия Дальнего Востока качественной спецодеждой 
              и средствами индивидуальной защиты. Склад более 2000 наименований продукции.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg font-semibold">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Каталог товаров
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold">
                <Icon name="Calculator" size={20} className="mr-2" />
                Расчет потребности
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-b-2 border-industrial-metal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "13+", label: "лет опыта", icon: "Calendar" },
              { number: "2000+", label: "товаров", icon: "Package" },
              { number: "500+", label: "предприятий", icon: "Building" },
              { number: "24/7", label: "поддержка", icon: "Headphones" }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Icon name={stat.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-industrial-steel font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-industrial-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-white px-4 py-2">
              <Icon name="Grid3X3" size={16} className="mr-2" />
              Каталог продукции
            </Badge>
            <h3 className="text-4xl font-bold text-primary mb-4">
              Спецодежда и защитные средства
            </h3>
            <p className="text-xl text-industrial-steel max-w-2xl mx-auto">
              Полный ассортимент сертифицированных средств индивидуальной защиты 
              для всех видов промышленного производства
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workwearCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Icon name={category.icon} size={24} className="text-white" />
                    </div>
                    <Badge variant="outline" className="text-accent border-accent">
                      {category.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-industrial-steel">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-primary hover:bg-accent text-white transition-colors" size="sm">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Смотреть каталог
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-white px-4 py-2">
              <Icon name="Wrench" size={16} className="mr-2" />
              Наши услуги
            </Badge>
            <h3 className="text-4xl font-bold text-primary mb-4">
              Полный цикл обеспечения безопасности
            </h3>
            <p className="text-xl text-industrial-steel max-w-2xl mx-auto">
              От анализа потребностей до поставки и сопровождения — 
              комплексные решения для вашего предприятия
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-industrial-light rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-industrial-steel text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-industrial-steel">
                        <Icon name="Check" size={16} className="text-accent mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-accent text-white transition-colors">
                    <Icon name="ArrowRight" size={16} className="mr-2" />
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-white px-4 py-2">
              <Icon name="Phone" size={16} className="mr-2" />
              Свяжитесь с нами
            </Badge>
            <h3 className="text-4xl font-bold mb-6">
              Готовы обеспечить безопасность вашего предприятия
            </h3>
            <p className="text-xl text-industrial-metal mb-8 leading-relaxed">
              Наши специалисты помогут подобрать оптимальное решение 
              для обеспечения безопасности на вашем производстве
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-industrial-metal">+7 (4212) 555-123</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-industrial-metal">info@dvspecodezhda.ru</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">Адрес</h4>
                <p className="text-industrial-metal">г. Хабаровск, ул. Индустриальная, 15</p>
              </div>
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg font-semibold">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial-dark text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-industrial-metal">
                © 2024 Дальневосточная база спецодежды. Все права защищены.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-industrial-metal hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-industrial-metal hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;