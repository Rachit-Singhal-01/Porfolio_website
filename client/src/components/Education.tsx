import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Laptop } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "MSc in Advanced Computer Science (AI)",
    institution: "University of Manchester",
    period: "2024–Present",
    status: "Expected Distinction",
    statusColor: "bg-accent/10 text-accent-foreground",
    institutionColor: "text-primary",
    icon: GraduationCap,
    description: "Advanced coursework in machine learning, deep learning, computer vision, natural language processing, and AI ethics. Focus on practical applications and research in intelligent systems.",
    specialization: "Specialized in Artificial Intelligence and Machine Learning"
  },
  {
    degree: "B.Tech. in Information Technology",
    institution: "MSIT New Delhi",
    period: "2018–2022",
    status: "CGPA: 8.3/10",
    statusColor: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    institutionColor: "text-accent",
    icon: Laptop,
    description: "Comprehensive foundation in computer science fundamentals, programming, data structures, algorithms, software engineering, and database systems. Strong performance with distinction.",
    specialization: "Information Technology & Software Engineering"
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in computer science and artificial intelligence
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative md:pl-16 ${index < educationData.length - 1 ? 'mb-12' : ''}`}
              >
                <div className={`absolute left-6 w-4 h-4 ${index === 0 ? 'bg-primary' : 'bg-accent'} rounded-full border-4 border-background shadow-lg hidden md:block`}></div>
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                        <p className={`${edu.institutionColor} font-medium`}>{edu.institution}</p>
                      </div>
                      <div className="flex flex-col items-end mt-4 sm:mt-0">
                        <Badge variant="secondary" className="bg-muted text-muted-foreground mb-2">
                          {edu.period}
                        </Badge>
                        <Badge variant="secondary" className={edu.statusColor}>
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <edu.icon className="mr-2 w-4 h-4" />
                      <span>{edu.specialization}</span>
                    </div>
                    <p className="text-muted-foreground">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
