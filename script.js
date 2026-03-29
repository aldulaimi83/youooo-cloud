const lessons = [
  {
    id: 1,
    level: "Beginner",
    title: "What Is Cloud Computing?",
    summary: "Understand the basic idea of cloud computing and why companies use it.",
    objectives: ["Define cloud computing", "Understand on-demand resources", "See why cloud matters"],
    content: `
      <p>Cloud computing means using computing resources like servers, storage, and networking over the internet instead of buying and managing everything yourself.</p>
      <p>Instead of purchasing physical servers upfront, you can rent what you need when you need it.</p>
      <ul>
        <li><strong>On-demand:</strong> you can create resources when needed</li>
        <li><strong>Scalable:</strong> grow or shrink based on demand</li>
        <li><strong>Pay-as-you-go:</strong> pay for what you use</li>
      </ul>
      <p>This matters because it helps companies move faster and avoid large upfront infrastructure costs.</p>
    `,
    example: `Traditional IT:
Buy servers → install hardware → maintain equipment

Cloud:
Create resources online → use immediately → scale as needed`,
    quiz: {
      question: "Which best describes cloud computing?",
      options: [
        "Buying physical servers only",
        "Renting computing resources over the internet",
        "Using computers without internet",
        "A type of programming language"
      ],
      answer: 1,
      explanation: "Cloud computing means using internet-based computing resources on demand."
    }
  },
  {
    id: 2,
    level: "Beginner",
    title: "AWS Basics",
    summary: "Learn what AWS is and why it is widely used.",
    objectives: ["Understand AWS", "Know major service categories", "See why AWS is important"],
    content: `
      <p>AWS stands for Amazon Web Services. It is one of the biggest cloud platforms in the world.</p>
      <p>AWS offers many services for compute, storage, networking, security, databases, monitoring, and more.</p>
      <ul>
        <li><strong>EC2</strong> for virtual servers</li>
        <li><strong>S3</strong> for storage</li>
        <li><strong>IAM</strong> for identity and permissions</li>
        <li><strong>VPC</strong> for networking</li>
      </ul>
      <p>AWS matters because many companies build and run applications on it.</p>
    `,
    example: `AWS categories:
- Compute
- Storage
- Networking
- Security
- Monitoring`,
    quiz: {
      question: "What does AWS stand for?",
      options: [
        "Advanced Web System",
        "Amazon Web Services",
        "Automated Work Server",
        "Application Web Storage"
      ],
      answer: 1,
      explanation: "AWS stands for Amazon Web Services."
    }
  },
  {
    id: 3,
    level: "Beginner",
    title: "IAM: Users, Roles, and Permissions",
    summary: "Learn why IAM is critical in cloud security.",
    objectives: ["Understand IAM", "Know users vs roles", "Understand least privilege"],
    content: `
      <p>IAM stands for Identity and Access Management. It controls who can do what in your cloud account.</p>
      <p>Good IAM design is one of the most important parts of cloud security.</p>
      <ul>
        <li><strong>User:</strong> an identity for a person or application</li>
        <li><strong>Role:</strong> a set of permissions that can be assumed</li>
        <li><strong>Policy:</strong> a document that defines allowed or denied actions</li>
      </ul>
      <p>The key idea is <strong>least privilege</strong>: only give the permissions needed.</p>
    `,
    example: `Bad practice:
Give admin access to everyone

Better practice:
Give only required permissions for a task`,
    quiz: {
      question: "What is the main goal of IAM?",
      options: [
        "To host websites",
        "To control access and permissions",
        "To create databases",
        "To compress files"
      ],
      answer: 1,
      explanation: "IAM controls identities and permissions in the cloud."
    }
  },
  {
    id: 4,
    level: "Beginner",
    title: "EC2: Virtual Servers in AWS",
    summary: "Understand what EC2 is and when it is used.",
    objectives: ["Know what EC2 is", "Understand instances", "See common use cases"],
    content: `
      <p>EC2 stands for Elastic Compute Cloud. It provides virtual machines called instances.</p>
      <p>You can use EC2 when you need to run applications, host websites, or create servers in the cloud.</p>
      <ul>
        <li>Choose an operating system image</li>
        <li>Choose instance size</li>
        <li>Configure networking and security groups</li>
        <li>Launch and connect</li>
      </ul>
      <p>EC2 is flexible, but it also means you are responsible for managing the operating system and server software.</p>
    `,
    example: `Common EC2 use:
- Linux web server
- Application server
- Testing environment`,
    quiz: {
      question: "What is EC2 mainly used for?",
      options: [
        "Object storage only",
        "Managing DNS only",
        "Running virtual servers",
        "Creating spreadsheets"
      ],
      answer: 2,
      explanation: "EC2 provides virtual server instances in AWS."
    }
  },
  {
    id: 5,
    level: "Beginner",
    title: "S3: Simple Storage Service",
    summary: "Learn how cloud object storage works.",
    objectives: ["Understand S3", "Know buckets and objects", "See common use cases"],
    content: `
      <p>S3 is an object storage service in AWS. It stores files as objects inside buckets.</p>
      <p>It is often used for backups, static websites, media files, logs, and data storage.</p>
      <ul>
        <li><strong>Bucket:</strong> a container for objects</li>
        <li><strong>Object:</strong> a file plus metadata</li>
        <li>Very durable and widely used</li>
      </ul>
      <p>S3 is not the same as a traditional file server. It is object storage, not a normal local filesystem.</p>
    `,
    example: `S3 common uses:
- Static website hosting
- File backup
- Image and video storage`,
    quiz: {
      question: "What does S3 store?",
      options: [
        "Only databases",
        "Objects inside buckets",
        "Only virtual machines",
        "Only passwords"
      ],
      answer: 1,
      explanation: "S3 stores objects inside buckets."
    }
  },
  {
    id: 6,
    level: "Intermediate",
    title: "VPC and Cloud Networking Basics",
    summary: "Understand the foundation of AWS networking.",
    objectives: ["Understand VPC", "Know subnets", "Understand public vs private"],
    content: `
      <p>A VPC, or Virtual Private Cloud, is your logically isolated network in AWS.</p>
      <p>Inside a VPC, you create subnets and control traffic flow.</p>
      <ul>
        <li><strong>Public subnet:</strong> can reach the internet through an internet gateway</li>
        <li><strong>Private subnet:</strong> does not directly expose resources to the internet</li>
        <li><strong>Route table:</strong> decides where traffic goes</li>
      </ul>
      <p>A strong cloud engineer understands networking, because many cloud problems are really networking problems.</p>
    `,
    example: `Basic VPC design:
VPC
- Public subnet for load balancer
- Private subnet for app/database`,
    quiz: {
      question: "What is a VPC?",
      options: [
        "A storage bucket",
        "A virtual network in AWS",
        "A programming language",
        "A type of laptop"
      ],
      answer: 1,
      explanation: "A VPC is a virtual private cloud network in AWS."
    }
  },
  {
    id: 7,
    level: "Intermediate",
    title: "CloudWatch and Monitoring",
    summary: "Learn why monitoring is essential in cloud operations.",
    objectives: ["Understand monitoring", "Know metrics and logs", "See why visibility matters"],
    content: `
      <p>CloudWatch is AWS's monitoring and observability service.</p>
      <p>You use it to track metrics, collect logs, and create alarms.</p>
      <ul>
        <li><strong>Metrics:</strong> numerical measurements like CPU usage</li>
        <li><strong>Logs:</strong> event records from systems and applications</li>
        <li><strong>Alarms:</strong> notifications when thresholds are crossed</li>
      </ul>
      <p>Monitoring matters because you cannot manage what you cannot see.</p>
    `,
    example: `Examples:
- CPU > 80%
- Error logs increasing
- Disk space low`,
    quiz: {
      question: "Why is monitoring important?",
      options: [
        "It replaces networking",
        "It gives visibility into system behavior",
        "It deletes logs",
        "It only helps with billing"
      ],
      answer: 1,
      explanation: "Monitoring helps you understand how systems behave and when issues happen."
    }
  },
  {
    id: 8,
    level: "Intermediate",
    title: "DevOps and CI/CD Basics",
    summary: "Understand how code moves from development to deployment.",
    objectives: ["Know CI/CD", "Understand automation value", "See DevOps mindset"],
    content: `
      <p>DevOps is a way of working that improves collaboration between development and operations.</p>
      <p>CI/CD stands for Continuous Integration and Continuous Delivery/Deployment.</p>
      <ul>
        <li><strong>CI:</strong> automatically test and integrate changes</li>
        <li><strong>CD:</strong> move changes toward release faster and more safely</li>
        <li><strong>Automation:</strong> reduce manual steps and errors</li>
      </ul>
      <p>The big idea is reliable delivery, not just faster delivery.</p>
    `,
    example: `Simple CI/CD flow:
Code change → test → build → deploy`,
    quiz: {
      question: "What is one main goal of CI/CD?",
      options: [
        "Make deployments more reliable and automated",
        "Remove all monitoring",
        "Replace cloud storage",
        "Turn servers into laptops"
      ],
      answer: 0,
      explanation: "CI/CD helps automate and improve software delivery reliability."
    }
  },
  {
    id: 9,
    level: "Advanced",
    title: "Docker and Containers",
    summary: "Learn what containers are and why they matter.",
    objectives: ["Understand containers", "Know Docker basics", "See app packaging benefits"],
    content: `
      <p>A container packages an application and its dependencies so it can run consistently across environments.</p>
      <p>Docker is one of the most common tools for building and running containers.</p>
      <ul>
        <li>Containers are lightweight compared to full virtual machines</li>
        <li>They help with consistency across dev, test, and production</li>
        <li>Images define what runs inside the container</li>
      </ul>
      <p>Containers matter because modern apps are often built, shipped, and deployed this way.</p>
    `,
    example: `Container workflow:
Source code → Docker image → run container`,
    quiz: {
      question: "Why are containers useful?",
      options: [
        "They help applications run consistently across environments",
        "They replace the internet",
        "They only store videos",
        "They disable automation"
      ],
      answer: 0,
      explanation: "Containers make application packaging and consistency easier."
    }
  },
  {
    id: 10,
    level: "Advanced",
    title: "Kubernetes Basics",
    summary: "Understand why Kubernetes is used to manage containers.",
    objectives: ["Understand Kubernetes", "Know pods and deployments", "See why orchestration matters"],
    content: `
      <p>Kubernetes is a container orchestration platform. It helps manage containerized applications at scale.</p>
      <ul>
        <li><strong>Pod:</strong> the smallest deployable unit</li>
        <li><strong>Deployment:</strong> manages application replicas and updates</li>
        <li><strong>Service:</strong> provides stable network access</li>
      </ul>
      <p>Kubernetes matters because managing many containers manually becomes hard very quickly.</p>
    `,
    example: `Kubernetes handles:
- scaling
- rollout
- self-healing
- service exposure`,
    quiz: {
      question: "What is Kubernetes mainly used for?",
      options: [
        "Editing images",
        "Managing containerized applications at scale",
        "Replacing IAM",
        "Writing spreadsheets"
      ],
      answer: 1,
      explanation: "Kubernetes helps orchestrate and manage containers."
    }
  },
  {
    id: 11,
    level: "Advanced",
    title: "Load Balancers and Scalability",
    summary: "Learn how traffic is distributed and why scale matters.",
    objectives: ["Understand load balancing", "See scaling concepts", "Know high availability basics"],
    content: `
      <p>A load balancer distributes incoming traffic across multiple targets, such as servers or containers.</p>
      <p>This helps improve availability, performance, and resilience.</p>
      <ul>
        <li>Prevents a single server from handling all traffic</li>
        <li>Supports scaling across multiple instances</li>
        <li>Improves uptime and reliability</li>
      </ul>
      <p>This is a core idea in cloud architecture and production systems.</p>
    `,
    example: `Traffic flow:
Users → Load Balancer → Multiple app servers`,
    quiz: {
      question: "Why use a load balancer?",
      options: [
        "To store files",
        "To distribute traffic across multiple targets",
        "To replace DNS",
        "To remove security groups"
      ],
      answer: 1,
      explanation: "Load balancers distribute traffic to improve performance and availability."
    }
  },
  {
    id: 12,
    level: "Advanced",
    title: "Cloud Engineer Mindset",
    summary: "Bring together architecture, troubleshooting, and operational thinking.",
    objectives: ["Think like an engineer", "Understand tradeoffs", "Focus on reliability and security"],
    content: `
      <p>A cloud engineer is not just someone who knows services by name. A strong cloud engineer understands tradeoffs, reliability, security, cost, and operations.</p>
      <ul>
        <li>Ask how systems fail</li>
        <li>Think about security early</li>
        <li>Design for visibility and monitoring</li>
        <li>Balance speed, cost, and reliability</li>
      </ul>
      <p>The best cloud work comes from combining technical skill with engineering judgment.</p>
    `,
    example: `Good cloud questions:
- Is this secure?
- Is this scalable?
- Is this observable?
- Is this cost-aware?`,
    quiz: {
      question: "What makes a strong cloud engineer?",
      options: [
        "Only memorizing service names",
        "Understanding systems, tradeoffs, security, and operations",
        "Avoiding monitoring",
        "Ignoring reliability"
      ],
      answer: 1,
      explanation: "Strong cloud engineers combine knowledge with real engineering thinking."
    }
  }
];

