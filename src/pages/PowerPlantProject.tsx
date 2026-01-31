import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { CheckCircle2, Calendar, Users, Target, ArrowRight } from "lucide-react";
import powerPlantImage from "@/assets/power-plant.jpg";

const PowerPlantProject = () => {
  const achievements = [
    { icon: Target, title: "65% Energy Improvement", description: "Achieved significant efficiency gains through modernization" },
    { icon: Calendar, title: "2 Weeks Ahead of Schedule", description: "Delivered project completion ahead of planned timeline" },
    { icon: CheckCircle2, title: "Zero Safety Incidents", description: "Maintained perfect safety record throughout implementation" }
  ];

  const projectDetails = [
    { label: "Industry", value: "Power Plant" },
    { label: "Project Type", value: "Modernization & Upgrade" },
    { label: "Duration", value: "8 Months" },
    { label: "Team Size", value: "15 Engineers" },
    { label: "Location", value: "West Africa" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70 z-10" />
        <img 
          src={powerPlantImage} 
          alt="Power Plant Modernization Project" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 py-20">
          <Badge className="mb-4">Featured Project</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Power Plant Modernization</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A comprehensive modernization project that transformed an aging power facility into a highly efficient, environmentally sustainable operation.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground mb-8">
                This power plant modernization project involved upgrading critical infrastructure, implementing advanced control systems, and optimizing operational efficiency. Our team successfully transformed a 40-year-old facility into a state-of-the-art power generation plant.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Key Achievements</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {achievements.map((achievement) => (
                  <Card key={achievement.title}>
                    <CardContent className="p-6 text-center">
                      <achievement.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-4">Scope of Work</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Complete turbine and generator overhaul and modernization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Installation of advanced digital control systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Upgrade of electrical infrastructure and switchgear</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Implementation of environmental compliance systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Staff training and knowledge transfer programs</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Results & Impact</h3>
              <p className="text-muted-foreground mb-6">
                The modernization resulted in significant improvements across all operational metrics. Energy efficiency increased by 65%, maintenance costs were reduced by 40%, and the plant now meets all current environmental standards. The project was completed 2 weeks ahead of schedule with zero safety incidents.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Project Details</h3>
                  <div className="space-y-3">
                    {projectDetails.map((detail) => (
                      <div key={detail.label} className="flex justify-between">
                        <span className="text-muted-foreground">{detail.label}:</span>
                        <span className="font-medium">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Services Provided</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <span className="text-sm">Engineering Consulting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <span className="text-sm">Assembly & Commissioning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <span className="text-sm">Project Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <span className="text-sm">Training & Support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Ready for Your Project?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Let us help you achieve similar results with your industrial modernization needs.
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/contact">Start Your Project</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Similar Project in Mind?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team of experienced engineers can help you achieve similar results with your power plant or industrial facility modernization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Discuss Your Project <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PowerPlantProject;