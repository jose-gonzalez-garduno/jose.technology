export function Terms() {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: January 2024
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-8 prose prose-lg max-w-none">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing this website, you agree to be bound by these Terms of Service and agree 
              that you are responsible for compliance with any applicable local laws. If you do not 
              agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily access the materials on Jose Technology Solutions' 
              website for personal, non-commercial transitory viewing only. This is the grant of a 
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to reverse engineer any software on this website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
              <li>Transfer the materials to another person or mirror on another server</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on Jose Technology Solutions' website are provided on an 'as is' basis. 
              We make no warranties, expressed or implied, and hereby disclaim and negate all other 
              warranties including, without limitation, implied warranties or conditions of merchantability, 
              fitness for a particular purpose, or non-infringement of intellectual property or other 
              violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
            <p className="text-muted-foreground">
              In no event shall Jose Technology Solutions or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to business 
              interruption) arising out of the use or inability to use the materials on this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Service Terms</h2>
            <p className="text-muted-foreground mb-4">
              For consulting and development services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Services are provided under separate written agreements</li>
              <li>Pricing and scope are defined on a per-project basis</li>
              <li>Payment terms are specified in individual service contracts</li>
              <li>Intellectual property rights are addressed in service agreements</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Accuracy of Materials</h2>
            <p className="text-muted-foreground">
              The materials appearing on this website could include technical, typographical, or 
              photographic errors. We do not warrant that any of the materials on this website are 
              accurate, complete, or current. We may make changes to the materials at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Links</h2>
            <p className="text-muted-foreground">
              We have not reviewed all of the sites linked to this website and are not responsible 
              for the contents of any such linked site. The inclusion of any link does not imply 
              endorsement by us. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
            <p className="text-muted-foreground">
              We may revise these Terms of Service at any time without notice. By using this website, 
              you agree to be bound by the current version of these Terms of Service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These terms and conditions are governed by and construed in accordance with the laws 
              of the jurisdiction in which Jose Technology Solutions operates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Email:</strong> hello@jose.technology
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
