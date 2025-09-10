import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Brain, 
  Database, 
  Cloud, 
  Code2, 
  Cpu, 
  BarChart3,
  GitBranch,
  Layers
} from "lucide-react";

const techCategories = [
  {
    category: "Machine Learning",
    icon: Brain,
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    technologies: [
      "Python", "PyTorch", "TensorFlow", "Scikit-learn", 
      "Pandas", "NumPy", "OpenCV", "Hugging Face"
    ]
  },
  {
    category: "Data Engineering",
    icon: Database,
    iconColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    technologies: [
      "SQL", "PostgreSQL", "Apache Spark", "Airflow", 
      "Kafka", "ETL/ELT", "Data Pipelines", "MongoDB"
    ]
  },
  {
    category: "Cloud Platforms",
    icon: Cloud,
    iconColor: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    technologies: [
      "AWS", "Azure", "Google Cloud", "Docker", 
      "Kubernetes", "Lambda", "S3", "EC2"
    ]
  },
  {
    category: "Development",
    icon: Code2,
    iconColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    technologies: [
      "JavaScript", "React", "Node.js", "TypeScript", 
      "Git", "REST APIs", "GraphQL", "Microservices"
    ]
  },
  {
    category: "Analytics & BI",
    icon: BarChart3,
    iconColor: "text-accent",
    bgColor: "bg-accent/10",
    technologies: [
      "Power BI", "Tableau", "Jupyter", "R", 
      "Excel", "SPSS", "Matplotlib", "Seaborn"
    ]
  },
  {
    category: "AI Frameworks",
    icon: Cpu,
    iconColor: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    technologies: [
      "LangChain", "OpenAI API", "BERT", "GPT", 
      "Computer Vision", "NLP", "Deep Learning", "MLOps"
    ]
  }
];

export function Technologies() {
  return (
    <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technologies & Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tech stack for building end-to-end AI solutions
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover-elevate h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center mr-3`}>
                      <category.icon className={`${category.iconColor} text-lg`} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={tech}
                        variant="secondary" 
                        className="text-xs bg-muted hover:bg-muted/80 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Tech Stack Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-4">
              <Layers className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">Full Stack</p>
              <p className="text-xs text-muted-foreground">End-to-end development</p>
            </div>
            <div className="p-4">
              <GitBranch className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-sm font-medium">MLOps</p>
              <p className="text-xs text-muted-foreground">Model deployment & monitoring</p>
            </div>
            <div className="p-4">
              <Database className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <p className="text-sm font-medium">Big Data</p>
              <p className="text-xs text-muted-foreground">Scalable data processing</p>
            </div>
            <div className="p-4">
              <Brain className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
              <p className="text-sm font-medium">AI Research</p>
              <p className="text-xs text-muted-foreground">Cutting-edge algorithms</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}