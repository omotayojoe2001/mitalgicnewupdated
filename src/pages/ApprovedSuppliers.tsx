import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { FileCheck2, CheckCircle2, ArrowRight } from "lucide-react";
import teamImage from "@/assets/team-meeting.jpg";

const ApprovedSuppliers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70 z-10" />
        <img 
          src={teamImage} 
          alt="Approved Suppliers List" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Approved Suppliers List</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive vendor vetting and strategic procurement services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Our approved suppliers list ensures you work with vetted, reliable vendors who meet our strict quality and performance standards. We manage the entire procurement process to deliver value and reliability.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <FileCheck2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Vendor Vetting</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Quality certification verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Financial stability assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Performance history evaluation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Strategic Procurement</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Cost optimization strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Supply chain risk management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Contract negotiation and management</span>
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

export default ApprovedSuppliers;