import React from 'react';

import { Section } from '@/components/terms/Section';

export default function TermsPage() {
  return (
    <main className='container mx-auto px-4 py-12 max-w-4xl'>
      <h1 className='text-4xl font-bold mb-4 text-center'>
        TERMS OF USE AND SERVICE AGREEMENT
      </h1>
      <p className='text-center text-gray-600 dark:text-gray-400 mb-8'>
        LAST UPDATED: February 20, 2025
      </p>

      <div className='prose dark:prose-invert max-w-none mb-8'>
        <p className='text-gray-600 dark:text-gray-300 italic'>
          WHEREAS, these Terms of Use and Service Agreement (hereinafter
          referred to as the &quot;Agreement&quot; or &quot;Terms&quot;)
          constitute a legally binding agreement between Shivanshu Negi, having
          its principal place of business at 4th Floor, Jai Ambe Complex,
          Gasgodam Road, Haldwani, Uttarakhand, India (263139) (hereinafter
          referred to as &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) and any individual or entity accessing or using our
          services (hereinafter referred to as &quot;User,&quot;
          &quot;you,&quot; or &quot;your&quot;).
        </p>
      </div>

      <div className='space-y-2'>
        <Section
          title='1. INTRODUCTION AND ACCEPTANCE OF TERMS'
          defaultOpen={true}
        >
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold mb-2'>1.1 Scope of Agreement</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                These Terms govern your access to and use of our website located
                at shivanshunegi.com (the &quot;Platform&quot;), including all
                associated services, content, features, and applications offered
                by the Company. By accessing or using our Platform, you
                acknowledge that you have read, understood, and agree to be
                bound by these Terms in their entirety.
              </p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>1.2 Modification of Terms</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                The Company reserves the right, at its sole discretion, to
                modify, amend, or update these Terms at any time. Such
                modifications shall become effective immediately upon posting on
                the Platform. Your continued use of the Platform following the
                posting of any modifications constitutes your acceptance of such
                changes. It is your responsibility to review these Terms
                periodically for updates.
              </p>
            </div>
          </div>
        </Section>

        <Section title='2. DEFINITIONS AND INTERPRETATIONS'>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold mb-2'>
                2.1 &quot;Services&quot; shall mean and include:
              </h3>
              <ul className='list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1'>
                <li>Professional video production services</li>
                <li>Film production services</li>
                <li>Commercial production services</li>
                <li>Educational services through our academy</li>
                <li>Digital asset creation and distribution</li>
                <li>Consulting services</li>
                <li>
                  Any other services offered by the Company from time to time
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>
                2.2 &quot;Products&quot; shall mean and include:
              </h3>
              <ul className='list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1'>
                <li>Digital assets and design resources</li>
                <li>Look-Up Tables (LUTs)</li>
                <li>Templates and presets</li>
                <li>Stock footage</li>
                <li>Educational courses and materials</li>
                <li>Any other digital products offered by the Company</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title='3. INTELLECTUAL PROPERTY RIGHTS AND OWNERSHIP'>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold mb-2'>3.1 Proprietary Rights</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                All content, materials, and works of authorship available
                through the Platform are protected by copyright, trademark,
                patent, trade secret, and other intellectual property laws. The
                Company expressly reserves all rights, title, and interest in
                and to all intellectual property.
              </p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>3.2 License Restrictions</h3>
              <p className='text-gray-600 dark:text-gray-300 mb-2'>
                Subject to your compliance with these Terms, the Company grants
                you a limited, non-exclusive, non-transferable,
                non-sublicensable license to access and use the Platform and
                Content solely for your personal or internal business purposes.
                You shall not:
              </p>
              <ul className='list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1'>
                <li>
                  Copy, modify, adapt, translate, or create derivative works
                </li>
                <li>Reverse engineer or decompile the Platform</li>
                <li>Remove or circumvent security features</li>
                <li>Use automated means to access or scrape the Platform</li>
                <li>Reproduce or exploit for commercial purposes</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title='4. DIGITAL PRODUCTS AND LICENSING'>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold mb-2'>
                4.1 License Grant for Digital Products
              </h3>
              <div className='space-y-2'>
                <p className='font-medium'>Stock Footage License:</p>
                <ul className='list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1'>
                  <li>Single project usage rights per license purchase</li>
                  <li>Prohibition on redistribution or resale</li>
                  <li>Requirement for appropriate attribution as specified</li>
                  <li>Modification restrictions as per license tier</li>
                  <li>Geographic and platform-specific usage limitations</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section title='5. ACADEMY AND COURSE TERMS'>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold mb-2'>5.1 Enrollment and Access</h3>
              <ul className='list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1'>
                <li>Course access is granted upon confirmed payment</li>
                <li>Access duration is specified per course/program</li>
                <li>Multiple device access is limited to single user</li>
                <li>Account sharing is strictly prohibited</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title='6. CLIENT SERVICES AND DELIVERABLES'>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold mb-2'>6.1 Service Agreement</h3>
              <ul className='list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1'>
                <li>Project scope defined in separate Statement of Work</li>
                <li>Timeline and milestones as mutually agreed</li>
                <li>Deliverable specifications as documented</li>
                <li>Communication protocols established</li>
                <li>Change request procedures outlined</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title='7. DATA COLLECTION AND PRIVACY POLICIES'>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold mb-2'>7.1 Information Collection</h3>
              <p className='text-gray-600 dark:text-gray-300 mb-2'>
                The Company collects:
              </p>
              <div className='space-y-2'>
                <p className='font-medium'>Personal Information:</p>
                <ul className='list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1'>
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Contact numbers</li>
                  <li>Billing information</li>
                  <li>Professional details</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section title='8. PAYMENT AND REFUND POLICIES'>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold mb-2'>8.1 Payment Terms</h3>
              <p className='text-gray-600 dark:text-gray-300 mb-2'>
                Accepted Payment Methods:
              </p>
              <ul className='list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1'>
                <li>Major credit cards and debit cards</li>
                <li>Net banking</li>
                <li>UPI transactions</li>
                <li>International wire transfers</li>
                <li>Other specified payment gateways</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title='9. TERMINATION AND SUSPENSION'>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold mb-2'>9.1 Termination Rights</h3>
              <p className='text-gray-600 dark:text-gray-300 mb-2'>
                Company Termination Rights:
              </p>
              <ul className='list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1'>
                <li>Immediate termination for breach</li>
                <li>Suspension of services</li>
                <li>Account deactivation</li>
                <li>Content removal</li>
                <li>Access restriction</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title='10. LIMITATION OF LIABILITY'>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold mb-2'>
                10.1 Disclaimer of Warranties
              </h3>
              <p className='text-gray-600 dark:text-gray-300 uppercase font-bold mb-2'>
                THE PLATFORM AND SERVICES ARE PROVIDED &quot;AS IS&quot;
              </p>
              <p className='text-gray-600 dark:text-gray-300 mb-2'>
                No guarantee of:
              </p>
              <ul className='list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1'>
                <li>Uninterrupted service</li>
                <li>Error-free operation</li>
                <li>Complete security</li>
                <li>Compatibility with all systems</li>
                <li>Meeting specific requirements</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title='11. GOVERNING LAW AND JURISDICTION'>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold mb-2'>11.1 Applicable Law</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                These Terms shall be governed by the laws of India, including
                but not limited to the Information Technology Act and Consumer
                Protection Act.
              </p>
            </div>
          </div>
        </Section>

        <Section title='12. CONTACT INFORMATION'>
          <div className='space-y-4'>
            <div>
              <p className='text-gray-600 dark:text-gray-300'>
                For any questions regarding these Terms, please contact:
              </p>
              <ul className='list-none space-y-2 mt-4 text-gray-600 dark:text-gray-300'>
                <li>
                  <strong>Name:</strong> Shivanshu Negi
                </li>
                <li>
                  <strong>Email:</strong> hi@shivanshunegi.com
                </li>
                <li>
                  <strong>Phone:</strong> +917983393792
                </li>
                <li>
                  <strong>Website:</strong> shivanshunegi.com
                </li>
                <li>
                  <strong>Business Hours:</strong> 10AM - 6PM (IST)
                </li>
                <li>
                  <strong>Address:</strong> 4th Floor, Jai Ambe Complex,
                  Gasgodam Road, Haldwani, Uttarakhand, India (263139)
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