const roadmapData = [
  {
    stage: "Stage 1: Foundations",
    items: [
      "What cloud computing is",
      "AWS basics",
      "IAM security mindset",
      "EC2 and S3 fundamentals"
    ]
  },
  {
    stage: "Stage 2: Networking and Operations",
    items: [
      "VPC and subnet basics",
      "Public vs private design",
      "Monitoring with CloudWatch",
      "Observability and operations"
    ]
  },
  {
    stage: "Stage 3: Delivery and Automation",
    items: [
      "DevOps workflow",
      "CI/CD basics",
      "Git-based deployment thinking",
      "Operational discipline"
    ]
  },
  {
    stage: "Stage 4: Modern Platforms",
    items: [
      "Docker and containers",
      "Kubernetes basics",
      "Load balancing",
      "Cloud engineer mindset"
    ]
  }
];

const labs = [
  {
    id: 1,
    level: "Beginner",
    title: "Lab 1: Launch an EC2 Instance",
    prompt: "Practice launching a basic Linux server in AWS.",
    description: `
      <p>Create a basic EC2 instance and understand the main launch choices.</p>
    `,
    prereqs: "AWS account, basic AWS console access, understanding of EC2 lesson.",
    steps: `
      <ol>
        <li>Open the EC2 service in AWS.</li>
        <li>Choose “Launch Instance.”</li>
        <li>Select a Linux AMI.</li>
        <li>Choose a basic instance type.</li>
        <li>Create or select a key pair.</li>
        <li>Attach a security group allowing SSH carefully.</li>
        <li>Launch the instance and note the public IP.</li>
      </ol>
    `,
    result: "A running EC2 instance that you can identify and manage from the AWS console."
  },
  {
    id: 2,
    level: "Beginner",
    title: "Lab 2: Create an S3 Static Site",
    prompt: "Use object storage to understand static hosting concepts.",
    description: `
      <p>Create an S3 bucket and prepare it for simple static website hosting.</p>
    `,
    prereqs: "AWS account, basic S3 understanding.",
    steps: `
      <ol>
        <li>Create a new S3 bucket.</li>
        <li>Upload a simple HTML file.</li>
        <li>Review public access settings carefully.</li>
        <li>Enable static website hosting.</li>
        <li>Test the endpoint and confirm the page loads.</li>
      </ol>
    `,
    result: "A simple static page served from S3."
  },
  {
    id: 3,
    level: "Beginner",
    title: "Lab 3: Create IAM Users and Policies",
    prompt: "Practice access control basics.",
    description: `
      <p>Create a user and attach only the permissions needed for a limited task.</p>
    `,
    prereqs: "IAM lesson understanding.",
    steps: `
      <ol>
        <li>Open IAM in AWS.</li>
        <li>Create a new user.</li>
        <li>Review policy options.</li>
        <li>Attach a limited permission policy.</li>
        <li>Compare least privilege vs admin access.</li>
      </ol>
    `,
    result: "A user with controlled access instead of full unnecessary permissions."
  },
  {
    id: 4,
    level: "Intermediate",
    title: "Lab 4: Design a Basic VPC Layout",
    prompt: "Build networking understanding through a simple design.",
    description: `
      <p>Map a VPC with public and private subnet thinking.</p>
    `,
    prereqs: "VPC basics lesson.",
    steps: `
      <ol>
        <li>Create or review a VPC.</li>
        <li>Define one public subnet.</li>
        <li>Define one private subnet.</li>
        <li>Review route tables.</li>
        <li>Understand where internet access should and should not exist.</li>
      </ol>
    `,
    result: "A simple network design that separates public and private resources."
  },
  {
    id: 5,
    level: "Intermediate",
    title: "Lab 5: Monitor EC2 with CloudWatch",
    prompt: "Learn basic observability.",
    description: `
      <p>Use CloudWatch to review metrics and understand system visibility.</p>
    `,
    prereqs: "EC2 and CloudWatch basics.",
    steps: `
      <ol>
        <li>Open CloudWatch metrics.</li>
        <li>Select your EC2 instance.</li>
        <li>Review CPU and network metrics.</li>
        <li>Create a simple alarm conceptually or practically.</li>
      </ol>
    `,
    result: "Visibility into instance behavior and the basics of alarm thinking."
  },
  {
    id: 6,
    level: "Intermediate",
    title: "Lab 6: Design a CI/CD Flow",
    prompt: "Think through automated delivery.",
    description: `
      <p>Map how code should move from repo to release using CI/CD ideas.</p>
    `,
    prereqs: "DevOps basics.",
    steps: `
      <ol>
        <li>Define source control as the starting point.</li>
        <li>Add a build/test step.</li>
        <li>Add an approval or deployment step.</li>
        <li>Describe how failures should stop the process.</li>
      </ol>
    `,
    result: "A basic CI/CD design mindset for reliable delivery."
  },
  {
    id: 7,
    level: "Advanced",
    title: "Lab 7: Containerize an App",
    prompt: "Understand packaging for portability.",
    description: `
      <p>Prepare a simple application to run in a container-based workflow.</p>
    `,
    prereqs: "Docker/container lesson.",
    steps: `
      <ol>
        <li>Identify a simple app or service.</li>
        <li>Write or review a basic Dockerfile.</li>
        <li>Build an image conceptually or practically.</li>
        <li>Run the container locally or reason through the flow.</li>
      </ol>
    `,
    result: "An application packaged in a container-friendly way."
  },
  {
    id: 8,
    level: "Advanced",
    title: "Lab 8: Kubernetes Deployment Thinking",
    prompt: "Learn how an app is represented in Kubernetes.",
    description: `
      <p>Understand how deployments, pods, and services work together.</p>
    `,
    prereqs: "Kubernetes basics lesson.",
    steps: `
      <ol>
        <li>Define an application deployment.</li>
        <li>Think about replica count.</li>
        <li>Add a service for exposure.</li>
        <li>Consider update and rollback behavior.</li>
      </ol>
    `,
    result: "A basic mental model of how a Kubernetes-hosted app is deployed and exposed."
  }
];

