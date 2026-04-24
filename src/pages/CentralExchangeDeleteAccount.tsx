import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Settings, CheckCircle2, Mail } from "lucide-react";

const CentralExchangeDeleteAccount = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <Link to="/central-exchange" className="text-primary hover:underline text-sm mb-4 inline-block">← Back to Central Exchange</Link>
            <h1 className="text-4xl font-bold mb-2">Account Deletion</h1>
            <p className="text-muted-foreground">Central Exchange — A Product of Mitalgic Global Limited</p>
          </div>

          <Card className="mb-10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">How to Delete Your Central Exchange Account</h2>
              <div className="space-y-6">
                {[
                  { icon: Settings, step: "1", text: "Open the Central Exchange app" },
                  { icon: Settings, step: "2", text: "Go to Settings" },
                  { icon: Trash2, step: "3", text: 'Tap "Delete Account"' },
                  { icon: CheckCircle2, step: "4", text: "Confirm deletion" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">{item.step}</span>
                    </div>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-10">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold mb-4">What Happens After Deletion</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  Your personal data will be permanently removed within 30 days.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  Transaction records may be retained as required by law.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-xl font-bold mb-4">Can't Access the App?</h2>
              <p className="text-muted-foreground mb-4">
                If you cannot access the app, email us with the subject "Account Deletion Request" and we will process it within 30 days.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@mitalgic.com" className="hover:underline">info@mitalgic.com</a>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-10">
            Central Exchange is a product of Mitalgic Global Limited.
          </p>
        </div>
      </section>

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

export default CentralExchangeDeleteAccount;
