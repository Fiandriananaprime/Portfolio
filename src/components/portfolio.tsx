"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  ChevronRight,
  CircleDot,
  Code2,
  Database,
  Globe2,
  Layers3,
  Mail,
  Menu,
  Network,
  Server,
  Terminal,
  X,
} from "lucide-react";

const techGroups = [
  {
    label: "Frontend",
    icon: Globe2,
    items: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind"],
  },
  {
    label: "Backend",
    icon: Server,
    items: ["Java", "Spring Boot", "Node.js", "Fastify"],
  },
  {
    label: "Data",
    icon: Database,
    items: ["PostgreSQL", "SQL", "Redis", "Prisma", "JPA / Hibernate"],
  },
  {
    label: "Architecture",
    icon: Network,
    items: ["Microservices", "REST", "gRPC", "RabbitMQ", "WebSockets"],
  },
  {
    label: "DevOps",
    icon: Terminal,
    items: ["Docker", "Docker Compose", "Git", "GitHub"],
  },
  {
    label: "Learning",
    icon: BrainCircuit,
    items: ["Python", "FastAPI", "Machine Learning", "AI"],
  },
];

const services = [
  { name: "Auth", detail: "Identity · Sessions", color: "violet" },
  { name: "User", detail: "Profiles · Addresses", color: "blue" },
  { name: "Product", detail: "Products · Categories", color: "green" },
  { name: "Store", detail: "Shops · Sellers", color: "orange" },
  { name: "Order", detail: "Checkout · State", color: "amber" },
  { name: "Payment", detail: "Transactions", color: "pink" },
  { name: "Delivery", detail: "Shipping · Tracking", color: "red" },
  { name: "Admin", detail: "Management · Moderation", color: "purple" },
  { name: "Notification", detail: "Email · SMS · Push", color: "cyan" },
  { name: "Analytics", detail: "Events · Insights · ML", color: "indigo" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span className="label-line" />
      {children}
    </p>
  );
}

