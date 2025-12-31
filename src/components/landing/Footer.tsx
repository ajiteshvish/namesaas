import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const footerSections = {
  services: {
    title: 'OUR SERVICES',
    links: [
      { label: 'AI Agents', href: '#ai-agents' },
      { label: 'Enterprise Software', href: '#enterprise-software' },
      { label: 'Ecommerce', href: '#ecommerce' },
      { label: 'MVP/Custom Software', href: '#mvp-custom' },
      { label: 'Websites', href: '#websites' },
      { label: 'Internal/Business Tools', href: '#business-tools' },
    ]
  },
  industry: {
    title: 'INDUSTRY',
    links: [
      { label: 'Healthcare', href: '#healthcare' },
      { label: 'Logistics', href: '#logistics' },
      { label: 'Ecommerce', href: '#ecommerce-industry' },
      { label: 'Real Estate', href: '#real-estate' },
      { label: 'Retail', href: '#retail' },
      { label: 'Manufacturing', href: '#manufacturing' },
      { label: 'AI/ML, Deeptech, IoT etc', href: '#ai-ml' },
    ]
  },
  about: {
    title: 'ABOUT US',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Career', href: '#career' },
      { label: 'Projects', href: '#projects' },
      { label: 'Blogs', href: '#blogs' },
    ]
  },
  presence: {
    title: 'OUR PRESENCE',
    links: [
      { label: 'Clutch (5/5 Rating Placeholder)', href: '#clutch' },
      { label: 'GoodFirms', href: '#goodfirms' },
      { label: 'awwwards', href: '#awwwards' },
      { label: 'Behance', href: '#behance' },
      { label: 'Dribbble', href: '#dribbble' },
    ]
  }
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              {/* SARALONE Logo */}
              <div className="mb-6">
                <img
                  src="/site.ico"
                  alt="SARALONE Logo"
                  className="h-8 w-auto hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              </div>

              {/* Address */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">INDIA</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  F-1, C-09, KLIC, Bhopal,<br />
                  Madhya Pradesh,<br />
                  462023, India
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">7771880677</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Saraloneoffice@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-bold text-soft-blue mb-6">{footerSections.services.title}</h4>
            <ul className="space-y-3">
              {footerSections.services.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-soft-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industry Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-bold text-soft-blue mb-6">{footerSections.industry.title}</h4>
            <ul className="space-y-3">
              {footerSections.industry.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-soft-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm font-bold text-soft-blue mb-6">{footerSections.about.title}</h4>
            <ul className="space-y-3">
              {footerSections.about.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-soft-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Presence Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-sm font-bold text-soft-blue mb-6">{footerSections.presence.title}</h4>
            <ul className="space-y-3">
              {footerSections.presence.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-soft-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-200"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <a
              href="#terms"
              className="text-sm text-muted-foreground hover:text-soft-blue transition-colors"
            >
              Term & Conditions
            </a>
            <a
              href="#privacy"
              className="text-sm text-muted-foreground hover:text-soft-blue transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 SaralOne All Rights Reserved
            </p>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/7771880677"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}