import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogPostsQueries } from '@/utils/supabase-queries';
import { Tables, supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import refineryImage from '@/assets/refinery-night.jpg';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Tables<'blog_posts'> | null>(null);
  const [latestPosts, setLatestPosts] = useState<Tables<'blog_posts'>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        const [postResult, latestResult] = await Promise.all([
          blogPostsQueries.getBySlug(slug),
          blogPostsQueries.getPublished(6)
        ]);
        
        if (postResult.error) throw postResult.error;
        setPost(postResult.data);
        
        if (latestResult.data) {
          setLatestPosts(latestResult.data.filter(p => p.slug !== slug).slice(0, 3));
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Post not found');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container py-20 text-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">{error || 'The blog post you are looking for does not exist.'}</p>
          <Button asChild>
            <Link to="/insights">Back to Insights</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70 z-10" />
        <img 
          src={post.cover_image_url || refineryImage} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 py-20">
          <Link to="/insights" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>
          
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.writer_name}</span>
              <span className="text-sm">• {post.writer_role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.publication_date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.read_time}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="blog-content">
                <div dangerouslySetInnerHTML={{ 
                  __html: post.full_content
                    .replace(/&quot;/g, '"')
                    .replace(/&#39;/g, "'")
                    .replace(/&amp;/g, '&')
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/## (.*?)\n/g, '<h2>$1</h2>')
                    .replace(/\[(.*?)\]\((.*?)\)/g, (match, text, url) => {
                      // Add protocol if missing for external links
                      let href = url;
                      if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('mailto:') && !url.startsWith('/')) {
                        href = url.includes('@') ? `mailto:${url}` : `https://${url}`;
                      }
                      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
                    })
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/^(.)/g, '<p>$1')
                    .replace(/(.)$/g, '$1</p>')
                }} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Posts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {latestPosts.length > 0 ? latestPosts.map((recentPost) => (
                      <Link 
                        key={recentPost.id}
                        to={`/insights/${recentPost.slug}`}
                        className="block group"
                      >
                        <div className="relative h-20 mb-2 rounded overflow-hidden">
                          <img 
                            src={recentPost.cover_image_url || refineryImage} 
                            alt={recentPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <Badge variant="secondary" className="mb-2 text-xs">{recentPost.category}</Badge>
                        <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 mb-1">
                          {recentPost.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{new Date(recentPost.publication_date).toLocaleDateString()} • {recentPost.read_time}</p>
                      </Link>
                    )) : (
                      <p className="text-sm text-muted-foreground">No recent posts available.</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest insights on industrial engineering.
                  </p>
                  <form onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    
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
                            description: "This email is already subscribed.",
                            variant: "destructive"
                          });
                        } else {
                          throw error;
                        }
                      } else {
                        toast({
                          title: "Successfully subscribed!",
                          description: "Thank you for subscribing."
                        });
                        (e.target as HTMLFormElement).reset();
                      }
                    } catch (error) {
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

              {/* Consultation CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Need Expert Consultation?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Let our engineering experts help optimize your processes.
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/contact">Request Consultation</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Services */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Our Services</h3>
                  <div className="space-y-3">
                    <Link to="/services/engineering-consulting" className="block text-sm hover:text-primary transition-colors">
                      Engineering Consulting
                    </Link>
                    <Link to="/services/assembly-commissioning" className="block text-sm hover:text-primary transition-colors">
                      Assembly & Commissioning
                    </Link>
                    <Link to="/services/maintenance-services" className="block text-sm hover:text-primary transition-colors">
                      Maintenance Services
                    </Link>
                    <Link to="/contact" className="block text-sm hover:text-primary transition-colors">
                      View All Services →
                    </Link>
                  </div>
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

export default BlogPost;