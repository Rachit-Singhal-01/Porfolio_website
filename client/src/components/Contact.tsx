import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Clock, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next AI/ML project? Let's discuss how we can build something amazing together.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto flex justify-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text text-center">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center p-4 rounded-lg hover:bg-muted transition-colors duration-200 hover-elevate">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:rachitsinghal2024@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        data-testid="link-contact-email"
                      >
                        rachitsinghal2024@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 rounded-lg hover:bg-muted transition-colors duration-200 hover-elevate">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                      <Linkedin className="text-blue-600 dark:text-blue-400 text-xl" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/rachit-singhall/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        data-testid="link-contact-linkedin"
                      >
                        linkedin.com/in/rachit-singhall
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 rounded-lg hover:bg-muted transition-colors duration-200 hover-elevate">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                      <Github className="text-gray-600 dark:text-gray-400 text-xl" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a
                        href="https://github.com/Rachit-Singhal-01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        data-testid="link-contact-github"
                      >
                        github.com/Rachit-Singhal-01
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 rounded-lg">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="text-accent text-xl" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Manchester, United Kingdom</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <Clock className="mr-2 w-4 h-4 inline" />
                    Typically responds within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
