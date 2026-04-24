import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

const CentralExchangeTerms = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <Link to="/central-exchange" className="text-primary hover:underline text-sm mb-4 inline-block">← Back to Central Exchange</Link>
            <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground">Central Exchange — A Product of Mitalgic Global Limited</p>
            <p className="text-sm text-muted-foreground mt-2">Effective Date: April 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your use of the Central Exchange mobile application ("App"), operated by Mitalgic Global Limited ("Company"). By using the App, you agree to these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. Eligibility</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Must be 18 years or older</li>
                <li>Must provide accurate KYC information</li>
                <li>Must comply with applicable laws in your jurisdiction</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Account Responsibilities</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Users are responsible for maintaining account security</li>
                <li>Users must not share login credentials</li>
                <li>Users must provide accurate information during registration and verification</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. P2P Trading</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>All trades are peer-to-peer between users</li>
                <li>The platform provides escrow protection but does not act as a party to any trade</li>
                <li>Users are responsible for confirming payment before releasing crypto</li>
                <li>Exchange rates are determined by the market and merchants</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Escrow</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Cryptocurrency is held in escrow during active trades</li>
                <li>Escrow is released only when both parties confirm the transaction</li>
                <li>Disputes are handled through the platform's dispute resolution process</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Credits System</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Certain features (cash delivery, vendor bridge) require credits</li>
                <li>Credits are purchased within the app and are non-refundable</li>
                <li>Credit balances are visible in the user's account</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Cash Delivery and Pickup</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>USD cash services are facilitated through third-party vendors</li>
                <li>Delivery/pickup is arranged based on the user's selected location</li>
                <li>The platform is not liable for delays caused by vendors</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Prohibited Activities</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Money laundering or terrorist financing</li>
                <li>Fraudulent transactions</li>
                <li>Using the platform for illegal purposes</li>
                <li>Creating multiple accounts</li>
                <li>Manipulating trade prices</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>The platform is provided "as is"</li>
                <li>Mitalgic Global Limited is not liable for losses from P2P trades, market fluctuations, or vendor delays</li>
                <li>Maximum liability is limited to the fees paid by the user</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Account Termination</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
                <li>Users can delete their account at any time through the app</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of the Federal Republic of Nigeria.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Contact</h2>
              <div className="text-muted-foreground">
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

export default CentralExchangeTerms;
