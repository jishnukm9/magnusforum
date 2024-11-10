import React from 'react';
import { Filter, ArrowUp, MessageSquare, Eye, ChevronUp, ChevronDown } from 'lucide-react';


const questions = [
  {
    id: 1,
    title: "Issues with Normal Pass Mapping from EXR Channels to RGB in Python Script",
    votes: 15,
    answers: 3,
    views: 234,
    tags: ["python", "numpy", "image-processing"],
    askedBy: "user123",
    askedAt: "1 min ago",
    bounty: 50
  },
  {
    id: 2,
    title: "How to implement JWT authentication in Next.js 13 with App Router?",
    votes: 42,
    answers: 5,
    views: 1205,
    tags: ["next.js", "authentication", "jwt"],
    askedBy: "webdev_pro",
    askedAt: "5 mins ago"
  },
  {
    id: 3,
    title: "Optimizing React useEffect Hook Performance",
    votes: 28,
    answers: 7,
    views: 892,
    tags: ["react", "javascript", "hooks", "performance"],
    askedBy: "react_ninja",
    askedAt: "15 mins ago"
  },
  {
    id: 4,
    title: "Docker container fails to connect to MongoDB in production",
    votes: 12,
    answers: 2,
    views: 445,
    tags: ["docker", "mongodb", "devops"],
    askedBy: "docker_master",
    askedAt: "30 mins ago"
  },
  {
    id: 5,
    title: "Best practices for handling form validation in React",
    votes: 35,
    answers: 8,
    views: 1567,
    tags: ["react", "forms", "validation"],
    askedBy: "form_wizard",
    askedAt: "1 hour ago"
  },
  {
    id: 6,
    title: "Understanding TypeScript Generic Constraints",
    votes: 24,
    answers: 4,
    views: 678,
    tags: ["typescript", "generics"],
    askedBy: "ts_lover",
    askedAt: "2 hours ago"
  },
  {
    id: 7,
    title: "Implementing real-time chat with Socket.io and React",
    votes: 56,
    answers: 12,
    views: 2341,
    tags: ["socket.io", "react", "real-time"],
    askedBy: "chat_expert",
    askedAt: "3 hours ago"
  },
  {
    id: 8,
    title: "CSS Grid vs Flexbox: When to use which?",
    votes: 89,
    answers: 15,
    views: 4532,
    tags: ["css", "grid", "flexbox", "layout"],
    askedBy: "css_master",
    askedAt: "4 hours ago"
  },
  {
    id: 9,
    title: "Optimizing PostgreSQL Query Performance",
    votes: 45,
    answers: 6,
    views: 1890,
    tags: ["postgresql", "database", "performance"],
    askedBy: "db_optimizer",
    askedAt: "5 hours ago"
  },
  {
    id: 10,
    title: "Understanding React Server Components",
    votes: 67,
    answers: 9,
    views: 3421,
    tags: ["react", "server-components", "next.js"],
    askedBy: "react_pro",
    askedAt: "6 hours ago"
  },
  {
    id: 11,
    title: "Implementing Infinite Scroll in React with Intersection Observer",
    votes: 38,
    answers: 5,
    views: 1567,
    tags: ["react", "javascript", "infinite-scroll"],
    askedBy: "scroll_master",
    askedAt: "7 hours ago"
  },
  {
    id: 12,
    title: "Best practices for handling API rate limiting",
    votes: 29,
    answers: 7,
    views: 982,
    tags: ["api", "rate-limiting", "backend"],
    askedBy: "api_expert",
    askedAt: "8 hours ago"
  },
  {
    id: 13,
    title: "Machine Learning Model Deployment with Flask",
    votes: 42,
    answers: 6,
    views: 1876,
    tags: ["python", "flask", "machine-learning", "deployment"],
    askedBy: "ml_deployer",
    askedAt: "9 hours ago"
  },
  {
    id: 14,
    title: "Understanding Redux Toolkit and RTK Query",
    votes: 51,
    answers: 8,
    views: 2345,
    tags: ["redux", "redux-toolkit", "react"],
    askedBy: "redux_pro",
    askedAt: "10 hours ago"
  },
  {
    id: 15,
    title: "Implementing OAuth2 with Spring Boot",
    votes: 34,
    answers: 5,
    views: 1432,
    tags: ["java", "spring-boot", "oauth2", "security"],
    askedBy: "spring_expert",
    askedAt: "11 hours ago"
  }
];



const QuestionCard = ({ question }) => (
  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
    <div className="flex gap-6">
      {/* Vote and Stats Section */}
      <div className="flex flex-col items-center gap-3 min-w-[80px]">
        <div className="flex flex-col items-center">
          <button className="p-1 text-gray-400 hover:text-orange-500 transition-colors">
            <ChevronUp className="w-6 h-6" />
          </button>
          <span className="text-lg font-semibold text-gray-700">{question.votes}</span>
          <button className="p-1 text-gray-400 hover:text-orange-500 transition-colors">
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
        <div className={`flex items-center gap-1.5 ${
          question.answers > 0 
            ? 'text-green-600' 
            : 'text-gray-500'
        }`}>
          <MessageSquare className="w-5 h-5" />
          <span className="font-medium">{question.answers}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-500">
          <Eye className="w-5 h-5" />
          <span>{question.views}</span>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <a 
            href={`/questions/${question.id}`}
            className="text-lg font-medium text-gray-900 hover:text-orange-600 transition-colors line-clamp-2"
          >
            {question.title}
          </a>
          {question.bounty && (
            <div className="flex items-center gap-1 px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              <ArrowUp className="w-4 h-4" />
              {question.bounty}
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2 mt-4">
          <div className="flex flex-wrap gap-1.5">
            {question.tags.map((tag) => (
              <a
                key={tag}
                href={`/tags/${tag}`}
                className="px-2.5 py-1 bg-orange-50 text-orange-700 rounded-full text-sm hover:bg-orange-100 transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <a
              href={`/users/${question.askedBy}`}
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              {question.askedBy}
            </a>
            <span>asked {question.askedAt}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);



export default function QuestionsPage() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">All Questions</h1>
          <p className="text-gray-500 mt-1">{questions.length.toLocaleString()} questions</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full hover:from-orange-600 hover:to-pink-600 text-sm font-medium transition-colors">
          Ask Question
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-2 border border-gray-100 mb-6">
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg bg-gray-50 p-1">
            <button className="px-4 py-1.5 bg-white text-gray-700 font-medium shadow-sm rounded-md">
              Newest
            </button>
            <button className="px-4 py-1.5 text-gray-600 hover:text-gray-900 transition-colors">
              Active
            </button>
            <button className="px-4 py-1.5 text-gray-600 hover:text-gray-900 transition-colors">
              Bountied
            </button>
            <button className="px-4 py-1.5 text-gray-600 hover:text-gray-900 transition-colors">
              Unanswered
            </button>
          </div>
          <div className="flex-1" />
          <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}
