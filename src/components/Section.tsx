import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  number: string;
  title: string;
  intro?: string;
  tone?: "light" | "lavender";
  children: ReactNode;
}

export default function Section({ id, number, title, intro, tone = "light", children }: SectionProps) {
  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal>
          <header className="section-head">
            <span className="section-number" aria-hidden="true">
              {number}
            </span>
            <div>
              <h2 id={`${id}-title`}>{title}</h2>
              {intro && <p className="section-intro">{intro}</p>}
            </div>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
