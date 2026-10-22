import { aboutSections } from "../content/about";
import Section from "../components/Section";
import Team from "../components/Team";

export default function About() {
  return (
    <main>
      {aboutSections.map((s) => (
        <Section key={s.id} section={s} />
      ))}
      <Team />
    </main>
  );
}
