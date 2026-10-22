// Replace null with an approved member name when available.
// Until then, the UI can display the role and an illustrated avatar.
export const cabinetRoles = [
  {
    role: "CEO",
    title: "Chief Executive Officer",
    name: null,
    avatar: "/avatars/ceo.svg",
  },
  {
    role: "COO",
    title: "Chief Operations Officer",
    name: null,
    avatar: "/avatars/coo.svg",
  },
  {
    role: "CTO",
    title: "Chief Technology Officer",
    name: null,
    avatar: "/avatars/cto.svg",
  },
  {
    role: "CMO",
    title: "Chief Marketing Officer",
    name: null,
    avatar: "/avatars/cmo.svg",
  },
  {
    role: "CFO",
    title: "Chief Finance Officer",
    name: null,
    avatar: "/avatars/cfo.svg",
  },
  {
    role: "ED",
    title: "Executive Director",
    name: null,
    avatar: "/avatars/ed.svg",
  },
  {
    role: "YDSPO",
    title: "Youth Development & Safe Policy Officer",
    name: null,
    avatar: "/avatars/ydspo.svg",
  },
];

// Render the assistants section only when it contains members.
export const cabinetAssistants = [];
