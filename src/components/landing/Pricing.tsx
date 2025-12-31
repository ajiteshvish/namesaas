import { motion } from 'framer-motion';
import { Check, Globe, CreditCard, Star, Users, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// India Business Owner Plans
const indiaBusinessPlans = [
  {
    name: 'Business Owner Premium',
    model: 'Done-For-You',
    price: '₹10,000',
    period: '/ GMB',
    referral: '20% / Special Models',
    popular: true,
  },
  {
    name: 'Business Owner',
    model: 'Self-Serve SaaS',
    price: '₹6,000',
    period: '/ GMB',
    referral: '20% / Special Models',
    popular: false,
  },
];

// Global Business Owner Plans
const globalBusinessPlans = [
  {
    name: 'Business Owner',
    model: 'Done-For-You',
    price: '$199',
    period: '/ GMB',
    referral: '20% / Special Models',
    popular: false,
  },
  {
    name: 'Premium Business Owner',
    model: 'Self-Serve SaaS',
    price: '$129',
    period: '/ GMB',
    referral: '20% / Special Models',
    popular: true,
  },
];

// Agency Plans
const agencyPlans = [
  {
    name: 'Agency Starter',
    gmbAccounts: '20 GMB',
    price: '₹24,000',
    referral: 'Special Models',
    popular: false,
  },
  {
    name: 'Agency Growth',
    gmbAccounts: '50 GMB',
    price: '₹36,000',
    referral: 'Flat 10%',
    popular: true,
  },
  {
    name: 'Agency Scale',
    gmbAccounts: '100 GMB',
    price: '₹60,000',
    referral: 'Flat 10%',
    popular: false,
  },
];

// Special Referral Models
const referralModels = [
  {
    model: 'Non-Commitment',
    commitment: '₹0',
    commission: '20%',
  },
  {
    model: 'Commitment',
    commitment: '₹1,00,000',
    commission: '35%',
  },
  {
    model: 'High Commitment',
    commitment: '₹3,00,000',
    commission: '50%',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-light/20 to-purple-light/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-soft-blue/20 mb-6 shadow-soft">
            <img
              src="/site.ico"
              alt="SARALONE"
              className="w-6 h-6 hover:opacity-90 transition-opacity"
              loading="lazy"
            />
            <span className="text-sm font-medium text-muted-foreground">SARALONE</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Plans & <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            AI-powered Google Business growth platform for Businesses & Agencies
          </p>

          {/* Global Payment Badge */}
          <div className="inline-flex items-center gap-3 glass rounded-full px-4 py-2 border border-border/50">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Available in India & Global markets</span>
            <CreditCard className="w-4 h-4 text-muted-foreground" />
          </div>
        </motion.div>

        {/* India Business Owner Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-6 h-6 text-soft-blue" />
            <h3 className="text-2xl font-bold text-foreground">India – Business Owner Plans</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <thead className="bg-gradient-to-r from-soft-blue/10 to-light-purple/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-soft-blue">Plan</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-soft-blue">Model</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-soft-blue">Price (Yearly)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-soft-blue">Referral</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-soft-blue">Action</th>
                </tr>
              </thead>
              <tbody>
                {indiaBusinessPlans.map((plan, index) => (
                  <tr key={plan.name} className={`border-t border-gray-100 ${plan.popular ? 'bg-soft-blue/5' : ''}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{plan.name}</span>
                        {plan.popular && (
                          <span className="px-2 py-1 text-xs font-medium bg-soft-blue text-white rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{plan.model}</td>
                    <td className="px-6 py-4">
                      <span className="text-lg font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-muted-foreground">20% / </span>
                      <span className="text-sm font-medium text-orange-600">Special Models</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Button variant="hero" size="sm" asChild>
                        <a href="https://login.saralone.com/">Get Started</a>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Global Business Owner Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-soft-blue" />
            <h3 className="text-2xl font-bold text-foreground">Global – Business Owner Plans</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <thead className="bg-gradient-to-r from-soft-blue/10 to-light-purple/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-soft-blue">Plan</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-soft-blue">Model</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-soft-blue">Price (Yearly)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-soft-blue">Referral</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-soft-blue">Action</th>
                </tr>
              </thead>
              <tbody>
                {globalBusinessPlans.map((plan, index) => (
                  <tr key={plan.name} className={`border-t border-gray-100 ${plan.popular ? 'bg-soft-blue/5' : ''}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{plan.name}</span>
                        {plan.popular && (
                          <span className="px-2 py-1 text-xs font-medium bg-soft-blue text-white rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{plan.model}</td>
                    <td className="px-6 py-4">
                      <span className="text-lg font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-muted-foreground">20% / </span>
                      <span className="text-sm font-medium text-orange-600">Special Models</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Button variant="hero" size="sm" asChild>
                        <a href="https://login.saralone.com/">Get Started</a>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Agency Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-soft-blue" />
            <h3 className="text-2xl font-bold text-foreground">Agency – Bulk GMB Plans (India)</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <thead className="bg-gradient-to-r from-soft-blue/10 to-light-purple/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-soft-blue">Agency Plan</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-soft-blue">GMB Accounts</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-soft-blue">Price (Yearly)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-soft-blue">Referral</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-soft-blue">Action</th>
                </tr>
              </thead>
              <tbody>
                {agencyPlans.map((plan, index) => (
                  <tr key={plan.name} className={`border-t border-gray-100 ${plan.popular ? 'bg-soft-blue/5' : ''}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{plan.name}</span>
                        {plan.popular && (
                          <span className="px-2 py-1 text-xs font-medium bg-soft-blue text-white rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-foreground">{plan.gmbAccounts}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-lg font-bold text-foreground">{plan.price}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-orange-600">{plan.referral}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Button variant="hero" size="sm" asChild>
                        <a href="https://login.saralone.com/">Get Started</a>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Special Referral Models */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-soft-blue" />
            <h3 className="text-2xl font-bold text-foreground">Agency Starter – Special Referral Models</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {referralModels.map((model, index) => (
              <motion.div
                key={model.model}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  <h4 className="text-lg font-bold text-foreground mb-4">{model.model}</h4>
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground mb-2">Commitment</div>
                    <div className="text-2xl font-bold text-soft-blue">{model.commitment}</div>
                  </div>
                  <div className="mb-6">
                    <div className="text-sm text-muted-foreground mb-2">Commission</div>
                    <div className="text-3xl font-bold text-green-600">{model.commission}</div>
                  </div>
                  <Button variant="heroOutline" size="sm" className="w-full" asChild>
                    <a href="https://login.saralone.com/">Apply Now</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Note:</strong> Special referral models are applicable only for the Agency Starter (20 GMB) plan.
              All pricing is fixed. India & Global plans are separate.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-soft-blue/10 to-light-purple/10 rounded-2xl p-8 border border-soft-blue/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to grow your business with AI?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of businesses and agencies already using SARALONE to automate their local SEO and grow their online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://login.saralone.com/">Start Free Trial</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="mailto:support@saralone.com">Contact Sales</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
