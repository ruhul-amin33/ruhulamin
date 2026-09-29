/* ====== SHUDHU EI FILE EDIT KORLEI HOBE ====== */
const SITE = {
  name: "Ruhul Amin",                      // <-- apnar nam
  role: "Web Developer",                  // <-- apnar porichoy
  tagline: "Ami clean, fast ar shohoje bebohar kora website ar app baniye thaki.", // <-- hero er choto porichoy
  location: "Dhaka, Bangladesh",
  cv: "downloads/cv.pdf",                  // CV thakle downloads/ e rakhun, na thakle "" rakhun
  photo: "assets/photo.jpg",              // <-- nijer chobi assets/ folder e dile hoy (na dile initials dekhabe)
  about: [
    "Ami Ruhul Amin, ekjon Web Developer. Ami clean, fast ar user-friendly website ar app baniye thaki.",
    "Notun kichu shikhte ar real problem solve korte amar bhalo lage. Ekhon ami [kon kaj/study] niye kaj korchi."
  ],
  skills: [
    { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
    { group: "Backend",  items: ["Node.js", "Python"] },
    { group: "Tools",    items: ["Git & GitHub", "Figma", "VS Code"] }
  ],
  projects: [
    {
      title: "RumeDio Shop",
      desc: "An online marketplace for shoppers in Bangladesh. Customers browse mobiles, fashion, electronics and groceries, add items to a cart and pay with cash on delivery.",
      points: [
        "Product catalogue with a dedicated flash sale page",
        "Shopping cart, customer login and account registration",
        "My orders page where customers see their order history",
        "Location-based delivery pricing: Dhaka ৳60, outside Dhaka ৳120, free in Dhaka over ৳1,500",
        "Help and support centre for customers"
      ],
      tech: ["Single-page app", "Cash on delivery", "Hosted on Vercel"],   // <-- asol tech stack likhe din (jemon React, Firebase)
      live: "https://rumedio.vercel.app/#/",
      code: "",
      image: "",                           // shop er screenshot: "assets/rumedio.jpg"
      file: ""
    }
  ],
  contact: {
    email: "ruhulamineasy@gmail.com",
    links: [
      { label: "WhatsApp", url: "https://wa.me/8801933141533" },
      { label: "Facebook", url: "https://fb.com/ruhulamineasy" },
      { label: "GitHub",   url: "https://github.com/ruhul-amin33" }
    ]
  }
};
