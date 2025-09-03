import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Globe, 
  Settings, 
  Users,
  Code,
  Database,
  Zap,
  Layers
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "iOS Development",
      icon: <Smartphone className="w-6 h-6" />,
      color: "primary",
      skills: [
        "SwiftUI", "Swift", "Objective-C", "XCode", "UIKit",
        "MVVM", "MVVM-C", "MVC", "Unit Testing", "Concurrency",
        "Combine", "Swift Package Manager"
      ]
    },
    {
      title: "Cross-Platform & Web",
      icon: <Globe className="w-6 h-6" />,
      color: "tech-accent",
      skills: [
        "Flutter", "Dart", "BLoC", "HTML", "CSS", "JavaScript",
        "React.js", "Hooks", "Redux"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-6 h-6" />,
      color: "hero-accent",
      skills: [
        "Figma", "Git", "CI/CD", "Azure DevOps", "Firebase App Tester",
        "XCode Cloud", "Firebase", "TestFlight", "Push Notifications",
        "Instruments", "Miro", "Crashlytics", "Postman"
      ]
    },
    {
      title: "Database & Architecture",
      icon: <Database className="w-6 h-6" />,
      color: "success-accent",
      skills: [
        "Realm DB", "Core Data", "SQLite", "TCA", "Clean Architecture"
      ]
    },
    {
      title: "Project Management",
      icon: <Users className="w-6 h-6" />,
      color: "warning-accent",
      skills: [
        "Agile", "Scrum", "Jira", "Trello",
        "Asana", "SAFe"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      "primary": "bg-primary text-primary-foreground",
      "tech-accent": "bg-tech-accent text-accent-foreground", 
      "hero-accent": "bg-hero-accent text-accent-foreground",
      "success-accent": "bg-success-accent text-accent-foreground",
      "warning-accent": "bg-warning-accent text-accent-foreground"
    };
    return colorMap[color] || "bg-primary text-primary-foreground";
  };

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building exceptional mobile and web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Professional <span className="text-primary">Services</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development services to bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "iOS App Development",
                description: "Native Swift/SwiftUI applications with modern architecture patterns"
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Cross-platform Development", 
                description: "Flutter applications for iOS and Android with shared codebase"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Web Application Development",
                description: "React.js applications with responsive design and modern UX"
              }
              /*,
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Performance Optimization",
                description: "App performance analysis, debugging, and optimization"
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Technical Leadership",
                description: "Code review, architecture design, and project management"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "API Integration",
                description: "RESTful API integration and backend service connectivity"
              }*/
            ].map((service, index) => (
              <Card key={service.title} className="text-center p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;