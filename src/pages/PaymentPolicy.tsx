import { 
  CreditCard, 
  Clock, 
  Shield, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  MessageCircle,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PaymentPolicy = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: 'var(--neutral-dark)' }}>
              Payment &{' '}
              <span style={{ color: 'var(--primary)' }}>Cancellation Policy</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-dark)' }}>
              Clear, transparent policies designed to protect both our clients and our team. 
              No surprises, just honest and fair terms.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="service-card p-8 lg:p-12 mb-16">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 180, 213, 0.1)' }}>
                <CreditCard className="h-8 w-8" style={{ color: 'var(--primary)' }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: 'var(--neutral-dark)' }}>Payment Methods</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 rounded-xl mb-4 inline-flex" style={{ backgroundColor: 'rgba(36, 183, 108, 0.1)' }}>
                  <CreditCard className="h-6 w-6" style={{ color: 'var(--accent-green)' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--neutral-dark)' }}>Cards & Digital</h4>
                <ul className="space-y-1 text-sm" style={{ color: 'var(--text-dark)' }}>
                  <li>Debit cards</li>
                  <li>Credit cards</li>
                  <li>Bank transfers</li>
                  <li>Digital payments</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="p-4 rounded-xl mb-4 inline-flex" style={{ backgroundColor: 'rgba(36, 183, 108, 0.1)' }}>
                  <Clock className="h-6 w-6" style={{ color: 'var(--accent-green)' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--neutral-dark)' }}>Automatic Billing</h4>
                <ul className="space-y-1 text-sm" style={{ color: 'var(--text-dark)' }}>
                  <li>Recurring services</li>
                  <li>Scheduled payments</li>
                  <li>Invoice reminders</li>
                  <li>Payment notifications</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="p-4 rounded-xl mb-4 inline-flex" style={{ backgroundColor: 'rgba(36, 183, 108, 0.1)' }}>
                  <Shield className="h-6 w-6" style={{ color: 'var(--accent-green)' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--neutral-dark)' }}>Payment Terms</h4>
                <ul className="space-y-1 text-sm" style={{ color: 'var(--text-dark)' }}>
                  <li>Cash accepted</li>
                  <li>Due on service day</li>
                  <li>Special arrangements</li>
                  <li>Secure processing</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: 'rgba(0, 180, 213, 0.05)', border: '1px solid var(--divider)' }}>
              <p className="text-center font-medium" style={{ color: 'var(--text-dark)' }}>
                <strong>Payment is due on the day of service</strong> unless otherwise arranged in advance. 
                We accept all major payment methods for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="service-card p-8 lg:p-12 mb-16">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(105, 48, 142, 0.1)' }}>
                <Clock className="h-8 w-8" style={{ color: 'var(--secondary)' }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: 'var(--neutral-dark)' }}>Cancellation Policy</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'rgba(36, 183, 108, 0.05)' }}>
                <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--accent-green)' }} />
                <h4 className="font-bold text-lg mb-2" style={{ color: 'var(--accent-green)' }}>No Fee</h4>
                <p className="font-semibold mb-2" style={{ color: 'var(--neutral-dark)' }}>Cancel ≥24 hours in advance</p>
                <p className="text-sm" style={{ color: 'var(--text-dark)' }}>
                  Full cancellation with no charges when you give us 24+ hours notice.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'rgba(255, 165, 0, 0.05)' }}>
                <AlertTriangle className="h-12 w-12 mx-auto mb-4" style={{ color: '#ff9500' }} />
                <h4 className="font-bold text-lg mb-2" style={{ color: '#ff9500' }}>50% Fee</h4>
                <p className="font-semibold mb-2" style={{ color: 'var(--neutral-dark)' }}>Cancel &lt;24 hours</p>
                <p className="text-sm" style={{ color: 'var(--text-dark)' }}>
                  Late cancellations incur a 50% service fee to cover scheduling and preparation costs.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)' }}>
                <XCircle className="h-12 w-12 mx-auto mb-4" style={{ color: '#ef4444' }} />
                <h4 className="font-bold text-lg mb-2" style={{ color: '#ef4444' }}>100% Fee</h4>
                <p className="font-semibold mb-2" style={{ color: 'var(--neutral-dark)' }}>No-shows</p>
                <p className="text-sm" style={{ color: 'var(--text-dark)' }}>
                  Full service fee applies when clients are unavailable at the scheduled time.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: 'rgba(36, 183, 108, 0.05)', border: '1px solid var(--accent-green)' }}>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: 'var(--accent-green)' }} />
                <div>
                  <p className="font-medium mb-2" style={{ color: 'var(--neutral-dark)' }}>Our Commitment to You</p>
                  <p className="text-sm" style={{ color: 'var(--text-dark)' }}>
                    If Opera Cleaning Specialists needs to reschedule, we'll notify you ASAP and offer alternative times 
                    that work for your schedule at no additional cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refunds & Guarantee */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="service-card p-8 lg:p-12">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(36, 183, 108, 0.1)' }}>
                <Shield className="h-8 w-8" style={{ color: 'var(--accent-green)' }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: 'var(--neutral-dark)' }}>Refunds & Guarantee</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4" style={{ color: 'var(--neutral-dark)' }}>
                  100% Satisfaction Guarantee
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--accent-green)' }} />
                    <span style={{ color: 'var(--text-dark)' }}>
                      <strong>Unsatisfied?</strong> Contact us within 24 hours for a free re-clean
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--accent-green)' }} />
                    <span style={{ color: 'var(--text-dark)' }}>
                      <strong>Quality issues?</strong> We'll return to make it right at no charge
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--accent-green)' }} />
                    <span style={{ color: 'var(--text-dark)' }}>
                      <strong>Your satisfaction</strong> is our top priority and guarantee
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4" style={{ color: 'var(--neutral-dark)' }}>
                  Refund Policy
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#ff9500' }} />
                    <span style={{ color: 'var(--text-dark)' }}>
                      <strong>Pre-service:</strong> Full refunds available only before work begins
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--accent-green)' }} />
                    <span style={{ color: 'var(--text-dark)' }}>
                      <strong>Post-service:</strong> Free re-clean offered instead of monetary refund
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--accent-green)' }} />
                    <span style={{ color: 'var(--text-dark)' }}>
                      <strong>Special cases:</strong> Handled individually with customer care
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="service-card text-center p-12">
            <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--neutral-dark)' }}>
              Questions About Our Policies?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-dark)' }}>
              We believe in transparency and want you to feel completely comfortable with our terms. 
              Contact us anytime to discuss our policies or your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Contact Us</span>
              </Link>
              <a
                href="tel:+61497113976"
                className="btn-outline inline-flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentPolicy;