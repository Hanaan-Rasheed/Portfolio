import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Download, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import scholarHubImage from "@/assets/scholarhub.jpg";
import fitnessImage from "@/assets/level-up-fitness.jpg";
import cvAsset from "@/assets/HanaanRasheed_CV.pdf.asset.json";
import resumePreview from "@/assets/hanaan-resume-preview.jpg.asset.json";
import oracleAiCertificate from "@/assets/oracle-ai-certificate.jpg.asset.json";
import oracleDatabaseCertificate from "@/assets/oracle-database-certificate.jpg.asset.json";
import infosysDbmsCertificate from "@/assets/dbms-infosys-certificate.jpg.asset.json";
import infosysCppCertificate from "@/assets/cpp-infosys-certificate.jpg.asset.json";
import timeManagementCertificate from "@/assets/effective-time-management-certificate.png.asset.json";
import cyberSmartCertificate from "@/assets/cyber-smart-certificate.jpeg.asset.json";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hanaan Rasheed T — Software Developer Portfolio" },
      { name: "description", content: "Explore Hanaan Rasheed T's software projects, technical skills, training, education, and certifications." },
      { property: "og:title", content: "Hanaan Rasheed T — Software Developer Portfolio" },
      { property: "og:description", content: "A computer science student building responsive web experiences and AI-assisted products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  { title: "Languages", items: ["Python", "C", "C++", "SQL"] },
  { title: "Web", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js"] },
  { title: "Foundations & tools", items: ["Data Structures & Algorithms", "Oracle Cloud", "Git", "GitHub", "Code Tantra"] },
];

const certifications = [
  { name: "Oracle Cloud Infrastructure Certified AI Foundations Associate", issuer: "Oracle University", date: "Sep 2026", image: oracleAiCertificate.url },
  { name: "Oracle AI Database Certified Foundations Associate", issuer: "Oracle University", date: "Sep 2026", image: oracleDatabaseCertificate.url },
  { name: "Database Management System Part - 1", issuer: "Infosys Springboard", date: "Aug 2026", image: infosysDbmsCertificate.url },
  { name: "Programming Using C++", issuer: "Infosys Springboard", date: "Oct 2025", image: infosysCppCertificate.url },
  { name: "Effective Time Management", issuer: "Master Union", date: "Oct 2024", image: timeManagementCertificate.url },
  { name: "Cyber Smart", issuer: "WNS Cares Foundation", date: "Sep 2025", image: cyberSmartCertificate.url },
];

function Portfolio() {
  return (
    <main className="portfolio-bg relative min-h-screen overflow-hidden text-ink">
      <div className="relative mx-auto max-w-6xl px-5 py-7 sm:px-8 sm:py-10">
        <header className="flex items-center justify-between gap-4">
          <a href="#about" className="flex items-center gap-3" aria-label="Hanaan Rasheed T, home">
            <span className="glass-control grid size-10 place-items-center rounded-xl font-display text-lg">HR</span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold">Hanaan Rasheed T</span>
              <span className="block text-[11px] text-slate">Software Developer</span>
            </span>
          </a>
          <nav aria-label="Main navigation" className="glass-control hidden items-center gap-1 rounded-full p-1 md:flex">
            {[["About", "#about"], ["Work", "#work"], ["Skills", "#skills"], ["Journey", "#education"], ["Certificates", "#certifications"], ["Résumé", "#resume"]].map(([label, href]) => (
              <a key={href} href={href} className="rounded-full px-4 py-2 text-xs font-medium text-slate transition-colors hover:text-ink">{label}</a>
            ))}
            <a href="#contact" className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-primary-foreground">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={cvAsset.url} download="HanaanRasheed_CV.pdf" className="glass-control inline-flex size-10 items-center justify-center rounded-full text-ink md:hidden" aria-label="Download CV">
              <Download size={16} />
            </a>
          </div>
        </header>

        <section id="about" className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-panel reveal relative overflow-hidden rounded-[2rem] p-7 sm:p-10">
            <div className="absolute right-7 top-7 size-20 rounded-full border border-border bg-mist/60" />
            <p className="glass-control relative inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-sea">
              <MapPin size={12} /> Malappuram, Kerala
            </p>
            <h1 className="relative mt-6 max-w-2xl font-display text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">Hanaan<br className="hidden sm:block" /> Rasheed<span className="text-sea">.</span></h1>
            <p className="relative mt-5 max-w-xl text-[15px] leading-7 text-slate">Computer Science and Engineering student building responsive web experiences and AI-assisted products that turn practical problems into clear, useful tools.</p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5">View my work <ArrowDown size={15} /></a>
              <a href={cvAsset.url} download="HanaanRasheed_CV.pdf" className="glass-control inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-glass-strong"><Download size={15} /> Download CV</a>
            </div>
          </div>

          <aside className="glass-panel reveal flex flex-col overflow-hidden rounded-[2rem]" style={{ animationDelay: "100ms" }}>
            <div className="p-6">
              <div className="flex items-center justify-between gap-3"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate">Currently</p><span className="rounded-full border border-sea-soft bg-glass-strong px-3 py-1 text-[11px] font-medium text-sea">B.Tech CSE</span></div>
              <p className="mt-5 text-sm font-semibold">Lovely Professional University</p>
              <p className="mt-1 text-xs text-slate">Jalandhar, Punjab · Aug 2024 — Present</p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate">Key skills</p>
                <div className="mt-3 flex flex-wrap gap-2">{["Python", "C++", "SQL", "React.js", "Node.js"].map((skill) => <span key={skill} className="rounded-full border border-border bg-glass-strong px-3 py-1.5 text-xs font-medium">{skill}</span>)}</div>
              </div>
            </div>
            <div className="mt-auto border-t border-border bg-glass px-6 py-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate">Focus</p>
              <p className="mt-2 text-sm leading-6">Full-stack development, algorithms, cloud, and database fundamentals.</p>
            </div>
          </aside>
        </section>

        <section id="work" className="mt-20 scroll-mt-8">
          <SectionHeading title="Featured work" note="Two projects, two practical problems" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ProjectCard number="01" category="AI · Discovery" image={scholarHubImage} title="ScholarHub — India Scholarships" date="May 2026" description="A scholarship discovery and management platform helping Indian students find, compare, check eligibility, and track applications, with AI-based personalized matching." tags={["React.js", "Node.js", "JavaScript", "AI/ML"]} />
            <ProjectCard number="02" category="Responsive · Fitness" image={fitnessImage} title="Level Up Fitness" date="Oct 2024" description="A responsive fitness website with a clean, mobile-friendly layout and JavaScript-driven interactions, transitions, and hover effects." tags={["HTML5", "CSS3", "JavaScript", "Responsive Design"]} />
          </div>
        </section>

        <section id="skills" className="glass-panel mt-20 scroll-mt-8 rounded-[2rem] p-7 sm:p-9">
          <SectionHeading title="Toolkit" note="Languages · frameworks · cloud" />
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {skills.map((group) => <div key={group.title} className="rounded-2xl border border-border bg-glass p-5"><p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate">{group.title}</p><div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full border border-border bg-glass-strong px-3 py-1.5 text-xs font-medium">{item}</span>)}</div></div>)}
          </div>
        </section>

        <section id="education" className="mt-20 scroll-mt-8">
          <SectionHeading title="Learning journey" note="Education · training · credentials" />
          <div className="mt-6">
            <div className="glass-panel rounded-[2rem] p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate">Education & training</p>
              <TimelineItem year="2024 — Present" title="B.Tech · Computer Science and Engineering" detail="Lovely Professional University, Jalandhar, Punjab" />
              <TimelineItem year="Aug 2026 — Present" title="Data Structures & Algorithms using C++" detail="Summer Internship, LPU" />
              <TimelineItem year="2021 — 2023" title="Higher Secondary Education · 92.5%" detail="P.K.M.M.H.S School, Edarikode" />
              <TimelineItem year="2020 — 2021" title="Secondary Education · 98.9%" detail="P.K.M.M.H.S School, Edarikode" last />
            </div>
          </div>
        </section>

        <section id="certifications" className="mt-20 scroll-mt-8">
          <SectionHeading title="Certifications" note="Selected certificates · 2024 — 2026" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {certifications.map((certificate) => (
              <article key={certificate.name} className="glass-panel group overflow-hidden rounded-[1.75rem] p-4 sm:p-5">
                <div className="overflow-hidden rounded-2xl border border-border bg-mist">
                  <img src={certificate.image} alt={`${certificate.name} certificate awarded to Hanaan Rasheed`} loading="lazy" className="aspect-[1.414/1] w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]" />
                </div>
                <div className="flex items-start justify-between gap-4 px-1 pb-1 pt-4">
                  <div><h3 className="text-sm font-semibold leading-5">{certificate.name}</h3><p className="mt-1 text-xs text-slate">{certificate.issuer}</p></div>
                  <span className="shrink-0 rounded-full border border-border bg-glass-strong px-3 py-1 text-[11px] font-medium text-sea">{certificate.date}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-border bg-glass px-5 py-4 text-sm text-slate">Ethical Hacking — SWAYAM is currently in progress.</div>
        </section>

        <section id="resume" className="mt-20 scroll-mt-8">
          <SectionHeading title="Résumé" note="Education · projects · skills · credentials" />
          <div className="glass-panel mt-6 grid gap-7 overflow-hidden rounded-[2rem] p-5 sm:p-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div className="overflow-hidden rounded-2xl border border-border bg-mist shadow-lg">
              <img src={resumePreview.url} alt="Preview of Hanaan Rasheed's résumé" loading="lazy" className="aspect-[8.5/11] w-full object-cover object-top" />
            </div>
            <div className="px-1 py-2 sm:px-3">
              <span className="glass-control inline-flex size-11 items-center justify-center rounded-full text-sea"><FileText size={19} /></span>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-sea">Curriculum vitae</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">The complete picture.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate">A concise overview of my technical skills, featured projects, training, certifications, and academic journey.</p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a href={cvAsset.url} download="HanaanRasheed_CV.pdf" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"><Download size={16} /> Download résumé</a>
                <span className="text-xs text-slate">PDF · One page</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="glass-panel relative mt-20 overflow-hidden rounded-[2rem] p-7 sm:p-10">
          <div className="absolute -right-10 -top-12 size-44 rounded-full bg-ice/60 blur-2xl" />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-sea">Let’s connect</p><h2 className="mt-3 font-display text-4xl">Build something useful.</h2><p className="mt-3 max-w-lg text-[15px] leading-6 text-slate">Interested in software development, technical collaboration, and opportunities to keep learning through real projects.</p></div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:hanaanrasheed00@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-primary-foreground"><Mail size={16} /> Email</a>
              <a href="https://linkedin.com/in/hanaan-rasheed" target="_blank" rel="noreferrer" className="glass-control inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"><Linkedin size={16} /> LinkedIn</a>
              <a href="https://github.com/Hanaan-Rasheed" target="_blank" rel="noreferrer" className="glass-control inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"><Github size={16} /> GitHub</a>
            </div>
          </div>
        </section>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border py-7 text-xs text-slate sm:flex-row"><p>© 2026 Hanaan Rasheed T</p><a href="#about" className="inline-flex items-center gap-1 font-medium text-ink">Back to top <ArrowUpRight size={13} /></a></footer>
      </div>
    </main>
  );
}

function SectionHeading({ title, note }: { title: string; note: string }) {
  return <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end"><h2 className="font-display text-3xl sm:text-4xl">{title}</h2><p className="text-xs text-slate">{note}</p></div>;
}

function ProjectCard({ number, category, image, title, date, description, tags }: { number: string; category: string; image: string; title: string; date: string; description: string; tags: string[] }) {
  return <article className="glass-panel group rounded-[1.75rem] p-5 sm:p-6"><div className="flex items-center justify-between"><span className="glass-control rounded-full px-3 py-1 text-[11px] font-medium text-slate">{category}</span><span className="text-xs font-semibold text-sea">{number}</span></div><div className="mt-5 overflow-hidden rounded-2xl bg-mist"><img src={image} alt={`${title} interface preview`} loading="lazy" width={1024} height={656} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" /></div><div className="mt-5 flex items-start justify-between gap-4"><h3 className="font-display text-2xl font-semibold">{title}</h3><span className="shrink-0 text-xs text-slate">{date}</span></div><p className="mt-3 text-sm leading-6 text-slate">{description}</p><div className="mt-4 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-glass-strong px-3 py-1 text-[11px] font-medium text-slate">{tag}</span>)}</div></article>;
}

function TimelineItem({ year, title, detail, last = false }: { year: string; title: string; detail: string; last?: boolean }) {
  return <div className="relative mt-5 pl-6"><span className="absolute left-0 top-1 size-2.5 rounded-full bg-sea ring-4 ring-sea-soft" />{!last && <span className="absolute left-[4px] top-4 h-[calc(100%+1.25rem)] w-px bg-sea-soft" />}<p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-sea">{year}</p><h3 className="mt-1 text-sm font-semibold leading-5">{title}</h3><p className="mt-1 text-xs leading-5 text-slate">{detail}</p></div>;
}