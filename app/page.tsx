'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, BookOpen, ChevronRight, ExternalLink, GraduationCap, Menu, X } from 'lucide-react'

const works = [
  { year: '2026', type: 'STORYTELLING · ЕСЕ', title: 'Книга, яка вплинула на моє професійне та наукове становлення', venue: '«Наука та освіта в історіях» · ХНПУ', authors: 'Данило Іванов, Анна Крисевич', tone: 'cyan' },
  { year: '2025', type: 'ТЕЗИ · ФІЗИКА', title: 'Елементи теорії поля в задачах фізики', venue: '«Інноваційні педагогічні технології в цифровій школі»', authors: 'Данило Іванов, Олександр Чібісов', tone: 'lime' },
  { year: '2025', type: 'НАУКОВА ПРАЦЯ', title: 'Формування графічних умінь учнів у навчанні математики', venue: '«Наумовські читання» · XXIII конференція', authors: 'Тамара Дейніченко, Данило Іванов, Іван Хоменко', tone: 'violet' },
  { year: '2025', type: 'НАУКОВА ПРАЦЯ', title: 'Застосування комп’ютера в навчальному процесі з математики', venue: '«Наумовські читання» · XXIII конференція', authors: 'Тамара Дейніченко, Данило Іванов та ін.', tone: 'orange' },
  { year: '2025', type: 'ДОСЛІДЖЕННЯ', title: 'Технологізація навчального процесу з математики: історичний аспект', venue: '«Наумовські читання» · XXIII конференція', authors: 'Тамара Дейніченко, Данило Іванов та ін.', tone: 'cyan' },
]

const stats = [
  ['04', 'курс навчання'], ['05', 'наукових робіт у портфоліо'], ['03', 'наукові напрями'], ['01', 'мета — робити освіту сильнішою'],
]

export default function Page() {
  const [activeFilter, setActiveFilter] = useState('Усі роботи')
  const [menuOpen, setMenuOpen] = useState(false)
  const filters = ['Усі роботи', '2026', '2025']
  const visibleWorks = useMemo(() => activeFilter === 'Усі роботи' ? works : works.filter((work) => work.year === activeFilter), [activeFilter])

  return (
    <main className="site-shell">
      <nav className="nav-wrap" aria-label="Основна навігація">
        <a className="brand" href="#top" aria-label="На головну"><span>DI</span><small>АКАДЕМІЧНЕ<br />ПОРТФОЛІО</small></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}>{menuOpen ? <X /> : <Menu />}</button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>Про мене</a><a href="#works" onClick={() => setMenuOpen(false)}>Дослідження</a><a href="#path" onClick={() => setMenuOpen(false)}>Траєкторія</a>
          <a className="nav-contact" href="mailto:danilo.ivanov@example.com" onClick={() => setMenuOpen(false)}>Зв’язатися <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <section className="hero section-pad" id="top">
        <div className="hero-copy"><p className="eyebrow"><span className="pulse-dot" /> МОЛОДИЙ ДОСЛІДНИК · ХАРКІВ · 2026</p><h1>Данило<br /><em>Іванов</em></h1><p className="hero-lead">Навчаюсь, досліджую, пояснюю складне простими словами. Математика для мене — не лише формули, а спосіб бачити закономірності й створювати краще майбутнє для освіти.</p><div className="hero-actions"><a className="button button-primary" href="#works">Дивитися дослідження <ArrowUpRight size={17} /></a><a className="text-link" href="#about">Моя історія <ChevronRight size={16} /></a></div></div>
        <div className="hero-card"><div className="card-top"><span>PROFILE / 04</span><span>2026</span></div><div className="monogram">Д<span>І</span></div><div className="card-bottom"><span>Математика<br />× освіта<br />× технології</span><span className="card-arrow">↗</span></div></div>
      </section>

      <section className="stats section-pad" aria-label="Ключові показники">{stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

      <section className="intro section-pad" id="about"><div className="section-kicker">01 / ПРО МЕНЕ</div><div className="intro-grid"><h2>Від студента<br />до <span>дослідника.</span></h2><div><p className="large-copy">Я — Данило Іванов, студент 4 курсу факультету математики, інформатики та природничої освіти ХНПУ імені Г. С. Сковороди.</p><p>Мій університетський шлях — це постійний рух між теорією та практикою. Я досліджую, як математика, цифрові інструменти й сильна педагогіка можуть працювати разом, щоб навчання ставало живим, зрозумілим і по-справжньому цікавим.</p></div></div></section>

      <section className="works section-pad" id="works"><div className="works-head"><div><div className="section-kicker">02 / ДОСЛІДЖЕННЯ</div><h2>Роботи, якими<br /><span>хочеться ділитися.</span></h2></div><div className="filter-row" role="group" aria-label="Фільтр робіт">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div><div className="work-list">{visibleWorks.map((work, index) => <article className={`work-row ${work.tone}`} key={work.title}><span className="work-number">0{index + 1}</span><div className="work-main"><div className="work-meta"><span>{work.type}</span><span>{work.year}</span></div><h3>{work.title}</h3><p>{work.venue}</p><small>{work.authors}</small></div><a href="#contact" className="round-arrow" aria-label={`Детальніше: ${work.title}`}><ArrowUpRight size={20} /></a></article>)}</div></section>

      <section className="path section-pad" id="path"><div className="section-kicker">03 / ТРАЄКТОРІЯ</div><div className="path-grid"><h2>Не просто<br /><span>вчуся.</span> Розвиваю.</h2><div className="timeline"><div className="timeline-item"><b>2022 — зараз</b><span>ХНПУ ім. Г. С. Сковороди</span><p>Факультет математики, інформатики та природничої освіти · бакалаврат</p></div><div className="timeline-item"><b>2025 — зараз</b><span>Наукова робота</span><p>Тези, доповіді та спільні дослідження на конференціях університету й молодих учених.</p></div><div className="timeline-item"><b>Далі — більше</b><span>Освіта, що працює</span><p>Поглиблюю дослідження на перетині математики, цифрових технологій та методики навчання.</p></div></div></div></section>

      <footer className="footer section-pad" id="contact"><div><p className="eyebrow">ГОТОВИЙ ДО НОВИХ ІДЕЙ</p><h2>Поговоримо<br /><em>про науку?</em></h2></div><a className="button button-primary" href="mailto:danilo.ivanov@example.com">Написати мені <ArrowUpRight size={17} /></a><div className="footer-bottom"><span>© 2026 Данило Іванов</span><span>ХНПУ · Харків, Україна</span><span><BookOpen size={14} /> Academic portfolio</span></div></footer>
    </main>
  )
}
