export const allServices = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    image: require("../assets/images/services/web-development.webp"),
    desc: "Transform your digital vision into reality with cutting-edge web solutions. We build scalable, high-performance applications that drive business growth and deliver exceptional user experiences.",
    link: "/web-development",
  },
  {
    id: 2,
    title: "App Development",
    image: require("../assets/images/services/app-development.webp"),
    desc: "Empower your business with custom mobile applications that engage users and boost productivity. From concept to deployment, we create apps that make an impact.",
    link: "/app-development",
  },
  {
    id: 3,
    title: "Artificial Intelligence Development",
    image: require("../assets/images/services/ai.webp"),
    desc: "Unlock the potential of intelligent automation and data-driven insights. Our AI solutions streamline operations, enhance decision-making, and create competitive advantages for your business.",
    link: "/ai-development",
  },
];

// Web Development Services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Custom Website Design",
    image: require("../assets/images/landing page/Custom Website Design.webp"),
    description:
      "Create a lasting impression with bespoke website designs that capture your brand essence. We craft pixel-perfect, responsive interfaces that engage visitors and convert them into loyal customers.",
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    image: require("../assets/images/landing page/E-commerce Solutions.webp"),
    description:
      "Launch powerful online stores with robust e-commerce platforms. We integrate secure payment systems, inventory management, and user-friendly shopping experiences to maximize your revenue.",
  },
  {
    id: 3,
    title: "Content Management Systems",
    image: require("../assets/images/landing page/Content Management Systems.webp"),
    description:
      "Take control of your digital content with intuitive CMS platforms. We implement flexible content management solutions that empower you to update and manage your website effortlessly.",
  },
  {
    id: 4,
    title: "API Integration",
    image: require("../assets/images/landing page/API Integration.webp"),
    description:
      "Seamlessly connect your digital ecosystem with powerful API integrations. From payment processors to marketing automation tools, we ensure all your systems work in perfect harmony.",
  },
  {
    id: 5,
    title: "Website Maintenance & Support",
    image: require("../assets/images/landing page/Website Maintenance & Support.webp"),
    description:
      "Keep your website running at peak performance with our comprehensive maintenance services. We handle security patches, performance optimization, and technical support so you can focus on your business.",
  },
];

// App Development Services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landing page/iOS App Development.webp"),
    description:
      "Build premium iOS applications that leverage the full potential of Apple's ecosystem. Our apps deliver exceptional performance on iPhone, iPad, and Apple Watch with native features and smooth interactions.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landing page/Android App Development.webp"),
    description:
      "Reach millions of Android users with feature-rich mobile applications. We develop scalable, secure apps that perform flawlessly across diverse Android devices and screen sizes.",
  },
  {
    id: 3,
    title: "Cross-Platform App Development",
    image: require("../assets/images/landing page/Cross-Platform App Development.webp"),
    description:
      "Maximize your reach with cost-effective cross-platform solutions. Using cutting-edge frameworks, we build unified apps that deliver native-like experiences on both iOS and Android platforms.",
  },
  {
    id: 4,
    title: "UI/UX Design for Apps",
    image: require("../assets/images/landing page/UIUX Design for Apps.webp"),
    description:
      "Transform user interactions with stunning app designs. We create intuitive interfaces and delightful user experiences that keep your audience engaged and coming back for more.",
  },
  {
    id: 5,
    title: "App Testing & Deployment",
    image: require("../assets/images/landing page/App Testing & Deployment.webp"),
    description:
      "Launch with confidence through comprehensive testing and deployment services. We ensure your app meets the highest quality standards before reaching app stores and your users.",
  },
];

