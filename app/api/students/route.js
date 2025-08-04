let students = [
  {
    name: "Atharva",
    age: 20,
    hobby: "coding",
    city: "Navi Mumbai",
    profession: "Computer Science Student",
    favouriteLanguage: "JavaScript",
    personality: "Creative, Visionary, Empathetic",
    skills: ["MERN Stack", "Next.js", "C++", "Python"],
    bio: "An ambitious coder chasing MAANG dreams. Passionate about AI, simulations, and storytelling."
  },
  {
    name: "Laksh",
    age: 22,
    hobby: "gaming",
    city: "Pune",
    profession: "QA Tester",
    favouriteGame: "Valorant",
    personality: "Strategic, Calm, Introverted",
    skills: ["Bug Tracking", "Game Testing", "Python Automation"],
    bio: "A tactical gamer who turned passion into profession. Nights ranking up, days breaking builds."
  },
  {
    name: "Prem",
    age: 22,
    hobby: "gaming",
    city: "Delhi",
    profession: "Streamer",
    favouriteGame: "GTA Online",
    personality: "Energetic, Humorous, Loyal",
    skills: ["Live Commentary", "OBS Setup", "Audience Engagement"],
    bio: "Late-night chaos master with a loyal fanbase and unstoppable laugh streaks."
  },
  {
    name: "Yash",
    age: 22,
    hobby: "Rage",
    city: "Indore",
    profession: "Freelance Content Writer",
    favouritePhrase: "WHY IS THIS GAME BROKEN?!",
    personality: "Passionate, Short-tempered, Honest",
    skills: ["Creative Writing", "Ranting", "Game Reviews"],
    bio: "Loves writing brutally honest game takes. A hero for gamers who suffer in silence."
  },
  {
    name: "Aanya",
    age: 21,
    hobby: "painting",
    city: "Bangalore",
    profession: "UX Designer",
    favouriteTool: "Figma",
    personality: "Detail-oriented, Calm, Artistic",
    skills: ["Wireframing", "Color Theory", "User Research"],
    bio: "Brings apps to life with colors, flow, and perfect spacing. Designs with empathy."
  },
  {
    name: "Rudra",
    age: 23,
    hobby: "hiking",
    city: "Shimla",
    profession: "DevOps Engineer",
    favouriteTool: "Docker",
    personality: "Adventurous, Reliable, Systematic",
    skills: ["CI/CD", "Kubernetes", "Linux Servers"],
    bio: "Scales mountains by weekend, servers by weekday. The bridge between code and production."
  },
  {
    name: "Meera",
    age: 20,
    hobby: "blogging",
    city: "Kolkata",
    profession: "Tech Blogger",
    favouriteTopic: "Web 3.0",
    personality: "Curious, Expressive, Witty",
    skills: ["SEO", "React", "Ghost CMS"],
    bio: "Writes code and stories. Making complex tech sound like a bedtime tale."
  },
  {
    name: "Zaid",
    age: 21,
    hobby: "football",
    city: "Hyderabad",
    profession: "Backend Developer",
    favouriteLanguage: "Go",
    personality: "Disciplined, Tactical, Loyal",
    skills: ["REST APIs", "PostgreSQL", "Redis"],
    bio: "Clean APIs and smooth passes — whether it’s servers or soccer."
  },
  {
    name: "Kiara",
    age: 19,
    hobby: "dancing",
    city: "Mumbai",
    profession: "Frontend Intern",
    favouriteLibrary: "Tailwind CSS",
    personality: "Charming, Bubbly, Focused",
    skills: ["HTML", "CSS", "Framer Motion"],
    bio: "Animating UIs like choreography. Every screen, a performance."
  },
  {
    name: "Harsh",
    age: 22,
    hobby: "photography",
    city: "Ahmedabad",
    profession: "Full Stack Developer",
    favouriteStack: "MERN",
    personality: "Balanced, Analytical, Visionary",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    bio: "Snaps the world through lenses and pixels. Dreams in code."
  },
  {
    name: "Isha",
    age: 20,
    hobby: "reading",
    city: "Lucknow",
    profession: "AI Research Intern",
    favouriteTopic: "NLP",
    personality: "Introvert, Deep Thinker, Kind",
    skills: ["TensorFlow", "Scikit-learn", "Text Classification"],
    bio: "Exploring language, one token at a time. Believes AI can understand emotion."
  },
  {
    name: "Veer",
    age: 23,
    hobby: "gym",
    city: "Chandigarh",
    profession: "iOS Developer",
    favouriteLanguage: "Swift",
    personality: "Bold, Consistent, Fast Learner",
    skills: ["Xcode", "UIKit", "Firebase"],
    bio: "Lifts weights and code equally. Builds polished apps like muscles — with consistency."
  },
  {
    name: "Sanya",
    age: 21,
    hobby: "singing",
    city: "Jaipur",
    profession: "Data Analyst",
    favouriteTool: "Tableau",
    personality: "Vibrant, Observant, Logical",
    skills: ["SQL", "Pandas", "Power BI"],
    bio: "Tunes into data the way she tunes vocals — finding patterns in chaos."
  },
  {
    name: "Ravi",
    age: 24,
    hobby: "chess",
    city: "Bhopal",
    profession: "Cybersecurity Engineer",
    favouriteTool: "Wireshark",
    personality: "Sharp, Quiet, Strategic",
    skills: ["Ethical Hacking", "Pen Testing", "Firewalls"],
    bio: "Plays both chess and defense like a pro. The silent guardian of systems."
  },
  {
    name: "Simran",
    age: 20,
    hobby: "journaling",
    city: "Nagpur",
    profession: "Product Manager Intern",
    favouritePhrase: "User first",
    personality: "Empathetic, Organized, Driven",
    skills: ["Roadmaps", "Notion", "User Interviews"],
    bio: "Keeps features on track and team in sync. Obsessed with clarity."
  },
  {
    name: "Dev",
    age: 21,
    hobby: "rap",
    city: "Surat",
    profession: "SDE Intern",
    favouriteLanguage: "Rust",
    personality: "Fast, Opinionated, Risk-taker",
    skills: ["Systems Programming", "Low-level Optimization", "DSA"],
    bio: "Spits bars and benchmarks. Breaks limits, not rules."
  },
  {
    name: "Nidhi",
    age: 22,
    hobby: "calligraphy",
    city: "Patna",
    profession: "Graphic Designer",
    favouriteTool: "Adobe Illustrator",
    personality: "Calm, Aesthetic, Observant",
    skills: ["Vector Art", "Brand Design", "Canva"],
    bio: "Merges art with logic. Turns briefs into visual poetry."
  },
  {
    name: "Manan",
    age: 23,
    hobby: "cycling",
    city: "Goa",
    profession: "Blockchain Developer",
    favouriteChain: "Polygon",
    personality: "Free-spirited, Innovative, Curious",
    skills: ["Solidity", "Smart Contracts", "DeFi"],
    bio: "Decentralizing the world one block at a time. Loves freedom in tech and life."
  },
  {
    name: "Tanya",
    age: 21,
    hobby: "makeup tutorials",
    city: "Noida",
    profession: "YouTuber",
    favouritePlatform: "YouTube Shorts",
    personality: "Confident, Energetic, Charismatic",
    skills: ["Video Editing", "Social Media", "Storytelling"],
    bio: "Teaching glam, marketing smart. Turns trends into content magic."
  }
]




export async function GET() {
    
    return Response.json(students)
}