const projects = [
  {
    title: "Project 1: AWS Static Website",
    level: "Beginner",
    duration: "1–2 hours",
    skills: ["S3", "DNS thinking", "static hosting"],
    description: "Host a simple website using cloud storage and understand public delivery basics.",
    steps: [
      "Create and configure a bucket",
      "Upload a simple site",
      "Enable static hosting",
      "Test access and review security"
    ]
  },
  {
    title: "Project 2: Linux Server on EC2",
    level: "Beginner",
    duration: "2–3 hours",
    skills: ["EC2", "Linux", "security groups"],
    description: "Launch a Linux server and prepare it for basic web hosting or testing.",
    steps: [
      "Launch an EC2 instance",
      "Connect securely",
      "Install a simple service",
      "Review network access"
    ]
  },
  {
    title: "Project 3: Cloud Monitoring Demo",
    level: "Intermediate",
    duration: "1–2 hours",
    skills: ["CloudWatch", "metrics", "alerts"],
    description: "Build a simple monitoring story around a cloud resource.",
    steps: [
      "Select a target resource",
      "Review metrics",
      "Set alert conditions",
      "Document what matters operationally"
    ]
  },
  {
    title: "Project 4: CI/CD Pipeline Concept",
    level: "Intermediate",
    duration: "2 hours",
    skills: ["Git", "automation", "deployment flow"],
    description: "Show how code moves safely from commit to release.",
    steps: [
      "Define source control trigger",
      "Add test/build stage",
      "Add deployment stage",
      "Add failure handling"
    ]
  },
  {
    title: "Project 5: Containerized Application",
    level: "Advanced",
    duration: "2–3 hours",
    skills: ["Docker", "images", "runtime"],
    description: "Package an app in a container and explain the deployment value.",
    steps: [
      "Prepare a Dockerfile",
      "Build an image",
      "Run the container",
      "Explain why portability matters"
    ]
  },
  {
    title: "Project 6: Kubernetes Rollout Plan",
    level: "Advanced",
    duration: "2–4 hours",
    skills: ["Kubernetes", "deployments", "services", "scaling"],
    description: "Design a basic rollout plan for a containerized application in Kubernetes.",
    steps: [
      "Define deployment",
      "Set replica strategy",
      "Expose with a service",
      "Consider updates and resilience"
    ]
  }
];

