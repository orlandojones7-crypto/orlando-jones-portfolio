/* Ground truth: Swiss editorial grid from Home_desktop.png. Preserve asymmetry, exact Portuguese labels, quiet motion, and asset slots. */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Plus } from "lucide-react";

const projects = [
  { name: "Mirantes", description: "Produto digital B2B e B2C", type: "Product Design", slug: "mirantes" },
  { name: "Ziett", description: "Plataforma SaaS de comunicação omnicanal", type: "Product Design", slug: "ziett" },
  { name: "Versus Esport", description: "Plataforma digital para eSports, focada em jogadores, competições e comunidade.", type: "Product Design", slug: "versus-esport" },
  { name: "Codepoint", description: "Plataforma para competição de startups", type: "Product Design", slug: "codepoint" },
  { name: "Mirantes Talentlink", description: "Experiência digital para uma feira de emprego.", type: "Product Design", slug: "mirantes-talentlink" },
  { name: "Nazih_Website", description: "Website profissional", type: "Website Design", slug: "nazih-website" },
];

const experiences = [
  ["Mirantes Technologies", "Lead UX/UI Designer", "2025–Now"],
  ["Ohrus", "Product Designer", "2025–Now"],
  ["Statement Management Consulting", "UX/UI Designer", "2022–2023"],
  ["OCASO GROUP, SA", "UX/UI Designer", "2024–2024"],
  ["ALIEN SPACE", "UI Designer", "2019–2022"],
  ["Fisgar", "UX Designer · Freelance", "2023–2023"],
];

const qualifications = [
  ["UX Design", "Certificado pela Design Circuit"],
  ["UI Pro", "Certificado pela Design Circuit"],
  ["Introdução ao Craft", "Certificado pela Design Circuit"],
  ["Design Emocional", "Certificado pelo linkedin"],
  ["Foundations of User Experience (UX) Design", "B2B Sales Representative"],
  ["UX Design for Mobile Developers", "Certificado pela Udemy"],
  ["Design system", "Certificado pela Design Circuit"],
];

const skills = [
  ["Product Design", ["Product Discovery", "UX Research", "User Flows", "Information Architecture", "Usability Testing", "Interaction Design", "Prototyping"]],
  ["UX/UI Design", ["UX Design", "UI Design", "Responsive Design", "Mobile Design", "Wireframing", "High-Fidelity Design", "Accessibility"]],
  ["Design Systems", ["Design Systems", "Design Tokens", "Component Libraries", "Documentation", "Design QA"]],
  ["Colaboração & Liderança", ["Gestão de equipas de design", "Mentoria de designers", "Design Thinking", "Colaboração com Produto e Engenharia", "Handoff e Design QA"]],
  ["Tecnologia", ["HTML/CSS · React · Google Analytics"]],
  ["Ferramentas", ["Figma · FigJam · Jira · Confluence · Notion · Framer · Webflow"]],
];

function Mark({ inverted = false }: { inverted?: boolean }) {
  return <span className={`brand-mark ${inverted ? "brand-mark--inverted" : ""}`} aria-hidden="true"><img src="/I1-642;1604-8277.svg" alt="" /><img src="/I1-642;1604-8278.svg" alt="" /><img src="/I1-642;1604-8279.svg" alt="" /></span>;
}

function Wordmark({ large = false, inverted = false }: { large?: boolean; inverted?: boolean }) {
  return <span className={`wordmark ${large ? "wordmark--large" : ""} ${inverted ? "wordmark--inverted" : ""}`}><strong>ORLANDO</strong><em>JONES</em></span>;
}

function AssetSlot({ className = "", label = "Asset slot", src }: { className?: string; label?: string; src?: string }) {
  return <div className={`asset-slot ${className} ${src ? "asset-slot--image" : ""}`} role="img" aria-label={`${label}${src ? "" : ". A aguardar o asset fornecido pelo utilizador."}`}>{src ? <img src={src} alt={label} loading="eager" /> : <span>{label}</span>}</div>;
}

function Header() {
  return <header className="site-header">
    <a href="#top" className="header-brand" aria-label="Orlando Jones, início"><Mark /><Wordmark /></a>
    <nav aria-label="Navegação principal">
      <a href="#experience">Experiência</a>
      <a href="#projects">Projetos</a>
      <a href="#skills">Perícias</a>
      <a href="#cv">Meu CV</a>
    </nav>
  </header>;
}

