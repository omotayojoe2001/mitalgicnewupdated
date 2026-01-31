import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Send } from "lucide-react";
import { blogPostsQueries } from "@/utils/supabase-queries";
import { Tables, supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import refineryImage from "@/assets/refinery-night.jpg";

const Insights = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [blogPosts, setBlogPosts] = useState<Tables<'blog_posts'>[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const { data, error } = await blogPostsQueries.getPublished();
        if (error) throw error;
        setBlogPosts(data || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const categories = [...new Set(blogPosts.map(post => post.category))];
  const filters = ["All", ...categories];

  const filteredPosts = activeFilter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);
  const latestPosts = blogPosts.slice(0, 3);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/70 to-foreground/60 z-10" />
        <img 
          src={refineryImage} 
          alt="Insights & Updates" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 py-20 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Insights & Updates</h1>
          <p className="text-xl max-w-2xl">
            News, projects, and industry insights from the Mitalgic Global team.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-background border-b">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {loading ? (
                <div className="text-center py-12">
                  <p>Loading blog posts...</p>
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p>No blog posts found.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {currentPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.cover_image_url || refineryImage} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">{post.category}</Badge>
                          <span className="text-xs text-muted-foreground">{new Date(post.publication_date).toLocaleDateString()}</span>
                          <span className="text-xs text-muted-foreground">• {post.read_time}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.short_summary}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.writer_name}</span>
                          <Link to={`/insights/${post.slug}`} className="text-primary hover:underline inline-flex items-center gap-1 text-sm">
                            Read <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Subscribe */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Subscribe for Insights</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Stay updated with the latest industry news and technical insights.
                  </p>
                  <form onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    
                    // Honeypot spam protection
                    if (formData.get('website')) return;
                    
                    const name = formData.get('name') as string;
                    const email = formData.get('email') as string;
                    
                    try {
                      const { error } = await supabase
                        .from('newsletter_subscribers')
                        .insert([{ name, email }]);
                      
                      if (error) {
                        if (error.code === '23505') {
                          toast({
                            title: "Already subscribed",
                            description: "This email is already subscribed to our newsletter.",
                            variant: "destructive"
                          });
                        } else {
                          throw error;
                        }
                      } else {
                        toast({
                          title: "Successfully subscribed!",
                          description: "Thank you for subscribing to our newsletter."
                        });
                        (e.target as HTMLFormElement).reset();
                      }
                    } catch (error) {
                      console.error('Newsletter subscription error:', error);
                      toast({
                        title: "Subscription failed",
                        description: "Please try again later.",
                        variant: "destructive"
                      });
                    }
                  }}>
                    <input type="text" name="website" style={{display: 'none'}} tabIndex={-1} autoComplete="off" />
                    <Input
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="mb-3"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="mb-3"
                    />
                    <Button type="submit" className="w-full">Subscribe</Button>
                  </form>
                </CardContent>
              </Card>

              {/* Latest Articles */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Latest Articles</h3>
                  <div className="space-y-4">
                    {latestPosts.map((post) => (
                      <Link 
                        key={post.id}
                        to={`/insights/${post.slug}`}
                        className="flex gap-3 group"
                      >
                        <img 
                          src={post.cover_image_url || refineryImage} 
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{new Date(post.publication_date).toLocaleDateString()}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Consultation CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Request a Consultation</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Get expert advice on your next industrial project.
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