const finalExamQuestions = [
  {
    id: 1,
    question: "What is one major benefit of cloud computing?",
    options: [
      "Only buying more hardware",
      "On-demand scalable resources",
      "Removing all security needs",
      "Avoiding networking"
    ],
    answer: 1
  },
  {
    id: 2,
    question: "What does IAM mainly control?",
    options: [
      "Video streaming",
      "Access and permissions",
      "Laptop performance",
      "Code formatting"
    ],
    answer: 1
  },
  {
    id: 3,
    question: "What is EC2 used for?",
    options: [
      "Running virtual servers",
      "Only DNS records",
      "Only object storage",
      "Only certificates"
    ],
    answer: 0
  },
  {
    id: 4,
    question: "What does S3 store?",
    options: [
      "Objects in buckets",
      "Only Kubernetes pods",
      "Only passwords",
      "Only IP addresses"
    ],
    answer: 0
  },
  {
    id: 5,
    question: "What is a VPC?",
    options: [
      "A virtual network",
      "A video processor",
      "A code editor",
      "A logging format"
    ],
    answer: 0
  },
  {
    id: 6,
    question: "Why is CloudWatch useful?",
    options: [
      "It replaces IAM",
      "It provides monitoring and visibility",
      "It removes all alarms",
      "It only runs containers"
    ],
    answer: 1
  },
  {
    id: 7,
    question: "What is one main goal of CI/CD?",
    options: [
      "Make delivery more reliable and automated",
      "Stop all deployments",
      "Replace cloud storage",
      "Avoid testing"
    ],
    answer: 0
  },
  {
    id: 8,
    question: "Why are containers useful?",
    options: [
      "They help package apps consistently",
      "They replace networking",
      "They only store backups",
      "They disable scaling"
    ],
    answer: 0
  },
  {
    id: 9,
    question: "What does Kubernetes help manage?",
    options: [
      "Spreadsheet formulas",
      "Containerized applications at scale",
      "Only DNS names",
      "Only object storage"
    ],
    answer: 1
  },
  {
    id: 10,
    question: "What does a load balancer do?",
    options: [
      "Stores files",
      "Distributes traffic across targets",
      "Replaces IAM",
      "Writes Dockerfiles"
    ],
    answer: 1
  }
];

