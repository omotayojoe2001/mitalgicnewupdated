import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { 
  Pencil, 
  Settings, 
  Wrench, 
  FileCheck2, 
  Building2,
  Search,
  Lightbulb,
  ClipboardCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Download
} from "lucide-react";
import engineersImage from "@/assets/engineers-working.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Pencil,
      title: "Engineering Consulting",
      description: "Expert services including technical guidance, detailed designs, and optimized designs for industrial projects.",
      link: "/services/engineering-consulting"
    },
    {
      icon: Settings,
      title: "Assembly & Commissioning",
      description: "Turnkey asset installation, stress tests, and exhaustive system validation of equipment.",
      link: "/services/assembly-commissioning"
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Preventive and corrective maintenance with comprehensive spare parts support.",
      link: "/services/maintenance-services"
    },
    {
      icon: FileCheck2,
      title: "Approved Suppliers List",
      description: "Comprehensive vendor vetting and strategic procurement services.",
      link: "/services/approved-suppliers"
    },
    {
      icon: Building2,
      title: "Business Expansion",
      description: "Market entry strategies and international business development.",
      link: "/services/business-expansion"
    },
  ];

  const ndtServices = [
    { title: "Radiographic Testing (RT)", subtitle: "X-ray & film-based defect detection" },
    { title: "Ultrasonic Testing (UT)", subtitle: "High-frequency sound wave inspection" },
    { title: "Magnetic Testing (MT)", subtitle: "Surface & near-surface flaw identification" },
    { title: "Visual Inspection (VT)", subtitle: "Direct physical examination" },
  ];

  const assemblySteps = [
    {
      number: 1,
      icon: FileCheck2,
      title: "Site Preparation",
      description: "Foundation works, utilities setup, and safety protocols",
    },
    {
      number: 2,
      icon: Settings,
      title: "Equipment Installation",
      description: "Mechanical assembly and structural installation",
    },
    {
      number: 3,
      icon: Lightbulb,
      title: "System Integration",
      description: "Electrical, control systems, and instrumentation",
    },
    {
      number: 4,
      icon: ClipboardCheck,
      title: "Testing & Commissioning",
      description: "Performance testing and system optimization",
    },
    {
      number: 5,
      icon: Wrench,
      title: "Training & Handover",
      description: "Operator training and documentation delivery",
    },
    {
      number: 6,
      icon: ShieldCheck,
      title: "Warranty Support",
      description: "Ongoing support and maintenance services",
    },
  ];

  const maintenancePackages = [
    {
      title: "Basic",
      description: "Cover all major services on a light scale",
      features: [
        "Quarterly inspections",
        "Basic preventive",
        "Emergency support"
      ],
      cta: "Contact Sales"
    },
    {
      title: "Advanced",
      description: "Comprehensive maintenance and support",
      features: [
        "Monthly inspections",
        "Preventive flexibility",
        "Spare parts access",
        "Regular reporting"
      ],
      cta: "Contact Sales",
      highlighted: true
    },
    {
      title: "Enterprise",
      description: "Complete maintenance partnership",
      features: [
        "24/7 monitoring",
        "Dedicated technician",
        "Predictive analytics",
        "On-site repairs"
      ],
      cta: "Contact Sales"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70 z-10" />
        <img 
          src={engineersImage} 
          alt="Our Services" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            From concrete ideas to commissioning and operations
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  {service.link ? (
                    <Link to={service.link} className="text-primary hover:underline inline-flex items-center gap-1">
                      Explore <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <span className="text-primary inline-flex items-center gap-1">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NDT & Testing Services */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">NDT & Testing Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive non-destructive testing solutions ensuring quality and safety compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {ndtServices.map((service) => (
              <Card key={service.title} className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      </section>

      {/* Assembly & Commissioning Process */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Assembly & Commissioning Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach ensures successful project delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assemblySteps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Maintenance Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the right maintenance plan for your operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {maintenancePackages.map((pkg) => (
              <Card key={pkg.title} className={pkg.highlighted ? "border-primary border-2 shadow-lg" : ""}>
                <CardContent className="p-6">
                  {pkg.highlighted && (
                    <Badge className="mb-4">Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.highlighted ? "default" : "outline"} asChild>
                    <Link to="/contact">{pkg.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-navy-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a tailored service?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book a consultation with our experts to discuss your specific requirements.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
