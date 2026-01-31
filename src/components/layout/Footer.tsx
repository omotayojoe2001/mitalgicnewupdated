import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Twitter, Facebook, Send, Instagram, Youtube } from "lucide-react";
import { useContactInfo } from "@/hooks/useContactInfo";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { contactInfo } = useContactInfo();
  const { toast } = useToast();
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href={`mailto:${contactInfo?.email_address || 'info@mitalgic.com'}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                {contactInfo?.email_address || 'info@mitalgic.com'}
              </a>
              <div className="space-y-2">
                <a href="tel:+905326517156" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  TR: +90 532 651 71 56
                </a>
                <a href="tel:+2348165721243" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  NG: +234 816 572 1243
                </a>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>1B Etim Inyang Crescent, Victoria Island, Lagos</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Sultan Selim Mah. Eski Büyükdere Cad. No: 61 İç Kapı No: 2 Kağıthane/İstanbul</span>
                </div>
              </div>
              <div className="space-y-2">
                <a href={`https://wa.me/${contactInfo?.whatsapp_number?.replace(/[^0-9]/g, '') || '905326517156'}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-success hover:text-success/80 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp TR: +90 532 651 71 56
                </a>
                <a href="https://wa.me/2348165721243" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-success hover:text-success/80 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp NG: +234 816 572 1243
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/insights" className="text-sm hover:text-primary transition-colors">Our Blog</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><Link to="/industries" className="text-sm hover:text-primary transition-colors">Engineering Services</Link></li>
              <li><Link to="/industries" className="text-sm hover:text-primary transition-colors">Assembly Commissioning Services</Link></li>
              <li><Link to="/industries" className="text-sm hover:text-primary transition-colors">Maintenance Services</Link></li>
              <li><Link to="/industries" className="text-sm hover:text-primary transition-colors">Business Expansion</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4 text-navy-foreground/80">
              Subscribe to our newsletter for industry insights and updates.
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
            }} className="space-y-2">
              <input type="text" name="website" style={{display: 'none'}} tabIndex={-1} autoComplete="off" />
              <Input 
                name="name"
                type="text" 
                placeholder="Your name" 
                required
                className="bg-navy-foreground/10 border-navy-foreground/20 text-navy-foreground placeholder:text-navy-foreground/50"
              />
              <div className="flex gap-2">
                <Input 
                  name="email"
                  type="email" 
                  placeholder="Your email" 
                  required
                  className="bg-navy-foreground/10 border-navy-foreground/20 text-navy-foreground placeholder:text-navy-foreground/50"
                />
                <Button type="submit" size="icon" className="flex-shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <div className="flex gap-3 mt-4">
              {contactInfo?.linkedin_url && (
                <a href={contactInfo.linkedin_url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {contactInfo?.twitter_url && (
                <a href={contactInfo.twitter_url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {contactInfo?.facebook_url && (
                <a href={contactInfo.facebook_url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {contactInfo?.instagram_url && (
                <a href={contactInfo.instagram_url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {contactInfo?.youtube_url && (
                <a href={contactInfo.youtube_url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-navy-foreground/10 mt-8 pt-8 text-center text-sm text-navy-foreground/60">
          <p>© 2025 Mitalgic Global Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
