/*
  EXHIBITION DATA — Classroom Layout for Exhibition, 14 August 2026.
  One entry per department shown on the school floor plan.

  Fields:
    id        unique slug
    number    "01" ... display order number
    name      exhibition title
    category  filter group (STEM / TECHNOLOGY / ARTS / HUMANITIES / LANGUAGES)
    area      floor / block zone label
    location  primary room label shown in the directory
    rooms     COMPUTERlete list of every room hosting this exhibition
    image     path to the exhibition photo (placeholder SVG for now, replace later)
    tagline   short one-liner under the title in the overlay
    about     longer description
    projects  featured projects list
    color     accent color of this exhibition (directory row, overlay)
*/
window.EXHIBITIONS = [
  {
    id: "science",
    number: "01",
    name: "Science",
    category: "STEM",
    area: "2nd & 3rd Floor",
    location: "V A, V B, V C, VI A, VI B, BIOLOGY LAB",
    rooms: ["V A", "V B", "V C", "VI A", "VI B", "XI B2 (BIOLOGY LAB)"],
    image: "assets/exhibits/science_collage.jpg",
    tagline: "Discovering the world through experimentation.",
    about: "Step into a laboratory of wonder. Student teams present hands-on experiments, working models and interactive demonstrations across the science classrooms and labs.",
    projects: ["Renewable Energy", "Human BIOLOGYlogy", "Space Exploration"],
    color: "#4ADE80"
  },
  {
    id: "mathematics",
    number: "02",
    name: "Mathematics",
    category: "STEM",
    area: "2nd Floor, Block A2",
    location: "IV A, IV B, IV C, IV D, IV E",
    rooms: ["IV A", "IV B", "IV C", "IV D", "IV E"],
    image: "assets/exhibits/mathematics_collage.jpg",
    tagline: "Finding beauty in numbers.",
    about: "Mathematics becomes tangible through geometry, pattern and play. Explore visual proofs, interactive puzzles and real-world applications in the Mathematics classrooms.",
    projects: ["Geometric Sculptures", "Puzzle Lab", "Data & Chance"],
    color: "#FACC15"
  },
  {
    id: "robotics-ai",
    number: "03",
    name: "Robotics & AI",
    category: "TECHNOLOGY",
    area: "2nd Floor, Block A1",
    location: "PHYSICS LAB",
    rooms: ["PHYSICS LAB"],
    image: "assets/exhibits/robotics_collage.jpg",
    tagline: "Machines that learn, move and think.",
    about: "Meet the machines students have designed, built and taught to think. Autonomous rovers, computer-vision systems and smart-agriculture prototypes in the PHYSICSsics Lab.",
    projects: ["Autonomous Rover", "computer Vision", "Smart Agriculture"],
    color: "#22D3EE"
  },
  {
    id: "computer-science",
    number: "04",
    name: "computer Science",
    category: "TECHNOLOGY",
    area: "2nd & 3rd Floor",
    location: "VI C, VI D, V E, computer LAB (jr.)",
    rooms: ["VI C", "VI D", "V E", "computer LAB (jr.)"],
    image: "assets/exhibits/computer-science.jpg",
    tagline: "Where logic becomes language.",
    about: "From first lines of code to polished software — explore student-built games, websites and tools across the computer Science labs and coding classrooms.",
    projects: ["Student-Coded Games", "Web Projects", "Smart Assistants"],
    color: "#A78BFA"
  },
  {
    id: "social-science",
    number: "05",
    name: "Social Science",
    category: "HUMANITIES",
    area: "2nd & 3rd Floor",
    location: "VII A–VII E, VIII A–VIII D, XI A, XI C, XII C",
    rooms: ["VII A", "VII B", "VII C", "VII D", "VII E", "VIII A", "VIII B", "VIII C", "VIII D", "XI A", "XI C", "XII C"],
    image: "assets/exhibits/sst_collage.jpg",
    tagline: "Understanding people, place and time.",
    about: "The human story fills the Social Science classrooms — cultures, histories and societies told through maps, timelines and living exhibits.",
    projects: ["Cultures of the World", "Local Histories", "Society & Change"],
    color: "#FB923C"
  },
  {
    id: "art-design",
    number: "06",
    name: "Art & Design",
    category: "ARTS",
    area: "1st Floor, Block A1",
    location: "IX A, ART ROOM",
    rooms: ["IX A", "ART ROOM"],
    image: "assets/exhibits/art-design.jpg",
    tagline: "Where imagination takes form.",
    about: "Paint, print, sculpt, design. A curated gallery of student work in the Art Room and IX A, with live art demonstrations running throughout the day.",
    projects: ["Gallery Works", "Digital Illustration", "Poster Design"],
    color: "#F472B6"
  },
  {
    id: "music",
    number: "07",
    name: "Music",
    category: "ARTS",
    area: "Ground Floor, Block A2",
    location: "KG C, KG B",
    rooms: ["KG C", "KG B"],
    image: "assets/exhibits/music_collage.jpg",
    tagline: "Rhythm, melody and sound.",
    about: "Feel the beat. The Music classrooms host live performances and instrument displays throughout the day.",
    projects: ["Live Performances", "Instrument Displays", "School Band"],
    color: "#E879F9"
  },
  {
    id: "dance",
    number: "08",
    name: "Dance",
    category: "ARTS",
    area: "Ground Floor, Block A2",
    location: "KG A, DANCE ROOM",
    rooms: ["KG A", "DANCE ROOM"],
    image: "assets/exhibits/dance_collage.jpg",
    tagline: "Movement that tells a story.",
    about: "See energy and expression come alive in the Dance Room — classical and contemporary routines performed by student teams.",
    projects: ["Classical Recitals", "Contemporary Sets", "ChoreograPHYSICS Demos"],
    color: "#FB7185"
  },
  {
    id: "hindi",
    number: "09",
    name: "Hindi / Sanskrit",
    category: "LANGUAGES",
    area: "1st & 3rd Floor",
    location: "III A· III B, III C, III D, V D",
    rooms: ["III A", "III B", "III C", "III D", "V D"],
    image: "assets/exhibits/hindi_collage.jpg",
    tagline: "Our language, our stories.",
    about: "Poetry recitation, storytelling and creative writing in Hindi and Sanskrit — celebrating the language through student voices.",
    projects: ["Poetry Recitation", "Storytelling", "Creative Writing"],
    color: "#F59E0B"
  },
  {
    id: "english",
    number: "10",
    name: "English",
    category: "LANGUAGES",
    area: "1st & 2nd Floor",
    location: "X A, X B, X C, XI B1, XII B, IX C, XII A",
    rooms: ["X A", "X B", "X C", "XI B1", "XII B", "IX C", "XII A"],
    image: "assets/exhibits/english_collage.jpg",
    tagline: "Words that inspire.",
    about: "Debates, drama and literature come together — explore student writing, short plays and public-speaking showcases.",
    projects: ["Debate Showcase", "Short Plays", "Student Magazines"],
    color: "#3B82F6"
  },
  {
    id: "french",
    number: "11",
    name: "French",
    category: "LANGUAGES",
    area: "1st Floor, Block A1",
    location: "IX B",
    rooms: ["IX B"],
    image: "assets/exhibits/french_collage.jpg",
    tagline: "Bonjour! Discover French culture.",
    about: "Step into France through language, music and culture — songs, skits and displays created by the French class.",
    projects: ["French Songs", "Culture Displays", "Mini Skits"],
    color: "#8B5CF6"
  },
  {
    id: "library",
    number: "12",
    name: "Library",
    category: "HUMANITIES",
    area: "1st Floor, Block A1",
    location: "LIBRARY",
    rooms: ["LIBRARY"],
    image: "assets/exhibits/library_collage.jpg",
    tagline: "A quiet world of stories.",
    about: "Step into the Library — a reading corner, book displays and student-authored stories presented in a calm, welcoming space.",
    projects: ["Book Displays", "Student Authors", "Reading Corner"],
    color: "#93C5FD"
  }
];
