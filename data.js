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
    { title: "Android Apps", text: "Focused Android apps, like YT BG Player for background listening." },
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
      kind: "Web app",
      desc: "An online marketplace for shoppers in Bangladesh. Customers browse mobiles, fashion, electronics and groceries, add items to a cart and pay with cash on delivery.",
      points: [
        "Product catalogue with a dedicated flash sale page",
        "Shopping cart, customer login and account registration",
        "My orders page where customers see their order history",
        "Location-based delivery pricing: Dhaka ৳60, outside Dhaka ৳120, free in Dhaka over ৳1,500",
        "Help and support centre for customers"
      ],
      tech: ["Single-page app", "Cash on delivery", "Hosted on Vercel"],   // <-- asol tech stack likhe din
      live: "https://rumedio.vercel.app/#/",
      code: "",
      image: "",                           // screenshot: "assets/rumedio.jpg"
      file: ""
    },
    {
      title: "YT BG Player",
      kind: "Android app",
      desc: "An Android app for listening in the background. Media keeps playing with notification controls while you use other apps or lock your screen.",
      points: [
        "Background playback with media notification controls",
        "Built-in download service",
        "Accepts shared links from other apps",
        "Works on Android 7.0 and above"
      ],
      tech: ["Android", "Kotlin", "Media3"],
      live: "",
      code: "",
      image: "",                           // app screenshot: "assets/ytbgplayer.jpg"
      file: "downloads/YT-BG-Player.apk",
      fileLabel: "APK · 9.4 MB",
      note: "To install: open the downloaded file and allow “Install unknown apps” for your browser if Android asks."
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
