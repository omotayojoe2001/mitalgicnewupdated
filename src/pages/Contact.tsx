import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Twitter
} from "lucide-react";
import refineryImage from "@/assets/refinery-night.jpg";
import { useContactInfo } from "@/hooks/useContactInfo";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { contactInfo } = useContactInfo();
  const { toast } = useToast();
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80 z-10" />
        <img 
          src={refineryImage} 
          alt="Get in Touch" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 py-20 px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            We're always ready to discuss your next project and bring your vision to life with cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12">
        <div className="container px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Visit Our Office */}
            <Card>
              <CardContent className="p-6">
                <div className="inline-flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Visit Our Office</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div>1B Etim Inyang Crescent<br />Victoria Island, Lagos</div>
                      <div>Sultan Selim Mah. Eski Büyükdere Cad.<br />No: 61 İç Kapı No: 2 Kağıthane/İstanbul</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Office Hours</h4>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 8AM–6PM</p>
                  </div>
                  <div className="pt-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Victoria Island</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Send Message */}
            <Card>
              <CardContent className="p-6">
                <div className="inline-flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Send Message</h3>
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  
                  // Honeypot spam protection
                  if (formData.get('website')) return;
                  
                  const data = {
                    name: formData.get('name') as string,
                    email: formData.get('email') as string,
                    company: formData.get('company') as string,
                    message: formData.get('message') as string,
                  };
                  
                  const form = document.createElement('form');
                  form.action = `https://formsubmit.co/info@mitalgic.com`;
                  form.method = 'POST';
                  form.target = '_blank';
                  
                  Object.entries({
                    ...data,
                    _subject: 'New Contact Form Submission - Mitalgic Website',
                    _captcha: 'false',
                    _template: 'table'
                  }).forEach(([key, value]) => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = value || '';
                    form.appendChild(input);
                  });
                  
                  document.body.appendChild(form);
                  form.submit();
                  document.body.removeChild(form);
                  
                  toast({
                    title: "Message sent!",
                    description: "We'll get back to you soon."
                  });
                  (e.target as HTMLFormElement).reset();
                }} className="space-y-3">
                  <input type="text" name="website" style={{display: 'none'}} tabIndex={-1} autoComplete="off" />
                  <Input name="name" placeholder="Full Name" required />
                  <Input type="email" name="email" placeholder="Email Address" required />
                  <Input name="company" placeholder="Company" />
                  <Textarea name="message" placeholder="Your Message" rows={4} required />
                  <Button className="w-full" type="submit">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card>
              <CardContent className="p-6">
                <div className="inline-flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Email Us</h4>
                    <a href={`mailto:${contactInfo?.email_address || 'info@mitalgic.com'}`} className="text-primary hover:underline">
                      {contactInfo?.email_address || 'info@mitalgic.com'}
                    </a>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">WhatsApp</h4>
                    <div className="space-y-2">
                      <Button variant="default" className="w-full gap-2 bg-success hover:bg-success/90" asChild>
                        <a href={`https://wa.me/${contactInfo?.whatsapp_number?.replace(/[^0-9]/g, '') || '905326517156'}`} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4" />
                          WhatsApp TR
                        </a>
                      </Button>
                      <Button variant="default" className="w-full gap-2 bg-success hover:bg-success/90" asChild>
                        <a href="https://wa.me/2348165721243" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4" />
                          WhatsApp NG
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Follow Us</h4>
                    <div className="flex gap-2 flex-wrap">
                      {contactInfo?.linkedin_url && (
                        <Button variant="outline" size="icon" asChild>
                          <a href={contactInfo.linkedin_url} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {contactInfo?.instagram_url && (
                        <Button variant="outline" size="icon" asChild>
                          <a href={contactInfo.instagram_url} target="_blank" rel="noopener noreferrer">
                            <Instagram className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {contactInfo?.facebook_url && (
                        <Button variant="outline" size="icon" asChild>
                          <a href={contactInfo.facebook_url} target="_blank" rel="noopener noreferrer">
                            <Facebook className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {contactInfo?.twitter_url && (
                        <Button variant="outline" size="icon" asChild>
                          <a href={contactInfo.twitter_url} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {contactInfo?.youtube_url && (
                        <Button variant="outline" size="icon" asChild>
                          <a href={contactInfo.youtube_url} target="_blank" rel="noopener noreferrer">
                            <Youtube className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground">
              Find us easily — we're right at the heart of Victoria Island.
            </p>
          </div>
          
          {/* Google Maps Embed */}
          <div className="relative h-96 rounded-lg overflow-hidden mb-8">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6934404307044!2d3.436926274992131!3d6.433410093557716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf522019581c9%3A0x69b9f99c3dffcd36!2s1b%20Etim%20Inyang%20Cres%2C%20Eti-Osa%2C%20Lagos%20101222%2C%20Lagos!5e0!3m2!1sen!2sng!4v1761764521702!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mitalgic Office Location"
              className="w-full h-full"
            />
          </div>


        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
