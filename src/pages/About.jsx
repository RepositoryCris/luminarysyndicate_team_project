import { aboutSections } from "../content/about";
import Section from "../components/Section";
import Team from "../components/Team";

const navLinks = [
  { href: "#mission", label: "Mission" },
  { href: "#vision", label: "Vision" },
  { href: "#who", label: "Who we are" },
  { href: "#how", label: "How" },
  { href: "#team", label: "Team" },
];

export default function About() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-none"
      >
        Skip to content
      </a>

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <header className="mx-auto max-w-5xl px-6 pt-16">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            About The Luminary Syndicate
          </h1>
        </header>

        <nav
          aria-label="About sections"
          className="sticky top-0 z-10 mt-8 border-b border-gray-200 bg-white/80 backdrop-blur"
        >
          <ul className="mx-auto flex max-w-5xl gap-6 overflow-x-auto px-6 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="whitespace-nowrap text-sm text-gray-700 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 focus-visible:rounded-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {aboutSections.map((s) => (
          <Section key={s.id} section={s} />
        ))}

        <Team />
      </main>
    </>
  );
}
