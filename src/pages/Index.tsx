import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const screenshots = [
    '/img/c0834060-621f-4b31-a615-fdd5d0771527.jpg',
    '/img/7561b147-310d-4fbd-9bee-2d55ab7ef6b9.jpg',
    '/img/1ad6de63-e159-4e3e-b58f-34729ff65e4e.jpg'
  ];

  const gameFeatures = [
    'Открытый мир с вертикальной архитектурой',
    'Кастомизация кибер-имплантов',
    'Хакинг в реальном времени',
    'Нелинейный сюжет с множественными концовками'
  ];

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      {/* Header */}
      <header className="border-b border-cyber-cyan/20 bg-cyber-charcoal/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-orbitron font-bold bg-gradient-to-r from-cyber-cyan to-cyber-magenta bg-clip-text text-transparent">
            NEON NEXUS
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-cyber-cyan transition-colors">Главная</a>
            <a href="#gameplay" className="hover:text-cyber-cyan transition-colors">Геймплей</a>
            <a href="#reviews" className="hover:text-cyber-cyan transition-colors">Отзывы</a>
          </nav>
        </div>
      </header>

      <main>
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="hidden">
            <TabsTrigger value="home">Главная</TabsTrigger>
            <TabsTrigger value="gameplay">Геймплей</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы</TabsTrigger>
          </TabsList>

          {/* Hero Section */}
          <TabsContent value="home" className="m-0">
            <section id="home" className="relative min-h-screen flex items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-charcoal via-cyber-dark to-black"></div>
              <div className="absolute inset-0 bg-[url('/img/c0834060-621f-4b31-a615-fdd5d0771527.jpg')] bg-cover bg-center opacity-20"></div>
              
              <div className="relative container mx-auto px-4 text-center animate-fade-in">
                <h2 className="text-6xl md:text-8xl font-orbitron font-black mb-6 animate-glow">
                  NEON NEXUS
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-cyber-cyan max-w-3xl mx-auto">
                  Погрузись в мир киберпанка будущего. Хакни систему. Измени реальность.
                </p>
                
                <div className="bg-cyber-charcoal/80 p-8 rounded-lg border border-cyber-cyan/30 max-w-md mx-auto mb-8 animate-neon-pulse">
                  <h3 className="text-2xl font-orbitron mb-4 text-cyber-cyan">Раннее Тестирование</h3>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-cyber-dark border-cyber-cyan/50 text-white placeholder-gray-400"
                    />
                    <Button className="w-full bg-gradient-to-r from-cyber-cyan to-cyber-magenta hover:from-cyber-magenta hover:to-cyber-cyan text-black font-bold py-3 transition-all duration-300">
                      ЗАРЕГИСТРИРОВАТЬСЯ
                    </Button>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    Получи эксклюзивный доступ к бета-тестированию
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                  {gameFeatures.map((feature, index) => (
                    <Card key={index} className="bg-cyber-charcoal/60 border-cyber-cyan/30 hover:border-cyber-magenta/50 transition-all duration-300">
                      <CardContent className="p-4 text-center">
                        <Icon name="Zap" className="mx-auto mb-2 text-cyber-cyan" size={24} />
                        <p className="text-sm">{feature}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Gameplay Section */}
          <TabsContent value="gameplay" className="m-0">
            <section id="gameplay" className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-charcoal">
              <div className="container mx-auto px-4">
                <h2 className="text-5xl font-orbitron font-bold text-center mb-12 bg-gradient-to-r from-cyber-cyan to-cyber-magenta bg-clip-text text-transparent">
                  ГЕЙМПЛЕЙ
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h3 className="text-3xl font-orbitron mb-6 text-cyber-cyan">Трейлер Геймплея</h3>
                    <div className="relative aspect-video bg-cyber-charcoal rounded-lg border border-cyber-cyan/30 overflow-hidden group cursor-pointer">
                      <img 
                        src="/img/7561b147-310d-4fbd-9bee-2d55ab7ef6b9.jpg" 
                        alt="Gameplay" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-all duration-300">
                        <Icon name="Play" size={64} className="text-cyber-cyan animate-pulse" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-cyber-magenta pl-6">
                      <h4 className="text-xl font-orbitron mb-2 text-cyber-magenta">Киберхакинг</h4>
                      <p className="text-gray-300">Взламывай корпоративные системы в режиме реального времени. Используй нейроинтерфейс для проникновения в цифровые крепости.</p>
                    </div>
                    
                    <div className="border-l-4 border-cyber-cyan pl-6">
                      <h4 className="text-xl font-orbitron mb-2 text-cyber-cyan">Боевая Система</h4>
                      <p className="text-gray-300">Комбинируй кибер-имплантыс традиционным оружием. Каждый бой - это тактическая головоломка.</p>
                    </div>
                    
                    <div className="border-l-4 border-cyber-neon pl-6">
                      <h4 className="text-xl font-orbitron mb-2 text-cyber-neon">Исследование</h4>
                      <p className="text-gray-300">Огромный мегаполис с вертикальными уровнями. От трущоб подземелья до роскошных небоскребов.</p>
                    </div>
                  </div>
                </div>

                {/* Screenshots Gallery */}
                <div>
                  <h3 className="text-3xl font-orbitron mb-8 text-center text-cyber-cyan">СКРИНШОТЫ</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {screenshots.map((screenshot, index) => (
                      <div key={index} className="relative group cursor-pointer">
                        <img 
                          src={screenshot} 
                          alt={`Screenshot ${index + 1}`}
                          className="w-full aspect-video object-cover rounded-lg border border-cyber-cyan/30 group-hover:border-cyber-magenta/50 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Reviews Section */}
          <TabsContent value="reviews" className="m-0">
            <section id="reviews" className="py-20 bg-gradient-to-b from-cyber-charcoal to-cyber-dark">
              <div className="container mx-auto px-4">
                <h2 className="text-5xl font-orbitron font-bold text-center mb-12 bg-gradient-to-r from-cyber-cyan to-cyber-magenta bg-clip-text text-transparent">
                  ОЦЕНКИ И ОТЗЫВЫ
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-orbitron mb-6 text-cyber-cyan">Оставить Отзыв</h3>
                    <Card className="bg-cyber-charcoal/80 border-cyber-cyan/30">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Оценка</label>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  onClick={() => setRating(star)}
                                  className={`w-8 h-8 ${star <= rating ? 'text-cyber-yellow' : 'text-gray-500'} hover:text-cyber-yellow transition-colors`}
                                >
                                  <Icon name="Star" size={24} />
                                </button>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-2">Ваш отзыв</label>
                            <Textarea
                              placeholder="Поделитесь впечатлениями об игре..."
                              value={review}
                              onChange={(e) => setReview(e.target.value)}
                              className="bg-cyber-dark border-cyber-cyan/50 text-white placeholder-gray-400 min-h-[120px]"
                            />
                          </div>
                          
                          <div className="flex gap-3">
                            <Button className="flex-1 bg-cyber-cyan hover:bg-cyber-cyan/80 text-black">
                              <Icon name="Mail" size={16} className="mr-2" />
                              Отправить на Email
                            </Button>
                            <Button variant="outline" className="border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-black">
                              <Icon name="Share2" size={16} className="mr-2" />
                              В соцсети
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-orbitron mb-6 text-cyber-cyan">Отзывы Игроков</h3>
                    <div className="space-y-4">
                      {[
                        { name: "CyberHacker_2077", rating: 5, text: "Невероятная атмосфера! Это именно тот киберпанк, которого я ждал." },
                        { name: "NeuroMancer", rating: 4, text: "Геймплей на высоте, особенно хакинг-механики. Графика просто космос!" },
                        { name: "DataStream", rating: 5, text: "Лучшая игра в жанре за последние годы. Каждая деталь проработана." }
                      ].map((userReview, index) => (
                        <Card key={index} className="bg-cyber-charcoal/60 border-cyber-cyan/20">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-orbitron text-cyber-cyan">{userReview.name}</span>
                              <div className="flex">
                                {Array.from({ length: userReview.rating }).map((_, i) => (
                                  <Icon key={i} name="Star" size={16} className="text-cyber-yellow" />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-300 text-sm">{userReview.text}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-cyber-charcoal/80 border-t border-cyber-cyan/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">© 2077 NEON NEXUS. Все права защищены.</p>
          <div className="flex justify-center space-x-6">
            <Icon name="Twitter" size={24} className="text-cyber-cyan hover:text-cyber-magenta cursor-pointer transition-colors" />
            <Icon name="Youtube" size={24} className="text-cyber-cyan hover:text-cyber-magenta cursor-pointer transition-colors" />
            <Icon name="Twitch" size={24} className="text-cyber-cyan hover:text-cyber-magenta cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>

      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-50 hidden lg:block">
        <a href="#home" className="block w-3 h-3 bg-cyber-cyan rounded-full hover:scale-125 transition-transform"></a>
        <a href="#gameplay" className="block w-3 h-3 bg-cyber-magenta rounded-full hover:scale-125 transition-transform"></a>
        <a href="#reviews" className="block w-3 h-3 bg-cyber-neon rounded-full hover:scale-125 transition-transform"></a>
      </div>
    </div>
  );
};

export default Index;