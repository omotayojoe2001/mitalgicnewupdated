import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

const CentralExchangePrivacy = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <Link to="/central-exchange" className="text-primary hover:underline text-sm mb-4 inline-block">← Back to Central Exchange</Link>
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Central Exchange — A Product of Mitalgic Global Limited</p>
            <p className="text-sm text-muted-foreground mt-2">Effective Date: April 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy governs the use of the Central Exchange mobile application ("App"), operated by Mitalgic Global Limited ("Company", "we", "us", or "our"). Central Exchange is a product of Mitalgic Global Limited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. Data We Collect</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Personal information:</strong> full name, email address, phone number</li>
                <li><strong className="text-foreground">Identity verification (KYC):</strong> government-issued ID, selfie, proof of address</li>
                <li><strong className="text-foreground">Financial data:</strong> transaction history, trade amounts, bank account details, cryptocurrency wallet addresses</li>
                <li><strong className="text-foreground">Device data:</strong> device type, operating system, IP address</li>
                <li><strong className="text-foreground">Usage data:</strong> pages visited, features used, timestamps</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. How We Use the Data</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>To create and manage user accounts</li>
                <li>To process P2P cryptocurrency trades</li>
                <li>To verify user identity (KYC/AML compliance)</li>
                <li>To match users with merchants and vendors</li>
                <li>To process payments and cash delivery/pickup orders</li>
                <li>To send notifications about trade status and account activity</li>
                <li>To prevent fraud and ensure platform security</li>
                <li>To comply with applicable laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Data Storage</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Data is stored securely using Supabase (cloud infrastructure)</li>
                <li>Hosted on servers with encryption at rest and in transit</li>
                <li>We do not sell user data to third parties</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Sharing</h2>
              <p className="text-muted-foreground mb-3">We share data only with:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Trade counterparties (limited to what's needed for the trade)</li>
                <li>Payment processors</li>
                <li>Identity verification providers</li>
                <li>Law enforcement when legally required</li>
              </ul>
              <p className="text-muted-foreground mt-3">We do NOT sell personal data to advertisers or third parties.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. User Rights</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Users can view and update their personal information in the app</li>
                <li>Users can request account deletion at any time through the app (Settings → Delete Account)</li>
                <li>Upon deletion, personal data is removed within 30 days, except where retention is required by law</li>
                <li>Users can contact us at info@mitalgic.com for any data requests</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>The app does not use cookies</li>
                <li>We collect basic analytics for app performance</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Central Exchange is not intended for users under 18 years of age. We do not knowingly collect data from minors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this policy from time to time. Users will be notified of significant changes via the app.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
              <p className="text-muted-foreground">
                For questions about this Privacy Policy, contact us at:
              </p>
              <div className="mt-3 text-muted-foreground">
                <p className="font-semibold text-foreground">Mitalgic Global Limited</p>
                <p>Email: <a href="mailto:info@mitalgic.com" className="text-primary hover:underline">info@mitalgic.com</a></p>
                <p>Website: <a href="https://mitalgic.com" className="text-primary hover:underline">https://mitalgic.com</a></p>
              </div>
            </div>
          </div>
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

export default CentralExchangePrivacy;
