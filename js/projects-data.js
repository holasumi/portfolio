window.PROJECTS = [
  {
    slug: "acid-rain-digital-twin",
    resource: {
      url: "https://a360.co/4Abb5n6",
      label: "View 3D model on Autodesk",
      description:
        "Explore the project’s 3D design in the Autodesk viewer. The model documents the physical design associated with the acid rain digital twin research.",
    },
    title: "Digital Twin",
    images: [
      {
        src: "assets/digital-twin-1.png",
        alt: "Digital Twin enclosure — front view with door closed",
      },
      {
        src: "assets/digital-twin-2.png",
        alt: "Digital Twin enclosure — internal components with door open",
      },
      {
        src: "assets/digital-twin-3.png",
        alt: "Digital Twin enclosure — rear view",
      },
    ],
    date: "Dec 2025 — Present",
    status: "Ongoing",
    role: "Researcher — hardware & 3D design",
    context: "University research project",
    blurb:
      "Real time acid rain detection device with expert-fuzzy validation, 3D designed product.",
    tags: ["Research", "Embedded System", "Fusion 360", "IoT"],
    stack: ["Embedded hardware", "Environmental sensors", "Fusion 360"],
    overview: [
      "A research project at Telkom University building a real time acid rain detection device — part of a digital twin system for environmental monitoring and analysis.",
      "Measurements are validated with an expert-fuzzy method, combining fuzzy logic with expert knowledge so the readings the system reports are reliable enough for research use. The device streams its data in real time, and the work is being prepared for publication and presentation.",
    ],
    highlights: [
      "Designed the device's 3D in Fusion 360",
      "Assembled and troubleshot the sensing hardware",
      "Collected and processed measurement data",
      "Prepared research reports for publication and presentation",
    ],
    art: `<g class="rain"><line x1="40" y1="10" x2="34" y2="28"/><line x1="80" y1="4" x2="74" y2="22"/><line x1="120" y1="12" x2="114" y2="30"/><line x1="160" y1="6" x2="154" y2="24"/><line x1="60" y1="30" x2="54" y2="48"/><line x1="140" y1="28" x2="134" y2="46"/></g><path d="M100 45 C 88 62, 82 72, 82 82 a18 18 0 0 0 36 0 c0-10-6-20-18-37z" class="drop"/><path d="M20 108 h160" class="axis"/><path d="M20 108 L50 92 80 100 110 78 140 88 170 70" class="line"/>`,
  },
  {
    slug: "smart irrigation",
    imageFocus: "irrigation",
    imageLayout: "portrait",
    images: [
      {
        src: "assets/smart-irrigation-system.jpg",
        alt: "Smart irrigation installation with ESP32 controller, power supply, relay, pump, and irrigation tubing",
        width: 1884,
        height: 4080,
      },
    ],
    resource: {
      url: "https://youtu.be/b9oeM8eas1g",
      label: "Watch irrigation demonstration",
      description:
        "Watch the Smart Irrigation System demonstration alongside the system overview and hardware contributions below.",
    },
    videoId: "b9oeM8eas1g",
    title: "Smart Irrigation System",
    date: "Sept 2025 — Jan 2026",
    status: "Completed",
    role: "System design & hardware",
    context: "Campus project",
    blurb:
      "ESP32 based automated irrigation running in real time, fully integrated with a web dashboard.",
    tags: ["ESP32", "IoT", "Web", "Automation"],
    stack: ["ESP32", "C/C++ (Arduino)", "Sensors & actuators", "Web dashboard"],
    overview: [
      "An automated irrigation system built around the ESP32 that runs in real time and is fully integrated with a website, so watering can be monitored and managed remotely.",
      "The system reads field conditions through its sensors and drives the irrigation automatically, no manual intervention needed — while the web dashboard keeps everything observable.",
    ],
    highlights: [
      "Contributed to the overall system design",
      "Assembled the sensing and control circuit around the ESP32",
      "Integrated the device with a website for real time monitoring",
      "Diagnosed and fixed hardware issues throughout development",
    ],
    art: `<path d="M100 100 V60" class="stem"/><path d="M100 75 C 80 70, 70 55, 72 40 C 90 42, 100 58, 100 75z" class="leaf"/><path d="M100 62 C 120 58, 130 44, 128 30 C 110 32, 100 47, 100 62z" class="leaf"/><path d="M60 100 h80" class="axis"/><path d="M148 40 c-6 9-9 14-9 19a9 9 0 0 0 18 0 c0-5-3-10-9-19z" class="drop"/><circle cx="52" cy="86" r="4" class="dot"/><circle cx="52" cy="70" r="4" class="dot dim"/>`,
  },
  {
    slug: "weapon-rack-v3",
    imageFocus: "rack-v3",
    images: [
      {
        src: "assets/weapon-rack-v3.jpg?v=2",
        alt: "Automated Weapon Rack V3 with five storage slots and an access control panel",
        width: 4080,
        height: 3060,
      },
    ],
    title: "Automated Weapon Rack V3",
    date: "Nov 2024 — Jul 2025",
    status: "Completed · Deployed",
    role: "Security system lead",
    context: "CoE STAS-RG · Yonzipur armory, Pangalengan",
    blurb:
      "Security system for the 3rd gen automated weapon storage rack, integrated with a web platform. Deployed at the Yonzipur armory.",
    tags: ["RFID", "Linear Actuators", "Security", "Web", "Database"],
    stack: ["RFID", "Microcontroller (C/C++)", "Web platform", "Database"],
    overview: [
      "The Automated Weapon Rack is a weapon storage system used at the Yonzipur armory in Pangalengan. It secures weapons with RFID-based locking and keeps a database that records every weapon usage.",
      "For the third generation, I was responsible for developing the rack's security system and its integration with a web platform hardening how physical access is granted and how usage is tracked.",
    ],
    highlights: [
      "Owned development of the security system for the 3rd generation rack",
      "RFID-based locking controls physical access to the rack",
      "Usage database records who takes which weapon, and when",
      "Integrated the rack with a web platform for monitoring and administration",
      "Led the Automation Weapon Rack team within CoE STAS-RG",
    ],
    art: `<rect x="70" y="52" width="60" height="46" rx="8" class="body"/><path d="M82 52 v-10 a18 18 0 0 1 36 0 v10" class="shackle"/><circle cx="100" cy="72" r="6" class="key"/><path d="M100 78v10" class="key"/><rect x="20" y="30" width="34" height="22" rx="4" class="card-ic"/><path d="M150 40 a24 24 0 0 1 0 34 M158 32 a36 36 0 0 1 0 50" class="wave"/>`,
  },
  {
    slug: "weapon-rack-v2",
    imageFocus: "rack-v2",
    imageLayout: "portrait",
    images: [
      {
        src: "assets/weapon-rack-v2.jpg?v=2",
        alt: "Automated Weapon Rack V2 exhibition with rack prototype, project poster, and monitoring dashboard",
        width: 3024,
        height: 4032,
      },
    ],
    resource: {
      url: "https://youtu.be/5cux0I_ca80",
      label: "Watch V2 demonstration",
      description:
        "This video documents Automation Weapon Rack V2, the second-generation storage project described here.",
    },
    videoId: "5cux0I_ca80",
    title: "Automated Weapon Rack V2",
    date: "Jul 2023 — Oct 2024",
    status: "Completed · Deployed",
    role: "Security system design & build",
    context: "CoE STAS-RG · Yonzipur armory, Pangalengan",
    blurb:
      "Designed & built the RFID based locking system with a usage logging database for the armory's weapon storage.",
    tags: ["RFID", "Arduino", "Security", "Web"],
    stack: ["RFID", "Arduino (C/C++)", "Database", "Web integration"],
    overview: [
      "The second generation of the Automated Weapon Rack — the version that established the system's core security model, deployed in the field at the Yonzipur armory.",
      "I was responsible for designing and building the security system: RFID-based locking for physical access control, backed by a database that records weapon usage, all integrated with a website.",
    ],
    highlights: [
      "Designed and built the rack's security system",
      "Implemented RFID-based locking for physical access control",
      "Built usage logging into a database for accountability",
      "Integrated the system with a website",
      "Field experience from this version informed the V3 redesign",
    ],
    art: `<rect x="30" y="28" width="42" height="64" rx="4" class="body"/><rect x="79" y="28" width="42" height="64" rx="4" class="body"/><rect x="128" y="28" width="42" height="64" rx="4" class="body"/><path d="M44 44h14M93 44h14M142 44h14" class="key"/><circle cx="51" cy="72" r="5" class="key"/><circle cx="100" cy="72" r="5" class="dot"/><circle cx="149" cy="72" r="5" class="key"/>`,
  },
  {
    slug: "driver-behavior-detection",
    images: [
      {
        src: "assets/driver-behavior-detection-transparent.png",
        alt: "Driver Behavior Detection camera monitoring and session history dashboards",
        width: 2000,
        height: 1414,
      },
    ],
    resource: {
      url: "https://holasumi.github.io/driver.BehaviorDetection/",
      label: "Open Driver Behavior Detection",
      description:
        "Explore the published Driver Behavior Detection website for the project’s web presentation, alongside the detection pipeline described here.",
    },
    title: "Driver Behavior Detection",
    date: "Sept 2024",
    status: "Completed",
    role: "Developer",
    context: "Road-safety analysis project",
    blurb:
      "Python vision system detecting drowsiness, phone use while driving, and facial expressions for road safety analysis.",
    tags: ["Python", "Computer Vision", "AI"],
    stack: ["Python", "Computer vision", "Real time video processing"],
    overview: [
      "A Python based system that watches the driver not the road, and flags risky behavior in real time, built for road safety analysis.",
      "The system detects driver drowsiness, phone use while driving, and reads the driver's facial expressions, turning a camera feed into an assessment of the driver's state.",
    ],
    highlights: [
      "Built the full detection pipeline in Python",
      "Real time drowsiness detection",
      "Detects phone use while driving",
      "Facial-expression recognition for driver state analysis",
    ],
    art: `<rect x="60" y="20" width="80" height="80" rx="6" class="scan"/><path d="M60 34h-14M60 20v14M140 34h14M140 20v14M60 86h-14M60 100v14M140 86h14M140 100v14" class="corner"/><circle cx="86" cy="52" r="4" class="eye"/><circle cx="114" cy="52" r="4" class="eye"/><path d="M86 74 q14 10 28 0" class="mouth"/><path d="M60 60 h80" class="scanline"/>`,
  },
  {
    slug: "analog-line-follower",
    resource: {
      url: "https://drive.google.com/drive/folders/1dhW0Tey0PbjlSfqXd2vV5KnC_GsFIjoT?usp=drive_link",
      label: "View project references on Google Drive",
    },
    title: "Analog Line Follower",
    date: "Jun 2023",
    status: "Completed",
    role: "Designer & builder",
    context: "Electronics project",
    blurb:
      "Line follower robot built with photodiode sensors and comparator based control, no microcontroller at all.",
    tags: ["Analog", "Electronics", "Robotics"],
    stack: [
      "Photodiode sensors",
      "Comparators (op-amp)",
      "Motor driver",
      "Analog electronics",
    ],
    overview: [
      "A line follower robot with zero code: no microcontroller, no firmware the entire control loop lives in analog electronics.",
      "Photodiode sensors read the track line and comparator circuits translate those readings directly into motor commands. Getting it to follow the line smoothly meant tuning the hardware itself, which is a great way to really understand what a control loop is doing.",
    ],
    highlights: [
      "Photodiode sensor array reads the track line",
      "Comparator-based control logic pure analog",
      "Motor response tuned entirely in hardware",
      "No microcontroller and no code involved",
    ],
    art: `<path d="M20 90 C 60 90, 70 40, 110 40 S 170 80, 185 78" class="track"/><rect x="86" y="26" width="36" height="24" rx="5" class="body"/><circle cx="94" cy="56" r="6" class="wheel"/><circle cx="114" cy="56" r="6" class="wheel"/><path d="M96 26 l-6 -10 M112 26 l6 -10" class="antenna"/>`,
  },
  {
    slug: "auto-lighting-ldr",
    resource: {
      url: "https://youtu.be/7jdUyByKyb0",
      label: "Watch lighting demonstration",
      description:
        "Watch the Automatic Lighting Circuit with LDR Sensor demonstration, documenting the sensor-driven lighting project.",
    },
    videoId: "7jdUyByKyb0",
    title: "Automatic Lighting Circuit with LDR Sensor",
    date: "Jan 2023",
    status: "Completed",
    role: "Designer & builder",
    context: "Electronics project",
    blurb:
      "AC powered lighting circuit that switches on ambient light intensity using an LDR sensor, pure hardware logic.",
    tags: ["Analog", "Sensors", "AC Circuit"],
    stack: ["LDR sensor", "Switching circuit", "AC power"],
    overview: [
      "An AC-powered automatic lighting circuit: when the room gets dark the lamp turns on, when it brightens the lamp turns off — with no microcontroller involved.",
      "An LDR (light-dependent resistor) senses ambient light intensity and a switching circuit does the rest. My first step into sensor-driven automation, and the start of everything on this page.",
    ],
    highlights: [
      "LDR sensor measures ambient light intensity",
      "Switching circuit drives the AC lamp automatically",
      "Runs standalone, no microcontroller, no code",
      "First project in sensor-driven automation",
    ],
    art: `<circle cx="100" cy="52" r="22" class="bulb"/><path d="M92 74 h16 M94 82 h12 M96 90 h8" class="base"/><path d="M100 14v-6M138 52h6M56 52h6M127 25l4-4M73 25l-4-4" class="ray"/><path d="M30 100 q10 -12 20 0 t20 0" class="wave"/>`,
  },
];
