import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Briefcase, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate iOS developer with a journey spanning over a decade in mobile app development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                My Professional Journey 
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 12 years of experience in iOS development, I've had the privilege of working with 
                prominent companies including Knightec Group, Nexer Group, and Stockal. My expertise 
                spans across various industries including finance, fitness, rescue operations, and enterprise applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in collaborative development and knowledge sharing, always focusing on creating 
                exceptional user experiences while maintaining clean architecture and optimal performance. 
                My approach combines technical excellence with business understanding to deliver solutions 
                that truly matter.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-foreground">Current Location</h4>
                <p className="text-muted-foreground">Stockholm, Sweden</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-foreground">Current Role</h4>
                <p className="text-muted-foreground">iOS Developer at Knightec Group</p>
              </div>
            </div>
          </div>

          {/* Right Content - Education & Stats */}
          <div className="space-y-6">
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">Education</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-foreground">Master of Computer Applications (MCA)</p>
                        <p className="text-sm text-muted-foreground">2009 – 2012</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Bachelor of Computer Applications (BCA)</p>
                        <p className="text-sm text-muted-foreground">2006 – 2009</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              
              <Card className="text-center p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="text-3xl font-bold text-tech-accent mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
              
              <Card className="text-center p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="text-3xl font-bold text-hero-accent mb-2">5</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </Card>
              
              <Card className="text-center p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="text-3xl font-bold text-success-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;