function FigmaButton({ children, href }: { children: React.ReactNode; href: string }) {
  return <a href={href} className="figma-button">
    <span className="figma-button__label">{children}</span>
    <i className="figma-button__marker figma-button__marker--tl" aria-hidden="true" />
    <i className="figma-button__marker figma-button__marker--tr" aria-hidden="true" />
    <i className="figma-button__marker figma-button__marker--bl" aria-hidden="true" />
    <i className="figma-button__marker figma-button__marker--br" aria-hidden="true" />
    <i className="figma-button__marker figma-button__marker--tm" aria-hidden="true" />
    <i className="figma-button__marker figma-button__marker--bm" aria-hidden="true" />
    <i className="figma-button__marker figma-button__marker--ml" aria-hidden="true" />
    <i className="figma-button__marker figma-button__marker--mr" aria-hidden="true" />
  </a>;
}

function Hero() {
  return <>
    <section id="top" className="hero-layer" aria-label="Introdução">
      <div className="hero-inner page-width">
        <img className="hero-geometry" src="/1-649.svg" alt="" aria-hidden="true" />
        <div className="hero-title"><span>PRODUCT</span><strong>DESIGN</strong></div>
        <AssetSlot className="hero-portrait" label="Portrait principal" src="/1-643.webp" />
        <div className="hero-copy">
          <div className="hero-info">
            <p>Transformo problemas de negócio em produtos digitais funcionais e fáceis de usar, da pesquisa à prototipagem e entrega para desenvolvimento.</p>
            <a href="#projects" className="text-link">Conheça o meu trabalho</a>
          </div>
          <FigmaButton href="#contact">Vamos trabalhar juntos?</FigmaButton>
          <img className="hero-curve" src="/1-690.svg" alt="" aria-hidden="true" />
        </div>
      </div>
      <a href="#projects" className="scroll-cue" aria-label="Descer para projetos"><span className="scroll-cue__thumb" /></a>
    </section>
    <div className="hero-spacer" aria-hidden="true" />
  </>;
}

