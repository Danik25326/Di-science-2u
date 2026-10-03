'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, BookOpen, ChevronRight, Menu, X } from 'lucide-react'

type Locale = 'uk' | 'en' | 'ru' | 'pl' | 'de' | 'fr' | 'es' | 'pt' | 'ja' | 'zh'

const languageOptions: { code: Locale; short: string; name: string; native: string }[] = [
  { code: 'en', short: 'EN', name: 'English', native: 'English' },
  { code: 'uk', short: 'UA', name: 'Ukrainian', native: 'Українська' },
  { code: 'ru', short: 'RU', name: 'Russian', native: 'Русский' },
  { code: 'pl', short: 'PL', name: 'Polish', native: 'Polski' },
  { code: 'de', short: 'DE', name: 'German', native: 'Deutsch' },
  { code: 'fr', short: 'FR', name: 'French', native: 'Français' },
  { code: 'es', short: 'ES', name: 'Spanish', native: 'Español' },
  { code: 'pt', short: 'BR', name: 'Portuguese', native: 'Português' },
  { code: 'ja', short: 'JP', name: 'Japanese', native: '日本語' },
  { code: 'zh', short: 'CN', name: 'Chinese', native: '中文' },
]

const personNames: Record<Locale, { first: string; last: string }> = {
  uk: { first: 'Данило', last: 'Іванов' }, en: { first: 'Danylo', last: 'Ivanov' }, ru: { first: 'Данило', last: 'Иванов' },
  pl: { first: 'Danyło', last: 'Iwanow' }, de: { first: 'Danylo', last: 'Iwanow' }, fr: { first: 'Danylo', last: 'Ivanov' },
  es: { first: 'Danylo', last: 'Ivanov' }, pt: { first: 'Danylo', last: 'Ivanov' }, ja: { first: 'ダニーロ', last: 'イワノフ' }, zh: { first: '达尼洛', last: '伊万诺夫' },
}

const copy = {
  uk: {
    nav: ['Про мене', 'Дослідження', 'Траєкторія'], contact: 'Зв’язатися',
    label: 'МОЛОДИЙ ДОСЛІДНИК · ХАРКІВ · 2026',
    lead: 'Навчаюсь, досліджую, пояснюю складне простими словами. Математика для мене — не лише формули, а спосіб бачити закономірності й створювати краще майбутнє для освіти.',
    view: 'Дивитися дослідження', story: 'Моя історія', profile: 'АКАДЕМІЧНЕ', profile2: 'ПОРТФОЛІО',
    card: 'Математика\n× освіта\n× технології',
    stats: [['04', 'курс навчання'], ['05', 'наукових робіт у портфоліо'], ['03', 'наукові напрями'], ['01', 'мета — робити освіту сильнішою']],
    aboutKicker: '01 / ПРО МЕНЕ', aboutTitle: <>Від студента<br />до <span>дослідника.</span></>,
    aboutLead: 'Я — Данило Іванов, студент 4 курсу факультету математики, інформатики та природничої освіти ХНПУ імені Г. С. Сковороди.',
    aboutText: 'Мій університетський шлях — це постійний рух між теорією та практикою. Я досліджую, як математика, цифрові інструменти й сильна педагогіка можуть працювати разом, щоб навчання ставало живим, зрозумілим і по-справжньому цікавим.',
    worksKicker: '02 / ДОСЛІДЖЕННЯ', worksTitle: <>Роботи, якими<br /><span>хочеться ділитися.</span></>, all: 'Усі роботи',
    pathKicker: '03 / ТРАЄКТОРІЯ', pathTitle: <>Не просто<br /><span>вчуся.</span> Розвиваю.</>,
    degree: 'Факультет математики, інформатики та природничої освіти · бакалаврат', research: 'Тези, доповіді та спільні дослідження на конференціях університету й молодих учених.', next: 'Поглиблюю дослідження на перетині математики, цифрових технологій та методики навчання.',
    footerEyebrow: 'ГОТОВИЙ ДО НОВИХ ІДЕЙ', footerTitle: <>Поговоримо<br /><em>про науку?</em></>, write: 'Написати мені', ready: 'Детальніше', university: 'ХНПУ · Харків, Україна', language: 'Мова', close: 'Закрити меню', open: 'Відкрити меню'
  },
  en: {
    nav: ['About me', 'Research', 'Trajectory'], contact: 'Get in touch',
    label: 'YOUNG RESEARCHER · KHARKIV · 2026',
    lead: 'I learn, research, and explain complex ideas simply. Mathematics is more than formulas to me — it is a way to see patterns and build a stronger future for education.',
    view: 'Explore research', story: 'My story', profile: 'ACADEMIC', profile2: 'PORTFOLIO', card: 'Mathematics\n× education\n× technology',
    stats: [['04', 'year of study'], ['05', 'research works'], ['03', 'research directions'], ['01', 'goal — stronger education']],
    aboutKicker: '01 / ABOUT ME', aboutTitle: <>From student<br />to <span>researcher.</span></>, aboutLead: 'I am Danylo Ivanov, a fourth-year student at the Faculty of Mathematics, Informatics and Natural Sciences at H. S. Skovoroda Kharkiv National Pedagogical University.', aboutText: 'My university journey is a constant movement between theory and practice. I explore how mathematics, digital tools, and strong pedagogy can work together to make learning more alive, clear, and genuinely engaging.', worksKicker: '02 / RESEARCH', worksTitle: <>Work worth<br /><span>sharing.</span></>, all: 'All works', pathKicker: '03 / TRAJECTORY', pathTitle: <>I do not just<br /><span>learn.</span> I grow.</>, degree: 'Faculty of Mathematics, Informatics and Natural Sciences · Bachelor’s degree', research: 'Theses, talks, and collaborative research presented at university and young researchers’ conferences.', next: 'Deepening research at the intersection of mathematics, digital technologies, and teaching methodology.', footerEyebrow: 'OPEN TO NEW IDEAS', footerTitle: <>Let&apos;s talk<br /><em>about science.</em></>, write: 'Write to me', ready: 'Read more', university: 'KhNPU · Kharkiv, Ukraine', language: 'Language', close: 'Close menu', open: 'Open menu'
  }
} as const