let selectedLessonId = 1;
let currentFilter = "All";
let selectedLabId = 1;

const lessonList = document.getElementById("lessonList");
const lessonSearch = document.getElementById("lessonSearch");
const lessonTitle = document.getElementById("lessonTitle");
const lessonSummary = document.getElementById("lessonSummary");
const lessonLevelBadge = document.getElementById("lessonLevelBadge");
const lessonObjectives = document.getElementById("lessonObjectives");
const lessonContent = document.getElementById("lessonContent");
const lessonCodeBlock = document.getElementById("lessonCodeBlock");
const quizContainer = document.getElementById("quizContainer");

const labList = document.getElementById("labList");
const labLevelBadge = document.getElementById("labLevelBadge");
const labTitle = document.getElementById("labTitle");
const labPrompt = document.getElementById("labPrompt");
const labDescription = document.getElementById("labDescription");
const labPrereqs = document.getElementById("labPrereqs");
const labSteps = document.getElementById("labSteps");
const labResult = document.getElementById("labResult");

const roadmapGrid = document.getElementById("roadmapGrid");
const projectGrid = document.getElementById("projectGrid");
const examContainer = document.getElementById("examContainer");
const examResultBox = document.getElementById("examResultBox");

const statLessons = document.getElementById("statLessons");
const statCompleted = document.getElementById("statCompleted");
const statLabs = document.getElementById("statLabs");
const statExamScore = document.getElementById("statExamScore");
const statProgress = document.getElementById("statProgress");
const bestExamScore = document.getElementById("bestExamScore");

