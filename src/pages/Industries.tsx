import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { 
  Zap,
  Droplets,
  Flame,
  Wheat,
  Mountain,
  Factory,
  Recycle,
  Home as HomeIcon,
  Building2,
  TrendingUp,
  Award
} from "lucide-react";
import refineryImage from "@/assets/refinery-night.jpg";

const Industries = () => {
  const industries = [
    {
      icon: Zap,
      title: "Power Plants",
      description: "Critical infrastructure maintenance & optimization",
      image: refineryImage
    },
    {
      icon: Droplets,
      title: "Water Treatment",
      description: "Advanced filtration & purification systems",
      image: refineryImage
    },
    {
      icon: Flame,
      title: "Oil & Gas Refineries",
      description: "Process optimization & safety systems",
      image: refineryImage
    },
    {
      icon: Wheat,
      title: "Agriculture & Food Processing",
      description: "Automated processing & quality control",
      image: refineryImage
    },
    {
      icon: Mountain,
      title: "Mining",
      description: "Extraction efficiency & environmental compliance",
      image: refineryImage
    },
    {
      icon: Factory,
      title: "Energy Distribution",
      description: "Grid modernization & smart systems",
      image: refineryImage
    },
    {
      icon: Recycle,
      title: "Chemical & Plastics",
      description: "Process control & hazard management",
      image: refineryImage
    },
    {
      icon: Building2,
      title: "Cement & Building Blocks",
      description: "Production optimization & quality assurance",
      image: refineryImage
    },
    {
      icon: HomeIcon,
      title: "Steel Structures & Silo",
      description: "Heavy fabrication & storage solutions",
      image: refineryImage
    },
    {
      icon: Building2,
      title: "Real Estate & Infrastructure",
      description: "Smart building systems & sustainability",
      image: refineryImage
    },
  ];

  const successStories = [
    {
      icon: Zap,
      iconColor: "bg-orange-500",
      title: "Project Coordination & Optimization",
      subtitle: "Energy Sector",
      timeline: "Aug 2009 - Sep 2010 · 1 yr 2 mos",
      challenge: "Aging plant facing SiO₂ and Fe⁺³ fouling, and heat-related risks in the recovery system.",
      solution: "Led comprehensive redesign and process optimization of the plant system.",
      results: [
        "Achieved $24.1 AM annual savings",
        "Restoration of full plant efficiency"
      ]
    },
    {
      icon: Factory,
      iconColor: "bg-green-500",
      title: "Major Power Plant Project Management",
      subtitle: "",
      timeline: "Jan 2000 - Aug 2009 · 9 yrs 8 mos",
      challenge: "Replacement of five existing boilers (ICS/USA) and implementation of a new AI monitoring system.",
      solution: "Managed project lifecycle for new Boilers, Generators, BOP, Condensers, CST, and AI systems.",
      results: [
        "Successful commissioning of an 18 MW Turbo Blower (MECC/CHINA)"
      ]
    },
    {
      icon: Award,
      iconColor: "bg-blue-500",
      title: "Operation and Maintenance Excellence",
      subtitle: "",
      timeline: "Feb 1999 - Aug 2009 · 10 yrs 7 mos",
      challenge: "Manual O&M processes leading to prolonged downtime and higher risk of error.",
      solution: "Oversaw the Retrofit of 2 Boilers (Babcock & Wilcox / GAMA) and implemented a streamlined O&M strategy.",
      results: [
        "Successful completion of Gas Turbine maintenance and inspection",
        "Reduced unscheduled downtime and improved reliability"
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/70 to-foreground/60 z-10" />
        <img 
          src={refineryImage} 
          alt="Industries We Serve" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 py-20 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl max-w-2xl">
            Delivering specialized engineering solutions across diverse industrial sectors with proven expertise and innovative approaches
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <Card key={industry.title} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10 flex items-center justify-center">
                    <div className="text-center text-white">
                      <industry.icon className="h-12 w-12 mx-auto mb-3" />
                      <h3 className="text-2xl font-bold">{industry.title}</h3>
                    </div>
                  </div>
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from our industrial engineering solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className={`inline-flex h-12 w-12 rounded-full ${story.iconColor} items-center justify-center mb-5`}>
                    <story.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-1 leading-tight">
                    {story.title}
                    {story.subtitle && <><br /><span className="text-lg">{story.subtitle}</span></>}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-5 pb-4 border-b border-muted">
                    {story.timeline}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-1 uppercase tracking-wide">The Challenge:</h4>
                      <p className="text-sm leading-relaxed">{story.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-primary mb-1 uppercase tracking-wide">The Solution:</h4>
                      <p className="text-sm leading-relaxed">{story.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">The Result:</h4>
                      <ul className="space-y-1">
                        {story.results.map((result, index) => (
                          <li key={index} className="text-sm leading-relaxed pl-5 relative">
                            <span className="absolute left-0 top-0 text-primary font-bold">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Looking for industry-specific solutions?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Speak to a specialist about your unique industrial challenges
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Industry Team</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
