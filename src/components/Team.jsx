import { cabinet, cabinetAssistants } from "../content/team";

function Member({ member }) {
  const isPlaceholder = member.name === "TBD";

  return (
    <article className="flex flex-col items-center text-center">
      <img
        src={member.avatar}
        alt=""
        className="h-32 w-32 rounded-full bg-gray-100 object-cover"
        loading="lazy"
      />
      <p
        className={`mt-4 text-lg ${isPlaceholder ? "italic text-gray-400" : "text-gray-900"}`}
      >
        {member.name}
      </p>
      <p className="text-sm font-medium text-gray-500">{member.role}</p>
      <p className="text-sm text-gray-700">{member.title}</p>
    </article>
  );
}

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
        5.1
      </p>
      <h2 className="mb-10 text-3xl font-bold text-gray-900">
        Executive Cabinet
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cabinet.map((m) => (
          <Member key={m.role} member={m} />
        ))}
      </div>

      {cabinetAssistants.length > 0 && (
        <>
          <h3 className="mt-16 mb-8 text-xl font-semibold text-gray-900">
            Cabinet Assistants
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cabinetAssistants.map((m) => (
              <Member key={m.role} member={m} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
