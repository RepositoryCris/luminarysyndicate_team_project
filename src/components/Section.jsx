export default function Section({ section }) {
  return (
    <section
      id={section.id}
      className="mx-auto max-w-3xl scroll-mt-24 px-6 py-16"
    >
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
        {section.number}
      </p>

      <h2 className="mb-6 text-3xl font-bold text-gray-900">{section.title}</h2>

      <div className="space-y-4 leading-relaxed text-gray-700">
        {section.paragraphs?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {section.intro && <p>{section.intro}</p>}

        {section.list && (
          <ul className="list-disc space-y-3 pl-6">
            {section.list.map((item, i) => (
              <li key={i}>
                <strong className="text-gray-900">{item.lead}</strong>{" "}
                {item.text}
              </li>
            ))}
          </ul>
        )}

        {section.outro && <p>{section.outro}</p>}

        <p className="font-semibold text-gray-900">{section.closing}</p>
      </div>
    </section>
  );
}
