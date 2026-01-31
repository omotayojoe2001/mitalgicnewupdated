import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Search, 
  Pencil, 
  Rocket, 
  Wrench, 
  Settings, 
  Building2,
  Zap,
  Droplets,
  Flame,
  Wheat,
  Mountain,
  Factory,
  Recycle,
  Home as HomeIcon,
  CheckCircle2,
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";
import { useBlogPosts } from "@/hooks/useSupabase";
import heroImage from "@/assets/hero-industrial.jpg";
import powerPlantImage from "@/assets/power-plant.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { posts: blogPosts, loading: blogLoading } = useBlogPosts(3);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [successStories.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % successStories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const stats = [
    { label: "Years", value: "9+" },
    { label: "Projects", value: "Global" },
    { label: "Expertise", value: "Turnkey" },
    { label: "Support", value: "On-site" },
  ];

  const services = [
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
      link: "/services"
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Preventive and corrective maintenance with comprehensive spare parts support.",
      link: "/services"
    },
    {
      icon: Building2,
      title: "Business Expansion",
      description: "Strategic support for international market entry and growth.",
      link: "/services"
    },
  ];

  const industries = [
    { icon: Zap, name: "Power" },
    { icon: Droplets, name: "Water" },
    { icon: Flame, name: "Oil & Gas" },
    { icon: Wheat, name: "Agriculture" },
    { icon: Mountain, name: "Mining" },
    { icon: Factory, name: "Food & Chemical" },
    { icon: Recycle, name: "Plastics" },
    { icon: HomeIcon, name: "Steel Structures" },
  ];

  const workSteps = [
    {
      icon: Search,
      title: "Analyze",
      description: "Current assessment of your project, systems and requirements to identify optimal pathways.",
    },
    {
      icon: Pencil,
      title: "Design",
      description: "Custom engineering solutions tailored to your specific needs and industry requirements.",
    },
    {
      icon: Rocket,
      title: "Deliver",
      description: "Seamless implementation with ongoing support to ensure optimal performance and results.",
    },
  ];



  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80 z-10" />
        <img 
          src={heroImage} 
          alt="Industrial Engineering" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Designing Success.{" "}
              <span className="text-primary">Delivering industrial Solutions.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              International engineering consultancy since 2015 — turnkey projects, maintenance, ASL, services.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" asChild>
                <Link to="/contact">Get a Proposal</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering solutions for industrial success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to={service.link} className="text-primary hover:underline inline-flex items-center gap-1">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across key industrial sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <industry.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Slider */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from our industrial engineering solutions
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {successStories.map((story, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="mx-2">
                      <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                          <div>
                            <div className={`inline-flex h-16 w-16 rounded-full ${story.iconColor} items-center justify-center mb-6`}>
                              <story.icon className="h-8 w-8 text-white" />
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-2">
                              {story.title}
                              {story.subtitle && <><br /><span className="text-xl text-muted-foreground">{story.subtitle}</span></>}
                            </h3>
                            
                            <p className="text-sm text-muted-foreground mb-6">
                              {story.timeline}
                            </p>
                            
                            <Button variant="outline" asChild>
                              <Link to="/industries">View All Stories</Link>
                            </Button>
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">The Challenge:</h4>
                              <p className="text-sm leading-relaxed">{story.challenge}</p>
                            </div>

                            <div>
                              <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">The Solution:</h4>
                              <p className="text-sm leading-relaxed">{story.solution}</p>
                            </div>

                            <div>
                              <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide">The Result:</h4>
                              <ul className="space-y-2">
                                {story.results.map((result, resultIndex) => (
                                  <li key={resultIndex} className="text-sm leading-relaxed pl-5 relative">
                                    <span className="absolute left-0 top-0 text-primary font-bold">•</span>
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex gap-2">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven 3-step approach to industrial success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {workSteps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="inline-flex h-16 w-16 rounded-full bg-primary/10 items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Insights</h2>
              <p className="text-muted-foreground">Industry expertise and thought leadership</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/insights">View All</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 bg-muted animate-pulse" />
                  <CardContent className="p-6">
                    <div className="h-4 bg-muted rounded animate-pulse mb-3" />
                    <div className="h-6 bg-muted rounded animate-pulse mb-2" />
                    <div className="h-16 bg-muted rounded animate-pulse" />
                  </CardContent>
                </Card>
              ))
            ) : blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.cover_image_url || powerPlantImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category || 'Insights'}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.publication_date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.short_summary}</p>
                    <Link to={`/insights/${post.slug}`} className="text-primary hover:underline inline-flex items-center gap-1">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-muted-foreground">No insights available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to scale? Talk to our engineers.
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get expert solutions for your most industrial project
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Start a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
