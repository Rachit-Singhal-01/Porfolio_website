import { Button } from "@/components/ui/button";
import { Mail, Code, CheckCircle, Download } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@assets/Screenshot 2025-09-08 191234-modified_1757440435096.png";

export function Hero() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectsClick = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Professional headshot */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Rachit Singhal"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-2xl animate-float border-4 border-primary/20"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-4 h-4 text-accent-foreground" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Rachit Singhal</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
            AI/ML Engineer | Transforming Data into Intelligent Solutions
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I help businesses leverage AI to automate processes, gain insights from data, and build scalable intelligent systems that drive measurable results
          </p>
          <p className="text-sm sm:text-base text-muted-foreground/80 mb-12 max-w-xl mx-auto">
            MSc AI graduate with expertise in machine learning, deep learning, and data engineering
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={handleContactClick}
              size="lg"
              className="hover:scale-105 shadow-lg"
              data-testid="button-get-in-touch"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleProjectsClick}
              className="hover:scale-105"
              data-testid="button-view-work"
            >
              <Code className="mr-2 h-4 w-4" />
              View My Work
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="hover:scale-105"
              data-testid="button-download-cv"
              asChild
            >
              <a href="/Rachit_Singhal_CV.docx" download="Rachit_Singhal_CV.docx">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 text-muted-foreground">
            <a
              href="https://www.linkedin.com/in/rachit-singhall/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              data-testid="link-linkedin"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/Rachit-Singhal-01"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
              data-testid="link-github"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="mailto:rachitsinghal2024@gmail.com"
              className="hover:text-accent transition-colors duration-200 hover:scale-110 transform"
              data-testid="link-email"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