const markCompleteBtn = document.getElementById("markCompleteBtn");
const markLabDoneBtn = document.getElementById("markLabDoneBtn");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const themeToggle = document.getElementById("themeToggle");
const submitExamBtn = document.getElementById("submitExamBtn");
const resetExamBtn = document.getElementById("resetExamBtn");

const studentNameInput = document.getElementById("studentNameInput");
const certificateTrackSelect = document.getElementById("certificateTrackSelect");
const generateCertificateBtn = document.getElementById("generateCertificateBtn");
const printCertificateBtn = document.getElementById("printCertificateBtn");
const certificateNamePreview = document.getElementById("certificateNamePreview");
const certificateTrackPreview = document.getElementById("certificateTrackPreview");
const certificateLessonsPreview = document.getElementById("certificateLessonsPreview");
const certificateLabsPreview = document.getElementById("certificateLabsPreview");
const certificateExamPreview = document.getElementById("certificateExamPreview");
const certificateDatePreview = document.getElementById("certificateDatePreview");
const certificateLessonsDone = document.getElementById("certificateLessonsDone");
const certificateLabsDone = document.getElementById("certificateLabsDone");
const certificateExamDone = document.getElementById("certificateExamDone");
const certificateStatusText = document.getElementById("certificateStatusText");

function getLessonProgress() {
  return JSON.parse(localStorage.getItem("youooo-cloud-progress") || "{}");
}

function saveLessonProgress(progress) {
  localStorage.setItem("youooo-cloud-progress", JSON.stringify(progress));
}

function getLabProgress() {
  return JSON.parse(localStorage.getItem("youooo-cloud-labs") || "{}");
}

function saveLabProgress(progress) {
  localStorage.setItem("youooo-cloud-labs", JSON.stringify(progress));
}

function getExamBestScore() {
  return Number(localStorage.getItem("youooo-cloud-exam-best") || 0);
}

function saveExamBestScore(score) {
  localStorage.setItem("youooo-cloud-exam-best", String(score));
}

function isLessonComplete(id) {
  return !!getLessonProgress()[id];
}

function isLabDone(id) {
  return !!getLabProgress()[id];
}

function updateStats() {
  const lessonProgress = getLessonProgress();
  const labProgress = getLabProgress();

  const completedLessons = Object.keys(lessonProgress).filter((id) => lessonProgress[id]).length;
  const completedLabs = Object.keys(labProgress).filter((id) => labProgress[id]).length;
  const examScore = getExamBestScore();

  const totalLessons = lessons.length;
  const totalLabs = labs.length;
  const examPortion = examScore >= 70 ? 1 : 0;
  const overallTotal = totalLessons + totalLabs + 1;
  const overallDone = completedLessons + completedLabs + examPortion;
  const percent = Math.round((overallDone / overallTotal) * 100);

  statLessons.textContent = totalLessons;
  statCompleted.textContent = completedLessons;
  statLabs.textContent = completedLabs;
  statExamScore.textContent = `${examScore}%`;
  statProgress.textContent = `${percent}%`;
  bestExamScore.textContent = `${examScore}%`;

  certificateLessonsDone.textContent = completedLessons;
  certificateLabsDone.textContent = completedLabs;
  certificateExamDone.textContent = `${examScore}%`;

  certificateLessonsPreview.textContent = completedLessons;
  certificateLabsPreview.textContent = completedLabs;
  certificateExamPreview.textContent = `${examScore}%`;

  const completedStatus =
    completedLessons >= Math.ceil(lessons.length * 0.7) &&
    completedLabs >= Math.ceil(labs.length * 0.5) &&
    examScore >= 70;

  certificateStatusText.textContent = completedStatus ? "Ready" : "In Progress";
}

