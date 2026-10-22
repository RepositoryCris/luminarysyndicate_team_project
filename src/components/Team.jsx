import { cabinetRoles, cabinetAssistants } from "../content/team";

function Member({ member }) {
  const hasName = Boolean(member.name && member.name !== "TBD");

  return (
    <article className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center transition-colors hover:border-gray-300">
      <img
        src={member.avatar}
        alt=""
        aria-hidden="true"
        className="h-28 w-28 rounded-full bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        width="112"
        height="112"
      />

      <div className="mt-5">
        {hasName && (
          <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
        )}

        <p
          className={`text-sm font-semibold uppercase tracking-wide text-blue-700 ${
            hasName ? "mt-1" : ""
          }`}
        >
          {member.role}
        </p>

        <p className="mt-1 text-sm leading-relaxed text-gray-500">
          {member.title}
        </p>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-title"
      className="scroll-mt-24 border-t border-gray-200 bg-gray-50"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <header className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            05 / OUR PEOPLE
          </p>

          <h2
            id="team-title"
            className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl"
          >
            The people behind the mission.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
            Meet the Executive Cabinet guiding our community, supporting our
            delegates, and helping turn ideas into action.
          </p>
        </header>

        <div>
          <h3 className="mb-6 text-xl font-semibold text-gray-900">
            Executive Cabinet
          </h3>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cabinetRoles.map((member) => (
              <Member key={member.role} member={member} />
            ))}
          </div>
        </div>

        {cabinetAssistants.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-6 text-xl font-semibold text-gray-900">
              Cabinet Assistants
            </h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cabinetAssistants.map((member) => (
                <Member key={member.role} member={member} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
