import { cabinetRoles, cabinetAssistants } from "../content/team";

function initials(role) {
  return role.slice(0, 2).toUpperCase();
}

function MemberCard({ member }) {
  const hasName = Boolean(member.name);

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200
                 bg-white shadow-sm transition-all duration-300
                 hover:-translate-y-1 hover:border-blue-950/20 hover:shadow-lg
                 "
    >
      {/* IMAGE — rounded top corners, square bottom edge */}
      <div className="relative aspect-square w-full overflow-hidden rounded-t-2xl bg-linear-to-br from-blue-950/10 to-indigo-500/10">
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={hasName ? member.name : `${member.title} avatar`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500
                       group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-3xl font-bold tracking-tight text-blue-950/50">
              {initials(member.role)}
            </span>
          </div>
        )}

        {/* Role badge overlay — sits on top of the image */}
        <span
          className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5
                     text-[11px] font-semibold uppercase tracking-widest text-blue-950
                     shadow-sm backdrop-blur-sm"
        >
          {member.role}
        </span>
      </div>

      {/* BODY — square top edge blends with image bottom */}
      <div className="flex flex-1 flex-col p-4 text-center">
        <h3 className="text-base font-semibold text-gray-950">
          {hasName ? member.name : "To be announced"}
        </h3>

        <p className="mt-1 text-sm font-medium leading-snug text-blue-950">
          {member.title}
        </p>

        {/* Accent underline */}
        <span
          className="mx-auto mt-4 block h-px w-8 bg-indigo-950/20 transition-all
                     duration-300 group-hover:w-16 group-hover:bg-blue-950"
        />

        {/* Description — truncated to keep cards aligned */}
        {member.description && (
          <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-gray-600">
            {member.description}
          </p>
        )}
      </div>
    </article>
  );
}

export default function CabinetSection() {
  const hasAssistants = cabinetAssistants.length > 0;

  return (
    <section className="py-16 px-4 md:px-24">
      {/* Section header */}
      <header className="mx-auto mb-12 max-w-2xl text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-indigo-950" />
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-950">
            Leadership
          </p>
          <span className="h-px w-8 bg-indigo-950" />
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
          The Cabinet
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          The officers steering our mission, strategy, and day-to-day
          operations.
        </p>
      </header>

      {/* 1 col mobile, 2 col sm, 4 col lg */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cabinetRoles.map((member) => (
          <MemberCard key={member.role} member={member} />
        ))}
      </div>

      {/* Assistants — only rendered when present */}
      {hasAssistants && (
        <div className="mt-20">
          <header className="mx-auto mb-10 max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">
              Assistants
            </h3>
            <p className="mt-3 text-base text-gray-600">
              Supporting the cabinet across every department.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cabinetAssistants.map((member) => (
              <MemberCard key={member.role} member={member} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
