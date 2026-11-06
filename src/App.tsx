import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Reveal from "./components/Reveal";
import ProjectCard from "./components/ProjectCard";
import {
  achievements,
  basicInfo,
  careerInterests,
  education,
  experience,
  experienceHeading,
  experienceNote,
  itInterestsNote,
  personalDescription,
  portfolioTech,
  profile,
  projects,
  skills,
  social,
  strengths,
} from "./data/content";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />

      <main id="main">
        <Hero />

        <Section id="about" number="01" title="About me" tone="lavender">
          <div className="about-grid">
            <Reveal>
              <div className="prose">
                <p>{personalDescription}</p>
                <h3>Career interests</h3>
                <ul className="chips">
                  {careerInterests.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3>Strengths</h3>
                <ul className="chips chips--outline">
                  {strengths.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="card info-card">
                <h3>Basic information</h3>
                <dl className="info-list">
                  {basicInfo.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>{row.href ? <a href={row.href}>{row.value}</a> : row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section id="education" number="02" title="Education">
          <Reveal>
            <article className="card education-card">
              <p className="badge">{education.level}</p>
              <h3>{education.degree}</h3>
              <p className="card-strong">{education.school}</p>
              <h4>Academic honors</h4>
              <ul className="honors">
                {education.honors.map((honor) => (
                  <li key={honor.period}>
                    <span className="honor-title">{honor.title}</span>
                    <span className="honor-period">{honor.period}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </Section>

        <Section
          id="skills"
          number="03"
          title="Technical and professional skills"
          intro="Confirmed skills and strengths only."
          tone="lavender"
        >
          <ul className="grid grid--3 plain" aria-label="Skills">
            {skills.map((skill, index) => (
              <li key={skill.title}>
                <Reveal delay={(index % 3) * 80}>
                  <article className="card card--lift skill-card">
                    <h3>{skill.title}</h3>
                    <p className="muted">{skill.note}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={100}>
            <div className="note-panel">
              <p>{itInterestsNote}</p>
              <h3>{portfolioTech.heading}</h3>
              <p className="muted small">{portfolioTech.note}</p>
              <ul className="chips chips--outline">
                {portfolioTech.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Section>

        <Section id="projects" number="04" title="Projects">
          <div className="grid grid--2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="achievements"
          number="05"
          title="Achievements and certifications"
          tone="lavender"
        >
          <ul className="grid grid--3 plain" aria-label="Achievements">
            {achievements.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={(index % 3) * 80}>
                  <article className="card card--lift achievement-card">
                    <p className="badge">{item.kind}</p>
                    <h3>{item.title}</h3>
                    <p className="muted">{item.detail}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" number="06" title={experienceHeading} intro={experienceNote}>
          <ol className="steps">
            {experience.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={index * 80}>
                  <article className="card card--lift step-card">
                    <span className="step-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="badge">{item.tag}</p>
                      <h3>{item.title}</h3>
                      <p className="muted">{item.detail}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="connect"
          number="07"
          title="GitHub, social links and contact"
          intro="Email or phone is the best way to reach me."
          tone="lavender"
        >
          <div className="grid grid--3">
            <Reveal>
              <a
                className="card card--lift link-card"
                href={social.github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.github.label} profile, ${social.github.handle} (opens in a new tab)`}
              >
                <span className="link-label">{social.github.label}</span>
                <span className="link-handle">{social.github.handle}</span>
                <span className="link-arrow" aria-hidden="true">
                  Visit profile ↗
                </span>
              </a>
            </Reveal>

            <Reveal delay={80}>
              <div className="card link-card link-card--static">
                <span className="link-label">{social.facebook.label}</span>
                <span className="link-handle">{social.facebook.handle}</span>
                <span className="link-note">Account name only</span>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="card link-card link-card--static">
                <span className="link-label">{social.linkedin.label}</span>
                <span className="link-handle">{social.linkedin.note}</span>
                <span className="link-note">To be added</span>
              </div>
            </Reveal>

            <Reveal delay={0}>
              <a className="card card--lift link-card" href={`mailto:${profile.email}`}>
                <span className="link-label">Email</span>
                <span className="link-handle">{profile.email}</span>
                <span className="link-arrow" aria-hidden="true">
                  Write to me →
                </span>
              </a>
            </Reveal>

            <Reveal delay={80}>
              <a className="card card--lift link-card" href={`tel:${profile.phone}`}>
                <span className="link-label">Phone</span>
                <span className="link-handle">{profile.phone}</span>
                <span className="link-arrow" aria-hidden="true">
                  Call me →
                </span>
              </a>
            </Reveal>
          </div>
        </Section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          <p>
            <a href={social.github.href} target="_blank" rel="noopener noreferrer">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
