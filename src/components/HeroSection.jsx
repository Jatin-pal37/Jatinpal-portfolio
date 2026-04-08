import { ArrowDown } from "lucide-react";
import { PROFILE_IMAGE } from "@/constants/profile";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="flex justify-center opacity-0 animate-fade-in">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full bg-primary/35 blur-2xl scale-125 opacity-70 pointer-events-none"
                aria-hidden
              />
              <div className="relative rounded-full p-[3px] bg-linear-to-br from-primary via-primary/70 to-primary/30 shadow-lg shadow-primary/25">
                <img
                  src={PROFILE_IMAGE.src}
                  alt={PROFILE_IMAGE.alt}
                  width={176}
                  height={176}
                  decoding="async"
                  className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover ring-[3px] ring-background"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I&apos;m</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Jatin
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Pal
            </span>
            <span className="opacity-0 animate-fade-in-delay-2"> 👋</span>
          </h1>

          <p className="text-lg md:text-xl text-primary/90 font-medium max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
            Full Stack Developer (MERN) | Building Real-World Web Apps
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-4">
            I&apos;m a Computer Science student passionate about building
            scalable web applications and exploring AI-powered solutions.
            Currently looking for a Full Stack Internship to gain real-world
            experience and contribute to meaningful projects.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
