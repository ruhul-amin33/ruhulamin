/* ====== SHUDHU EI FILE EDIT KORLEI HOBE ====== */
const SITE = {
  name: "Ruhul Amin",                      // <-- apnar nam
  role: "AI Developer & Vibe Coder",                  // <-- apnar porichoy
  tagline: "I turn ideas into working apps and websites using AI, with an engineer's eye for every detail.", // <-- hero er choto porichoy
  status: "Available for new projects",   // <-- hero er sobuj status; na chaile "" rakhun
  location: "Bangladesh",
  education: { school: "Sylhet Engineering College", degree: "Electrical and Electronic Engineering" },
  cv: "downloads/cv.pdf",                  // CV thakle downloads/ e rakhun, na thakle "" rakhun
  photo: "assets/photo.jpg",              // <-- nijer chobi assets/ folder e dile hoy (na dile initials dekhabe)
  about: [
    "I'm Ruhul Amin, an AI developer and vibe coder, and an Electrical and Electronic Engineering student at Sylhet Engineering College.",
    "I build websites, web apps and Android apps by pairing AI tools with an engineer's problem-solving mindset. That lets me take an idea from prompt to a live product quickly, as with RumeDio Shop and YT BG Player.",
    "I care about clean results: fast, reliable and easy to use. I keep learning new AI tools and turn real problems into simple digital products."
  ],
  services: [
    { title: "AI-Assisted Development", text: "Fast, high-quality websites and apps built by combining AI tools with careful human review." },
    { title: "Websites & E-commerce", text: "Responsive websites and online stores with catalogue, cart, accounts and cash-on-delivery checkout, like RumeDio Shop." },
    { title: "Android Apps", text: "Focused Android apps, like YT BG Player for background listening." },
    { title: "UI & Responsive Design", text: "Sharp interfaces that work smoothly on phones, tablets and desktops." }
  ],
  skills: [
    { group: "AI", items: ["Vibe coding", "Prompt engineering", "AI-assisted development"] },
    { group: "Web", items: ["HTML", "CSS", "JavaScript", "Responsive design", "Single-page apps"] },
    { group: "Mobile", items: ["Android", "Kotlin", "Media3"] },
    { group: "Tools", items: ["Git", "GitHub", "Vercel"] },
    { group: "Engineering", items: ["Electrical Engineering", "Electronics"] }
  ],
  process: [
    { title: "Understand", text: "We talk through your goals, audience and budget so the scope is clear before any code is written." },
    { title: "Design", text: "I plan the structure and look first, so you can see the direction early and give feedback." },
    { title: "Build", text: "Clean, fast, mobile-friendly code, built with AI tools and checked by hand across screen sizes." },
    { title: "Launch", text: "I deploy it, make sure everything works and hand over what you need to manage it." }
  ],
  projects: [
    {
      title: "RumeDio Shop",
      kind: "Web app",
      facts: [["Platform", "Web"], ["Payments", "Cash on delivery"], ["Delivery", "Dhaka & all districts"]],
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
      facts: [["Platform", "Android 7.0+"], ["Version", "1.0"], ["Size", "9.4 MB"]],
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
