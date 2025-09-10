import { Card, CardContent } from "@/components/ui/card";
import { Brain, TrendingUp, Cloud, Code } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: Brain,
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      { name: "Machine Learning", level: 100 },
      { name: "Deep Learning", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "NLP", level: 85 },
    ],
  },
  {
    title: "Data Science",
    icon: TrendingUp,
    iconColor: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      { name: "Data Analysis", level: 100 },
      { name: "Statistics", level: 85 },
      { name: "AI Strategy", level: 80 },
      { name: "Generative AI", level: 85 },
    ],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    iconColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Azure", level: 75 },
      { name: "Google Cloud", level: 75 },
    ],
  },
  {
    title: "Programming",
    icon: Code,
    iconColor: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    skills: [
      { name: "Python", level: 100 },
      { name: "PyTorch", level: 85 },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 75 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across the AI/ML stack with modern tools and frameworks
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover-elevate">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className={`${category.iconColor} text-xl`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between text-sm">
                        <span>{skill.name}</span>
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary rounded-full skill-bar"
                            style={{ width: `${skill.level}%` }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
