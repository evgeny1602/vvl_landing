import React, { useState } from 'react'
import { Button } from './components/Button'
import { BookingModal } from './components/BookingModal'
import { ImageWithFallback } from './components/figma/ImageWithFallback'
import {
  Calendar,
  Users,
  Zap,
  TrendingUp,
  CheckCircle2,
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  User,
  Phone,
  ExternalLink,
  ChevronDown,
} from 'lucide-react'
import logo from '../imports/vvl_bot_logo.png'
import league_1 from '../imports/league_1.jpg'
import league_2 from '../imports/league_2.jpg'
import league_3 from '../imports/league_3.jpg'
import organizer_1 from '../imports/organizer_1.jpeg'
import organizer_2 from '../imports/organizer_2.jpeg'
import { pluralize } from './utils/pluralize'

const features = [
  {
    icon: Calendar,
    title: 'Удобная запись',
    desc: 'Планируй свое спортивное расписание на 2 недели вперед. Запишись в один клик в нашем приложении.',
  },
  {
    icon: Users,
    title: 'Мощное комьюнити',
    desc: 'Играй с теми, кто горит волейболом так же, как и ты. У нас можно прийти новичком и уйти с друзьями.',
  },
  {
    icon: Zap,
    title: 'Стабильный график',
    desc: 'Игры каждую неделю. Ты всегда можешь быть уверен что твой досуг на вечер точно состоится.',
  },
  {
    icon: TrendingUp,
    title: 'Новые горизонты',
    desc: 'Здесь ты открываешь в себе новые грани. Мы даем тебе шанс попробовать то, что изменит не только твой вечер, но и взгляд на привычный досуг. А человек увлеченый по-настоящему — всегда интереснее для окружающих.',
  },
]

const leagueFeatures = [
  'Смешанный формат: от новичков до уверенных любителей',
  'Женская сетка',
  'Турниры внутри лиги с призами',
]

const nextGames = [
  {
    day: 'Понедельник',
    time: '19:00 - 21:00',
    spots: 2,
  },
  {
    day: 'Вторник',
    time: '19:00 - 21:00',
    spots: 0,
  },
  {
    day: 'Четверг',
    time: '19:00 - 21:00',
    spots: 5,
  },
  {
    day: 'Пятница',
    time: '19:00 - 21:00',
    spots: 8,
  },
]

