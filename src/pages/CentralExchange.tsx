import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import { ArrowRight, Shield, Users, Repeat, Banknote, Mail } from "lucide-react";

const CentralExchange = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="container text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">A Product of Mitalgic Global Limited</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Central Exchange</h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Secure Peer-to-Peer Cryptocurrency Trading
          </p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            Central Exchange is a peer-to-peer cryptocurrency trading platform that enables users to buy and sell BTC and USDT directly with verified merchants using secure escrow protection. Users can also convert between NGN and USD cash through our vendor network.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black" asChild>
              <a href="https://centralexchange.com.ng" target="_blank" rel="noopener noreferrer">
                Visit Central Exchange Website
              </a>
            </Button>
            {/* Uncomment when published on Play Store */}
            {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Get it on Google Play
              </a>
            </Button> */}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Escrow Protection", desc: "Crypto held securely until both parties confirm the transaction." },
              { icon: Users, title: "Verified Merchants", desc: "Trade only with KYC-verified merchants on the platform." },
              { icon: Repeat, title: "P2P Trading", desc: "Buy and sell BTC and USDT directly with other users." },
              { icon: Banknote, title: "Cash Conversion", desc: "Convert between NGN and USD cash through our vendor network." },
            ].map((f) => (
              <Card key={f.title}>
                <CardContent className="p-6">
                  <f.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Need Support?</h2>
          <p className="text-muted-foreground mb-6">Contact us for any questions about Central Exchange</p>
          <div className="flex items-center justify-center gap-2 text-primary">
            <Mail className="h-5 w-5" />
            <a href="mailto:info@mitalgic.com" className="hover:underline">info@mitalgic.com</a>
          </div>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/central-exchange/privacy" className="text-primary hover:underline inline-flex items-center gap-1">
              Privacy Policy <ArrowRight className="h-3 w-3" />
            </Link>
            <Link to="/central-exchange/terms" className="text-primary hover:underline inline-flex items-center gap-1">
              Terms of Service <ArrowRight className="h-3 w-3" />
            </Link>
            <Link to="/central-exchange/delete-account" className="text-primary hover:underline inline-flex items-center gap-1">
              Account Deletion <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container text-center text-sm text-muted-foreground">
          <p className="mb-2">Central Exchange is a product of Mitalgic Global Limited.</p>
          <p>© 2026 Mitalgic Global Limited. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="/central-exchange/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/central-exchange/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CentralExchange;
