import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";
import refineryImage from "@/assets/refinery-night.jpg";

const BusinessExpansion = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70 z-10" />
        <img 
          src={refineryImage} 
          alt="Business Expansion" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Business Expansion</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Market entry strategies and international business development.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Expand your business into new markets with our comprehensive business development services. We provide strategic guidance and practical support for international growth and market entry.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Market Entry Strategy</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Market research and analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Competitive landscape assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Regulatory compliance guidance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">International Development</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Partnership and joint venture facilitation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Local network development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Cultural adaptation strategies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get Started <ArrowRight className="h-4 w-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessExpansion;