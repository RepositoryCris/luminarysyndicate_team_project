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

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Page introduction */}
        <header className="mx-auto max-w-5xl px-6 pb-10 pt-20 md:pb-14 md:pt-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            About us
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
            {aboutContent.pageTitle}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            We bring young people together to learn, lead, and turn ideas into
            meaningful action.
          </p>
        </header>

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
