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
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-purple-light/10 to-blue-light/10">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Dynamic <span className="gradient-text">website builder</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A beautiful, SEO-optimized website that updates itself.
            Custom domains and subdomains ready for global reach.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Animated Website Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="card-soft p-6 hover-lift">
              {/* Browser Chrome */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 ml-2">
                  <div className="bg-neutral-100 rounded-lg px-4 py-2 flex items-center gap-3">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground font-medium">yourbusiness.com</span>
                    <div className="w-4 h-4 rounded bg-green-100 flex items-center justify-center ml-auto">
                      <div className="w-2 h-2 rounded bg-green-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Website Content */}
              <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-soft">
                {/* Hero Section */}
                <div className="h-40 bg-gradient-to-br from-soft-blue/20 to-light-purple/20 flex items-center justify-center relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                  >
                    <h4 className="text-xl font-bold text-foreground mb-2">Your Business Name</h4>
                    <p className="text-sm text-muted-foreground">Serving customers since 2015</p>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-soft"
                  >
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-xs text-muted-foreground">Live</span>
                    </div>
                  </motion.div>
                </div>

                {/* Navigation */}
                <div className="px-6 py-4 border-b border-neutral-200">
                  <div className="flex gap-6">
                    {['Home', 'About', 'Services', 'Reviews', 'Contact'].map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className={`text-sm font-medium ${i === 0 ? 'text-soft-blue' : 'text-muted-foreground'}`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Content Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl flex items-center justify-center"
                      >
                        <Image className="w-6 h-6 text-muted-foreground" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Reviews Section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="bg-neutral-50 rounded-xl p-4 border border-neutral-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-soft-blue/20 to-light-purple/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-foreground">JD</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.0 + i * 0.1 }}
                            className="w-3 h-3 rounded-full bg-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="h-2 bg-neutral-200 rounded"
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        className="h-2 bg-neutral-200 rounded"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Update Notification */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-green-200"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Auto-Updated!</p>
                    <p className="text-xs text-muted-foreground">New review added</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating SEO Score */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-soft-blue/20"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-soft-blue/10 flex items-center justify-center">
                    <Search className="w-4 h-4 text-soft-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">SEO Score: 95</p>
                    <p className="text-xs text-muted-foreground">Optimized for search</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="card-soft p-6 hover-lift"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-soft-blue/10 to-light-purple/10 flex items-center justify-center mb-4 border border-soft-blue/20">
                    <feature.icon className="w-6 h-6 text-soft-blue" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{feature.label}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Global Ready Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="mt-8 p-6 bg-gradient-to-r from-soft-blue/10 to-light-purple/10 rounded-2xl border border-soft-blue/20 flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-soft-blue to-light-purple flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground mb-1">Global Ready</p>
                <p className="text-muted-foreground">Custom domains + subdomains supported worldwide</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}