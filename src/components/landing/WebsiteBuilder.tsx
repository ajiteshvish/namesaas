import { motion } from 'framer-motion';
import { Globe, Search, Image, MessageSquare, FileText, Smartphone, Check } from 'lucide-react';

const features = [
  { icon: Search, label: 'SEO optimized', description: 'Built for search engines from the ground up' },
  { icon: Globe, label: 'Auto updating', description: 'Content stays fresh without manual work' },
  { icon: MessageSquare, label: 'Reviews integration', description: 'Latest reviews displayed automatically' },
  { icon: Image, label: 'Gallery', description: 'Showcase your work beautifully' },
  { icon: FileText, label: 'Blog ready', description: 'AI-written articles that rank' },
  { icon: Smartphone, label: 'Mobile-first', description: 'Perfect on every device' },
];

export function WebsiteBuilder() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 section-gradient opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Dynamic <span className="gradient-text">website builder</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A beautiful, SEO-optimized website that updates itself. 
            Custom domains and subdomains ready for global reach.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Website Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-4 border border-border/50 shadow-2xl">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 ml-2">
                  <div className="bg-secondary rounded-lg px-4 py-2 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">yourbusiness.com</span>
                  </div>
                </div>
              </div>

              {/* Website Content */}
              <div className="bg-secondary/50 rounded-xl overflow-hidden">
                {/* Hero */}
                <div className="h-32 bg-gradient-to-r from-primary/30 to-cyan/30 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                  >
                    <h4 className="text-lg font-bold text-foreground mb-1">Your Business Name</h4>
                    <p className="text-xs text-muted-foreground">Serving customers since 2015</p>
                  </motion.div>
                </div>

                {/* Content Grid */}
                <div className="p-4 grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="aspect-square bg-muted rounded-lg"
                    />
                  ))}
                </div>

                {/* Reviews Section */}
                <div className="px-4 pb-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="bg-muted rounded-lg p-3"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-secondary" />
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <div className="h-2 bg-secondary rounded w-3/4 mb-1" />
                    <div className="h-2 bg-secondary rounded w-1/2" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground mb-1">{feature.label}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Global Ready Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/30 flex items-center gap-4"
            >
              <Globe className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Global Ready</p>
                <p className="text-xs text-muted-foreground">Custom domains + subdomains supported worldwide</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
