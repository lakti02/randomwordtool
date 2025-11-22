import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      icon: CheckCircle,
      title: 'Acceptable Use',
      content: [
        'Use our services for legitimate educational and creative purposes',
        'Respect intellectual property rights',
        'Do not attempt to harm or disrupt our services',
        'Follow all applicable laws and regulations'
      ]
    },
    {
      icon: FileText,
      title: 'Service Availability',
      content: [
        'We strive for 99.9% uptime but cannot guarantee uninterrupted service',
        'Scheduled maintenance will be announced in advance',
        'Features may be updated or modified without notice',
        'We reserve the right to suspend service for violations'
      ]
    },
    {
      icon: Scale,
      title: 'User Responsibilities',
      content: [
        'Provide accurate information when contacting us',
        'Keep your account secure (if applicable)',
        'Report any bugs or security issues promptly',
        'Use generated content responsibly and ethically'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitations',
      content: [
        'Services provided "as is" without warranties',
        'We are not liable for indirect or consequential damages',
        'Content accuracy is not guaranteed',
        'Third-party links are not under our control'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Terms of Service
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          These terms govern your use of WordGen Pro services. By using our website 
          and tools, you agree to comply with these terms and conditions.
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

      {/* Detailed Terms */}
      <div className="max-w-4xl mx-auto prose prose-lg">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2>Complete Terms of Service</h2>
          
          <h3>1. Agreement to Terms</h3>
          <p>
            By accessing and using WordGen Pro, you accept and agree to be bound by 
            the terms and provision of this agreement. If you do not agree to abide 
            by the above, please do not use this service.
          </p>

          <h3>2. Description of Service</h3>
          <p>
            WordGen Pro provides online word generation tools, including but not limited to:
          </p>
          <ul>
            <li>Random word generators with various filters</li>
            <li>Rhyming word finders</li>
            <li>Synonym and antonym tools</li>
            <li>Word games and educational content</li>
            <li>Related educational resources</li>
          </ul>

          <h3>3. Acceptable Use Policy</h3>
          <h4>3.1 Permitted Uses</h4>
          <p>You may use our services for:</p>
          <ul>
            <li>Educational purposes and learning</li>
            <li>Creative writing and content creation</li>
            <li>Research and academic work</li>
            <li>Personal entertainment and word games</li>
          </ul>

          <h4>3.2 Prohibited Uses</h4>
          <p>You may not use our services to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Transmit malicious code or viruses</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use automated tools to scrape content excessively</li>
            <li>Create content that is harmful, offensive, or illegal</li>
          </ul>

          <h3>4. Intellectual Property Rights</h3>
          <p>
            The WordGen Pro service and its original content, features, and functionality 
            are owned by WordGen Pro and are protected by international copyright, 
            trademark, patent, trade secret, and other intellectual property laws.
          </p>

          <h3>5. User-Generated Content</h3>
          <p>
            Any content you submit or create using our services remains your property. 
            However, you grant us a non-exclusive license to use such content to provide 
            and improve our services.
          </p>

          <h3>6. Privacy Policy</h3>
          <p>
            Your privacy is important to us. Please review our Privacy Policy, which 
            also governs your use of the service, to understand our practices.
          </p>

          <h3>7. Disclaimers</h3>
          <p>
            The information on this website is provided on an "as is" basis. To the 
            fullest extent permitted by law, this company:
          </p>
          <ul>
            <li>Excludes all representations and warranties relating to this website</li>
            <li>Does not guarantee the accuracy of generated words or definitions</li>
            <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
          </ul>

          <h3>8. Limitation of Liability</h3>
          <p>
            WordGen Pro shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages, including without limitation, loss of 
            profits, data, use, goodwill, or other intangible losses.
          </p>

          <h3>9. Termination</h3>
          <p>
            We may terminate or suspend access immediately, without prior notice or 
            liability, for any reason whatsoever, including without limitation if you 
            breach the Terms.
          </p>

          <h3>10. Changes to Terms</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these 
            Terms at any time. If a revision is material, we will try to provide at 
            least 30 days notice prior to any new terms taking effect.
          </p>

          <h3>11. Contact Information</h3>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul>
            <li>Email: legal@wordgenpro.com</li>
            <li>Address: 123 Language Lane, Education District, New York, NY 10001</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Questions About Our Terms?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          We want you to feel confident using our services. Contact us if you 
          have any questions about these terms.
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

export default TermsOfService;