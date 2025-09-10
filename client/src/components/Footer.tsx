import { Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <span className="text-2xl font-bold gradient-text">Rachit Singhal</span>
          </div>
          
          <p className="text-muted-foreground mb-6">
            AI/ML Engineer passionate about building intelligent systems that make a difference
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/rachit-singhall/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              data-testid="footer-link-linkedin"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/Rachit-Singhal-01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform"
              data-testid="footer-link-github"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="mailto:rachitsinghal2024@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-200 hover:scale-110 transform"
              data-testid="footer-link-email"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Rachit Singhal. Designed with passion for innovation and excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
