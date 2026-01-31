import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle, Menu } from "lucide-react";
import { useState } from "react";
import { useContactInfo } from "@/hooks/useContactInfo";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { contactInfo } = useContactInfo();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-12 w-12 items-center justify-center">
            <img src="/favicon.png" alt="Mitalgic Logo" className="h-10 w-10" />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path)
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <Button asChild>
              <Link to="/contact">Get a Proposal</Link>
            </Button>
            <Button variant="outline" size="default" asChild>
              <a href={`https://wa.me/${contactInfo?.whatsapp_number?.replace(/[^0-9]/g, '') || '905326517156'}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive(link.path)
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-6">
                  <Button asChild onClick={() => setIsOpen(false)}>
                    <Link to="/contact">Get a Proposal</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={`https://wa.me/${contactInfo?.whatsapp_number?.replace(/[^0-9]/g, '') || '905326517156'}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