function Projects() {
  const [active, setActive] = useState(5);
  const selected = projects[active];
  useEffect(() => {
    const onScroll = () => {
      const items = Array.from(document.querySelectorAll<HTMLElement>(".project-item"));
      if (!items.length) return;
      const center = window.innerHeight * 0.52;
      let closest = 0;
      let distance = Number.POSITIVE_INFINITY;
      items.forEach((item, index) => { const rect = item.getBoundingClientRect(); const next = Math.abs(rect.top + rect.height / 2 - center); if (next < distance) { distance = next; closest = index; } });
      if (distance < window.innerHeight * 0.62) setActive(closest);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <section id="projects" className="section projects-section page-width">
    <div className="section-rule section-rule--heading"><span>PROJETOS</span><span>OBRA SELECCIONADA</span></div>
    <div className="projects-intro"><p>Uma seleção de produtos e experiências digitais que representam a minha forma de pensar, explorar e resolver problemas.</p></div>
    <div className="projects-layout">
      <div className="project-list">
        {projects.map((project, index) => <Link key={project.slug} href={`/projects/${project.slug}`} className={`project-item ${index === active ? "is-active" : ""}`} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)}>
          <span className="project-name">{project.name}</span><span className="project-detail">{project.description}</span><span className="project-type">{project.type}</span><ArrowUpRight size={15} />
        </Link>)}
      </div>
      <Link href={`/projects/${selected.slug}`} className="project-preview" aria-label={`Abrir projeto ${selected.name}`}>
        <AssetSlot label={`${selected.name} preview`} src="/I1-671;1653-3804.webp" />
        <span className="preview-tag"><Plus size={13} /> {selected.name === "Nazih_Website" ? "Nazih Caetano" : selected.name}</span>
      </Link>
    </div>
  </section>;
}

function Experience() {
  return <section id="experience" className="section page-width">
    <div className="section-rule section-rule--heading"><span>EXPERIENCE</span><span>DATA</span></div>
    <div className="split-section experience-layout"><p className="section-lede">Product Designer com experiência em produtos digitais B2B e B2C, atuando entre UX, Produto, Tecnologia e Negócio.</p><div className="experience-table">{experiences.map(([company, role, date]) => <div className="experience-row" tabIndex={0} key={company}><span>{company}</span><span>{role}</span><time>{date}</time><AssetSlot className="hover-logo" label={`${company} logo`} /></div>)}</div></div>
  </section>;
}

function Qualifications() {
  return <section id="qualifications" className="section page-width">
    <div className="section-rule"><span>QUALIFICAÇÕES</span></div>
    <div className="split-section qualification-layout"><p className="section-lede">A minha formação combina experiência prática em Product Design com aprendizagem contínua em UX, UI e Design Systems. Estas qualificações complementam o meu trabalho em produtos digitais e reforçam a minha abordagem centrada no utilizador, na colaboração e na construção de experiências consistentes.</p><div className="qualification-grid">{qualifications.map(([name, detail]) => <div className="qualification-item" key={name}><strong>{name}</strong><span>{detail}</span></div>)}</div></div>
  </section>;
}

function Skills() {
  return <section id="skills" className="section page-width">
    <div className="section-rule"><span>PERÍCIAS</span></div>
    <div className="skills-layout"><AssetSlot className="skill-portrait" label="Fotografia de Orlando" src="/I1-646;1623-1789.webp" /><div className="skills-grid">{skills.map(([name, values]) => <div className="skill-group" key={name as string}><h3>{name as string}</h3>{(values as string[]).map(value => <span key={value}>•&nbsp; {value}</span>)}</div>)}</div></div>
  </section>;
}

const momentAssets = ["/I1-647;1623-2134.webp", "/I1-647;1623-2121.webp", "/I1-647;1623-2123.webp", "/I1-647;1623-2124.webp", "/I1-647;1623-2133.webp", "/I1-647;1623-2135.webp", "/I1-647;1623-2136.webp", "/I1-670;1623-2927.webp", "/I1-670;1623-2928.webp", "/I1-670;1623-2929.webp"];
const moments = Array.from({ length: 20 }, (_, index) => index + 1);
function Moments() {
  const [colorMoment, setColorMoment] = useState<number | null>(null);
  return <section className="section moments-section page-width"><div className="section-rule"><span>COLETÂNIA DE MOMENTOS COMO</span></div><div className="moments-layout"><div className="moment-cluster moment-cluster--left">{moments.slice(0, 10).map((moment, index) => <AssetSlot key={moment} className={`moment moment-${index + 1} ${colorMoment === moment ? "is-color" : ""}`} label={`Momento ${moment}`} src={momentAssets[(moment - 1) % momentAssets.length]} />)}</div><div className="moments-wordmark"><strong>ORLANDO</strong><em>JONES</em></div><div className="moment-cluster moment-cluster--right">{moments.slice(10).map((moment, index) => <AssetSlot key={moment} className={`moment moment-${index + 11} ${colorMoment === moment ? "is-color" : ""}`} label={`Momento ${moment}`} src={momentAssets[(moment - 1) % momentAssets.length]} />)}</div></div><div className="moments-touch" onMouseOver={() => setColorMoment(1)} onFocus={() => setColorMoment(1)} tabIndex={0} aria-label="Mosaico de momentos. Os assets serão fornecidos posteriormente." /></section>;
}

function Footer() {
  return <footer id="contact" className="site-footer"><div className="footer-grid page-width"><img className="footer-monogram" src="/I1-670;1623-3086.svg" alt="" aria-hidden="true" /><Wordmark large inverted /><div className="footer-lower"><div><a className="footer-brand" href="#top"><Mark inverted /><Wordmark inverted /></a><p>Transformando problemas complexos em produtos digitais claros, úteis e escaláveis.</p><small>© 2026 Orlando Jones. Todos os direitos reservados.</small></div><div className="footer-links"><div><strong>NAVEGAÇÃO</strong><a href="#experience">Experiência</a><a href="#projects">Projetos</a><a href="#skills">Perícias</a><a href="#cv">Meu CV</a></div><div><strong>SOCIAL</strong><a href="#linkedin">LinkedIn</a><a href="#instagram">Instagram</a></div></div></div></div></footer>;
}

export default function Home() {
  const [atTop, setAtTop] = useState(true);
  useEffect(() => { const onScroll = () => setAtTop(window.scrollY < 32); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <div className={`portfolio ${atTop ? "is-at-top" : "is-scrolled"}`}><Header /><main><Hero /><div className="content-stack"><Projects /><Experience /><Qualifications /><Skills /><Moments /></div></main><Footer /></div>;
}
