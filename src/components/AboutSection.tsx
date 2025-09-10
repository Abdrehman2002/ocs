import { Shield, Award, Users, CheckCircle, Sparkles, Star } from 'lucide-react';
import premiumOfficeImage from '@/assets/premium-office-cleaning.jpg';
import logoFinal from '@/assets/logofinal.JPG';

const AboutSection = () => {
  const achievements = [
    { number: "500+", label: "Satisfied Clients", color: "primary" },
    { number: "5+", label: "Years Excellence", color: "accent-green" },
    { number: "100%", label: "Eco-Friendly", color: "secondary" },
    { number: "24/7", label: "Support Available", color: "primary" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Uncompromising Standards",
      description: "Every team member is rigorously vetted, extensively trained, and fully insured. We maintain the highest standards of professionalism and reliability.",
      color: "primary"
    },
    {
      icon: Award,
      title: "Precision & Excellence",
      description: "Like a conductor directing a symphony, we orchestrate every cleaning detail with meticulous care, ensuring flawless results that exceed industry standards.",
      color: "accent-green"
    },
    {
      icon: Users,
      title: "Premium Service Commitment",
      description: "Our dedication extends beyond cleaning - we create pristine environments that enhance your quality of life and business success.",
      color: "secondary"
    }
  ];

  const getColorValue = (colorName: string) => {
    switch (colorName) {
      case 'primary': return 'var(--primary)';
      case 'accent-green': return 'var(--accent-green)';
      case 'secondary': return 'var(--secondary)';
      default: return 'var(--primary)';
    }
  };

  return (
    <section id="about" className="py-16 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20">
          <Sparkles size={48} style={{ color: 'var(--primary)' }} />
        </div>
        <div className="absolute bottom-32 left-16">
          <Star size={36} style={{ color: 'var(--accent-green)' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side - Left */}
          <div className="space-y-10">
            {/* Header */}
            <div>
              <div className="inline-block">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-4" style={{ color: 'var(--primary)' }}>
                  About Opera Cleaning Specialists
                </h2>
                <div className="h-1 w-32 mb-6" style={{ backgroundColor: 'var(--accent-green)' }}></div>
              </div>
              <p className="text-base md:text-lg lg:text-xl font-medium mb-4" style={{ color: 'var(--secondary)' }}>
                Where Premium Meets Perfection
              </p>
              <div className="service-area-highlight mb-6">
                We proudly provide cleaning services <span className="highlight">all across Melbourne.</span>
              </div>
            </div>

            {/* Luxury About Text */}
            <div className="space-y-6">
              <div 
                className="p-6 rounded-2xl border-l-4 border-opacity-50"
                style={{ 
                  backgroundColor: 'rgba(0, 180, 213, 0.05)',
                  borderLeftColor: 'var(--primary)'
                }}
              >
                <p className="text-lg leading-relaxed font-medium" style={{ color: 'var(--text-dark)' }}>
                  Opera Cleaning Specialists redefines cleaning as a <strong>premium service</strong>. With precision, eco-friendly care, 
                  and an unwavering commitment to excellence, we transform every space into a masterpiece that shines 
                  like a performance on the world's grandest stages.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-dark)' }}>
                Our artisanal approach to cleaning combines cutting-edge techniques with time-honored attention to detail. 
                Each project is treated as a bespoke service, tailored to meet the exacting standards of discerning clients 
                who demand nothing less than perfection.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-dark)' }}>
                From luxury residences to prestigious commercial spaces, we deliver transformative results that elevate 
                your environment and enhance your lifestyle. Experience the difference that true craftsmanship makes.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold" style={{ color: 'var(--secondary)' }}>
                Our Premium Commitments
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start space-x-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                  >
                    <div 
                      className="p-3 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" 
                      style={{ backgroundColor: `${getColorValue(value.color)}15` }}
                    >
                      <value.icon className="h-7 w-7" style={{ color: getColorValue(value.color) }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--neutral-dark)' }}>
                        {value.title}
                      </h4>
                      <p className="leading-relaxed" style={{ color: 'var(--text-dark)' }}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="https://wa.me/61497113976"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ 
                  background: `linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)` 
                }}
              >
                <CheckCircle size={24} />
                <span>Get a Free Quote</span>
              </a>
            </div>
          </div>

          {/* Image & Stats Side - Right */}
          <div className="space-y-8">
            {/* Professional Image with Logo Overlay */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={premiumOfficeImage} 
                alt="Premium Opera Cleaning Specialists - Professional Excellence"
                className="responsive-img h-64 sm:h-80 md:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Logo Overlay */}
              <div className="absolute top-6 left-6">
                <img 
                  src={logoFinal} 
                  alt="Opera Cleaning Specialists Logo" 
                  className="h-12 w-auto opacity-90"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              
              {/* Bottom Text Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Premium Cleaning Excellence</h4>
                <p className="text-white/90 text-lg">Trusted by luxury homes and prestigious businesses</p>
                <div className="flex items-center space-x-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-white/90">5-Star Service</span>
                </div>
              </div>
            </div>
            
            {/* Achievement Stats - Premium Cards */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ 
                    background: `linear-gradient(145deg, #ffffff 0%, ${getColorValue(achievement.color)}05 100%)`,
                    border: `1px solid ${getColorValue(achievement.color)}20`
                  }}
                >
                  <div 
                    className="text-4xl font-bold mb-2" 
                    style={{ color: getColorValue(achievement.color) }}
                  >
                    {achievement.number}
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text-dark)' }}>
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Mission Statement */}
            <div 
              className="p-8 rounded-2xl shadow-lg relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, var(--accent-green) 0%, var(--primary) 100%)`,
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <Sparkles size={40} className="absolute top-4 right-6 text-white" />
                <Star size={32} className="absolute bottom-4 left-6 text-white" />
              </div>
              
              <div className="relative z-10 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                  <h3 className="text-xl font-bold">Our Mission</h3>
                </div>
                <p className="leading-relaxed text-white/95">
                  To elevate cleaning from routine maintenance to an art form, delivering transformative 
                  experiences that enhance the beauty, comfort, and prestige of every space we perfect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;