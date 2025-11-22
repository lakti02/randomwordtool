import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: [
        'Personal information you provide when contacting us (name, email)',
        'Usage data and analytics to improve our services',
        'Technical information like IP address and browser type',
        'Cookies and similar technologies for site functionality'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Provide and improve our word generation services',
        'Respond to your inquiries and support requests',
        'Send important updates about our services',
        'Analyze usage patterns to enhance user experience'
      ]
    },
    {
      icon: Lock,
      title: 'Data Protection',
      content: [
        'We use industry-standard encryption for data transmission',
        'Access to personal data is limited to authorized personnel',
        'Regular security audits and updates to our systems',
        'Data retention policies to minimize storage of personal information'
      ]
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: [
        'We do not sell your personal information to third parties',
        'Limited sharing with trusted service providers (hosting, analytics)',
        'Legal compliance when required by law or regulation',
        'Protection of our rights and the safety of our users'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your privacy is important to us. This policy explains how we collect, 
          use, and protect your information when you use WordGen Pro.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Last updated: January 1, 2025
        </p>
      </div>

      {/* Key Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <section.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {section.title}
              </h2>
            </div>
            <ul className="space-y-3">
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Detailed Policy */}
      <div className="max-w-4xl mx-auto prose prose-lg">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2>Complete Privacy Policy</h2>
          
          <h3>1. Introduction</h3>
          <p>
            WordGen Pro ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard 
            your information when you visit our website or use our services.
          </p>

          <h3>2. Information Collection</h3>
          <h4>2.1 Personal Information</h4>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Contact us through our contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Create an account (if applicable)</li>
            <li>Participate in surveys or feedback</li>
          </ul>

          <h4>2.2 Automatically Collected Information</h4>
          <p>
            When you visit our website, we may automatically collect certain information, including:
          </p>
          <ul>
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages viewed and time spent</li>
            <li>Device information</li>
          </ul>

          <h3>3. Use of Information</h3>
          <p>We use the collected information for various purposes:</p>
          <ul>
            <li>Providing and maintaining our services</li>
            <li>Improving user experience</li>
            <li>Responding to customer service requests</li>
            <li>Sending periodic emails and updates</li>
            <li>Monitoring and analyzing usage patterns</li>
            <li>Detecting and preventing fraud</li>
          </ul>

          <h3>4. Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and similar tracking technologies to enhance your experience 
            on our website. You can control cookie preferences through your browser settings.
          </p>

          <h3>5. Data Security</h3>
          <p>
            We implement appropriate security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, 
            no method of transmission over the internet is 100% secure.
          </p>

          <h3>6. Third-Party Services</h3>
          <p>
            We may use third-party services for analytics, hosting, and other business purposes. 
            These services have their own privacy policies, and we encourage you to review them.
          </p>

          <h3>7. Your Rights</h3>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Delete your personal information</li>
            <li>Object to processing</li>
            <li>Data portability</li>
          </ul>

          <h3>8. Children's Privacy</h3>
          <p>
            Our services are not intended for children under 13. We do not knowingly 
            collect personal information from children under 13.
          </p>

          <h3>9. Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify you 
            of any changes by posting the new policy on this page with an updated effective date.
          </p>

          <h3>10. Contact Information</h3>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@wordgenpro.com</li>
            <li>Address: 123 Language Lane, Education District, New York, NY 10001</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Questions About Your Privacy?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          We're committed to transparency and protecting your privacy. 
          Contact us if you have any questions or concerns.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-block"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default PrivacyPolicy;