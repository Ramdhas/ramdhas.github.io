import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Download, Linkedin, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:ramdhasmails@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Hi Ramdhas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the message ready to send.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "ramdhasmails@gmail.com",
      link: "mailto:ramdhasmails@gmail.com",
      color: "primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone (Sweden)",
      value: "+46-761269314",
      link: "tel:+46761269314",
      color: "tech-accent"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Whatsapp",
      value: "+91-9739599890",
      link: "https://api.whatsapp.com/send/?phone=%2B919739599890",
      color: "success-accent"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Stockholm, Sweden",
      link: null,
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
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next iOS project? Let's create something amazing together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities and innovative projects. 
                Whether you need an iOS app, cross-platform solution, or web application, 
                I'm here to help bring your ideas to life.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={info.label} className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(info.color)}`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="hero"
                  className="flex-1"
                  onClick={() => window.open("mailto:ramdhasmails@gmail.com")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Ramdhas-iOS-dev-resume.pdf';
                    link.download = 'Ramdhas-iOS-dev-resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    toast({
                      title: "Resume Downloaded",
                      description: "Your resume has been downloaded successfully.",
                    });
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Connect With Me</h4>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.open('https://www.linkedin.com/in/ramdhasm/', '_blank')}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.open('https://medium.com/@ramdhas', '_blank')}
                >
                  <BookOpen className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <Card className="shadow-medium">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Send Me a Message
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="transition-all duration-300 focus:shadow-soft"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="transition-all duration-300 focus:shadow-soft"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Project discussion, collaboration, etc."
                    className="transition-all duration-300 focus:shadow-soft"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your project, timeline, and requirements..."
                    rows={6}
                    className="transition-all duration-300 focus:shadow-soft resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  This will open your default email client with the message ready to send.
                </p>
              </form>
            </CardContent>
          </Card> */}
        </div>

        {/* Bottom CTA */}
       {/*  <div className="mt-16 text-center">
          <Card className="p-8 shadow-medium bg-gradient-subtle">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Build Your Next App?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help you create exceptional mobile experiences 
                that your users will love. From concept to App Store, I'm here to guide you through every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open("mailto:ramdhasmails@gmail.com?subject=New Project Inquiry")}
                >
                  Start Your Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open("tel:+46761269314")}
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;