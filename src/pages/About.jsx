import { aboutContent } from "../content/about";

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

      <main id="main-content" tabIndex={-1}>
        <header className="relative w-full">
          <img
            src="https://media.istockphoto.com/id/2182250916/photo/teamwork-concept-with-diverse-hands-joining-together-symbolizing-unity-cooperation-and.jpg?s=1024x1024&w=is&k=20&c=DkLbZc9f0tsBhLXi2-yBgg-g0jXRECdtYGrEogCvxNg="
            alt="Young people collaborating at a community event"
            className="h-100 w-full object-cover md:h-125"
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

        <section
          id={aboutContent.sections[0].id}
          className="flex flex-col lg:gap-16 md:flex-row py-8 px-4 md:px-24 items-center"
        >
          <div className="w-full md:w-1/2">
            <header>
              <div class="flex items-center gap-3">
                <span class="h-px w-8 bg-indigo-950"></span>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-950">
                  {aboutContent.sections[0].label}
                </p>
              </div>
            </header>

            <h2 className="my-4 lg:my-6 text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
              {aboutContent.sections[0].title}
            </h2>

            <p
              className="mt-4
             text-lg text-gray-600"
            >
              {aboutContent.sections[0].description}
            </p>
            <p className="my-4 border-l-2 border-blue-950 pl-4 text-base font-medium leading-relaxed text-gray-900 md:text-lg">
              {aboutContent.sections[0].closing}
            </p>
          </div>
          <div className="w-full md:w-1/2 aspect-4/3 overflow-hidden rounded-xl bg-gray-100">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="two people stood over a pavement with a message passion led us here"
              loading="lazy"
            />
          </div>
        </section>

        <section
          id={aboutContent.sections[1].id}
          className="flex flex-col lg:gap-16 md:flex-row-reverse py-8 px-4 md:px-24 items-center"
        >
          <div className="w-full md:w-1/2">
            <header>
              <div class="flex items-center gap-3">
                <span class="h-px w-8 bg-indigo-950"></span>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-950">
                  {aboutContent.sections[1].label}
                </p>
              </div>
            </header>

            <h2 className="my-4 lg:my-6 text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
              {aboutContent.sections[1].title}
            </h2>

            <p className="mt-4 text-lg  text-gray-600">
              {aboutContent.sections[1].description}
            </p>
            <p className="my-4 border-l-2 border-blue-800 pl-4 text-base font-medium leading-relaxed text-gray-900 md:text-lg">
              {aboutContent.sections[1].closing}
            </p>
          </div>
          <div className="w-full md:w-1/2 aspect-4/3 overflow-hidden rounded-xl bg-gray-100">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1758272133803-1cbb513689ca?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="two people stood over a pavement with a message passion led us here"
              loading="lazy"
            />
          </div>
        </section>

        <section
          id={aboutContent.sections[2].id}
          className="flex flex-col lg:gap-16 md:flex-row py-8 px-4 md:px-24 items-center"
        >
          <div className="w-full md:w-1/2">
            <header>
              <div class="flex items-center gap-3">
                <span class="h-px w-8 bg-indigo-950"></span>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-950">
                  {aboutContent.sections[2].label}
                </p>
              </div>
            </header>

            <h2 className="my-4 lg:my-6 text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
              {aboutContent.sections[2].title}
            </h2>

            <p className="mt-4 text-lg  text-gray-600">
              {aboutContent.sections[2].description}
            </p>
            <p className="my-4 border-l-2 border-blue-800 pl-4 text-base font-medium leading-relaxed text-gray-900 md:text-lg">
              {aboutContent.sections[2].closing}
            </p>
          </div>
          <div className="w-full md:w-1/2 aspect-4/3 overflow-hidden rounded-xl bg-gray-100">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="two people stood over a pavement with a message passion led us here"
              loading="lazy"
            />
          </div>
        </section>

        <section
          id={aboutContent.sections[3].id}
          className="flex flex-col lg:gap-16 md:flex-row-reverse py-8 px-4 md:px-24 items-center"
        >
          <div className="w-full md:w-1/2">
            <header>
              <div class="flex items-center gap-3">
                <span class="h-px w-8 bg-indigo-950"></span>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-950">
                  {aboutContent.sections[3].label}
                </p>
              </div>
            </header>

            <h2 className="my-4 lg:my-6 text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
              {aboutContent.sections[3].title}
            </h2>

            <p className="mt-4 text-lg  text-gray-600">
              {aboutContent.sections[3].description}
            </p>
            <p className="my-4 border-l-2 border-blue-800 pl-4 text-base font-medium leading-relaxed text-gray-900 md:text-lg">
              {aboutContent.sections[3].closing}
            </p>

            {/* Program stages */}
            {aboutContent.sections[3].stages?.length > 0 && (
              <div className="my-8 grid gap-4 sm:grid-cols-3">
                {aboutContent.sections[3].stages.map((stage, index) => (
                  <article
                    key={stage.id}
                    className="rounded-xl border border-gray-200 p-4"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-semibold text-blue-950">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-blue-950">
                        {stage.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {stage.description}
                    </p>
                  </article>
                ))}
              </div>
            )}
            <div className="flex w-full justify-center">
              <button className="p-2.5 rounded-2xl bg-blue-950 text-amber-50 hover:bg-blue-900">
                Become a member
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-3/4 overflow-hidden rounded-xl bg-gray-100">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1773530057098-6db992c0f90b?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="two people stood over a pavement with a message passion led us here"
              loading="lazy"
            />
          </div>
        </section>

        {/* Team */}
        <div id="team" className="scroll-mt-24">
          <Team />
        </div>
      </main>
    </>
  );
}
