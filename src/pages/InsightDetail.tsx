import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link, useParams } from "react-router-dom";
import { Clock, Share2, Linkedin, Send } from "lucide-react";
import refineryImage from "@/assets/refinery-night.jpg";
import powerPlantImage from "@/assets/power-plant.jpg";
import teamImage from "@/assets/team-meeting.jpg";
import engineerImage from "@/assets/engineer-laptop.jpg";

const InsightDetail = () => {
  const { slug } = useParams();
  
  const getArticleData = (slug: string) => {
    const articles = {
      "advanced-manufacturing-processes": {
        title: "Advanced Manufacturing Processes: The Future of Industrial Engineering",
        category: "Industrial Innovation",
        author: "Dr. James Mitchell",
        date: "March 18, 2024",
        readTime: "8 min read",
        image: refineryImage
      },
      "engineering-students-opportunity": {
        title: "Exciting opportunity: 3rd & 4th-year engineering students",
        category: "Engineering",
        author: "Sarah Mitchell",
        date: "Dec 15, 2024",
        readTime: "6 min read",
        image: teamImage
      }
    };
    return articles[slug as keyof typeof articles] || articles["advanced-manufacturing-processes"];
  };
  
  const article = getArticleData(slug || "advanced-manufacturing-processes");
  
  const relatedArticles = [
    {
      image: teamImage,
      category: "Engineering",
      title: "Automation in Modern Manufacturing",
      date: "March 14, 2024",
      readTime: "5 min read"
    },
    {
      image: powerPlantImage,
      category: "Maintenance",
      title: "Quality Control Best Practices",
      date: "March 8, 2024",
      readTime: "4 min read"
    },
    {
      image: refineryImage,
      category: "NDT",
      title: "Sustainable Industrial Engineering",
      date: "March 5, 2024",
      readTime: "7 min read"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10" />
        <img 
          src={article.image} 
          alt={article.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 pb-12">
          <Badge className="mb-4">{article.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">JM</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{article.author}</p>
                <p className="text-sm text-muted-foreground">Senior Engineering Consultant</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
{article.date} • {article.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  The industrial engineering landscape is undergoing a revolutionary transformation, driven by cutting-edge technologies and innovative manufacturing processes that are reshaping how we approach production efficiency and quality control.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">The Evolution of Smart Manufacturing</h2>
                <p>
                  Modern industrial facilities are embracing automation, artificial intelligence, and IoT integration to create efficient, sustainable, and profitable operations. This shift represents not just technological advancement, but a fundamental reimagining of industrial processes.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-6 my-8">
                  <p className="italic text-primary font-medium">
                    "The future of manufacturing lies in the seamless integration of human expertise with intelligent automation systems."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Industry Report 2024</p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Key Technologies Driving Change</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-primary">Predictive Maintenance Systems</h3>
                <p>
                  AI-powered monitoring reduces downtime by up to 40% through early detection of potential failures. This proactive approach transforms maintenance from reactive firefighting to strategic asset management.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-primary">Digital Twin Technology</h3>
                <p>
                  Virtual replicas optimize real-world performance by enabling simulation, testing, and optimization before physical implementation. This technology reduces risks and accelerates innovation cycles.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-primary">Advanced Robotics</h3>
                <p>
                  Collaborative robots enhance precision and safety by working alongside human operators, handling repetitive or dangerous tasks while maintaining flexibility for complex operations.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-primary">Real-time Analytics</h3>
                <p>
                  Data-driven insights improve decision-making by providing immediate visibility into production processes, enabling rapid response to changing conditions and continuous optimization.
                </p>

                <div className="my-8">
                  <img 
                    src={powerPlantImage} 
                    alt="Advanced control systems" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    Advanced control systems enable real-time monitoring and optimization of industrial processes.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Strategies</h2>
                <p>
                  Successfully implementing these advanced manufacturing processes requires a strategic approach that considers both technological capabilities and human factors. Organizations must invest in training, infrastructure, and change management to realize the full potential of these innovations.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Best Practices for Implementation</h3>
                <ul className="space-y-2 my-4">
                  <li>• Conduct thorough feasibility assessments</li>
                  <li>• Develop comprehensive training programs</li>
                  <li>• Implement phased rollout strategies</li>
                  <li>• Establish robust monitoring and evaluation systems</li>
                </ul>

                <p className="mt-6">
                  The future of industrial engineering is bright, with continuous innovations promising even greater efficiency, sustainability, and profitability. Companies that embrace these changes today will be best positioned to thrive in tomorrow's competitive landscape.
                </p>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xl">JM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Dr. James Mitchell</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Senior Engineering Consultant with 15+ years in industrial automation and process optimization.
                      </p>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Linkedin className="h-4 w-4" />
                        Connect on LinkedIn
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Related Articles */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((article) => (
                      <Link 
                        key={article.title}
                        to="/insights/detail"
                        className="block group"
                      >
                        <div className="relative h-32 mb-2 rounded overflow-hidden">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <Badge variant="secondary" className="mb-2">{article.category}</Badge>
                        <h4 className="text-sm font-medium group-hover:text-primary transition-colors mb-1">
                          {article.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{article.date} • {article.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest insights on industrial engineering and manufacturing trends.
                  </p>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="mb-3"
                  />
                  <Button className="w-full">Subscribe Now</Button>
                </CardContent>
              </Card>

              {/* Consultation CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Need Expert Consultation?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Let our engineering experts help optimize your manufacturing processes.
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/contact">Request Consultation</Link>
                  </Button>
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
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with Mitalgic Global Limited to implement cutting-edge industrial engineering solutions that drive efficiency and growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsightDetail;