const localizedCopy = { ...copy, ru: copy.en, pl: copy.en, de: copy.en, fr: copy.en, es: copy.en, pt: copy.en, ja: copy.en, zh: copy.en } as Record<Locale, (typeof copy)['uk']>

const works = [
  { year: '2026', type: { uk: 'STORYTELLING · ЕСЕ', en: 'STORYTELLING · ESSAY' }, title: { uk: 'Книга, яка вплинула на моє професійне та наукове становлення', en: 'A book that shaped my professional and scientific growth' }, venue: { uk: '«Наука та освіта в історіях» · ХНПУ', en: '“Science and education in stories” · KhNPU' }, authors: 'Данило Іванов, Анна Крисевич', tone: 'cyan' },
  { year: '2025', type: { uk: 'ТЕЗИ · ФІЗИКА', en: 'ABSTRACTS · PHYSICS' }, title: { uk: 'Елементи теорії поля в задачах фізики', en: 'Elements of field theory in physics problems' }, venue: { uk: '«Інноваційні педагогічні технології в цифровій школі»', en: '“Innovative pedagogical technologies in the digital school”' }, authors: 'Данило Іванов, Олександр Чібісов', tone: 'lime' },
  { year: '2025', type: { uk: 'НАУКОВА ПРАЦЯ', en: 'RESEARCH PAPER' }, title: { uk: 'Формування графічних умінь учнів у навчанні математики', en: 'Developing students’ graphic skills in mathematics education' }, venue: { uk: '«Наумовські читання» · XXIII конференція', en: '“Naumov Readings” · XXIII conference' }, authors: 'Тамара Дейніченко, Данило Іванов, Іван Хоменко', tone: 'violet' },
  { year: '2025', type: { uk: 'НАУКОВА ПРАЦЯ', en: 'RESEARCH PAPER' }, title: { uk: 'Застосування комп’ютера в навчальному процесі з математики', en: 'Using computers in the mathematics learning process' }, venue: { uk: '«Наумовські читання» · XXIII конференція', en: '“Naumov Readings” · XXIII conference' }, authors: 'Тамара Дейніченко, Данило Іванов та ін.', tone: 'orange' },
  { year: '2025', type: { uk: 'ДОСЛІДЖЕННЯ', en: 'RESEARCH' }, title: { uk: 'Технологізація навчального процесу з математики: історичний аспект', en: 'Technologization of mathematics education: a historical perspective' }, venue: { uk: '«Наумовські читання» · XXIII конференція', en: '“Naumov Readings” · XXIII conference' }, authors: 'Тамара Дейніченко, Данило Іванов та ін.', tone: 'cyan' },
]

