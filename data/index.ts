export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Collaborative LiveDocs",
    des: "LiveDocs is a clone of Goole Docs using Liveblocks for real-time features and styled with TailwindCSS.",
    img: "/live_docs.PNG",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/live_blocks.svg",
      "/c.svg",
    ],
    link: "https://live-docs-snowy-sigma.vercel.app/",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://zoom-clone-kappa-two.vercel.app/",
  },
  {
    id: 3,
    title: "Modern UI/UX SaaS Website",
    des: "Xora is a Modern UI/UX SaaS website developed using React.js and Tailwind CSS.",
    img: "/xora.png",
    iconLists: ["/js_logo.svg", "/vite.svg", "/re.svg", "/tail.svg"],
    link: "https://xora-saas-landing-page-two.vercel.app/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://iphone-doc.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Fareed was a game-changer for our project. His technical expertise, creative approach, and dedication to understanding our goals helped bring our vision to life seamlessly. Fareed went above and beyond to ensure our website was functional, beautiful, and optimized. Highly recommend him!",
    name: "Sarah Thompson",
    title: "CEO of Innovate Digital Solutions",
  },
  {
    quote:
      "Fareed’s commitment to delivering top-notch solutions is unmatched. He’s quick to adapt to feedback and consistently provides innovative ideas. His attention to detail and technical skill set truly elevated our platform's user experience. Fareed is the go-to developer for anyone looking to build an exceptional online presence.",
    name: "James Anderson",
    title: "CTO of BrightWave Media",
  },
  {
    quote:
      "Fareed Zafar is the professional every business needs. His responsiveness, clear communication, and impressive coding skills made our collaboration a breeze. The project was completed on time, within budget, and far exceeded our expectations. Our team can’t wait to work with him again on future projects!",
    name: "Emily Ross",
    title: "Project Manager at StarCore Technologies",
  },
  {
    quote:
      "Fareed has an incredible ability to transform complex requirements into intuitive, high-performing solutions. His deep knowledge of both frontend and backend technologies ensured our project was seamless from start to finish. A true professional who always delivers exceptional results.",
    name: "David Lee",
    title: "Founder of TechBridge Solutions",
  },
  {
    quote:
      "Fareed’s work speaks for itself. His technical expertise and commitment to quality helped us create a website that not only looks fantastic but is also optimized for performance and user experience. I couldn’t be happier with the outcome and highly recommend Fareed for any web development needs!",
    name: "Laura Martinez",
    title: "Marketing Director at Visionary Ventures",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-stack Developer Intern",
    desc: "Experienced Full Stack Developer skilled in building scalable web applications, from frontend interfaces to backend logic.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,

    title: "Frontend Engineer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",

    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Web Developer dedicated to delivering responsive, high-quality web solutions from frontend to backend.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/fareedzafar657",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/fareed-zafar-39b1b0170",
  },
];