const howItLooksFeatures = [
  'Аренда зала',
  'Мячи Mikasa',
  'Организация и судейство',
  'Раздевалки и душевые',
  'Общая фотография после игры',
  'Яркие эмоции на вечер',
]

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#09090f] text-white selection:bg-[#ff4d00] selection:text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 w-full z-40 border-b border-white/5 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src={logo}
              alt="ВВЛ Логотип"
              className="w-12 h-12 object-contain"
            />
            <span className="font-['Barlow_Condensed'] font-bold tracking-wide uppercase text-[20px]">
              Вечерняя Волейбольная <span className="text-[#ff4d00]">Лига</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/70 uppercase tracking-widest">
            <a href="#about" className="hover:text-white transition-colors">
              О нас
            </a>
            <a href="#schedule" className="hover:text-white transition-colors">
              Расписание
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Цена
            </a>
            <a href="#contacts" className="hover:text-white transition-colors">
              Контакты
            </a>
          </div>
          <Button size="sm" onClick={() => setIsModalOpen(true)}>
            Начать играть
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff4d00] blur-[150px] opacity-30" />
          <div className="absolute bottom-0 w-full h-[60%] bg-[linear-gradient(to_top,rgba(255,77,0,0.2)_1px,transparent_1px),linear-gradient(to_right,rgba(255,77,0,0.2)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_top,black,transparent)] [transform:perspective(1000px)_rotateX(60deg)] origin-bottom scale-150" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full pt-20 pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-[#ff4d00] mb-6">
              <Zap className="w-4 h-4" /> Сезон 2026 открыт
            </div>
            <h1 className="font-['Barlow_Condensed'] font-black uppercase leading-[0.85] mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 text-[64px] sm:text-[96px]">
              ИГРАЙ.
              <br />
              ПОБЕЖДАЙ.
              <br />
              <span className="text-[#ff4d00] drop-shadow-[0_0_30px_rgba(255,77,0,0.5)]">
                РАСТИ.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl mb-8 md:mb-10 leading-relaxed font-light">
              Мощное комьюнити любителей волейбола. Регулярные игры, смешанные
              команды, драйв и эмоции. Присоединяйся к Вечерней Волейбольной
              Лиге уже сегодня.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="text-lg md:text-[20px]"
                size="lg"
                onClick={() => setIsModalOpen(true)}
              >
                Занять место на площадке
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById('schedule')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Смотреть расписание
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <a
            href="#about"
            className="text-white/50 hover:text-[#ff4d00] transition-colors flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest font-bold">
              Листай
            </span>
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* About (Features) */}
      <section id="about" className="py-24 bg-[#0c0c14]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-['Barlow_Condensed'] font-bold uppercase mb-4">
              Почему <span className="text-[#ff4d00]">мы?</span>
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              Создаем идеальные условия для игры и твоего вечера.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 hover:border-[#ff4d00]/30 transition-all group"
              >
                <div className="w-14 h-14 bg-[#ff4d00]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff4d00] transition-colors">
                  <f.icon className="w-7 h-7 text-[#ff4d00] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-['Barlow_Condensed'] uppercase mb-3 text-white font-bold">
                  {f.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* League Info */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full relative z-10">
                <div className="col-span-2 rounded-3xl overflow-hidden relative group">
                  <ImageWithFallback
                    src={league_1}
                    alt="Одна лига. Разные форматы."
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="rounded-3xl overflow-hidden relative group">
                  <ImageWithFallback
                    src={league_2}
                    alt="Одна лига. Разные форматы."
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 brightness-110  saturate-110"
                  />
                </div>

                <div className="rounded-3xl overflow-hidden relative group">
                  <ImageWithFallback
                    src={league_3}
                    alt="Одна лига. Разные форматы."
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 brightness-130 saturate-120"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="font-['Barlow_Condensed'] font-black uppercase mb-6 leading-[0.9] text-[64px]">
                Одна лига.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-orange-400">
                  РАЗНЫЕ ФОРМАТЫ.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed font-light">
                В нашей Лиге каждый важен. Мы знаем, что кто-то ищет лёгкую игру
                после работы, а кто-то грезит кубком. Именно поэтому мы не
                загоняем всех в один шаблон, а создали пространство, где
                комфортно любому. Вот какие форматы мы подготовили специально
                для вас:
              </p>

              <ul className="space-y-4 mb-10">
                {leagueFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 className="w-6 h-6 text-[#ff4d00] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={() => setIsModalOpen(true)}>
                Присоединиться к лиге
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-24 bg-[#0c0c14]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-['Barlow_Condensed'] font-bold uppercase mb-4">
                Ближайшие <span className="text-[#ff4d00]">игры</span>
              </h2>

              <p className="text-white/60">
                Выбирай удобное время и бронируй место.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/50">
              <Clock className="w-4 h-4" /> Обновлено только что
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {nextGames.map((slot, i) => (
              <div
                key={i}
                className={`p-4 md:p-6 border rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all ${
                  slot.spots === 0
                    ? 'bg-white/5 border-white/5 opacity-50'
                    : 'bg-[#12121a] border-white/10 hover:border-[#ff4d00]/50'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-grow">
                  <div className="min-w-[160px]">
                    <div className="text-[#ff4d00] font-bold text-sm uppercase tracking-wider mb-1">
                      {slot.day}
                    </div>
                    <div className="text-2xl font-['Barlow_Condensed'] font-bold">
                      {slot.time}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 md:min-w-[280px]">
                  <div className="text-sm whitespace-nowrap">
                    {slot.spots === 0 ? (
                      <span className="text-red-400">Мест нет</span>
                    ) : (
                      <span>
                        Осталось{' '}
                        <strong className="text-white text-lg">
                          {slot.spots}
                        </strong>{' '}
                        {pluralize(slot.spots, 'место', 'места', 'мест')}
                      </span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    disabled={slot.spots === 0}
                    onClick={() => setIsModalOpen(true)}
                    variant={
                      slot.spots > 0 && slot.spots <= 2 ? 'primary' : 'outline'
                    }
                    className="w-full md:w-auto"
                  >
                    {slot.spots === 0 ? 'Заполнено' : 'Записаться'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090f] to-[#12121a] z-0" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-['Barlow_Condensed'] font-bold uppercase mb-12">
            Простые <span className="text-[#ff4d00]">условия</span>
          </h2>

          <div className="bg-gradient-to-br from-[#1a1a24] to-[#12121a] border border-[#ff4d00]/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(255,77,0,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff4d00] rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2" />

            <div className="uppercase tracking-widest text-[#ff4d00] font-bold text-sm mb-4">
              Как это выглядит
            </div>

            <div className="mb-8 mt-8">
              <span className="text-2xl sm:text-3xl md:text-3xl font-['Barlow_Condensed'] font-black">
                200
              </span>
              <span className="text-xl sm:text-2xl text-white/50 font-['Barlow_Condensed'] font-bold mt-4">
                {' '}
                ₽
              </span>
              <span className="text-sm sm:text-base text-white/50 mt-6">
                {' '}
                / игра (2 часа)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-16">
              {howItLooksFeatures.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ff4d00] shrink-0" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full md:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Играть
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 bg-[#09090f]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-['Barlow_Condensed'] font-bold uppercase mb-4">
              Остались <span className="text-[#ff4d00]">вопросы?</span>
            </h2>
            <p className="text-white/60">
              Свяжитесь с организаторами лиги напрямую.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Organizer 1 */}
            <div className="bg-[#12121a] border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 hover:border-[#ff4d00]/30 transition-colors">
              <div className="w-20 h-20 bg-[#ff4d00]/10 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
                <ImageWithFallback
                  src={organizer_1}
                  alt="Сергей"
                  className="w-full h-full saturate-150 brightness-120"
                />
              </div>

              <div className="flex-grow text-center md:text-left w-full">
                <div className="font-bold font-['Barlow_Condensed'] text-3xl uppercase mb-1">
                  Сергей
                </div>
                <div className="text-[#ff4d00] text-sm uppercase tracking-widest font-bold mb-6">
                  Организатор
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+79619785349"
                    className="flex items-center justify-center md:justify-start gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="bg-white/5 p-2 rounded-lg group-hover:bg-[#ff4d00]/20 group-hover:text-[#ff4d00] transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-lg">
                      +7 (961) 978-53-49
                    </span>
                  </a>
                  <a
                    href="https://vk.com/id1081633332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="bg-[#0077FF]/10 p-2 rounded-lg group-hover:bg-[#0077FF]/20 text-[#0077FF] transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-lg">
                      Написать ВКонтакте
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Organizer 2 */}
            <div className="bg-[#12121a] border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 hover:border-[#ff4d00]/30 transition-colors">
              <div className="w-20 h-20 bg-[#ff4d00]/10 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
                <ImageWithFallback
                  src={organizer_2}
                  alt="Жора"
                  className="w-full h-full saturate-120 brightness-120 scale-120"
                />
              </div>
              <div className="flex-grow text-center md:text-left w-full">
                <div className="font-bold font-['Barlow_Condensed'] text-3xl uppercase mb-1">
                  Жора
                </div>
                <div className="text-[#ff4d00] text-sm uppercase tracking-widest font-bold mb-6">
                  Организатор
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+79994769366"
                    className="flex items-center justify-center md:justify-start gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="bg-white/5 p-2 rounded-lg group-hover:bg-[#ff4d00]/20 group-hover:text-[#ff4d00] transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-lg">
                      +7 (999) 476-93-66
                    </span>
                  </a>
                  <a
                    href="https://vk.com/danteaw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="bg-[#0077FF]/10 p-2 rounded-lg group-hover:bg-[#0077FF]/20 text-[#0077FF] transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-lg">
                      Написать ВКонтакте
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center border-t border-white/10">
        <div className="absolute inset-0 bg-[#ff4d00] opacity-[0.03]" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-['Barlow_Condensed'] font-black uppercase mb-6 md:mb-8 leading-[0.9]">
            Хватит смотреть —<br />
            <span className="text-[#ff4d00]">начни играть</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-10 max-w-2xl mx-auto font-light">
            Бронируй слот на ближайшую игру прямо сейчас.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button
              size="lg"
              className="w-full sm:w-auto text-xl px-12"
              onClick={() => setIsModalOpen(true)}
            >
              Записаться за 200 ₽
            </Button>

            <div className="flex items-center gap-2 text-white/50 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#ff4d00]" />
              <span>Гарантия: не понравится — вернем деньги</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <ImageWithFallback
            src={logo}
            alt="ВВЛ"
            className="w-8 h-8 object-contain grayscale opacity-50"
          />
          <span className="font-['Barlow_Condensed'] font-bold text-xl uppercase text-white/50">
            ВВЛ 2026
          </span>
        </div>
        <div className="text-white/30 text-sm">
          © {new Date().getFullYear()} Вечерняя Волейбольная Лига. Все права
          защищены.
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