function renderLessons() {
  const search = lessonSearch.value.toLowerCase().trim();

  const filtered = lessons.filter((lesson) => {
    const matchesLevel = currentFilter === "All" || lesson.level === currentFilter;
    const matchesSearch =
      lesson.title.toLowerCase().includes(search) ||
      lesson.summary.toLowerCase().includes(search) ||
      lesson.level.toLowerCase().includes(search);

    return matchesLevel && matchesSearch;
  });

  lessonList.innerHTML = "";

  filtered.forEach((lesson) => {
    const item = document.createElement("div");
    item.className = `lesson-item ${lesson.id === selectedLessonId ? "active" : ""}`;
    item.innerHTML = `
      <h4>${lesson.title}</h4>
      <div class="lesson-meta">
        <span>${lesson.level}</span>
        <span class="${isLessonComplete(lesson.id) ? "lesson-complete" : ""}">
          ${isLessonComplete(lesson.id) ? "Completed" : "Not done"}
        </span>
      </div>
      <p class="muted" style="margin: 10px 0 0;">${lesson.summary}</p>
    `;
    item.addEventListener("click", () => {
      selectedLessonId = lesson.id;
      renderLessons();
      renderSelectedLesson();
    });
    lessonList.appendChild(item);
  });

  if (!filtered.length) {
    lessonList.innerHTML = `<p class="muted">No lessons found.</p>`;
  }
}

function renderQuiz(lesson) {
  quizContainer.innerHTML = "";

  const q = lesson.quiz;
  const title = document.createElement("p");
  title.innerHTML = `<strong>${q.question}</strong>`;
  quizContainer.appendChild(title);

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = option;

    btn.addEventListener("click", () => {
      [...quizContainer.querySelectorAll(".quiz-option")].forEach((b) => {
        b.disabled = true;
      });

      const feedback = document.createElement("div");
      feedback.className = "quiz-feedback";

      if (index === q.answer) {
        btn.classList.add("correct");
        feedback.innerHTML = `<strong>Correct.</strong> ${q.explanation}`;
      } else {
        btn.classList.add("wrong");
        const correctButton = quizContainer.querySelectorAll(".quiz-option")[q.answer];
        if (correctButton) correctButton.classList.add("correct");
        feedback.innerHTML = `<strong>Not correct.</strong> ${q.explanation}`;
      }

      quizContainer.appendChild(feedback);
    });

    quizContainer.appendChild(btn);
  });
}

function renderSelectedLesson() {
  const lesson = lessons.find((l) => l.id === selectedLessonId);
  if (!lesson) return;

  lessonTitle.textContent = lesson.title;
  lessonSummary.textContent = lesson.summary;
  lessonLevelBadge.textContent = lesson.level;
  lessonContent.innerHTML = lesson.content;
  lessonCodeBlock.textContent = lesson.example;

  lessonObjectives.innerHTML = lesson.objectives
    .map((objective) => `<span class="objective-chip">${objective}</span>`)
    .join("");

  renderQuiz(lesson);
}

function renderRoadmap() {
  roadmapGrid.innerHTML = "";
  roadmapData.forEach((stage) => {
    const card = document.createElement("div");
    card.className = "roadmap-card";
    card.innerHTML = `
      <h3>${stage.stage}</h3>
      <ul>
        ${stage.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
    roadmapGrid.appendChild(card);
  });
}

function renderLabs() {
  labList.innerHTML = "";

  labs.forEach((lab) => {
    const item = document.createElement("div");
    item.className = `challenge-item ${lab.id === selectedLabId ? "active" : ""}`;
    item.innerHTML = `
      <h4>${lab.title}</h4>
      <div class="challenge-status ${isLabDone(lab.id) ? "done" : ""}">
        ${lab.level} • ${isLabDone(lab.id) ? "Done" : "Not done"}
      </div>
      <p class="muted" style="margin: 10px 0 0;">${lab.prompt}</p>
    `;
    item.addEventListener("click", () => {
      selectedLabId = lab.id;
      renderLabs();
      renderSelectedLab();
    });
    labList.appendChild(item);
  });
}

function renderSelectedLab() {
  const lab = labs.find((c) => c.id === selectedLabId);
  if (!lab) return;

  labLevelBadge.textContent = lab.level;
  labTitle.textContent = lab.title;
  labPrompt.textContent = lab.prompt;
  labDescription.innerHTML = lab.description;
  labPrereqs.textContent = lab.prereqs;
  labSteps.innerHTML = lab.steps;
  labResult.textContent = lab.result;
}

function renderProjects() {
  projectGrid.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <div class="project-meta">
        <span class="project-tag">${project.level}</span>
        <span class="project-tag">${project.duration}</span>
      </div>
      <p class="muted">${project.description}</p>
      <div class="project-meta">
        ${project.skills.map((skill) => `<span class="project-tag">${skill}</span>`).join("")}
      </div>
      <h4>Build Steps</h4>
      <ul class="project-list">
        ${project.steps.map((step) => `<li>${step}</li>`).join("")}
      </ul>
    `;
    projectGrid.appendChild(card);
  });
}

