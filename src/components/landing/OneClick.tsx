import { motion } from 'framer-motion';
import { Sparkles, Send, MousePointer } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function OneClick() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-neutral-50 to-blue-light/10">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            <span className="gradient-text">One-click</span> optimization
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The simplest workflow you'll ever use. Generate with AI, then publish.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Step 1 - Animated Interface */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="card-soft p-8 hover-lift relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-soft-blue to-light-purple flex items-center justify-center text-white font-bold shadow-lg text-lg">
                  1
                </div>

                {/* Animated Interface Mockup */}
                <div className="bg-white rounded-2xl p-6 border border-neutral-200 mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>

                  <div className="text-center mb-6">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-soft-blue/20 to-light-purple/20 flex items-center justify-center mx-auto mb-4 border border-soft-blue/20"
                    >
                      <Sparkles className="w-8 h-8 text-soft-blue" />
                    </motion.div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">AI Content Generator</h4>
                    <p className="text-sm text-muted-foreground mb-4">Analyzing your business...</p>
                  </div>

                  {/* Progress Animation */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                        <motion.div
                          animate={{ scale: [0, 1] }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                          className="w-2 h-2 rounded-full bg-white"
                        />
                      </div>
                      <span className="text-sm text-foreground">Business profile analyzed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ backgroundColor: ["#e5e7eb", "#10b981"] }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                        className="w-4 h-4 rounded-full flex items-center justify-center"
                      >
                        <motion.div
                          animate={{ scale: [0, 1] }}
                          transition={{ delay: 1.2, duration: 0.3 }}
                          className="w-2 h-2 rounded-full bg-white"
                        />
                      </motion.div>
                      <span className="text-sm text-foreground">Keywords researched</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ backgroundColor: ["#e5e7eb", "#10b981"] }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="w-4 h-4 rounded-full flex items-center justify-center"
                      >
                        <motion.div
                          animate={{ scale: [0, 1] }}
                          transition={{ delay: 1.7, duration: 0.3 }}
                          className="w-2 h-2 rounded-full bg-white"
                        />
                      </motion.div>
                      <span className="text-sm text-foreground">Content generated</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Generate with AI</h3>
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  Click once. NAME analyzes your business and creates optimized content instantly.
                </p>

                <div className="flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="hero" size="lg" className="shadow-lg">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 - Animated Publishing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="card-soft p-8 hover-lift relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-light-purple to-soft-blue flex items-center justify-center text-white font-bold shadow-lg text-lg">
                  2
                </div>

                {/* Animated Publishing Interface */}
                <div className="bg-white rounded-2xl p-6 border border-neutral-200 mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-light-purple/20 to-soft-blue/20 flex items-center justify-center mx-auto mb-4 border border-light-purple/20">
                      <Send className="w-8 h-8 text-light-purple" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Content Publisher</h4>
                    <p className="text-sm text-muted-foreground mb-4">Ready to publish across platforms</p>
                  </div>

                  {/* Platform Icons */}
                  <div className="grid grid-cols-3 gap-3">
                    {['Google', 'Website', 'Social'].map((platform, i) => (
                      <motion.div
                        key={platform}
                        initial={{ opacity: 0.3, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.2 }}
                        className="bg-neutral-50 rounded-xl p-3 text-center border border-neutral-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-light-purple/10 to-soft-blue/10 mx-auto mb-2 flex items-center justify-center">
                          <div className="w-4 h-4 rounded bg-light-purple/30" />
                        </div>
                        <span className="text-xs text-muted-foreground">{platform}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Publish</h3>
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  Review and click publish. Your content goes live across all platforms.
                </p>

                <div className="flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="heroOutline" size="lg" className="border-light-purple/50 hover:border-light-purple hover:bg-light-purple/10 shadow-lg">
                      <Send className="w-5 h-5 mr-2" />
                      Publish
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Connection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center mt-16"
          >
            <div className="flex items-center gap-4 bg-white rounded-full px-8 py-4 border border-neutral-200 shadow-soft">
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <MousePointer className="w-6 h-6 text-soft-blue" />
              </motion.div>
              <span className="text-muted-foreground font-medium">That's it. Two clicks to better rankings.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
