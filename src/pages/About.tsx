import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Phone, 
  Search, 
  Settings, 
  Briefcase,
  Target,
  Eye,
  CheckCircle2,
  Award,
  Gauge,
  Clock,
  Shield,
  Users,
  BarChart,
  FileCheck,
  Linkedin
} from "lucide-react";
import { useCompanyInfo, useCompanyValues } from "@/hooks/useSupabase";
import engineersImage from "@/assets/engineers-working.jpg";

const About = () => {
  const { companyInfo, loading: companyLoading } = useCompanyInfo();
  const { values: companyValues, loading: valuesLoading } = useCompanyValues();

  // Icon mapping for dynamic values
  const iconMap: { [key: string]: any } = {
    Award,
    Shield,
    Users,
    Gauge,
    Eye,
  };

  // Fallback values if database is empty
  const fallbackValues = [
    { icon: Award, title: "Technical Excellence" },
    { icon: Shield, title: "Safety First" },
    { icon: Users, title: "Client Partnership" },
    { icon: Gauge, title: "Sustainable Innovation" },
    { icon: Eye, title: "Transparency" },
  ];

  const displayValues = companyValues.length > 0 
    ? companyValues.map(value => ({
        icon: iconMap[value.icon_name] || CheckCircle2,
        title: value.title
      }))
    : fallbackValues;

  const reasons = [
    { icon: Award, title: "CSCB Footprint + International Network", description: "Global expertise with deep local market understanding" },
    { icon: Clock, title: "Turnkey Delivery", description: "End-to-end product management from concept to completion" },
    { icon: Shield, title: "ASL & WLL Services", description: "Accredited labs and vendor relationships for quality assurance" },
    { icon: Users, title: "Commissioning Expertise", description: "Advanced solutions for all our commissioning services for complex systems" },
    { icon: BarChart, title: "Maintenance & Predictive Analytics", description: "Advanced maintenance strategies and predictive system analysis" },
    { icon: FileCheck, title: "Compliance & NDT Capabilities", description: "Full compliance support with UT, RT, E°, MT, and VT testing methods" },
  ];

  const boardMembers = [
    {
      name: "Mr Aydın DÜĞENCIOĞLU",
      title: "Board Member",
      description: "Holds a Bachelor's Degree in Mechanical Engineering, an EMBA, and currently pursuing a Ph.D in Energy Science and Technology. With extensive experience in mechanical engineering and business strategy, he has successfully overseen various complex projects in power plants, water plants, refineries, and more.",
      linkedin: "https://www.linkedin.com/in/ayd%C4%B1n-d%C3%BC%C4%9Fencio%C4%9Flu-84298029/"
    },
    {
      name: "Mr Gabriel Ajayi",
      title: "Board Member",
      description: "An entrepreneur with a Bachelor's Degree in communication and media, a Masters Degree in Visual Art and is currently pursuing an Executive Master's Degree in Entrepreneurship and Innovative Management. Demonstrating a self-driven approach and a proven track record of building companies from inception to execution",
      linkedin: "https://www.linkedin.com/in/gabriel-ajayi-27255022b/"
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
          alt="About Us" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Building tomorrow's industrial infrastructure today
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container">
          {/* Our Story Section */}
          <div className="our-story-section py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl font-bold text-navy mb-4">Our Story</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  From a Nigerian foundation to continuous global impact
                </p>
              </div>

              {/* Past Milestones Timeline */}
              <div className="relative max-w-4xl mx-auto mb-20">
                <div className="absolute w-0.5 bg-blue-200 top-16 bottom-16 left-12 hidden md:block" />
                
                <div className="space-y-16">
                  {/* 2015 */}
                  <div className="flex items-start gap-8">
                    <div className="w-24 h-24 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center shadow-lg border-8 border-slate-50 flex-shrink-0 z-10">
                      2015
                    </div>
                    <div className="bg-white p-7 rounded-xl shadow-lg flex-1">
                      <h3 className="text-xl font-semibold text-navy mb-3">Founded in Nigeria</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Real estate development & engineering consultancy begins in Nigeria and Cyprus.
                      </p>
                    </div>
                  </div>

                  {/* 2016-2020 */}
                  <div className="flex items-start gap-8">
                    <div className="w-24 h-24 rounded-full bg-blue-500 text-white font-bold text-sm flex items-center justify-center shadow-lg border-8 border-slate-50 flex-shrink-0 z-10">
                      2016–2020
                    </div>
                    <div className="bg-white p-7 rounded-xl shadow-lg flex-1">
                      <h3 className="text-xl font-semibold text-navy mb-3">Mobility Revolution</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Launched <strong>SpotnHop</strong> Cab Hailing App (2016–2019) and <strong>RentGO</strong> Car Rental Platform (2018–2020) in Cyprus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transition */}
              <div className="flex items-center justify-center gap-6 mb-20">
                <div className="h-0.5 flex-1 max-w-48 bg-gradient-to-r from-blue-200 to-blue-300 rounded" />
                <div className="bg-amber-50 text-amber-700 px-6 py-2 rounded-full font-semibold">
                  Ongoing
                </div>
                <div className="h-0.5 flex-1 max-w-48 bg-gradient-to-l from-blue-200 to-blue-300 rounded" />
              </div>

              {/* Current Focus Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="bg-white p-12 rounded-2xl shadow-lg relative border-t-4 border-amber-400 hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-4 left-10 bg-amber-400 text-navy px-5 py-1.5 rounded-full text-sm font-semibold">
                    Ongoing
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-4">Business Expansion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Providing engineering and business consulting services, while facilitating market entry and business expansion into West Africa to drive infrastructure growth.
                  </p>
                </div>

                <div className="bg-white p-12 rounded-2xl shadow-lg relative border-t-4 border-amber-400 hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-4 left-10 bg-amber-400 text-navy px-5 py-1.5 rounded-full text-sm font-semibold">
                    Ongoing
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-4">Engineering Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Delivering expert consultancy across the oil and gas, power, and solar energy sectors, ensuring all piping and industrial infrastructure projects meet global best practices.
                  </p>
                </div>

                <div className="bg-white p-12 rounded-2xl shadow-lg relative border-t-4 border-amber-400 hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-4 left-10 bg-amber-400 text-navy px-5 py-1.5 rounded-full text-sm font-semibold">
                    Ongoing
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-4">Technology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At the heart of global business, we bridge critical gaps in modern finance, the mobility revolution, and AI-driven communication. With a future-focused vision, we unite our efforts to transform possibilities into tangible solutions for the modern era.
                  </p>
                </div>
              </div>

              {/* Story Narrative */}
              <div className="max-w-4xl mx-auto text-center space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  At Mitalgic, we are dedicated to shaping the future of business growth. By uniting an elite board of seasoned experts, we leverage modern world resolutions to bridge the gap between theoretical knowledge and practical execution. Our commitment goes beyond consulting; we merge everyday life with transformative possibilities, building the path forward with unwavering standards of excellence.
                </p>
                <p className="text-2xl font-semibold text-navy mt-12">
                  This is our story. And it's only the beginning.
                </p>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="p-8">
                <div className="inline-flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Mission</h3>
                <p className="text-muted-foreground">
                  {companyLoading ? "Loading..." : (companyInfo?.mission || "Becoming an ethical solution provider through our unwavering dedication to business and industrial needs.")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="inline-flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Vision</h3>
                <p className="text-muted-foreground">
                  {companyLoading ? "Loading..." : (companyInfo?.vision || "To serve as a central hub for industrial innovation and progress.")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="inline-flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Values</h3>
                <ul className="space-y-2">
                  {valuesLoading ? (
                    <li className="text-sm">Loading...</li>
                  ) : (
                    displayValues.map((value) => (
                      <li key={value.title} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-success" />
                        {value.title}
                      </li>
                    ))
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Mitalgic */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Mitalgic</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <Card key={reason.title}>
                <CardContent className="p-6">
                  <div className="inline-flex h-10 w-10 rounded-lg bg-primary/10 items-center justify-center mb-4">
                    <reason.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Member of Board</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {boardMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-8">
                  <div className="h-20 w-20 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={member.name === "Mr Aydın DÜĞENCIOĞLU" ? "/aydin.jpg" : "/Gabriel-Ajayi.jpg"} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.title}</p>
                  <p className="text-sm mb-4">{member.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's explore how our expertise can drive your industrial project to success. Get a customized proposal tailored to your specific requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Get a Proposal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