function ArchitectureDiagram() {
  const [activeService, setActiveService] = useState("Orders");
  return (
    <div className="architecture-card">
      <div className="architecture-topline">
        <div>
          <span className="status-dot" /> System map{" "}
          <span className="muted">/ NovaMarket</span>
        </div>
        <span className="live-pill">
          <CircleDot /> Interactive
        </span>
      </div>
      <div className="diagram-canvas">
        <div className="diagram-column clients-column">
          <span className="diagram-caption">01 / client layer</span>
          <div className="diagram-node client-node">
            <Code2 />
            <span>
              React applications<small>Storefront · Admin</small>
            </span>
          </div>
          <div className="connector vertical" />
          <div className="diagram-node gateway-node">
            <Layers3 />
            <span>
              API Gateway<small>Routing · Auth · Rate limits</small>
            </span>
          </div>
        </div>
        <div className="diagram-rail" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="diagram-column services-column">
          <span className="diagram-caption">02 / service layer</span>
          <div className="service-grid">
            {services.map((service) => (
              <button
                key={service.name}
                type="button"
                className={`service-node ${service.color} ${activeService === service.name ? "active" : ""}`}
                onClick={() => setActiveService(service.name)}
                aria-pressed={activeService === service.name}
              >
                <span className="service-icon">
                  <span />
                </span>
                <span>
                  {service.name}
                  <small>{service.detail}</small>
                </span>
                <ChevronRight />
              </button>
            ))}
          </div>
        </div>
        <div className="diagram-rail reverse" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="diagram-column infra-column">
          <span className="diagram-caption">03 / infrastructure</span>
          <div className="infra-stack">
            <div className="infra-node">
              <Database />
              <span>
                PostgreSQL<small>Persistent data</small>
              </span>
            </div>
            <div className="infra-node">
              <span className="redis-mark">R</span>
              <span>
                Redis<small>Cache · Sessions</small>
              </span>
            </div>
            <div className="infra-node">
              <span className="rabbit-mark">◈</span>
              <span>
                RabbitMQ<small>Event broker</small>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="architecture-footer">
        <span>
          <span className="pulse-line" /> Async events &amp; notifications
        </span>
        <span>
          Selected: <strong>{activeService}</strong>
        </span>
      </div>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#work", "Work"],
    ["#stack", "Stack"],
    ["#about", "About"],
    ["#contact", "Contact"],
  ];
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Home">
        <span className="brand-mark">≋</span>
        <span>
          Fiandrianana<span className="brand-accent">.</span>
        </span>
      </a>
      <nav className={open ? "nav-open" : ""}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">
        Let's talk <ArrowUpRight />
      </a>
      <button
        className="menu-toggle"
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export function Portfolio() {
  return (
    <main id="top">
      <Nav />
      <div className="page-shell">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> Based in Madagascar{" "}
              <span className="eyebrow-divider" /> Open to opportunities
            </div>
            <h1>
              Building scalable software,
              <br />
              <em>one system at a time.</em>
            </h1>
            <p className="hero-subtitle">
              Junior Full-Stack Software Engineer focused on{" "}
              <strong>TypeScript, React, Java, Spring Boot</strong> and
              distributed systems.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#work">
                Explore my work <ArrowDownRight />
              </a>
              <a className="text-button" href="mailto:ramamonjisoafiandrianana@gmail.com">
                Get in touch <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="orbit-art">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <span className="orbit-core" />
              <span className="orbit-tag tag-top">BUILD / LEARN</span>
              <span className="orbit-tag tag-bottom">SYSTEMS THINKING</span>
            </div>
            <p className="hero-note">
              <span>01</span> Currently building with intention — learning how
              systems behave when they grow.
            </p>
          </div>
        </section>
        <div className="scroll-cue">
          <span>Scroll to explore</span>
          <span className="scroll-line" />
        </div>
        <section className="intro-section" id="about">
          <div>
            <SectionLabel>Profile</SectionLabel>
            <h2>
              Early in the journey.
              <br />
              <span>Serious about the craft.</span>
            </h2>
          </div>
          <div className="intro-text">
            <p>
              I'm a first-year higher-education student in Madagascar, building
              a foundation in software engineering through hands-on systems
              work.
            </p>
            <p>
              Rather than collecting tools, I'm learning how they fit together —
              from a React interface to the services, data, and events behind
              it.
            </p>
            <div className="intro-meta">
              <span>
                <strong>{Math.floor((Date.now() - new Date("2025-09-15").getTime()) / 31557600000)}</strong> year of higher education
              </span>
              <span>
                <strong>♾</strong> questions to explore
              </span>
            </div>
          </div>
        </section>
        <section className="work-section" id="work">
          <div className="section-heading">
            <div>
              <SectionLabel>Selected work</SectionLabel>
              <h2>
                One project.
                <br />
                <span>Many moving parts.</span>
              </h2>
            </div>
            <p>
              The best way to understand how I think is to look at what I'm
              building. NovaMarket is my main technical proving ground.
            </p>
          </div>
          <article className="project-feature">
            <div className="project-overline">
              <span>01 / Featured project</span>
              <span className="project-status">
                <span /> In active development
              </span>
            </div>
            <div className="project-heading">
              <div>
                <h3>
                  Nova<span>Market</span>
                </h3>
                <p>
                  Production-oriented e-commerce platform designed as a
                  microservices architecture.
                </p>
              </div>
              <a
                href="#contact"
                className="circle-arrow"
                aria-label="Discuss NovaMarket"
              >
                <ArrowUpRight />
              </a>
            </div>
            <ArchitectureDiagram />
            <div className="project-bottom">
              <div>
                <span className="detail-label">Why it matters</span>
                <p>
                  NovaMarket is where I practice the decisions that turn a
                  working feature into a resilient system: service boundaries,
                  asynchronous communication, and reliable data flow.
                </p>
              </div>
              <div className="project-tags">
                <span>Java / Spring Boot</span>
                <span>React / TypeScript</span>
                <span>Docker Compose</span>
                <span>RabbitMQ events</span>
              </div>
            </div>
          </article>
          <div className="other-projects">
            <div className="other-header">
              <SectionLabel>Also exploring</SectionLabel>
              <span>Small experiments, deliberate practice</span>
            </div>
            <div className="project-list">
              <a className="small-project" href="#contact">
                <span className="small-number">02</span>
                <div>
                  <h4>Service Notes</h4>
                  <p>
                    Documenting patterns in distributed systems, APIs, and
                    backend architecture.
                  </p>
                </div>
                <ArrowUpRight />
              </a>
              <a className="small-project" href="#contact">
                <span className="small-number">03</span>
                <div>
                  <h4>
                    ML playground <span>Learning</span>
                  </h4>
                  <p>
                    Python experiments to understand the foundations behind
                    intelligent systems.
                  </p>
                </div>
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
        <section className="stack-section" id="stack">
          <div className="stack-intro">
            <SectionLabel>Technical stack</SectionLabel>
            <h2>
              Tools are useful.
              <br />
              <span>Understanding is the goal.</span>
            </h2>
            <p>
              A growing toolkit, organized around the kind of systems I want to
              build.
            </p>
          </div>
          <div className="tech-grid">
            {techGroups.map(({ label, icon: Icon, items }) => (
              <div className="tech-group" key={label}>
                <div className="tech-group-title">
                  <Icon />
                  <span>{label}</span>
                </div>
                <div className="tech-items">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="github-section">
          <div className="github-mark">
            <Code2 />
          </div>
          <div>
            <SectionLabel>Open source / GitHub</SectionLabel>
            <h2>See the work in progress.</h2>
            <p>
              Projects, experiments, and notes from the learning loop. Personal
              profile link will be added here.
            </p>
          </div>
          <a
            className="outline-button"
            href="https://github.com/Fiandriananaprime"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub <ArrowUpRight />
          </a>
        </section>
        <section className="contact-section" id="contact">
          <SectionLabel>What's next</SectionLabel>
          <h2>
            Let's build something
            <br />
            <em>worth understanding.</em>
          </h2>
          <p>
            I'm open to internships, collaborations, and conversations about
            backend engineering, distributed systems, and learning in public.
          </p>
          <a className="primary-button" href="mailto:fiandriananaramamonjisoa.com">
            fiandriananaramamonjisoa@example.com <Mail />
          </a>
        </section>
        <footer>
          <div className="brand">
            <span className="brand-mark">≋</span>
            <span>
              Fiandrianana<span className="brand-accent">.</span>
            </span>
          </div>
          <span>© 2026 · Built from Madagascar</span>
          <div className="footer-links">
            <a
              href="https://github.com/Fiandriananaprime"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 />
            </a>
            <a
              href="https://linkedin.com/in/FiandriananaRH"
              target="_blank"
              rel="noreferrer"
            >
              <Globe2 />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Portfolio;
