import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi! I'd like to get a quote for cleaning services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/61452367372?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Message Prepared!",
      description: "Opening WhatsApp to send your inquiry.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Today",
      value: "+61 452 367 372",
      href: "tel:+61452367372",
      description: "Speak directly with our team for immediate assistance"
    },
    {
      icon: MessageCircle,
      title: "Book Now on WhatsApp",
      value: "Quick Booking",
      href: "https://wa.me/61452367372",
      description: "Instant booking and quotes via WhatsApp"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info.oper4@gmail.com",
      href: "mailto:info.oper4@gmail.com",
      description: "Send us a detailed message about your needs"
    },
    {
      icon: Facebook,
      title: "Facebook",
      value: "Follow Our Page",
      href: "https://www.facebook.com/share/14M81TstdSB/?mibextid=wwXIfr",
      description: "Stay updated with our latest services and tips"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: 'var(--neutral-dark)' }}>
              We'd Love to{' '}
              <span style={{ color: 'var(--primary)' }}>Hear from You</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-dark)' }}>
              Ready to experience opera-level cleaning? Contact us today for a free, 
              no-obligation quote tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--neutral-dark)' }}>Get in Touch</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-dark)' }}>
              Choose your preferred way to contact us. We're here to help and respond quickly to all inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="service-card text-center group transition-all hover:scale-105"
              >
                <div className="p-4 rounded-2xl mb-6 inline-flex" style={{ backgroundColor: 'rgba(0, 180, 213, 0.1)' }}>
                  <method.icon className="h-8 w-8" style={{ color: 'var(--primary)' }} />
                </div>
                <h4 className="font-bold text-lg mb-2" style={{ color: 'var(--neutral-dark)' }}>{method.title}</h4>
                <p className="text-lg font-semibold mb-2" style={{ color: 'var(--accent-green)' }}>{method.value}</p>
                <p className="text-sm" style={{ color: 'var(--text-dark)' }}>{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="service-card p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--neutral-dark)' }}>Send Us a Message</h3>
              <p className="text-lg" style={{ color: 'var(--text-dark)' }}>
                Fill out the form below and we'll get back to you within 24 hours with your personalized quote.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-dark)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-dark)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-dark)' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-dark)' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell us about your cleaning needs, property size, specific requirements, preferred schedule, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 btn-primary"
              >
                <Send size={20} />
                <span>Send via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Service Areas & Additional Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Areas */}
            <div className="service-card">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-8 w-8" style={{ color: 'var(--accent-green)' }} />
                <h4 className="text-2xl font-bold" style={{ color: 'var(--neutral-dark)' }}>Service Areas</h4>
              </div>
              <p className="mb-4" style={{ color: 'var(--text-dark)' }}>
                We provide professional cleaning services throughout the local area. 
                Contact us to confirm service availability in your specific location.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: 'var(--accent-green)' }}></div>
                  <span style={{ color: 'var(--text-dark)' }}>Residential properties</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: 'var(--accent-green)' }}></div>
                  <span style={{ color: 'var(--text-dark)' }}>Commercial offices</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: 'var(--accent-green)' }}></div>
                  <span style={{ color: 'var(--text-dark)' }}>Retail spaces</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: 'var(--accent-green)' }}></div>
                  <span style={{ color: 'var(--text-dark)' }}>Medical facilities</span>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div className="service-card">
              <div className="flex items-center space-x-3 mb-6">
                <Phone className="h-8 w-8" style={{ color: 'var(--primary)' }} />
                <h4 className="text-2xl font-bold" style={{ color: 'var(--neutral-dark)' }}>Business Hours</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-dark)' }}>Monday - Friday:</span>
                  <span className="font-semibold" style={{ color: 'var(--neutral-dark)' }}>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-dark)' }}>Saturday:</span>
                  <span className="font-semibold" style={{ color: 'var(--neutral-dark)' }}>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-dark)' }}>Sunday:</span>
                  <span className="font-semibold" style={{ color: 'var(--neutral-dark)' }}>By Appointment</span>
                </div>
                <div className="border-t pt-3 mt-4" style={{ borderColor: 'var(--divider)' }}>
                  <p className="text-sm" style={{ color: 'var(--text-dark)' }}>
                    <strong>Emergency services available 24/7</strong><br/>
                    Weekend and after-hours cleaning by special arrangement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;