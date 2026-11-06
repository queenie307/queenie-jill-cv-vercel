import { careerObjective, intro, profile } from "../data/content";
import ImageSlot from "./ImageSlot";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-photo">
          <div className="portrait-ring">
            <ImageSlot image={profile.photo} className="portrait" />
          </div>
        </div>

        <div className="hero-text">
          <p className="eyebrow">{profile.level}</p>
          <h1 id="hero-title">{profile.fullName}</h1>
          <p className="hero-role">{profile.title}</p>
          <p className="hero-location">{profile.locationPublic}</p>

          <p className="hero-intro">{intro}</p>

          <div className="hero-actions">
            <a className="btn btn--light" href="#projects">
              View my projects
            </a>
            <a className="btn btn--outline" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </div>

          <aside className="objective" aria-labelledby="objective-title">
            <h2 id="objective-title">Career objective</h2>
            <p>{careerObjective}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
