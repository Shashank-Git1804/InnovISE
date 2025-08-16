// Event data structure and sample data
export const eventData = [
  {
    id: 1,
    title: "DecodeX – Tech Escape Room",
    dateTime: "2025-08-22T14:00:00",
    duration : "2 hours",
    overview: "A round-based coding puzzle challenge where teams race against the clock to unlock the final solution.",
    instructions: [
      "Teams must consist of 2–3 members.",
      "Each player will participate in one round; if the team has 2 members, they can alternate between rounds.",
      "Props and materials will be provided by the organizers.",
      "Each team gets 30 minutes to complete the challenge.",
      "Maximum of 5 submission attempts per team.",
      "Follow all instructions from the coordinators at all times."
    ],
    generalRules: [
      "Teams must consist of 2–3 members.",
      "Each player will participate in one round; alternate if only 2 members.",
      "Props and materials will be provided by the organizers.",
      "30 minutes to complete the challenge.",
      "Maximum 5 submission attempts for the final answer.",
      "No external devices, internet, or outside help allowed.",
      "Follow all instructions from the coordinators."
    ],
    eventStructure: [
      "Solve a sequence of round-based puzzles to progress through the challenge.",
      "Collaborate effectively to decipher clues and determine the final solution within the allotted time.",
      "A maximum of five submission attempts is permitted for the final answer."
    ],
    prerequisites: [
      "Each round will be attempted by a different team member.",
      "Every member should have at least one of the following skills: Basic programming fundamentals, Python programming basics, Binary conversion (decimal ↔ binary), Logical thinking and problem-solving skills."
    ],
    dosAndDonts: [
      "DO: Communicate clearly with your team.",
      "DO: Use props efficiently and keep your workspace tidy.",
      "DO: Manage time wisely—prioritize, divide tasks, and track the clock.",
      "DO: Double-check your final submission before submitting.",
      "DO: Maintain clear and respectful communication with your teammates.",
      "DON'T: Damage or misplace props.",
      "DON'T: Use unfair means (internet, external help, or devices).",
      "DON'T: Argue with coordinators over rules; their decision is final.",
      "DON'T: Seek external assistance or use unauthorized devices."
    ],
    poster_pdf: "/poster_pdf/DecodeX.pdf",
    poster: "/images/DecodeX_Poster.png",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScGdzhEAHIFk7jdWxlDP5cMJnqLfh1L_Mgz7b39x1wj06GvaQ/viewform",
    qrCodeImage: "/images/DecodeX.jpg",
    winners: [
      {
        place: "1st",
        teamName: "Neural Ninjas",
        members: ["Alex Johnson", "Sarah Chen", "Michael Rodriguez"],
        certificate: "/certificates/neural-ninjas-1st.pdf"
      },
      {
        place: "2nd",
        teamName: "Data Wizards",
        members: ["Emily Davis", "James Wilson", "Lisa Zhang"],
        certificate: "/certificates/data-wizards-2nd.pdf"
      },
    ]
  },
  {
    id: 2,
    title: "Digital Marketing Workshop",
    dateTime: "2025-08-18T14:00:00",
    duration: "1 Week",
    overview: "Learn the latest digital marketing strategies and tools. This hands-on workshop covers SEO, social media marketing, and content creation.",
    instructions: [
      "Bring a notebook for taking notes",
      "Install Google Analytics and Facebook Business Manager apps",
      "Join the workshop Slack channel before the event",
      "Prepare a brief about your current business or project"
    ],
    generalRules: [
      "Attendance is mandatory for certification",
      "Recording is not allowed without permission",
      "Respect other participants' privacy",
      "Follow the workshop schedule strictly",
      "Complete all assigned exercises"
    ],
    prerequisites: [
      "Basic understanding of marketing concepts",
      "A laptop with internet access",
      "Installation of necessary apps (Google Analytics, FB Business Manager)"
    ],
    eventStructure: [
      "Solve a sequence of round-based puzzles to progress through the challenge.",
      "Collaborate effectively to decipher clues and determine the final solution within the allotted time.",
      "A maximum of five submission attempts is permitted for the final answer."
    ],
    dosAndDonts: [
      "DO: Participate actively in discussions",
      "DO: Ask questions during Q&A sessions",
      "DO: Network with other participants",
      "DON'T: Use your phone during presentations",
      "DON'T: Dominate conversations",
      "DON'T: Share confidential business information"
    ],
    poster_pdf: "/poster_pdf/anti_ragging.pdf",
    poster: "/images/anti-ragging_poster.png",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLScOiznLK3i1VlgmrityVkKHuoynaCFYFpyx7nSgT4qvUU9GEQ/viewform",
    qrCodeImage: "/images/Anti-ragging.jpg",
    winners: [
      {
        place: "1st",
        teamName: "Neural Ninjas",
        members: ["Alex Johnson", "Sarah Chen", "Michael Rodriguez"],
        certificate: "/certificates/neural-ninjas-1st.pdf"
      },
      {
        place: "2nd",
        teamName: "Data Wizards",
        members: ["Emily Davis", "James Wilson", "Lisa Zhang"],
        certificate: "/certificates/data-wizards-2nd.pdf"
      },
    ]
  },
  {
    id: 3,
    title: "AI/ML Competition 2025",
    dateTime: "2025-08-10T09:00:00",
    overview: "A competitive machine learning challenge where participants build models to solve complex data science problems. Winners receive cash prizes and internship opportunities.",
    instructions: [
      "Download the dataset from the competition portal",
      "Submit your model and documentation by the deadline",
      "Use Jupyter notebooks for your analysis",
      "Include a detailed explanation of your approach"
    ],
    generalRules: [
      "Individual participation only",
      "Models will be evaluated on unseen test data",
      "Code must be reproducible",
      "Plagiarism will result in disqualification",
      "Winners must present their solutions"
    ],
    prerequisites: [
      "Prior knowledge of machine learning and Python",
      "Ability to work with datasets and ML frameworks",
      "Access to Jupyter notebooks or equivalent tools"
    ],
    eventStructure: [
      "Solve a sequence of round-based puzzles to progress through the challenge.",
      "Collaborate effectively to decipher clues and determine the final solution within the allotted time.",
      "A maximum of five submission attempts is permitted for the final answer."
    ],
    dosAndDonts: [
      "DO: Use any ML framework (TensorFlow, PyTorch, Scikit-learn)",
      "DO: Document your code thoroughly",
      "DO: Validate your model properly",
      "DON'T: Share solutions with other participants",
      "DON'T: Use external datasets not provided",
      "DON'T: Submit after the deadline"
    ],
    poster_pdf: "/poster_pdf/anti_ragging.pdf",
    poster: "/images/aiml-poster.jpg",
    googleFormLink: "https://forms.google.com/aiml-registration",
    qrCodeImage: "/images/aiml-qr.png",
    winners: [
      {
        place: "1st",
        teamName: "Neural Ninjas",
        members: ["Alex Johnson", "Sarah Chen", "Michael Rodriguez"],
        certificate: "/certificates/neural-ninjas-1st.pdf"
      },
      {
        place: "2nd",
        teamName: "Data Wizards",
        members: ["Emily Davis", "James Wilson", "Lisa Zhang"],
        certificate: "/certificates/data-wizards-2nd.pdf"
      },
      // {
      //   place: "3rd",
      //   teamName: "Algorithm Aces",
      //   members: ["David Kim", "Rachel Green", "Tom Brown"],
      //   certificate: "/certificates/algorithm-aces-3rd.pdf"
      // }
    ]
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    dateTime: "2025-08-25T08:00:00",
    overview: "Intensive 5-day bootcamp covering modern web development technologies including React, Node.js, and database management.",
    instructions: [
      "Install Node.js and VS Code before the bootcamp",
      "Create accounts on GitHub and Netlify",
      "Bring a laptop with at least 8GB RAM",
      "Join the bootcamp Discord server for updates"
    ],
    generalRules: [
      "Minimum 80% attendance required for certification",
      "All projects must be submitted to GitHub",
      "Peer code reviews are mandatory",
      "Final project presentation is required",
      "No refunds after the bootcamp starts"
    ],
    prerequisites: [
      "Basic understanding of HTML, CSS, and JavaScript",
      "Laptop with sufficient resources for development",
      "GitHub account ready for project submissions"
    ],
    dosAndDonts: [
      "DO: Complete daily assignments on time",
      "DO: Help fellow participants when possible",
      "DO: Ask questions during coding sessions",
      "DON'T: Skip any sessions without prior notice",
      "DON'T: Copy code without understanding",
      "DON'T: Disrupt others during focused work time"
    ],
    poster_pdf: "/poster_pdf/anti_ragging.pdf",
    poster: "/images/webdev-poster.jpg",
    googleFormLink: "https://forms.google.com/webdev-registration",
    qrCodeImage: "/images/webdev-qr.png",
    winners: []
  }
];

// Helper function to determine event status
export const getEventStatus = (dateTime) => {
  const now = new Date();
  const eventDate = new Date(dateTime);
  const twelveHoursBefore = new Date(eventDate.getTime() - 12 * 60 * 60 * 1000);

  if (now < twelveHoursBefore) {
    return 'upcoming';
  } else if (now >= twelveHoursBefore && now < eventDate) {
    return 'ongoing';
  } else {
    return 'expired';
  }
};

// Helper function to get events by status
export const getEventsByStatus = (status) => {
  return eventData.filter(event => getEventStatus(event.dateTime) === status);
};

// Helper function to get time until event
export const getTimeUntilEvent = (dateTime) => {
  const now = new Date();
  const eventDate = new Date(dateTime);
  const timeDiff = eventDate.getTime() - now.getTime();

  if (timeDiff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
