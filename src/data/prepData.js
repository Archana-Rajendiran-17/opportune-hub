export const PREP_CATEGORIES = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    icon: "Code2",
    description: "Master essential coding patterns, Striver A2Z DSA sheet topics, and Blind 75 questions.",
    topics: [
      {
        id: "dsa-1",
        name: "Arrays & Hashing (Two Pointers, Sliding Window)",
        difficulty: "Easy - Medium",
        questionsCount: 25,
        link: "https://leetcode.com/studyplan/leetcode-75/",
        resources: [
          "Two Sum & 3Sum Pattern",
          "Maximum Subarray (Kadane's Algorithm)",
          "Longest Substring Without Repeating Characters",
          "Subarray Sum Equals K"
        ]
      },
      {
        id: "dsa-2",
        name: "Trees, Binary Search Trees & Tries",
        difficulty: "Medium",
        questionsCount: 20,
        link: "https://takeuforward.org/strivers-a2z-dsa-course/",
        resources: [
          "Binary Tree Inorder, Preorder, Postorder Traversal",
          "Lowest Common Ancestor (LCA) in BST",
          "Serialize & Deserialize Binary Tree",
          "Implement Trie (Prefix Tree)"
        ]
      },
      {
        id: "dsa-3",
        name: "Graphs (BFS, DFS, Dijkstra, Topo Sort)",
        difficulty: "Medium - Hard",
        questionsCount: 18,
        link: "https://neetcode.io/roadmap",
        resources: [
          "Number of Islands (BFS/DFS Grid Traversal)",
          "Course Schedule (Topological Sort / Cycle Detection)",
          "Dijkstra Shortest Path Algorithm",
          "Word Ladder"
        ]
      },
      {
        id: "dsa-4",
        name: "Dynamic Programming & Backtracking",
        difficulty: "Hard",
        questionsCount: 22,
        link: "https://leetcode.com/problemset/all/",
        resources: [
          "0/1 Knapsack & Subset Sum",
          "Longest Common Subsequence (LCS)",
          "Coin Change & Combination Sum",
          "N-Queens & Sudoku Solver"
        ]
      }
    ]
  },
  {
    id: "sysdesign",
    title: "System Design (LLD & HLD)",
    icon: "Network",
    description: "Learn high-availability system design principles, microservices, databases, and low-level OOP design.",
    topics: [
      {
        id: "sys-1",
        name: "High Level Design (HLD) Fundamentals",
        difficulty: "Medium - Hard",
        questionsCount: 12,
        link: "https://github.com/donnemartin/system-design-primer",
        resources: [
          "Load Balancers (Round Robin, Consistent Hashing)",
          "Caching Strategies (Redis, Memcached, Cache-Aside)",
          "Database Sharding & Read Replicas",
          "Message Queues (Kafka, RabbitMQ)"
        ]
      },
      {
        id: "sys-2",
        name: "Popular HLD Architecture Case Studies",
        difficulty: "Hard",
        questionsCount: 10,
        link: "https://bytebytego.com/",
        resources: [
          "Design URL Shortener (TinyURL)",
          "Design Swiggy / Uber Real-Time Driver Tracking",
          "Design WhatsApp / Chat Messaging Service",
          "Design Netflix Video Streaming Pipeline"
        ]
      },
      {
        id: "sys-3",
        name: "Low Level Design (LLD) & Design Patterns",
        difficulty: "Medium",
        questionsCount: 15,
        link: "https://refactoring.guru/design-patterns",
        resources: [
          "SOLID Principles in Object Oriented Design",
          "Design Parking Lot System (OOP Classes)",
          "Design BookMyShow / Movie Ticket Booking",
          "Singleton, Factory, Observer & Strategy Patterns"
        ]
      }
    ]
  },
  {
    id: "corecs",
    title: "Core Computer Science Subjects",
    icon: "Database",
    description: "Operating Systems, DBMS, Computer Networks, and Object-Oriented Programming theory interview Q&As.",
    topics: [
      {
        id: "cs-1",
        name: "Database Management Systems (DBMS & SQL)",
        difficulty: "Easy - Medium",
        questionsCount: 30,
        link: "https://www.geeksforgeeks.org/dbms/",
        resources: [
          "ACID Properties & Transaction Isolation Levels",
          "SQL Joins, Group By, Window Functions (RANK, DENSE_RANK)",
          "Indexing (B-Tree, Hash Index) & Query Optimization",
          "Normalization (1NF, 2NF, 3NF, BCNF)"
        ]
      },
      {
        id: "cs-2",
        name: "Operating Systems (OS)",
        difficulty: "Medium",
        questionsCount: 25,
        link: "https://www.geeksforgeeks.org/operating-systems/",
        resources: [
          "Process vs Thread & Context Switching",
          "CPU Scheduling Algorithms (Round Robin, SJF, Priority)",
          "Deadlocks: 4 Necessary Conditions & Banker's Algorithm",
          "Virtual Memory, Paging, and Page Replacement Algorithms"
        ]
      },
      {
        id: "cs-3",
        name: "Computer Networks (CN)",
        difficulty: "Medium",
        questionsCount: 20,
        link: "https://www.geeksforgeeks.org/computer-network-tutorials/",
        resources: [
          "OSI 7-Layer Model vs TCP/IP Protocol Stack",
          "TCP 3-Way Handshake vs UDP",
          "HTTP/1.1 vs HTTP/2 vs HTTP/3 & HTTPS SSL/TLS",
          "DNS Resolution Process step-by-step"
        ]
      }
    ]
  },
  {
    id: "behavioral",
    title: "Behavioral & HR Interview Masterclass",
    icon: "Users",
    description: "Master the STAR method (Situation, Task, Action, Result) for top product & consulting companies.",
    topics: [
      {
        id: "beh-1",
        name: "Amazon Leadership Principles & STAR Framework",
        difficulty: "Medium",
        questionsCount: 15,
        link: "https://www.amazon.jobs/en/principles",
        resources: [
          "Tell me about a time you faced a tough technical challenge.",
          "Describe a situation where you had a disagreement with a teammate.",
          "Give an example of a mistake you made and how you handled it.",
          "Customer Obsession & Bias for Action scenario stories"
        ]
      },
      {
        id: "beh-2",
        name: "HR Round Standard Questions & Elevator Pitch",
        difficulty: "Easy",
        questionsCount: 10,
        link: "https://hbr.org/",
        resources: [
          "Tell me about yourself (60-second pitch framework)",
          "Why do you want to join our company?",
          "Where do you see yourself in 3 to 5 years?",
          "What are your key technical strengths and areas of growth?"
        ]
      }
    ]
  },
  {
    id: "company",
    title: "Company-Specific Interview Archives",
    icon: "Building2",
    description: "Curated interview patterns, salary expectations, and recent round breakdowns for top hiring firms.",
    topics: [
      {
        id: "comp-1",
        name: "MAANG / Tech Giants (Google, Microsoft, Amazon, Meta)",
        difficulty: "Hard",
        questionsCount: 50,
        link: "https://leetcode.com/company/google/",
        resources: [
          "Focus: Advanced LeetCode Medium/Hard + System Design",
          "Code Cleanliness & Edge Case Handling emphasis",
          "Live Whiteboard / Shared Editor coding performance"
        ]
      },
      {
        id: "comp-2",
        name: "Top Indian Unicorns (Swiggy, Razorpay, Flipkart, Zomato)",
        difficulty: "Medium - Hard",
        questionsCount: 40,
        link: "https://takeuforward.org/",
        resources: [
          "Focus: Practical Machine Coding (Build a mini app/service)",
          "Deep React/Node.js internal architecture knowledge",
          "Database Schema design under load"
        ]
      },
      {
        id: "comp-3",
        name: "IT Services & Mass Recruiters (TCS, Infosys, Wipro, Accenture)",
        difficulty: "Easy - Medium",
        questionsCount: 60,
        link: "https://www.geeksforgeeks.org/",
        resources: [
          "Focus: Aptitude, Basic Programming (String/Array manipulations)",
          "OOPs, SQL Queries & Project explanation",
          "Communication skills & willingness to relocate"
        ]
      }
    ]
  }
];
