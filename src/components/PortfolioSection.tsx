import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, Globe, Zap } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "DareSay Showcase Web Application",
      company: "DareSay",
      type: "Web Application",
      description: "React.js showcase web application for elegant client project presentation on office TV screens powered by Raspberry Pi, with user-friendly CMS for streamlined project management.",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Hooks", "Redux", "Figma", "TCA"],
      icon: <Globe className="w-6 h-6" />,
      color: "tech-accent"
    },
    {
      title: "Länsförsäkringar iOS App",
      company: "DareSay",
      type: "iOS Application",
      description: "Maintained and enhanced critical KYC and BankID authentication modules ensuring secure user verification for banking and insurance services.",
      skills: ["Swift", "SwiftUI", "iOS", "KYC Integration", "BankID Authentication"],
      icon: <Smartphone className="w-6 h-6" />,
      color: "primary"
    },
    {
      title: "WorkZen",
      company: "Daresay",
      type: "Flutter Application",
      description: "Flutter application for workplace well-being featuring customizable break reminders, posture improvement, and guided body stretches.",
      skills: ["Dart", "BLoC", "Awesome Notifications", "Widget", "Android Studio", "Flutter", "Figma"],
      icon: <Zap className="w-6 h-6" />,
      color: "success-accent"
    },
    {
      title: "RentIT",
      company: "Nexer Group",
      type: "Internal App",
      description: "Internal lending app for employees with item listings, notifications, and reviews. Led architecture design and cross-functional collaboration.",
      skills: ["SwiftUI", "MVVM-C", "Concurrency", "Agile", "Azure DevOps", "Firebase App Tester", "Push Notifications"],
      icon: <Smartphone className="w-6 h-6" />,
      color: "primary"
    },
    {
      title: "Vamos Football Fitness",
      company: "Nexer Group", 
      type: "Fitness App",
      description: "Specialized fitness application for football players with exercise instructions, user onboarding, and points-based leveling system.",
      skills: ["SwiftUI", "MVVM", "Figma", "Firebase", "TestFlight", "Firebase App Tester", "Combine"],
      icon: <Smartphone className="w-6 h-6" />,
      color: "warning-accent"
    },
    {
      title: "Drone Finder",
      company: "Nexer India",
      type: "Rescue Application",
      description: "Rescue application for DJI Drones using machine learning for victim detection through image analysis.",
      skills: ["UIKit", "Swift", "Xcode", "MVVM", "Agile", "DJI SDK", "Instruments"],
      icon: <Smartphone className="w-6 h-6" />,
      color: "tech-accent"
    },
    {
      title: "Stockal",
      company: "Stockal",
      type: "Financial App",
      description: "US stock market intelligence app with historical data and analysis. Served as iOS technical lead and collaborated on MVP development.",
      skills: ["Swift", "MVC", "Realm", "InVision", "TradeIt SDK", "Asana", "Agile", "GitLab"],
      icon: <Smartphone className="w-6 h-6" />,
      color: "hero-accent"
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
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work across various industries and technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(project.color)}`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{project.company}</span>
                          <span>•</span>
                          <span>{project.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 shadow-medium bg-gradient-subtle">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your next iOS or cross-platform mobile project. 
                I'm always excited to work on innovative solutions.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Start a Project
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;