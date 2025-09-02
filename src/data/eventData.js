// Event data structure and sample data
export const eventData = [
  {
    id: 1,
    title: "DecodeX – Tech Escape Room",
    dateTime: "2025-09-12T14:00:00",
    duration: "2 Hours",
    overview:
      "A round-based coding puzzle challenge where teams race against the clock to unlock the final solution.",

    // 🔽 Sub-events inside DecodeX
    event_1: [
      {
        name: "DecodeX – Tech Escape Room",
        instructions: [
          "Teams must consist of 2–3 members.",
          "Each player will participate in one round; if the team has 2 members, they can alternate between rounds.",
          "Props and materials will be provided by the organizers.",
          "Each team gets 30 minutes to complete the challenge.",
          "Maximum of 5 submission attempts per team.",
          "Follow all instructions from the coordinators at all times.",
        ],
        generalRules: [
          "Teams must consist of 2–3 members.",
          "Each player will participate in one round; alternate if only 2 members.",
          "Props and materials will be provided by the organizers.",
          "30 minutes to complete the challenge.",
          "Maximum 5 submission attempts for the final answer.",
          "No external devices, internet, or outside help allowed.",
          "Follow all instructions from the coordinators.",
        ],
        eventStructure: [
          "Solve a sequence of round-based puzzles to progress through the challenge.",
          "Collaborate effectively to decipher clues and determine the final solution within the allotted time.",
          "A maximum of five submission attempts is permitted for the final answer.",
        ],
        prerequisites: [
          "Each round will be attempted by a different team member.",
          "Every member should have at least one of the following skills: Basic programming fundamentals, Python programming basics, Binary conversion (decimal ↔ binary), Logical thinking and problem-solving skills.",
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
          "DON'T: Seek external assistance or use unauthorized devices.",
        ],
      },
    ],
    poster_pdf: "/poster_pdf/DecodeX.pdf",
    poster: "/images/DecodeX_Poster.png",
    googleFormLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScGdzhEAHIFk7jdWxlDP5cMJnqLfh1L_Mgz7b39x1wj06GvaQ/viewform",
    qrCodeImage: "/images/DecodeX.jpg",

    // 🔽 Winners (structured version only)
    winners: {
      //NOTE - Do not delete
      // event_1: [
      //   {
      //     place: "Winner",
      //     event: "DecodeX",
      //     teamName: "Creative Minds",
      //     members: ["Emily Davis", "James Wilson", "Lisa Zhang"],
      //     certificate: "/certificates/logo-designing-winner.pdf",
      //   },
      //   {
      //     place: "Runner-up",
      //     event: "DecodeX",
      //     teamName: "Visionary Artists",
      //     members: ["Emily Davis", "James Wilson", "Lisa Zhang"],
      //     certificate: "/certificates/logo-designing-runner.pdf",
      //   },
      // ],
      //NOTE - Do not delete
      // event_2: [
      //   {
      //     place: "Winner",
      //     event: "Street Play",
      //     teamName: "Stage Warriors",
      //     members: ["Emily Davis", "James Wilson", "Lisa Zhang"],
      //     certificate: "/certificates/street-play-winner.pdf",
      //   },
      //   {
      //     place: "Runner-up",
      //     event: "Street Play",
      //     teamName: "Drama Force",
      //     members: ["Emily Davis", "James Wilson", "Lisa Zhang"],
      //     certificate: "/certificates/street-play-runner.pdf",
      //   },
      //   {
      //     place: "Winner",
      //     event: "Poster Making",
      //     teamName: "Artivists",
      //     members: ["Emily Davis", "James Wilson", "Lisa Zhang"],
      //     certificate: "/certificates/poster-making-winner.pdf",
      //   },
      //   {
      //     place: "Runner-up",
      //     event: "Poster Making",
      //     teamName: "Color Splash",
      //     members: ["Emily Davis", "James Wilson", "Lisa Zhang"],
      //     certificate: "/certificates/poster-making-runner.pdf",
      //   },
      // ],
    },
  },
  {
    id: 2,
    title: "Anti-Ragging Awareness Campaign",
    dateTime: "2025-08-18T14:00:00",
    duration: "2 Hours",
    overview:
      "Objective: To raise awareness about the harmful effects of ragging and promote respect, unity, and empathy in our campus community.",

    eventCategories: {
      preSubmissionEvents: [
        {
          name: "Logo Designing",
          theme: "Anti-Ragging Awareness",
          format: "Digital (JPEG/PNG, High Resolution)",
          deadline: "17 August, 2025",
          judgingCriteria: ["Creativity", "Relevance", "Clarity"],
          submissionLink:
            "https://drive.google.com/drive/folders/14cK5EQ9psoeCRGTsf-BY-9aOMrp2u9W6",
        },
        {
          name: "Short Videos & Reels",
          duration: "2–5 minutes",
          theme: "Say No to Ragging / Campus Unity",
          format: "MP4 (Portrait or Landscape)",
          deadline: "17 August, 2025",
          judgingCriteria: ["Impact", "Storytelling", "Originality"],
          submissionLink:
            "https://drive.google.com/drive/folders/1ON0_w6Fi9rx7o3NuqiUTIIxgAv9xI8Jl",
        },
      ],
      onSpotEvents: [
        {
          name: "Street Play",
          timeLimit: "8–10 minutes",
          teamSize: "5–12 members",
          judgingCriteria: [
            "Performance",
            "Message Delivery",
            "Audience Engagement",
          ],
        },
        {
          name: "Poster Making",
          categories: [
            "Handmade – Participants must bring their own materials (colors, brushes, chart paper, etc.)",
            "Digital – Bring your own Laptops; Wi-Fi available",
          ],
          theme: "Anti-Ragging Awareness",
          judgingCriteria: ["Creativity", "Visual Appeal", "Relevance"],
        },
      ],
    },

    generalRules: [
      "Entries must strictly follow the theme.",
      "Plagiarism will result in disqualification.",
      "Pre-submission entries must be uploaded via the submission link before the deadline.",
      "Judges’ decision will be final and binding.",
    ],

    poster_pdf: "/poster_pdf/anti_ragging.pdf",
    poster: "/images/anti-ragging_poster.png",
    googleFormLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScOiznLK3i1VlgmrityVkKHuoynaCFYFpyx7nSgT4qvUU9GEQ/viewform",
    qrCodeImage: "/images/Anti-ragging.jpg",

    winners: {
      //NOTE - Do not delete
      event_1: [
        {
          place: "Winner",
          event: "Logo Designing",
          teamName: "Sushanth Sapare",
          members: ["Sushanth Sapare",],
          certificate: "/certificates/Logo_Designing_(1st).pdf",
        },
        {
          place: "Runner-up",
          event: "Logo Designing",
          teamName: "Harsha N U",
          members: ["Harsha N U",],
          certificate: "/certificates/Logo_Designing_(2nd).pdf",
        },
        {
          place: "2nd Runner-up",
          event: "Logo Designing",
          teamName: "Anmol Panigrahi",
          members: ["Anmol Panigrahi",],
          certificate: "/certificates/Logo_Designing_(3rd).pdf",
        },
        // {
        //   place: "Winner",
        //   event: "Short Videos & Reels",
        //   teamName: "Unity Crew",
        //   members: ["Emily Davis", "James Wilson", "Lisa Zhang"],
        //   certificate: "/certificates/short-videos-winner.pdf",
        // },
        // {
        //   place: "Runner-up",
        //   event: "Short Videos & Reels",
        //   teamName: "Peace Makers",
        //   members: ["Emily Davis", "James Wilson", "Lisa Zhang"],
        //   certificate: "/certificates/short-videos-runner.pdf",
        // },
      ],
      //NOTE - Do not delete
      event_2: [
        {
          place: "Winner",
          event: "Hand Poster Making",
          teamName: "Ananya K",
          members: ["Ananya K",],
          certificate: "/certificates/Hand_Made_Poster_(1st).pdf",
        },
        {
          place: "Runner-up",
          event: "Hand Poster Making",
          teamName: "Harini A",
          members: ["Harini A"],
          certificate: "/certificates/Hand_Made_Poster_(2nd).pdf",
        },
        {
          place: "Winner",
          event: "Digital Poster Making",
          teamName: "Prateek G K",
          members: ["Prateek G K",],
          certificate: "/certificates/Digital_Poster_Designing_(1st).pdf",
        },
        {
          place: "Runner-up",
          event: "Digital  Poster Making",
          teamName: "Sushanth Sapare",
          members: ["Sushanth Sapare",],
          certificate: "/certificates/Digital_Poster_Designing_(2nd).pdf",
        },
      ],
    },
  },
  //NOTE - Do not delete
  // {
  //   id: 3,
  //   title: "AI/ML Competition 2025",
  //   dateTime: "2025-08-10T09:00:00",
  //   duration: "1 Day",
  //   overview:
  //     "A competitive machine learning challenge where participants build models to solve complex data science problems. Winners receive cash prizes and internship opportunities.",

  //   // 🔽 Sub-events inside AI/ML
  //   subEvents: [
  //     {
  //       name: "Round 1 – Data Preprocessing & EDA",
  //       instructions: [
  //         "Download the dataset from the competition portal.",
  //         "Perform data cleaning, preprocessing, and exploratory analysis.",
  //         "Submit your Jupyter notebook with explanations.",
  //       ],
  //       generalRules: [
  //         "Individual participation only.",
  //         "Code must be well-documented and reproducible.",
  //         "Any plagiarized code will lead to disqualification.",
  //       ],
  //       eventStructure: [
  //         "Given dataset with missing values & noise.",
  //         "Participants perform preprocessing and submit findings.",
  //         "Top 50% advance to Round 2.",
  //       ],
  //       prerequisites: [
  //         "Python programming basics.",
  //         "Knowledge of Pandas, NumPy, and visualization libraries.",
  //         "Basic understanding of feature engineering.",
  //       ],
  //       dosAndDonts: [
  //         "DO: Use Jupyter Notebook or Google Colab.",
  //         "DO: Comment your code clearly.",
  //         "DON'T: Copy code from external repositories.",
  //       ],
  //     },
  //     {
  //       name: "Round 2 – Model Building & Evaluation",
  //       instructions: [
  //         "Build a machine learning model to predict outcomes on the test dataset.",
  //         "Submit model file and documentation.",
  //         "Explain evaluation metrics used.",
  //       ],
  //       generalRules: [
  //         "Only standard ML frameworks allowed (Scikit-learn, TensorFlow, PyTorch).",
  //         "Final model will be tested on unseen data.",
  //         "Submissions after deadline will not be accepted.",
  //       ],
  //       eventStructure: [
  //         "Train on training dataset.",
  //         "Predict results on test dataset.",
  //         "Models ranked based on accuracy & F1-score.",
  //       ],
  //       prerequisites: [
  //         "Knowledge of regression/classification models.",
  //         "Model evaluation techniques.",
  //         "Experience with Python ML frameworks.",
  //       ],
  //       dosAndDonts: [
  //         "DO: Validate your model properly.",
  //         "DO: Provide detailed documentation.",
  //         "DON'T: Use external datasets.",
  //         "DON'T: Share solutions with other participants.",
  //       ],
  //     },
  //   ],

  //   poster_pdf: "/poster_pdf/aiml.pdf",
  //   poster: "/images/aiml-poster.jpg",
  //   googleFormLink: "https://forms.google.com/aiml-registration",
  //   qrCodeImage: "/images/aiml-qr.png",

  //   // 🔽 Winners (structured version like DecodeX)
  //   winners: {
  //     event_1: [
  //       {
  //         place: "Winner",
  //         event: "AI/ML – Round 1 (EDA)",
  //         teamName: "Data Wizards",
  //         members: ["Alice Johnson", "Bob Carter"],
  //         certificate: "/certificates/aiml-round1-winner.pdf",
  //       },
  //       {
  //         place: "Runner-up",
  //         event: "AI/ML – Round 1 (EDA)",
  //         teamName: "Insight Seekers",
  //         members: ["Charlie Brown", "Diana Lee"],
  //         certificate: "/certificates/aiml-round1-runner.pdf",
  //       },
  //     ],
  //   },
  // },
  //NOTE - Do not delete
  // {
  //   id: 4,
  //   title: "Web Development Bootcamp",
  //   dateTime: "2025-08-25T08:00:00",
  //   duration: "5 days",
  //   overview:
  //     "Intensive 5-day bootcamp covering modern web development technologies including React, Node.js, and database management.",

  //   // 🔽 Sub-events inside Bootcamp
  //   subEvents: [
  //     {
  //       name: "Day 1 – HTML, CSS & Git Basics",
  //       instructions: [
  //         "Setup GitHub account.",
  //         "Build your first static webpage.",
  //       ],
  //       generalRules: [
  //         "Laptop is mandatory.",
  //         "Daily tasks must be pushed to GitHub.",
  //       ],
  //       eventStructure: [
  //         "Morning lectures, afternoon coding lab.",
  //         "Daily assignment submission.",
  //       ],
  //       prerequisites: ["Basic HTML & CSS knowledge."],
  //       dosAndDonts: [
  //         "DO: Ask questions freely.",
  //         "DO: Help peers when possible.",
  //         "DON'T: Skip submissions.",
  //       ],
  //     },
  //     {
  //       name: "Day 2 – JavaScript Essentials",
  //       instructions: [
  //         "Implement interactive features with JS.",
  //         "Submit a mini project.",
  //       ],
  //       generalRules: ["All code must be original."],
  //       eventStructure: [
  //         "Live coding + project assignment.",
  //         "Submission by end of day.",
  //       ],
  //       prerequisites: ["Basic JavaScript knowledge."],
  //       dosAndDonts: [
  //         "DO: Comment your code.",
  //         "DON'T: Copy from online sources.",
  //       ],
  //     },
  //     {
  //       name: "Day 3 – React Development",
  //       instructions: [
  //         "Build a React app with components.",
  //         "Deploy to Netlify.",
  //       ],
  //       generalRules: [
  //         "Deployment is mandatory.",
  //         "Code reviews at the end of the day.",
  //       ],
  //       eventStructure: ["Hands-on React session."],
  //       prerequisites: ["Node.js and npm installed."],
  //       dosAndDonts: [
  //         "DO: Follow coding standards.",
  //         "DON'T: Push broken builds.",
  //       ],
  //     },
  //     {
  //       name: "Day 4 – Backend with Node.js",
  //       instructions: [
  //         "Build REST APIs with Express.",
  //         "Connect to a database.",
  //       ],
  //       generalRules: ["Submit working APIs with documentation."],
  //       eventStructure: ["Lecture + backend project."],
  //       prerequisites: ["Knowledge of JavaScript ES6."],
  //       dosAndDonts: [
  //         "DO: Write clean API endpoints.",
  //         "DON'T: Forget error handling.",
  //       ],
  //     },
  //     {
  //       name: "Day 5 – Final Project Presentation",
  //       instructions: [
  //         "Build a full-stack project in teams.",
  //         "Present project to mentors.",
  //       ],
  //       generalRules: ["Team size: 2–3 members."],
  //       eventStructure: ["Morning project sprint.", "Evening presentations."],
  //       prerequisites: ["Knowledge of frontend & backend concepts."],
  //       dosAndDonts: ["DO: Work as a team.", "DON'T: Miss the presentation."],
  //     },
  //   ],

  //   // 🔽 Main-level details
  //   instructions: [
  //     "Install Node.js and VS Code before the bootcamp.",
  //     "Create accounts on GitHub and Netlify.",
  //     "Bring a laptop with at least 8GB RAM.",
  //     "Join the bootcamp Discord server for updates.",
  //   ],
  //   generalRules: [
  //     "Minimum 80% attendance required for certification.",
  //     "All projects must be submitted to GitHub.",
  //     "Peer code reviews are mandatory.",
  //     "Final project presentation is required.",
  //     "No refunds after the bootcamp starts.",
  //   ],
  //   eventStructure: [
  //     "Day 1: HTML, CSS & Git basics.",
  //     "Day 2: JavaScript essentials.",
  //     "Day 3: React development.",
  //     "Day 4: Backend with Node.js.",
  //     "Day 5: Final project presentation.",
  //   ],
  //   prerequisites: [
  //     "Basic understanding of HTML, CSS, and JavaScript.",
  //     "Laptop with sufficient resources for development.",
  //     "GitHub account ready for project submissions.",
  //   ],
  //   dosAndDonts: [
  //     "DO: Complete daily assignments on time.",
  //     "DO: Help fellow participants when possible.",
  //     "DO: Ask questions during coding sessions.",
  //     "DON'T: Skip any sessions without prior notice.",
  //     "DON'T: Copy code without understanding.",
  //     "DON'T: Disrupt others during focused work time.",
  //   ],

  //   poster_pdf: "/poster_pdf/webdev_bootcamp.pdf",
  //   poster: "/images/webdev-poster.jpg",
  //   googleFormLink: "https://forms.google.com/webdev-registration",
  //   qrCodeImage: "/images/webdev-qr.png",

  //   winners: {
  //     event_1: [
  //       {
  //         place: "Winner",
  //         event: "AI/ML – Round 1 (EDA)",
  //         teamName: "Data Wizards",
  //         members: ["Alice Johnson", "Bob Carter"],
  //         certificate: "/certificates/aiml-round1-winner.pdf",
  //       },
  //       {
  //         place: "Runner-up",
  //         event: "AI/ML – Round 1 (EDA)",
  //         teamName: "Insight Seekers",
  //         members: ["Charlie Brown", "Diana Lee"],
  //         certificate: "/certificates/aiml-round1-runner.pdf",
  //       },
  //     ],
  //     event_2: [
  //       {
  //         place: "Best Project",
  //         event: "Full-Stack App",
  //         teamName: "Code Masters",
  //         members: ["Ryan Brown", "Nina Patel"],
  //         certificate: "/certificates/webdev-best-project.pdf",
  //       },
  //     ],
  //   },
  // },
];

