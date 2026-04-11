import { GITHUB_URL } from "@/constants/profile";
import { ArrowRight, Code2, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website In React",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Daisy UI" ],
    demoUrl: "#",
    githubUrl: "https://github.com/Jatin-pal37/Jatinpal-portfolio",
  },
  {
    id: 2,
    title: " Real-Time Chat / Collaboration App",
    description:
      "Built a real-time messaging/collaboration platform with instant communication.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "React","TailwindCSS", "Daisy UI", "Node.js", "Express", "Socket.IO", "MongoDB", "JWT"],
    demoUrl: "#",
    githubUrl: "https://github.com/Jatin-pal37/Chatapp",
  },
  {
    id: 3,
    title: "E-commerce inventory Platform",
    description:
      "Built a complete CRUD application with authentication-ready architecture.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "TailwindCSS",],
    demoUrl: "#",
    githubUrl: "https://github.com/Jatin-pal37/Inventory-management-app",
    
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Code2 size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href={GITHUB_URL}
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
