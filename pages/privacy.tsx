import { Layout } from "@/components/layout/Layout"
export default function Privacy() {
  return (
    <Layout>
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: January 2024
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-8 prose prose-lg max-w-none">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              Jose Technology Solutions ("we," "our," or "us") respects your privacy and is committed 
              to protecting your personal data. This privacy policy explains how we collect, use, and 
              safeguard your information when you visit our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Name and email address when you contact us</li>
              <li>Company information you choose to provide</li>
              <li>Messages and communications you send us</li>
              <li>Basic analytics data through privacy-focused tools (Plausible)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you information about our services if requested</li>
              <li>Improve our website and services</li>
              <li>Understand how visitors use our website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>With service providers who help us operate our business (email providers, analytics)</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Analytics and Cookies</h2>
            <p className="text-muted-foreground">
              We use Plausible Analytics, a privacy-focused analytics tool that does not use cookies 
              and does not collect personal data. We do not use tracking cookies or third-party advertising cookies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement reasonable security measures to protect your information. However, no method 
              of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this privacy policy or your personal data, please contact us at:
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Email:</strong> hello@jose.technology
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
    )
}
