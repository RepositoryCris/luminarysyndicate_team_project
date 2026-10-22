export default function Section({ section }) {
  const { id, number, label, title, description, closing, stages } = section;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-28 border-b border-gray-200 py-16 md:py-24"
    >
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        {/* Section label */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            {number} / {label}
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-2xl">
          <h2
            id={`${id}-title`}
            className="text-3xl font-bold leading-tight tracking-tight text-gray-950 md:text-4xl"
          >
            {title}
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            {description}
          </p>

          {/* Program stages */}
          {stages?.length > 0 && (
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stages.map((stage, index) => (
                <article
                  key={stage.id}
                  className="rounded-xl border border-gray-200 p-4"
                >
                  <span className="text-sm font-semibold text-blue-700">
                    0{index + 1}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-gray-900">
                    {stage.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {stage.description}
                  </p>
                </article>
              ))}
            </div>
          )}

          {/* Optional closing statement */}
          {closing && (
            <p className="mt-8 border-l-2 border-blue-600 pl-4 text-base font-medium leading-relaxed text-gray-900 md:text-lg">
              {closing}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