function renderExam() {
  examContainer.innerHTML = "";

  finalExamQuestions.forEach((q, index) => {
    const card = document.createElement("div");
    card.className = "exam-question-card";

    const optionsHtml = q.options
      .map(
        (option, optionIndex) => `
          <label class="exam-option">
            <input type="radio" name="exam-q-${q.id}" value="${optionIndex}" />
            ${option}
          </label>
        `
      )
      .join("");

    card.innerHTML = `
      <h4>Question ${index + 1}: ${q.question}</h4>
      <div class="exam-options">${optionsHtml}</div>
    `;

    examContainer.appendChild(card);
  });
}

function calculateExamScore() {
  let correct = 0;

  finalExamQuestions.forEach((q) => {
    const selected = document.querySelector(`input[name="exam-q-${q.id}"]:checked`);
    if (selected && Number(selected.value) === q.answer) {
      correct += 1;
    }
  });

  return Math.round((correct / finalExamQuestions.length) * 100);
}

function resetExamSelections() {
  document.querySelectorAll('#examContainer input[type="radio"]').forEach((input) => {
    input.checked = false;
  });
  examResultBox.textContent = "Your exam result will appear here.";
  examResultBox.className = "exam-result-box muted";
}

function updateCertificatePreview() {
  const name = studentNameInput.value.trim() || "Your Name Here";
  const track = certificateTrackSelect.value;
  const today = new Date().toLocaleDateString();

  certificateNamePreview.textContent = name;
  certificateTrackPreview.textContent = track;
  certificateDatePreview.textContent = today;
}

function loadTheme() {
  const saved = localStorage.getItem("youooo-cloud-theme");
  if (saved === "light") {
    document.body.classList.add("light");
  }
}

function saveTheme() {
  localStorage.setItem(
    "youooo-cloud-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
}

function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));

      btn.classList.add("active");
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add("active");
    });
  });
}

markCompleteBtn.addEventListener("click", () => {
  const progress = getLessonProgress();
  progress[selectedLessonId] = true;
  saveLessonProgress(progress);
  updateStats();
  renderLessons();
  updateCertificatePreview();
});

markLabDoneBtn.addEventListener("click", () => {
  const progress = getLabProgress();
  progress[selectedLabId] = true;
  saveLabProgress(progress);
  updateStats();
  renderLabs();
  updateCertificatePreview();
});

resetProgressBtn.addEventListener("click", () => {
  const confirmed = confirm("Reset all lesson, lab, and exam progress?");
  if (!confirmed) return;

  localStorage.removeItem("youooo-cloud-progress");
  localStorage.removeItem("youooo-cloud-labs");
  localStorage.removeItem("youooo-cloud-exam-best");

  updateStats();
  renderLessons();
  renderLabs();
  resetExamSelections();
  updateCertificatePreview();
});

lessonSearch.addEventListener("input", renderLessons);

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.level;
    renderLessons();
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  saveTheme();
});

submitExamBtn.addEventListener("click", () => {
  const score = calculateExamScore();
  const previousBest = getExamBestScore();

  if (score > previousBest) {
    saveExamBestScore(score);
  }

  updateStats();
  updateCertificatePreview();

  let message = `Your score: ${score}%`;
  if (score >= 85) {
    message += " • Excellent work.";
    examResultBox.className = "exam-result-box";
  } else if (score >= 70) {
    message += " • You passed.";
    examResultBox.className = "exam-result-box";
  } else {
    message += " • Keep studying and try again.";
    examResultBox.className = "exam-result-box";
  }

  examResultBox.textContent = message;
});

resetExamBtn.addEventListener("click", () => {
  resetExamSelections();
});

generateCertificateBtn.addEventListener("click", () => {
  updateStats();
  updateCertificatePreview();
});

printCertificateBtn.addEventListener("click", () => {
  updateStats();
  updateCertificatePreview();
  window.print();
});

studentNameInput.addEventListener("input", updateCertificatePreview);
certificateTrackSelect.addEventListener("change", updateCertificatePreview);

function init() {
  loadTheme();
  setupTabs();
  updateStats();
  renderLessons();
  renderSelectedLesson();
  renderRoadmap();
  renderLabs();
  renderSelectedLab();
  renderProjects();
  renderExam();
  updateCertificatePreview();
}

init();
