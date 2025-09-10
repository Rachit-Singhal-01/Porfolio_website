import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Brain, Code2, Target, Award } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating intelligent systems that solve real-world problems
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 shadow-md border border-border">
                <Brain className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold mb-2">AI Expertise</h4>
                <p className="text-sm text-muted-foreground">Advanced ML & Deep Learning</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-md border border-border">
                <Code2 className="w-8 h-8 text-accent mb-3" />
                <h4 className="font-semibold mb-2">Full Stack</h4>
                <p className="text-sm text-muted-foreground">Python, Cloud & Data Engineering</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-md border border-border">
                <Target className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
                <h4 className="font-semibold mb-2">Impact Driven</h4>
                <p className="text-sm text-muted-foreground">30% efficiency improvements</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-md border border-border">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h4 className="font-semibold mb-2">Recognition</h4>
                <p className="text-sm text-muted-foreground">Hackathon Finalist</p>
              </div>
            </div>
            
            {/* Location */}
            <div className="bg-card rounded-xl p-4 shadow-md border border-border flex items-center">
              <MapPin className="w-5 h-5 text-accent mr-3" />
              <div>
                <p className="font-medium">Based in Manchester, UK</p>
                <p className="text-sm text-muted-foreground">Open to remote opportunities</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  MSc Artificial Intelligence graduate at the University of Manchester with hands-on experience in machine learning, reinforcement learning, and data engineering. Skilled in Python and modern ML frameworks, with a proven ability to design and deploy AI solutions that improve efficiency and accuracy.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Experienced in biomedical text mining, financial analytics, and education technology. Strong collaborator who bridges technical depth with clear communication.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-accent">4+</div>
                    <div className="text-sm text-muted-foreground">Major Projects</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    AI/ML Engineer
                  </Badge>
                  <Badge variant="secondary" className="bg-accent/10 text-accent-foreground hover:bg-accent/20">
                    Data Scientist
                  </Badge>
                  <Badge variant="secondary">
                    Python Developer
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
