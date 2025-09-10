import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Activity, Bot } from "lucide-react";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "System Engineer",
    company: "Infosys Limited",
    period: "August 2022 – July 2024",
    duration: "2 Years",
    durationColor: "bg-primary/10 text-primary",
    companyColor: "text-primary",
    achievements: [
      {
        icon: TrendingUp,
        iconColor: "text-green-600 dark:text-green-400",
        text: "Developed data-driven solutions that streamlined workflows and improved reporting efficiency, reducing report generation time by 30%"
      },
      {
        icon: Activity,
        iconColor: "text-accent",
        text: "Designed and maintained interactive dashboards using Power BI and Python, improving data visibility and reducing manual reporting effort by 50%"
      },
      {
        icon: Bot,
        iconColor: "text-primary",
        text: "Contributed to the integration of analytics and machine learning models, leading to a 25% improvement in data accuracy and a 20% reduction in processing time"
      }
    ],
    metrics: [
      { value: "30%", label: "Report Generation Time Reduced", color: "text-green-600 dark:text-green-400" },
      { value: "50%", label: "Manual Reporting Effort Reduced", color: "text-blue-600 dark:text-blue-400" },
      { value: "25%", label: "Data Accuracy Improved", color: "text-purple-600 dark:text-purple-400" }
    ]
  },
  {
    title: "AI/ML Intern",
    company: "Magic Edtech",
    period: "February 2022 – March 2022",
    duration: "Internship",
    durationColor: "bg-accent/10 text-accent-foreground",
    companyColor: "text-accent",
    achievements: [
      {
        icon: TrendingUp,
        iconColor: "text-accent",
        text: "Applied machine learning techniques to analyze large datasets and build predictive models for business insights"
      },
      {
        icon: Activity,
        iconColor: "text-accent",
        text: "Collaborated with teams to deliver data insights that enabled a 10% increase in student engagement based on performance predictions"
      }
    ],
    metrics: [
      { value: "10%", label: "Student Engagement Increase", color: "text-accent" },
      { value: "ML", label: "Predictive Models Built", color: "text-green-600 dark:text-green-400" }
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven track record in developing scalable AI solutions and data-driven systems
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                      <p className={`${exp.companyColor} text-lg font-medium mb-2`}>{exp.company}</p>
                      <p className="text-muted-foreground flex items-center">
                        <Calendar className="mr-2 w-4 h-4" />
                        {exp.period}
                      </p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Badge variant="secondary" className={exp.durationColor}>
                        {exp.duration}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {exp.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center p-4 bg-muted rounded-lg">
                        <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <achievement.icon className={`${achievement.iconColor} mt-1 mr-3 w-5 h-5`} />
                        <p className="text-muted-foreground">{achievement.text}</p>
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
