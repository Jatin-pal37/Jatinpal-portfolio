import { Brain, Code, Rocket } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer (MERN) & CS Student
            </h3>

            <p className="text-muted-foreground">
              I focus on the MERN stack end to end—thoughtful APIs, solid data
              modeling, and interfaces that stay fast and maintainable as
              projects grow.
            </p>

            <p className="text-muted-foreground">
              I&apos;m especially interested in AI-powered features that solve
              real problems. I&apos;m actively looking for a Full Stack
              Internship where I can ship code, learn from a team, and
              contribute to products people rely on.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">MERN stack</h4>
                  <p className="text-muted-foreground">
                    Building full-stack apps with MongoDB, Express, React, and
                    Node.js—from REST APIs and auth to polished UIs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI &amp; modern web</h4>
                  <p className="text-muted-foreground">
                    Exploring AI-powered solutions and how they fit into
                    practical, user-facing products.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Open to internship</h4>
                  <p className="text-muted-foreground">
                    Ready for a Full Stack Internship to learn in production,
                    ship features, and grow with a real team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
