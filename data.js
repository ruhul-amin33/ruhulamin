/* ====== SHUDHU EI FILE EDIT KORLEI HOBE ====== */
const SITE = {
  name: "Your Name",                      // <-- apnar nam
  role: "Web Developer",                  // <-- apnar porichoy
  location: "Dhaka, Bangladesh",
  photo: "assets/photo.jpg",              // <-- nijer chobi assets/ folder e dile hoy (na dile initials dekhabe)
  about: [
    "Ami [Your Name], ekjon [Web Developer]. Ami clean, fast ar user-friendly website ar app baniye thaki.",
    "Notun kichu shikhte ar real problem solve korte amar bhalo lage. Ekhon ami [kon kaj/study] niye kaj korchi."
  ],
  skills: [
    { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
    { group: "Backend",  items: ["Node.js", "Python"] },
    { group: "Tools",    items: ["Git & GitHub", "Figma", "VS Code"] }
  ],
  projects: [
    {
      title: "Project One",
      desc: "Ei project ta ki kore, ki shomoshsha shomadhan kore — 1-2 line e likhun.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://example.com",         // live link (na thakle "" rakhun)
      code: "https://github.com/username/project-one", // GitHub link (na thakle "")
      file: ""                              // downloads/ folder er file, jemon "downloads/app.apk"
    },
    {
      title: "Project Two",
      desc: "Ekta Android app / tool er short biboron.",
      tech: ["Kotlin", "Firebase"],
      live: "",
      code: "https://github.com/username/project-two",
      file: "downloads/sample-app.apk"
    }
  ],
  contact: {
    email: "you@example.com",
    links: [
      { label: "GitHub",   url: "https://github.com/username" },
      { label: "LinkedIn", url: "https://linkedin.com/in/username" },
      { label: "Facebook", url: "https://facebook.com/username" }
    ]
  }
};