// Service details page content
export const serviceDetailsList = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    shortDescription: "Comprehensive digital solutions from concept to launch",
    heroImage: "/images/services/web-dev.jpg",
    overview:
      "We engineer modern web applications that combine elegant design with powerful functionality. Our full-stack expertise ensures every layer of your application works seamlessly together, from stunning user interfaces to robust server architectures, delivering solutions that scale with your business ambitions.",
    features: [
      "Tailored web application engineering",
      "Mobile-optimized responsive design",
      "Advanced API development and third-party integrations",
      "Strategic database architecture and performance tuning",
      "Cloud infrastructure and automated deployment",
      "Progressive Web Applications for offline capability",
      "Dynamic Single Page Applications",
      "Complete e-commerce platform development",
    ],
    technologies: [
      {
        name: "Frontend",
        items: ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Backend",
        items: ["Node.js", "Express", "Python", "PHP", "REST APIs"],
      },
      {
        name: "Databases",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
      },
      {
        name: "Cloud & DevOps",
        items: ["AWS", "Azure", "Docker", "Git", "CI/CD"],
      },
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description: "Understanding your vision and technical requirements",
      },
      {
        step: 2,
        title: "Strategy",
        description: "Crafting user experience and system architecture",
      },
      {
        step: 3,
        title: "Engineering",
        description: "Building with modern frameworks and best practices",
      },
      {
        step: 4,
        title: "Quality Assurance",
        description: "Rigorous testing across devices and scenarios",
      },
      {
        step: 5,
        title: "Launch",
        description: "Seamless deployment with performance monitoring",
      },
      {
        step: 6,
        title: "Evolution",
        description: "Continuous improvements and feature enhancements",
      },
    ],
    benefits: [
      "End-to-end development expertise under one roof",
      "Accelerated project delivery timelines",
      "Optimized performance across all application layers",
      "Unified codebase with maintainable architecture",
      "Built-in scalability for business expansion",
    ],
  },
  {
    id: 2,
    title: "App Development",
    shortDescription: "Mobile-first solutions for iOS and Android",
    heroImage: "/images/services/app-dev.jpg",
    overview:
      "We transform innovative ideas into powerful mobile experiences. Whether you need native performance or cross-platform efficiency, our development approach delivers apps that users love and businesses rely on, combining cutting-edge technology with intuitive design.",
    features: [
      "Native iOS app development with Swift",
      "Native Android development with Kotlin",
      "Cross-platform solutions for wider reach",
      "Touch-optimized user interfaces",
      "Offline-first architecture",
      "Real-time push notification systems",
      "Secure in-app purchase implementation",
      "Seamless social platform connectivity",
    ],
    technologies: [
      { name: "Native Development", items: ["Swift", "Kotlin", "Xcode", "Android Studio"] },
      { name: "Cross-Platform", items: ["React Native", "Flutter", "Expo"] },
      { name: "Backend Services", items: ["Firebase", "AWS", "Node.js", "GraphQL"] },
      { name: "Quality Assurance", items: ["XCTest", "Espresso", "Jest", "Detox"] },
    ],
    process: [
      {
        step: 1,
        title: "Ideation",
        description: "Validating your app concept and market fit",
      },
      {
        step: 2,
        title: "Blueprint",
        description: "Creating wireframes and technical specifications",
      },
      { step: 3, title: "Interface Design", description: "Crafting intuitive mobile experiences" },
      { step: 4, title: "Build", description: "Developing features with agile methodology" },
      { step: 5, title: "Verification", description: "Comprehensive testing on real devices" },
      { step: 6, title: "Release", description: "Publishing to App Store and Google Play" },
    ],
    benefits: [
      "Rapid development with modern frameworks",
      "Cost-efficient cross-platform deployment",
      "Native device feature integration",
      "Fluid animations and responsive interactions",
      "Optimized for app store discoverability",
    ],
  },
  {
    id: 3,
    title: "Artificial Intelligence Development",
    shortDescription: "Smart automation and predictive intelligence",
    heroImage: "/images/services/ai.jpg",
    overview:
      "We harness artificial intelligence to solve complex business challenges and unlock new opportunities. From machine learning algorithms that predict customer behavior to natural language systems that understand user intent, our AI solutions transform how businesses operate and compete.",
    features: [
      "Custom machine learning model development",
      "Natural language understanding and generation",
      "Computer vision and image recognition",
      "Advanced predictive analytics",
      "Intelligent recommendation systems",
      "Conversational AI and chatbot solutions",
      "Workflow automation with AI",
      "Deep learning neural network design",
    ],
    technologies: [
      {
        name: "ML Frameworks",
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
      },
      { name: "Programming", items: ["Python", "R", "JavaScript"] },
      { name: "NLP Tools", items: ["OpenAI GPT", "Hugging Face", "spaCy", "NLTK"] },
      { name: "Vision", items: ["OpenCV", "YOLO", "TensorFlow Lite"] },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Identifying AI use cases for your business",
      },
      {
        step: 2,
        title: "Data Preparation",
        description: "Collecting and preprocessing training datasets",
      },
      {
        step: 3,
        title: "Algorithm Design",
        description: "Selecting and customizing AI models",
      },
      {
        step: 4,
        title: "Training & Validation",
        description: "Developing and fine-tuning models",
      },
      {
        step: 5,
        title: "Integration",
        description: "Deploying AI into your applications",
      },
      {
        step: 6,
        title: "Optimization",
        description: "Continuous learning and performance improvement",
      },
    ],
    benefits: [
      "Automated processes reducing manual effort",
      "Personalized user experiences at scale",
      "Data-driven predictions with high accuracy",
      "Round-the-clock intelligent automation",
      "Innovation-driven competitive positioning",
    ],
  },
];