export default function Page() {
  const [locale, setLocale] = useState<Locale>('uk'); const [activeFilter, setActiveFilter] = useState('all'); const [menuOpen, setMenuOpen] = useState(false); const [languageOpen, setLanguageOpen] = useState(false)
  const t = localizedCopy[locale]; const person = personNames[locale]; const filters = ['all', '2026', '2025']; const visibleWorks = useMemo(() => activeFilter === 'all' ? works : works.filter((work) => work.year === activeFilter), [activeFilter])
  return <main className="site-shell">
    <nav className="nav-wrap" aria-label="Primary navigation"><a className="brand" href="#top" aria-label="Home"><span>DI</span><small>{t.profile}<br />{t.profile2}</small></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.close : t.open}>{menuOpen ? <X /> : <Menu />}</button><div className={`nav-links ${menuOpen ? 'is-open' : ''}`}><a href="#about" onClick={() => setMenuOpen(false)}>{t.nav[0]}</a><a href="#works" onClick={() => setMenuOpen(false)}>{t.nav[1]}</a><a href="#path" onClick={() => setMenuOpen(false)}>{t.nav[2]}</a><button className="language-switch" onClick={() => setLanguageOpen(!languageOpen)} aria-expanded={languageOpen} aria-haspopup="dialog" aria-label={t.language}><span className="language-current">{languageOptions.find((item) => item.code === locale)?.short}</span><span>⌄</span></button><a className="nav-contact" href="mailto:danilo.ivanov@example.com" onClick={() => setMenuOpen(false)}>{t.contact} <ArrowUpRight /></a></div></nav>
    {languageOpen && <div className="language-overlay" role="presentation" onClick={() => setLanguageOpen(false)}><section className="language-panel" role="dialog" aria-modal="true" aria-labelledby="language-title" onClick={(event) => event.stopPropagation()}><div className="language-panel-head"><div><p className="section-kicker">SELECT LANGUAGE</p><h2 id="language-title">{t.language}</h2></div><button className="language-close" onClick={() => setLanguageOpen(false)} aria-label={t.close}><X /></button></div><div className="language-grid">{languageOptions.map((option) => <button key={option.code} className={`language-option ${locale === option.code ? 'is-selected' : ''}`} onClick={() => { setLocale(option.code); setLanguageOpen(false) }}><strong>{option.short}</strong><span><b>{option.name}</b><small>{option.native}</small></span></button>)}</div></section></div>}
    <section className="hero section-pad" id="top"><div className="hero-copy"><p className="eyebrow"><span className="pulse-dot" /> {t.label}</p><h1>{person.first}<br /><em>{person.last}</em></h1><p className="hero-lead">{t.lead}</p><div className="hero-actions"><a className="button button-primary" href="#works">{t.view} <ArrowUpRight /></a><a className="text-link" href="#about">{t.story} <ChevronRight /></a></div></div><div className="hero-card"><div className="card-top"><span>PROFILE / 04</span><span>2026</span></div><div className="monogram">Д<span>І</span></div><div className="card-bottom"><span>{t.card.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</span><span className="card-arrow">↗</span></div></div></section>
    <section className="stats section-pad" aria-label="Key statistics">{t.stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>
    <section className="intro section-pad" id="about"><div className="section-kicker">{t.aboutKicker}</div><div className="intro-grid"><h2>{t.aboutTitle}</h2><div><p className="large-copy">{t.aboutLead}</p><p>{t.aboutText}</p></div></div></section>
    <section className="works section-pad" id="works"><div className="works-head"><div><div className="section-kicker">{t.worksKicker}</div><h2>{t.worksTitle}</h2></div><div className="filter-row" role="group" aria-label="Filter works">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>{filter === 'all' ? t.all : filter}</button>)}</div></div><div className="work-list">{visibleWorks.map((work, index) => <article className={`work-row ${work.tone}`} key={work.title.uk}><span className="work-number">0{index + 1}</span><div className="work-main"><div className="work-meta"><span>{work.type[locale] ?? work.type.en}</span><span>{work.year}</span></div><h3>{work.title[locale] ?? work.title.en}</h3><p>{work.venue[locale] ?? work.venue.en}</p><small>{work.authors}</small></div><a href="#contact" className="round-arrow" aria-label={`${t.ready}: ${work.title[locale] ?? work.title.en}`}><ArrowUpRight /></a></article>)}</div></section>
    <section className="path section-pad" id="path"><div className="section-kicker">{t.pathKicker}</div><div className="path-grid"><h2>{t.pathTitle}</h2><div className="timeline"><div className="timeline-item"><b>2022 — now</b><span>ХНПУ ім. Г. С. Сковороди</span><p>{t.degree}</p></div><div className="timeline-item"><b>2025 — now</b><span>{locale === 'uk' ? 'Наукова робота' : 'Research work'}</span><p>{t.research}</p></div><div className="timeline-item"><b>{locale === 'uk' ? 'Далі — більше' : 'Next — more'}</b><span>{locale === 'uk' ? 'Освіта, що працює' : 'Education that works'}</span><p>{t.next}</p></div></div></div></section>
    <footer className="footer section-pad" id="contact"><div><p className="eyebrow">{t.footerEyebrow}</p><h2>{t.footerTitle}</h2></div><a className="button button-primary" href="mailto:danilo.ivanov@example.com">{t.write} <ArrowUpRight /></a><div className="footer-bottom"><span>© 2026 {person.first} {person.last}</span><span>{t.university}</span><span><BookOpen /> Academic portfolio</span></div></footer>
  </main>
}
