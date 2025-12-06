// Blog posts data with full content
export const blogPosts = [
    {
        id: 1,
        slug: "building-school-management-system",
        image: "/images/school_management.jpg",
        date: "December 05, 2025",
        title: "Building a School Management System — My Journey with Modern Web Tech",
        excerpt: "I built a comprehensive web‑based School Management System to help schools manage student/teacher data, attendance, classes and more. This project demonstrates my ability to build real-world applications using React, Node.js, and modern development practices.",
        author: "Hussain Ijaz",
        readTime: "8 min read",

        // Full content sections
        intro: "In this project, I built a web‑based School Management System to help schools manage student/teacher data, attendance, classes and more — bringing much of the admin workflow online. The idea came from seeing how manual record‑keeping becomes chaotic in bigger institutions, and I wanted to create a clean, manageable solution.",

        techStack: {
            title: "🔧 Tech Stack & Skills Used",
            items: [
                {
                    category: "Frontend",
                    technologies: ["React.js", "Vite", "React Router", "Modern JavaScript (ES6+)"],
                    description: "Built with React and Vite for fast development and optimal performance"
                },
                {
                    category: "Backend",
                    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Authentication"],
                    description: "RESTful API with secure authentication and data management"
                },
                {
                    category: "Styling",
                    technologies: ["Tailwind CSS", "Custom CSS", "Responsive Design"],
                    description: "Modern, clean UI with full mobile responsiveness"
                },
                {
                    category: "Build & Tooling",
                    technologies: ["Vite", "ESLint", "Git", "GitHub"],
                    description: "Professional development workflow with linting and version control"
                },
                {
                    category: "Deployment",
                    technologies: ["Vercel", "MongoDB Atlas"],
                    description: "Production-ready deployment with cloud database"
                }
            ],
            summary: "This demonstrates that I can go beyond simple tutorials and build a more structured, real‑world style application — a point many employers and recruiters value."
        },

        features: {
            title: "Key Features / What the System Does",
            items: [
                {
                    name: "Role-Based Authentication",
                    description: "Secure login system with three distinct roles: Admin, Teacher, and Student. Each role has specific permissions and access levels.",
                    highlights: ["JWT token-based authentication", "Protected routes", "Session management"]
                },
                {
                    name: "Admin Dashboard",
                    description: "Comprehensive admin panel for managing the entire school system",
                    highlights: [
                        "Manage students, teachers, and classes",
                        "View system-wide statistics and analytics",
                        "Add, update, and delete records",
                        "Assign teachers to classes"
                    ]
                },
                {
                    name: "Student Management",
                    description: "Complete student information system with enrollment tracking",
                    highlights: [
                        "Student profiles with personal details",
                        "Enrollment status tracking",
                        "Class assignments",
                        "Search and filter functionality"
                    ]
                },
                {
                    name: "Teacher Management",
                    description: "Teacher profiles and class assignment system",
                    highlights: [
                        "Teacher information management",
                        "Class assignment tracking",
                        "Department organization",
                        "Performance tracking"
                    ]
                },
                {
                    name: "Class Management",
                    description: "Organize and manage classes efficiently",
                    highlights: [
                        "Class creation and scheduling",
                        "Teacher assignments",
                        "Student enrollment",
                        "Capacity management"
                    ]
                },
                {
                    name: "Responsive UI",
                    description: "Works seamlessly on desktop, tablet, and mobile devices",
                    highlights: [
                        "Mobile-first design approach",
                        "Adaptive layouts",
                        "Touch-friendly interfaces"
                    ]
                },
                {
                    name: "Dark Mode Support",
                    description: "Global theme toggle for better user experience",
                    highlights: [
                        "System-wide dark mode",
                        "Persistent theme preferences",
                        "Smooth transitions"
                    ]
                }
            ]
        },

        challenges: {
            title: "🧩 Challenges & What I Learned",
            items: [
                {
                    challenge: "Setting Up Project Architecture",
                    description: "Designing a scalable folder structure that separates concerns and makes the codebase maintainable.",
                    learning: "Learned the importance of planning the project structure upfront. I organized components by feature, separated business logic from UI, and created reusable utilities. This made the codebase much easier to navigate and scale."
                },
                {
                    challenge: "State Management Without Redux",
                    description: "Managing complex state across multiple components without a state management library.",
                    learning: "Implemented Context API effectively for global state (authentication, theme). Learned when to use local state vs. context, and how to optimize re-renders. This taught me that not every project needs Redux."
                },
                {
                    challenge: "Authentication & Authorization",
                    description: "Implementing secure JWT-based authentication with role-based access control.",
                    learning: "Gained deep understanding of JWT tokens, secure storage, token refresh strategies, and protecting routes on both frontend and backend. Security became a first-class concern."
                },
                {
                    challenge: "Form Validation & User Input",
                    description: "Handling complex forms with proper validation and error handling.",
                    learning: "Implemented comprehensive client-side and server-side validation. Learned about input sanitization, error messaging UX, and providing helpful feedback to users."
                },
                {
                    challenge: "Database Design",
                    description: "Designing MongoDB schemas with relationships between students, teachers, and classes.",
                    learning: "Learned about NoSQL database design, when to use references vs. embedding, and how to structure data for efficient queries. Mongoose schemas and validation became invaluable."
                },
                {
                    challenge: "Responsive Design",
                    description: "Making the interface work perfectly across all device sizes.",
                    learning: "Mastered Tailwind CSS utility classes, learned mobile-first design principles, and understood the importance of testing on real devices. Responsive design is not just about media queries."
                },
                {
                    challenge: "Deployment & Production",
                    description: "Moving from localhost to production with environment variables and configurations.",
                    learning: "Learned about environment variables, production builds, CORS configuration, and continuous deployment. Debugging production issues taught me the value of proper logging."
                }
            ]
        },

        futureImprovements: {
            title: "🚀 What's Next / Future Improvements",
            items: [
                "Add attendance tracking system with daily/monthly reports",
                "Implement grade management with report card generation",
                "Add fee/payment management module",
                "Create notification system for announcements and alerts",
                "Add parent portal for monitoring student progress",
                "Implement real-time messaging between teachers and students",
                "Add file upload functionality for assignments and documents",
                "Create data export features (PDF reports, Excel sheets)",
                "Add comprehensive testing (unit tests, integration tests)",
                "Implement caching for better performance",
                "Add analytics dashboard with charts and graphs",
                "Create mobile app version using React Native"
            ]
        },

        links: {
            github: "https://github.com/HussainIjaz209/school_management_system",
            demo: "https://school-management-system-omega-five.vercel.app",
            documentation: "Well-structured code with clear comments and organization"
        },

        impact: {
            title: "Why This Project Matters / What I Gained",
            items: [
                {
                    point: "Real-World Problem Solving",
                    description: "This project addresses an actual need in educational institutions. Many schools still rely on manual processes or outdated systems. Building a modern, efficient solution shows I can identify real problems and create practical solutions."
                },
                {
                    point: "Full-Stack Development Skills",
                    description: "Gained hands-on experience with the complete development cycle — from database design to frontend UI, API development, authentication, and deployment. This project demonstrates I'm not just a tutorial-follower but can architect and build complete systems."
                },
                {
                    point: "Professional Development Practices",
                    description: "Learned to use modern tools and workflows: Git for version control, ESLint for code quality, environment variables for configuration, and Vercel for deployment. These are industry-standard practices that prepare me for professional development teams."
                },
                {
                    point: "Understanding of Complex Systems",
                    description: "Building a multi-role, multi-feature system taught me about system design, user flows, data relationships, and how different parts of an application interact. This systems thinking is crucial for any software engineer."
                },
                {
                    point: "Problem-Solving & Debugging",
                    description: "Encountered and resolved numerous bugs, from authentication issues to deployment challenges. Each problem strengthened my debugging skills and taught me to read documentation, search effectively, and think critically about solutions."
                },
                {
                    point: "User-Centered Design",
                    description: "Focused on creating an intuitive, user-friendly interface. Learned that good software isn't just about working code — it's about the user experience, accessibility, and making complex tasks simple."
                },
                {
                    point: "Portfolio Stand-Out",
                    description: "This project gives me something tangible to show recruiters and employers. Instead of small demos or basic CRUD apps, I have a comprehensive system that demonstrates my ability to build production-ready applications with real-world complexity."
                },
                {
                    point: "Confidence & Growth Mindset",
                    description: "Successfully building and deploying this system boosted my confidence significantly. I learned that I can tackle complex projects, learn new technologies as needed, and deliver working solutions. This growth mindset is invaluable for a career in tech."
                }
            ]
        },

        conclusion: "Building the School Management System was a transformative learning experience. It pushed me beyond my comfort zone, taught me professional development practices, and gave me a deep appreciation for the complexity of real-world applications. This project represents not just code I wrote, but skills I gained, challenges I overcame, and growth I achieved as a developer. I'm excited to apply these learnings to future projects and continue growing in my development journey."
    },

    {
        id: 2,
        slug: "full-stack-development-journey",
        image: "/images/web_development.jpg",
        date: "November 29, 2025",
        title: "Full-Stack Development: From Planning to Production",
        excerpt: "Exploring the end-to-end process of building full-stack applications. Learn about the tech stack decisions, architecture choices, and best practices I follow to create scalable and maintainable web applications.",
        author: "Hussain Ijaz",
        readTime: "6 min read",

        intro: "Full-stack development is more than just knowing frontend and backend technologies. It's about understanding how to architect, build, test, and deploy complete applications. In this post, I'll share my journey and the methodical approach I've developed for building full-stack applications.",

        sections: [
            {
                title: "Planning & Requirements",
                content: "Every successful project starts with proper planning. I begin by understanding the problem, defining user stories, sketching wireframes, and planning the database schema. This phase often saves hours of refactoring later.",
                keyPoints: [
                    "Define clear objectives and success criteria",
                    "Create user personas and user flows",
                    "Design database schema and relationships",
                    "Plan API endpoints and data flow",
                    "Choose the right tech stack for the job"
                ]
            },
            {
                title: "Tech Stack Selection",
                content: "Choosing the right tools is crucial. I typically use React for frontend (fast, component-based, large ecosystem), Node.js with Express for backend (JavaScript everywhere, great performance), and MongoDB for database (flexible schema, works well with JavaScript). But the stack should always fit the project needs.",
                keyPoints: [
                    "React + Vite for modern frontend development",
                    "Node.js + Express for scalable backend APIs",
                    "MongoDB for flexible NoSQL database",
                    "Tailwind CSS for rapid UI development",
                    "Git + GitHub for version control"
                ]
            },
            {
                title: "Development Workflow",
                content: "I follow a structured workflow: set up the project structure, build the backend API first, create the database models, implement authentication, then build the frontend components. This layered approach ensures each part works before moving to the next.",
                keyPoints: [
                    "Start with backend and database",
                    "Test API endpoints with Postman",
                    "Build reusable frontend components",
                    "Implement responsive design",
                    "Add error handling and validation"
                ]
            },
            {
                title: "Best Practices",
                content: "Code quality matters. I use ESLint for code consistency, implement proper error handling, validate user input, use environment variables for sensitive data, and write clean, readable code with meaningful names and comments.",
                keyPoints: [
                    "Follow consistent code style",
                    "Implement proper error handling",
                    "Validate and sanitize user input",
                    "Use environment variables",
                    "Write self-documenting code"
                ]
            },
            {
                title: "Deployment",
                content: "Deployment is where the application meets the real world. I use Vercel for frontend (seamless integration with Git), and MongoDB Atlas for the database. The key is understanding environment variables, CORS, and production optimizations.",
                keyPoints: [
                    "Use environment variables properly",
                    "Optimize production builds",
                    "Configure CORS correctly",
                    "Set up continuous deployment",
                    "Monitor and debug production issues"
                ]
            }
        ],

        conclusion: "Full-stack development is a journey of continuous learning. Each project teaches new lessons, reveals better practices, and deepens understanding. The key is to stay curious, build real projects, and learn from both successes and mistakes."
    },

    {
        id: 3,
        slug: "developer-challenges-and-growth",
        image: "/images/coding_journey.jpg",
        date: "November 20, 2025",
        title: "Challenges & Growth: Lessons Learned as a Developer",
        excerpt: "Every project brings new challenges. From handling state management to designing user-friendly interfaces, here's what I've learned about problem-solving and continuous improvement in software development.",
        author: "Hussain Ijaz",
        readTime: "5 min read",

        intro: "The path of a developer is filled with challenges that seem impossible until you solve them. Each bug, each error message, each unexpected behavior is an opportunity to learn and grow. Here are the key lessons I've learned from my development journey.",

        lessons: [
            {
                title: "Embrace the Struggle",
                content: "In the beginning, every error felt like a roadblock. Now I understand that errors are teachers. They point exactly where something went wrong. The key is reading error messages carefully, understanding the stack trace, and using them as guides rather than obstacles.",
                takeaway: "Errors are not failures — they're feedback. Learn to read them, understand them, and use them to improve."
            },
            {
                title: "Google is Your Friend (But Know What to Search)",
                content: "Learning to search effectively is a crucial skill. Copy-pasting error messages, searching for 'how to X in Y', checking Stack Overflow, and reading documentation — these are essential skills. But understanding the solutions is more important than just copying code.",
                takeaway: "Don't just copy solutions. Understand why they work, then adapt them to your specific situation."
            },
            {
                title: "Start Small, Build Incrementally",
                content: "Trying to build everything at once leads to overwhelm. I learned to break projects into small, manageable pieces. Build one feature, test it, make sure it works, then move to the next. This incremental approach makes complex projects manageable.",
                takeaway: "Big projects are just collections of small pieces. Focus on one piece at a time."
            },
            {
                title: "State Management Gets Easier",
                content: "State management seemed like magic at first. Props, state, context, when to use what — it was confusing. With practice, it became intuitive. Start with local state, move to props, then context when needed. Don't overcomplicate.",
                takeaway: "Understanding state takes time and practice. Start simple and gradually handle more complex scenarios."
            },
            {
                title: "UI/UX Really Matters",
                content: "A working feature with a confusing interface is frustrating for users. I learned that design is not just aesthetics — it's about usability, clarity, and user experience. Good design makes complex systems feel simple.",
                takeaway: "Think from the user's perspective. Make interfaces intuitive, provide clear feedback, and guide users through tasks."
            },
            {
                title: "Read the Documentation",
                content: "Documentation often has the answers you're looking for. Reading official docs, understanding library APIs, and following recommended patterns saves time and prevents bugs. It's worth the investment.",
                takeaway: "Documentation is your roadmap. Invest time in reading it — it pays off in efficiency and fewer bugs."
            },
            {
                title: "Projects Teach More Than Tutorials",
                content: "Tutorials are great for learning syntax and concepts. But real learning happens when you build your own projects. You encounter unique problems, make decisions, handle unexpected issues — this is where growth happens.",
                takeaway: "Build projects. Make mistakes. Fix them. Repeat. This is how you become a developer."
            },
            {
                title: "Community and Collaboration",
                content: "The developer community is incredibly supportive. Don't hesitate to ask questions, share your work, and learn from others. GitHub, Stack Overflow, Reddit, Discord servers — these communities helped me countless times.",
                takeaway: "You're not alone. Engage with the community, help others, and don't be afraid to ask for help."
            }
        ],

        conclusion: "Every challenge I face as a developer makes me better. Each bug I fix, each feature I build, each concept I grasp — they all add up to growth. The journey is ongoing, and that's what makes it exciting. Keep building, keep learning, and embrace the challenges."
    }
];

// Helper function to get blog post by slug
export const getBlogBySlug = (slug) => {
    return blogPosts.find(post => post.slug === slug);
};

// Helper function to get all blog summaries for the blog list
export const getBlogSummaries = () => {
    return blogPosts.map(({ id, slug, image, date, title, excerpt, author, readTime }) => ({
        id,
        slug,
        image,
        date,
        title,
        excerpt,
        author,
        readTime
    }));
};
