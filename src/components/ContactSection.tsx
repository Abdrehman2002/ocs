import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
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
Service Type: ${formData.service}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/61497113976?text=${encodeURIComponent(message)}`;
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
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+61 497 113 976",
      href: "tel:+61497113976",
      description: "Speak directly with our team"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Book Now",
      href: "https://wa.me/61497113976",
      description: "Quick booking via WhatsApp"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info.oper4@gmail.com",
      href: "mailto:info.oper4@gmail.com",
      description: "Send us a detailed message"
    }
  ];

  const serviceTypes = [
    "House Cleaning",
    "Deep Cleaning",
    "Move In/Out Cleaning",
    "Bond Cleaning",
    "Commercial Cleaning",
    "Carpet Cleaning",
    "Window Cleaning",
    "Pay By Hour",
    "Other"
  ];

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">Get Your Free Quote</h2>
          <p className="section-subheading">
            Ready to experience opera-level cleaning? Contact us today for a free, 
            no-obligation quote tailored to your specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--neutral-dark)' }}>Send Us a Message</h3>
              <p style={{ color: 'var(--text-dark)' }}>
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

              <div className="grid sm:grid-cols-2 gap-6">
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
                  <label htmlFor="service" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-dark)' }}>
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-dark)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="form-textarea"
                  placeholder="Tell us about your cleaning needs, property size, specific requirements, etc."
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

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--neutral-dark)' }}>Contact Information</h3>
              <p style={{ color: 'var(--text-dark)' }}>
                Prefer to reach out directly? Use any of the methods below to get in touch with our team.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="service-card flex items-center space-x-4 transition-all hover:scale-105"
                >
                  <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 180, 213, 0.1)' }}>
                    <method.icon className="h-6 w-6" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: 'var(--neutral-dark)' }}>{method.title}</h4>
                    <p className="text-lg font-medium" style={{ color: 'var(--accent-green)' }}>{method.value}</p>
                    <p className="text-sm" style={{ color: 'var(--text-dark)' }}>{method.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="service-card">
              <h4 className="font-semibold mb-4" style={{ color: 'var(--neutral-dark)' }}>Follow Us</h4>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/share/14M81TstdSB/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-white rounded-xl transition-colors"
                  style={{ backgroundColor: 'var(--primary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <div className="text-sm" style={{ color: 'var(--text-dark)' }}>
                  Stay updated with our latest services and cleaning tips
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="service-card">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6" style={{ color: 'var(--accent-green)' }} />
                <h4 className="font-semibold" style={{ color: 'var(--neutral-dark)' }}>Service Areas</h4>
              </div>
              <p style={{ color: 'var(--text-dark)' }}>
                We provide professional cleaning services throughout the local area. 
                Contact us to confirm service availability in your specific location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;