import { CheckCircle, Shield, Users, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import premiumOfficeImage from '@/assets/premium-office-cleaning.jpg';

const About = () => {
  const promises = [
    {
      icon: Shield,
      title: "Vetted, professional cleaners",
      description: "Every team member is thoroughly background-checked and trained to our high standards."
    },
    {
      icon: Heart,
      title: "Eco-friendly products safe for kids & pets",
      description: "We use only non-toxic, environmentally conscious cleaning products."
    },
    {
      icon: Users,
      title: "Flexible scheduling",
      description: "We work around your schedule with convenient booking times."
    },
    {
      icon: CheckCircle,
      title: "100% satisfaction guarantee",
      description: "If you're not completely satisfied, we'll make it right at no additional cost."
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
              More Than Cleaning — A Promise of{' '}
              <span style={{ color: 'var(--primary)' }}>Perfection</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-dark)' }}>
              Opera Cleaning Service isn't just about removing dust and dirt — we're about creating spaces 
              that feel fresh, healthy, and cared for. Our team of experienced cleaners is trained to deliver 
              more than a service: we deliver peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-12">
              {/* Our Mission */}
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--neutral-dark)' }}>Our Mission</h2>
                <div className="w-16 h-1 mb-6" style={{ backgroundColor: 'var(--accent-green)' }}></div>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-dark)' }}>
                  To provide professional, eco-friendly, and affordable cleaning solutions that give our clients 
                  more free time, comfort, and confidence in their spaces.
                </p>
              </div>

              {/* Our Story */}
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--neutral-dark)' }}>Our Story</h2>
                <div className="w-16 h-1 mb-6" style={{ backgroundColor: 'var(--accent-green)' }}></div>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-dark)' }}>
                  Founded with the belief that cleaning should be as harmonious as an opera performance, we bring 
                  precision, grace, and dedication into every home and office we serve. Our reputation is built on 
                  reliability, transparency, and a customer-first approach.
                </p>
              </div>

              {/* Our Promise */}
              <div>
                <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--neutral-dark)' }}>Our Promise</h2>
                <div className="space-y-6">
                  {promises.map((promise, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: 'rgba(36, 183, 108, 0.1)' }}>
                        <promise.icon className="h-6 w-6" style={{ color: 'var(--accent-green)' }} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2" style={{ color: 'var(--neutral-dark)' }}>
                          ✅ {promise.title}
                        </h4>
                        <p style={{ color: 'var(--text-dark)' }}>{promise.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="space-y-8">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={premiumOfficeImage} 
                  alt="Opera Cleaning Service - Professional team delivering premium cleaning"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">Professional Excellence</h4>
                  <p className="text-white/90">Trusted by 500+ satisfied clients across the region</p>
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 service-card">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--primary)' }}>500+</div>
                  <div className="text-sm" style={{ color: 'var(--text-dark)' }}>Happy Customers</div>
                </div>
                <div className="text-center p-6 service-card">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-green)' }}>5+</div>
                  <div className="text-sm" style={{ color: 'var(--text-dark)' }}>Years Experience</div>
                </div>
                <div className="text-center p-6 service-card">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--primary)' }}>100%</div>
                  <div className="text-sm" style={{ color: 'var(--text-dark)' }}>Eco-Friendly</div>
                </div>
                <div className="text-center p-6 service-card">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--secondary)' }}>24/7</div>
                  <div className="text-sm" style={{ color: 'var(--text-dark)' }}>Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="service-card text-center p-12">
            <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--neutral-dark)' }}>
              Ready to Experience Opera-Level Cleaning?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-dark)' }}>
              Join hundreds of satisfied customers who trust us to keep their spaces pristine. 
              Get your free quote today and see the difference quality makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/61497113976"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Book Now - WhatsApp
              </a>
              <a
                href="tel:+61497113976"
                className="btn-outline inline-flex items-center justify-center"
              >
                Call for Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;