// Convert human-readable duration (e.g. "1 Week", "2 Days", "3 Hours") → ms
const parseDuration = (durationStr) => {
  if (!durationStr) return 0;

  const [numStr, unitRaw] = durationStr.split(" ");
  const num = parseInt(numStr, 10) || 1;
  const unit = (unitRaw || "").toLowerCase();

  if (unit.includes("week")) return num * 7 * 24 * 60 * 60 * 1000;
  if (unit.includes("day")) return num * 24 * 60 * 60 * 1000;
  if (unit.includes("hour")) return num * 60 * 60 * 1000;
  if (unit.includes("minute")) return num * 60 * 1000;

  return 0;
};

// Default duration if event.duration is missing/invalid → 1 hour
const DEFAULT_DURATION_MS = 60 * 60 * 1000;

export const getEventStatus = (event) => {
  const now = new Date();
  const eventStart = new Date(event.dateTime || event.startTime);

  // Invalid/missing date → treat as upcoming
  if (isNaN(eventStart)) return "upcoming";

  const durationMs = parseDuration(event.duration) || DEFAULT_DURATION_MS;
  const eventEnd = new Date(eventStart.getTime() + durationMs);

  if (now < eventStart) {
    return "upcoming";
  } else if (now >= eventStart && now < eventEnd) {
    return "ongoing";
  } else {
    return "expired";
  }
};

// export const getEventStatus = (eventDateTime) => {
//   const now = new Date();
//   const eventTime = new Date(event.dateTime);

//   if (now < eventTime) return "upcoming";

//   // Same day, and current time >= event start
//   if (
//     now.toDateString() === eventTime.toDateString() &&
//     now >= eventTime
//   ) {
//     return "ongoing";
//   }

//   return "expired";
// };


// Helper: get events by status
export const getEventsByStatus = (status) => {
  return eventData.filter((event) => getEventStatus(event) === status);
};

// Helper: countdown until event start
export const getTimeUntilEvent = (dateTime) => {
  const now = new Date();
  const eventDate = new Date(dateTime);

  if (isNaN(eventDate)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

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

