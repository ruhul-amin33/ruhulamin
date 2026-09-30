/* ====== SHUDHU EI FILE EDIT KORLEI HOBE ====== */
const SITE = {
  name: "Ruhul Amin",                      // <-- apnar nam
  role: "Web Developer & EEE Student",                  // <-- apnar porichoy
  tagline: "I build fast, reliable websites and online stores, with an engineer's eye for detail.", // <-- hero er choto porichoy
  status: "Available for new projects",   // <-- hero er sobuj status; na chaile "" rakhun
  location: "Bangladesh",
  education: { school: "Sylhet Engineering College", degree: "Electrical and Electronic Engineering" },
  cv: "downloads/cv.pdf",                  // CV thakle downloads/ e rakhun, na thakle "" rakhun
  photo: "assets/photo.jpg",              // <-- nijer chobi assets/ folder e dile hoy (na dile initials dekhabe)
  about: [
    "I'm Ruhul Amin, a web developer and an Electrical and Electronic Engineering student at Sylhet Engineering College.",
    "I bring an engineer's problem-solving mindset to web development. I build fast, responsive websites and online stores, such as RumeDio Shop, an e-commerce platform for customers across Bangladesh.",
    "I enjoy learning new technologies and turning real-world problems into simple, reliable digital products."
  ],
  services: [
    { title: "Website Development", text: "Fast, responsive websites built with clean code and a clear focus on your goals." },
    { title: "E-commerce Stores", text: "Online shops with catalogue, cart, customer accounts and cash-on-delivery checkout, like RumeDio Shop." },
    { title: "UI & Responsive Design", text: "Sharp interfaces that work smoothly on phones, tablets and desktops." }
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
