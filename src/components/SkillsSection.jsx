import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "React.js", level: 90, category: "frontend" },
  { name: "HTML", level: 92, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 88, category: "frontend" },
  { name: "TypeScript", level: 82, category: "frontend" },
  { name: "Tailwind CSS", level: 88, category: "frontend" },
  { name: "DaisyUI", level: 78, category: "frontend" },

  // Backend
  { name: "Node.js", level: 86, category: "backend" },
  { name: "Express.js", level: 84, category: "backend" },
  { name: "Socket.IO", level: 80, category: "backend" },
  { name: "WebRTC", level: 72, category: "backend" },

  // Database
  { name: "MongoDB", level: 85, category: "database" },
  { name: "SQL", level: 80, category: "database" },
  { name: "PostgreSQL", level: 78, category: "database" },

  // ORM / ODM
  { name: "Mongoose", level: 84, category: "orm" },
  { name: "Prisma", level: 78, category: "orm" },

  // DevOps & Tools
  { name: "Git", level: 88, category: "devops" },
  { name: "GitHub", level: 90, category: "devops" },
  { name: "Docker", level: 74, category: "devops" },
  { name: "CI/CD", level: 72, category: "devops" },
  { name: "AWS EC2", level: 70, category: "devops" },
  { name: "Nginx", level: 72, category: "devops" },
];

const categoryFilters = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "orm", label: "ORM / ODM" },
  { id: "devops", label: "DevOps & Tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryFilters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveCategory(id)}
              className={cn(
                "px-4 py-2 rounded-full transition-colors duration-300 text-sm sm:text-base",
                activeCategory === id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
