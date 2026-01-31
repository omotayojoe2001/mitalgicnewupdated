import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { 
  Search, 
  Pencil, 
  FileCheck, 
  ShieldCheck,
  Download,
  Phone,
  MessageCircle,
  Linkedin,
  CheckCircle2,
  Award
} from "lucide-react";
import engineersImage from "@/assets/engineers-working.jpg";
import powerPlantImage from "@/assets/power-plant.jpg";
import teamImage from "@/assets/team-meeting.jpg";

const EngineeringConsulting = () => {
  const services = [
    {
      icon: Search,
      title: "Feasibility Studies",
      description: "Comprehensive analysis to determine project viability, risk assessment, and optimization opportunities."
    },
    {
      icon: Pencil,
      title: "Design Optimization",
      description: "Advanced engineering solutions to maximize efficiency, reduce costs, and improve performance."
    },
    {
      icon: FileCheck,
      title: "Technical Audits",
      description: "In-depth review of existing systems to identify improvements and ensure compliance."
    },
    {
      icon: ShieldCheck,
      title: "Regulatory Compliance",
      description: "Expert guidance to meet all industry standards and regulatory requirements."
    },
  ];

  const processSteps = [
    {
      number: 1,
      icon: Search,
      title: "Assessment",
      description: "Analyze requirements and review needs"
    },
    {
      number: 2,
      icon: Pencil,
      title: "Design",
      description: "Develop strategic approach"
    },
    {
      number: 3,
      icon: FileCheck,
      title: "Execution",
      description: "Implement solutions"
    },
    {
      number: 4,
      icon: ShieldCheck,
      title: "Review",
      description: "Monitor and optimize"
    },
  ];

  const caseStudies = [
    {
      image: powerPlantImage,
      title: "Manufacturing Optimization",
      description: "Reduced operational operating costs by 25% through process improvements.",
      link: "#"
    },
    {
      image: teamImage,
      title: "Infrastructure Upgrade",
      description: "Enhanced system efficiency by implementing new technology.",
      link: "#"
    },
    {
      image: powerPlantImage,
      title: "Process Redesign",
      description: "Achieved 30% cost reduction through innovative system design.",
      link: "#"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 z-10" />
        <img 
          src={engineersImage} 
          alt="Engineering Consulting" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 py-20 text-white">
          <div className="flex items-center gap-2 mb-4 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <span>Engineering Consulting</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Engineering<br />Consulting
          </h1>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex h-14 w-14 rounded-lg bg-primary/10 items-center justify-center">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <Badge className="mb-2">15+ Years</Badge>
                    <h2 className="text-2xl font-bold">Industry Experience</h2>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our engineering consulting services combine deep technical expertise with innovative problem-solving approaches to deliver solutions that exceed industry standards. We specialize in transforming complex engineering challenges into streamlined, cost-effective solutions.
                </p>
                <p className="text-muted-foreground mb-6">
                  From initial concept development to final commissioning, our team ensures every project meets the highest safety standards while optimizing performance and efficiency. We pride ourselves on delivering precision-engineered solutions that drive measurable results for our clients.
                </p>
              </div>

              {/* What We Offer */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <Card key={service.title}>
                      <CardContent className="p-6">
                        <div className="inline-flex h-10 w-10 rounded-lg bg-primary/10 items-center justify-center mb-4">
                          <service.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Our Process */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Process</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {processSteps.map((step) => (
                    <div key={step.number} className="text-center">
                      <div className="inline-flex h-12 w-12 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold text-lg mb-4">
                        {step.number}
                      </div>
                      <step.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Studies */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Case Studies</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {caseStudies.map((study) => (
                    <Card key={study.title} className="overflow-hidden group hover:shadow-lg transition-shadow">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-2">{study.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{study.description}</p>
                        <a href={study.link} className="text-primary hover:underline text-sm">
                          View Details →
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Other Services */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Other Services</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                        <CheckCircle2 className="h-4 w-4" />
                        Industrial Design
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                        <CheckCircle2 className="h-4 w-4" />
                        Maintenance Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                        <CheckCircle2 className="h-4 w-4" />
                        Project Management
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Download Resources */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Download Resources</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="h-4 w-4" />
                      Service Brochure
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="h-4 w-4" />
                      Safety Protocols
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Request Quote */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Request a Quote</h3>
                  <form className="space-y-3">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Email Address" />
                    <Textarea placeholder="Project Details" rows={4} />
                    <Button className="w-full">Submit Request</Button>
                  </form>
                </CardContent>
              </Card>

              {/* Get in Touch */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Get in Touch</h3>
                  <div className="space-y-3">
                    <a href="tel:+12345678900" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                      <Phone className="h-4 w-4" />
                      +1 (234) 567-8900
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Chat
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need expert engineering guidance?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help optimize your next project
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Speak to a Consultant</Link>
          </Button>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start your next project?
          </h2>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EngineeringConsulting;
