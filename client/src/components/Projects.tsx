import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Trophy, Leaf, GitBranch, Eye, Microscope } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const projectsData = [
  {
    title: "ReNewTrade",
    description: "Blockchain-based energy trading prototype using Gemini AI agents. Finalist in sustainability-focused AI hackathon, demonstrating innovative approach to renewable energy market optimization.",
    icon: Leaf,
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    status: "Finalist",
    statusColor: "bg-accent/10 text-accent-foreground",
    statusIcon: Trophy,
    tags: ["Blockchain", "AI Agents", "Sustainability", "Energy Trading"],
    tagColors: ["bg-primary/10 text-primary", "bg-accent/10 text-accent-foreground", "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400", "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"],
    githubUrl: "https://github.com/Rachit-Singhal-01"
  },
  {
    title: "Relation Extraction Pipeline",
    description: "Advanced NLP pipeline using BERT embeddings combined with XGBoost vs. GCN approaches on re-DOCRED dataset for document-level relation extraction with state-of-the-art performance.",
    icon: GitBranch,
    iconColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    status: "NLP",
    statusColor: "bg-primary/10 text-primary",
    statusIcon: GitBranch,
    tags: ["BERT", "XGBoost", "GCN", "NLP"],
    tagColors: ["bg-primary/10 text-primary", "bg-accent/10 text-accent-foreground", "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400", "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"],
    githubUrl: "https://github.com/Rachit-Singhal-01"
  },
  {
    title: "Object Recognition System",
    description: "Comparative analysis of traditional computer vision (HOG/SIFT + SVM) with modern deep learning approaches (CNNs) on CIFAR-10, achieving 40% accuracy improvement with neural networks.",
    icon: Eye,
    iconColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    status: "+40% Accuracy",
    statusColor: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    statusIcon: Trophy,
    tags: ["CNN", "Computer Vision", "HOG/SIFT", "SVM"],
    tagColors: ["bg-primary/10 text-primary", "bg-accent/10 text-accent-foreground", "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400", "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"],
    githubUrl: "https://github.com/Rachit-Singhal-01"
  },
  {
    title: "SCDCC Framework",
    description: "Designed comprehensive framework for single-cell data clustering analysis, tested on multiple datasets including Zeisel mouse brain cortex, PBMC, bladder, and worm neuron datasets.",
    icon: Microscope,
    iconColor: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    status: "Biotech",
    statusColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    statusIcon: Microscope,
    tags: ["Single-Cell", "Clustering", "Bioinformatics", "Data Analysis"],
    tagColors: ["bg-primary/10 text-primary", "bg-accent/10 text-accent-foreground", "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400", "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"],
    githubUrl: "https://github.com/Rachit-Singhal-01"
  }
];

export function Projects() {
  const [repoData, setRepoData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch live GitHub repository data
    const fetchRepoData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Rachit-Singhal-01/repos');
        if (response.ok) {
          const data = await response.json();
          setRepoData(data.slice(0, 4)); // Get first 4 repos
        }
      } catch (error) {
        console.error('Failed to fetch GitHub repos:', error);
      }
    };

    fetchRepoData();
  }, []);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative AI/ML projects showcasing practical applications and technical expertise
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <project.icon className={`${project.iconColor} text-xl`} />
                    </div>
                    <Badge variant="secondary" className={project.statusColor}>
                      <project.statusIcon className="w-3 h-3 mr-1" />
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tag}
                        variant="secondary" 
                        className={`text-xs ${project.tagColors[tagIndex]}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="ghost" 
                      asChild
                      className="hover:bg-primary/10"
                      data-testid={`button-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 w-4 h-4" />
                        View on GitHub
                      </a>
                    </Button>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <ExternalLink className="mr-1 w-3 h-3" />
                      <span>Live Project</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button 
            asChild
            size="lg"
            className="hover:scale-105 shadow-lg"
            data-testid="button-view-all-projects"
          >
            <a
              href="https://github.com/Rachit-Singhal-01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
