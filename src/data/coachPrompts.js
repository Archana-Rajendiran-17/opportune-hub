export const QUICK_PROMPTS = [
  {
    id: "p1",
    label: "Interview Prep",
    text: "What are the top 5 questions asked in Amazon SDE 1 interviews?"
  },
  {
    id: "p2",
    label: "Resume Optimization",
    text: "How do I frame bullet points using the Google XYZ resume formula?"
  },
  {
    id: "p3",
    label: "Salary Negotiation",
    text: "How should a fresher negotiate an internship stipend or full-time offer?"
  },
  {
    id: "p4",
    label: "Career Pivot",
    text: "What is the fastest 6-month roadmap to transition from non-CS to Full Stack Developer?"
  },
  {
    id: "p5",
    label: "Tech Stack Advice",
    text: "Should I learn React + Node.js or Java Spring Boot for high-paying Indian tech jobs in 2026?"
  }
];

export const INITIAL_CHAT_MESSAGES = [
  {
    id: "msg-1",
    sender: "ai",
    timestamp: "Just now",
    text: "Hello! 👋 I'm your AI Career & Placement Coach at Opportune Hub. How can I help you accelerate your job search, polish your resume, or prepare for technical interviews today?"
  }
];

export const KNOWLEDGE_BASE_RESPONSES = [
  {
    keywords: ["amazon", "sde", "top 5", "interview"],
    response: `Here are the **Top 5 core areas asked in Amazon SDE 1 interviews**:

1. **Data Structures & Algorithms (Trees & Graphs)**: 
   - Binary Tree Level Order Traversal, Lowest Common Ancestor.
   - Graph BFS/DFS (Number of Islands, Course Schedule).
2. **Amazon 16 Leadership Principles**:
   - Prepare STAR stories for *Customer Obsession*, *Bias for Action*, and *Ownership*.
3. **System Design / Low Level Design (LLD)**:
   - Design a Parking Lot System or Online Shopping Cart schema using SOLID principles.
4. **Subarray / Dynamic Programming Problems**:
   - Sliding Window Maximum, Two Sum variants, Coin Change.
5. **Behavioral Code Walkthrough**:
   - Explaining time and space complexity ($O(N \log N)$ vs $O(N)$) for every solution you write!`
  },
  {
    keywords: ["xyz", "google", "bullet", "formula", "resume"],
    response: `The **Google XYZ Formula** is:
> *"Accomplished [X], as measured by [Y], by doing [Z]"*

**Examples for your resume:**
- ❌ *Weak:* "Built a React web app for food ordering."
- ✅ *Strong (XYZ):* "Engineered a responsive React food delivery web app **[Z]**, boosting page load speed by **35% [Y]** and serving **5,000+ monthly active users [X]**."
- ✅ *Backend Example:* "Optimized PostgreSQL database queries **[Z]**, reducing API latency from **450ms to 80ms [Y]** for **100k daily API requests [X]**."`
  },
  {
    keywords: ["salary", "negotiate", "stipend", "offer"],
    response: `Here is a step-by-step strategy for **Fresher Salary & Stipend Negotiation**:

1. **Research Market Rates**: Check standard benchmarks on levels.fyi, AmbitionBox, or Opportune Hub listings (e.g. SDE Interns range from ₹35k to ₹90k/mo).
2. **Highlight Multiple Offers or Skills**: If you have competing offers or niche skills (e.g. Next.js, Docker, PyTorch), politely mention: *"I have another active offer at ₹50k, but your team's project aligns closer with my career goals. Is there flexibility in the base compensation?"*
3. **Negotiate Non-Monetary Benefits**: If stipend/base is fixed, ask about joining bonus, remote work allowance, learning stipend, or early performance appraisal cycles!`
  },
  {
    keywords: ["roadmap", "non-cs", "transition", "full stack"],
    response: `Here is the **6-Month Action Plan to become a Full Stack Engineer**:

- **Months 1-2 (Fundamentals)**: Master JavaScript (ES6+ async/await, DOM, closures) & HTML/CSS layout (Flexbox, Grid).
- **Months 3-4 (Frontend & React)**: Build 3 real-world React apps with Tailwind CSS, Redux/Zustand, and API integration.
- **Month 5 (Backend & SQL)**: Build Node.js / Express REST APIs with PostgreSQL or MongoDB, JWT Authentication, and Docker.
- **Month 6 (Projects & Placement)**: Host live web apps on Vercel/Render, optimize your GitHub, and apply via Opportune Hub live listings!`
  },
  {
    keywords: ["react", "node", "java", "spring", "tech stack"],
    response: `Both stacks have high demand, but depend on your target company:

- **React + Node.js (MERN / Full Stack)**: Best for Startups, Fintechs (Razorpay, Swiggy, Zomato), and US Product companies. Faster development cycle and very high demand for frontend/fullstack roles.
- **Java + Spring Boot**: Best for Enterprise Giants (Amazon, Microsoft, Oracle, Banks, TCS Digital). Exceptional for deep backend systems and large-scale distributed microservices.

💡 **Recommendation**: Master **JavaScript/TypeScript + React** for rapid product building, while learning **Core Java & DSA** for product company coding rounds!`
  }
];
