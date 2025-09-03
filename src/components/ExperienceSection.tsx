import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Knightec Group",
      role: "iOS Developer",
      period: "September 2023 – Present",
      location: "Stockholm, Sweden",
      type: "Current Position",
      description: "Leading iOS development initiatives with focus on banking and insurance applications. Maintaining critical KYC and BankID authentication modules while developing modern React.js showcase applications.",
      achievements: [
        "Enhanced security modules for banking applications",
        "Developed TV-based presentation systems with Raspberry Pi",
        "Implemented modern React.js architecture patterns"
      ],
      technologies: ["Swift", "SwiftUI", "React.js", "JavaScript", "KYC Integration", "BankID"],
      color: "primary"
    },
    {
      company: "Nexer Group", 
      role: "iOS Developer",
      period: "September 2018 – August 2023",
      location: "Stockholm, Sweden",
      type: "5 Years",
      description: "Developed multiple iOS applications across different domains including internal tools, fitness applications, and rescue systems. Led architecture design and cross-functional collaboration.",
      achievements: [
        "Led technical architecture for RentIT internal lending app",
        "Developed specialized fitness app for football players",
        "Created rescue application with ML-based victim detection",
        "Mentored junior developers and established coding standards"
      ],
      technologies: ["SwiftUI", "MVVM-C", "Flutter", "Dart", "BLoC", "Firebase", "Azure DevOps", "DJI SDK"],
      color: "tech-accent"
    },
    {
      company: "Stockal",
      role: "iOS Developer",
      period: "November 2015 – August 2018",
      location: "India",
      type: "3 Years",
      description: "Served as iOS technical lead for US stock market intelligence application. Collaborated on MVP development and implemented complex financial data visualization features.",
      achievements: [
        "Led iOS development team for financial application",
        "Implemented real-time stock market data integration",
        "Designed and developed user-friendly trading interfaces",
        "Collaborated on MVP strategy and feature planning"
      ],
      technologies: ["Swift", "MVC", "Realm DB", "TradeIt SDK", "InVision", "RESTful APIs"],
      color: "hero-accent"
    },
    {
      company: "BlazeDream Technologies",
      role: "iOS Developer",
      period: "February 2014 – November 2015",
      location: "India",
      type: "1.5+ Years",
      description: "Developed iOS applications for various clients with focus on user experience and performance optimization. Gained expertise in multiple iOS frameworks and third-party integrations.",
      achievements: [
        "Delivered multiple client projects on time",
        "Optimized app performance and user experience",
        "Implemented complex UI/UX designs",
        "Built expertise in iOS ecosystem"
      ],
      technologies: ["Objective-C", "Swift", "UIKit", "Core Data", "Push Notifications"],
      color: "success-accent"
    },
    {
      company: "Creative Thoughts Systech",
      role: "iOS Developer",
      period: "November 2012 – February 2014",
      location: "India", 
      type: "Entry Level",
      description: "Started professional iOS development journey. Learned fundamental iOS development concepts and contributed to various mobile applications.",
      achievements: [
        "Mastered iOS development fundamentals",
        "Contributed to multiple iOS projects",
        "Learned Agile development methodologies",
        "Built foundation for mobile development career"
      ],
      technologies: ["Objective-C", "iOS SDK", "Xcode", "Git", "Agile"],
      color: "warning-accent"
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
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 12 years of progressive growth in iOS development across leading companies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.company} 
              className="shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-4">
                <div className="flex">
                  {/* Timeline Indicator */}
                  <div className={`w-2 ${getColorClasses(experience.color).split(' ')[0]} flex-shrink-0`}></div>
                  
                  {/* Content */}
                  <div className="flex-1 ml-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(experience.color)}`}>
                            <Building className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {experience.role}
                            </h3>
                            <p className="text-lg text-primary font-medium">{experience.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {experience.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                   {/*  <p className="text-muted-foreground leading-relaxed mb-4">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                                        
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Career Stats */}
        <div className="mt-16">
          <Card className="p-8 shadow-medium bg-background">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Career Highlights</h3>
              <p className="text-muted-foreground">Key milestones in my professional journey</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-accent mb-2">5</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hero-accent mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;