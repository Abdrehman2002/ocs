import { 
  Home, 
  Building2, 
  Wrench, 
  Plus,
  MapPin,
  Sparkles,
  Zap,
  Bed,
  Sofa,
  Bath,
  ChefHat,
  Briefcase,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Dumbbell,
  Heart,
  HardHat,
  Square,
  Shirt,
  Archive,
  Warehouse,
  Wind
} from 'lucide-react';

const ServicesSection = () => {
  const serviceCategories = [
    {
      category: "Residential Cleaning",
      icon: Home,
      color: "primary",
      services: [
        {
          title: "Regular Home Cleaning",
          description: "Ongoing cleaning tailored to your lifestyle.",
          icon: Home
        },
        {
          title: "Deep Cleaning / Spring Cleaning",
          description: "A complete top-to-bottom refresh of your home.",
          icon: Sparkles
        },
        {
          title: "Move-In / Move-Out Cleaning (End of Lease Cleaning)",
          description: "Guaranteed spotless for new tenants and bond return.",
          icon: Home
        },
        {
          title: "Carpet & Upholstery Cleaning",
          description: "Steam cleaning for fresh, allergen-free fabrics.",
          icon: Sofa
        },
        {
          title: "Mattress Cleaning & Sanitization",
          description: "Remove dust mites and improve sleep quality.",
          icon: Bed
        },
        {
          title: "Window & Glass Cleaning",
          description: "Streak-free shine for every view.",
          icon: Square
        },
        {
          title: "Kitchen Deep Cleaning",
          description: "Ovens, appliances, and surfaces sparkling clean.",
          icon: ChefHat
        },
        {
          title: "Bathroom & Tile Cleaning",
          description: "Mould, grout, and deep sanitization handled.",
          icon: Bath
        }
      ]
    },
    {
      category: "Commercial Cleaning",
      icon: Building2,
      color: "accent-green",
      services: [
        {
          title: "Office Cleaning",
          description: "Flexible schedules for clean, productive workplaces.",
          icon: Briefcase
        },
        {
          title: "Retail Store Cleaning",
          description: "Presentable and hygienic shops every day.",
          icon: ShoppingBag
        },
        {
          title: "Medical & Dental Clinic Cleaning",
          description: "Eco-safe sanitization for sensitive environments.",
          icon: Stethoscope
        },
        {
          title: "School & Childcare Cleaning",
          description: "Safe, spotless spaces for kids to learn.",
          icon: GraduationCap
        },
        {
          title: "Gym & Fitness Center Cleaning",
          description: "Sweat-free, disinfected workout areas.",
          icon: Dumbbell
        },
        {
          title: "Aged Care & Disability Facility Cleaning",
          description: "Extra care and hygiene where it matters most.",
          icon: Heart
        }
      ]
    },
    {
      category: "Specialized Services",
      icon: Wrench,
      color: "secondary",
      services: [
        {
          title: "End of Lease / Bond Back Cleaning",
          description: "100% satisfaction guarantee.",
          icon: Home
        },
        {
          title: "Builders & Post-Construction Cleaning",
          description: "Remove dust, debris, and make new builds shine.",
          icon: HardHat
        },
        {
          title: "Pressure Washing",
          description: "Driveways, patios, and outdoor areas cleaned with power.",
          icon: Zap
        },
        {
          title: "Window Washing (High Reach Available)",
          description: "For homes, offices, and commercial spaces.",
          icon: Square
        },
        {
          title: "Carpet Steam Cleaning",
          description: "Professional-grade stain and dirt removal.",
          icon: Square
        },
        {
          title: "Upholstery & Leather Cleaning",
          description: "Gentle but effective treatments for furniture.",
          icon: Sofa
        },
        {
          title: "Floor Polishing & Maintenance",
          description: "Keep surfaces smooth and shining.",
          icon: Sparkles
        }
      ]
    },
    {
      category: "Add-On Services",
      icon: Plus,
      color: "primary",
      services: [
        {
          title: "Fridge & Oven Cleaning",
          description: "Get rid of grease and food residue.",
          icon: ChefHat
        },
        {
          title: "Pantry / Cupboard Decluttering",
          description: "Organized and spotless storage.",
          icon: Archive
        },
        {
          title: "Garage Cleaning",
          description: "Fresh, functional garage space.",
          icon: Warehouse
        },
        {
          title: "Balcony & Outdoor Cleaning",
          description: "Relax in a spotless outdoor area.",
          icon: Wind
        },
        {
          title: "Laundry & Ironing (On Request)",
          description: "Extra convenience for busy households.",
          icon: Shirt
        }
      ]
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
    <section id="services" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10">
          <Sparkles size={40} style={{ color: 'var(--primary)' }} />
        </div>
        <div className="absolute bottom-20 right-20">
          <Sparkles size={32} style={{ color: 'var(--accent-green)' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
              Our Comprehensive Cleaning Services
            </h2>
            <div className="h-1 w-32 mx-auto mb-6" style={{ backgroundColor: 'var(--accent-green)' }}></div>
          </div>
          <p className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-dark)' }}>
            From residential deep cleans to specialized commercial services, we deliver premium cleaning 
            solutions with professional expertise, eco-friendly products, and unmatched attention to detail.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center space-x-4 mb-6">
                  <div 
                    className="p-4 rounded-2xl"
                    style={{ backgroundColor: `${getColorValue(category.color)}15` }}
                  >
                    <category.icon 
                      className="h-10 w-10" 
                      style={{ color: getColorValue(category.color) }} 
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: 'var(--neutral-dark)' }}>
                    {category.category}
                  </h3>
                </div>
                <div className="h-0.5 w-24 mx-auto" style={{ backgroundColor: getColorValue(category.color) }}></div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  >
                    {/* Service Icon */}
                    <div className="text-center mb-4">
                      <div 
                        className="inline-flex p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${getColorValue(category.color)}10` }}
                      >
                        <service.icon 
                          className="h-6 w-6" 
                          style={{ color: getColorValue(category.color) }} 
                        />
                      </div>
                    </div>
                    
                    {/* Service Title */}
                    <h4 className="text-base font-bold mb-3 text-center leading-tight" style={{ color: 'var(--neutral-dark)' }}>
                      {service.title}
                    </h4>
                    
                    {/* Service Description */}
                    <p className="text-sm leading-relaxed text-center" style={{ color: 'rgba(0, 60, 132, 0.8)' }}>
                      {service.description}
                    </p>

                    {/* Hover Divider */}
                    <div className="mt-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: getColorValue(category.color) }}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Service Area Notice */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full" style={{ backgroundColor: 'rgba(0, 180, 213, 0.1)' }}>
            <MapPin className="h-5 w-5" style={{ color: 'var(--primary)' }} />
            <span className="text-base font-medium" style={{ color: 'var(--neutral-dark)' }}>
              We proudly provide cleaning services <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>all across Melbourne.</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;