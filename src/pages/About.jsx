import { aboutContent } from "../content/about";
import Section from "../components/Section";
import Team from "../components/Team";

const navLinks = [
  { href: "#mission", label: "Mission" },
  { href: "#vision", label: "Vision" },
  { href: "#who", label: "Our community" },
  { href: "#how", label: "Our method" },
  { href: "#team", label: "Our team" },
];

export default function About() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-blue-700 focus:px-4 focus:py-3 focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Skip to content
      </a>

      {/* Section navigation */}
      <nav
        aria-label="About sections"
        className="sticky top-0 z-20 border-y border-gray-200 bg-white/90 backdrop-blur-md"
      >
        <ul className="mx-auto flex max-w-5xl gap-6 overflow-x-auto px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="rounded-sm text-sm font-medium text-gray-600 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main id="main-content" tabIndex={-1} classname="">
        <header className="relative w-full">
          <img
            src="https://media.istockphoto.com/id/2182250916/photo/teamwork-concept-with-diverse-hands-joining-together-symbolizing-unity-cooperation-and.jpg?s=1024x1024&w=is&k=20&c=DkLbZc9f0tsBhLXi2-yBgg-g0jXRECdtYGrEogCvxNg="
            alt="Young people collaborating at a community event"
            className="h-[400px] w-full object-cover md:h-[500px]"
            loading="eager"
          />

          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-gray-950/50" aria-hidden="true" />

          {/* Centered content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
              {aboutContent.smallPageTitle}
            </p>

            <h1 className="m-4 text-5xl font-bold leading-tight tracking-tight text-sky-50">
              {aboutContent.pageTitle}
            </h1>

            <p className="text-base text-gray-200">
              We bring young people together to learn, lead, and turn ideas into
              meaningful action.
            </p>
          </div>
        </header>

        {/* About sections */}
        <div className="mx-auto max-w-5xl px-6">
          {aboutContent.sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </div>

        {/* Team */}
        <div id="team" className="scroll-mt-24">
          <Team />
        </div>
      </main>
    </>
  );
}
