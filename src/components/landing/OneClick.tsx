import { motion } from 'framer-motion';
import { Sparkles, Send, MousePointer } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function OneClick() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">One-click</span> optimization
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The simplest workflow you'll ever use. Generate with AI, then publish.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 border border-border/50 relative group hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg glow">
                1
              </div>
              
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center"
                >
                  <Sparkles className="w-10 h-10 text-primary" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Generate with AI</h3>
              <p className="text-muted-foreground text-center mb-6">
                Click once. NAME analyzes your business and creates optimized content instantly.
              </p>

              <div className="flex justify-center">
                <Button variant="hero" size="lg" className="group-hover:glow">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate
                </Button>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-8 border border-border/50 relative group hover:border-cyan/30 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-cyan flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                2
              </div>
              
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 rounded-2xl bg-cyan/20 flex items-center justify-center"
                >
                  <Send className="w-10 h-10 text-cyan" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Publish</h3>
              <p className="text-muted-foreground text-center mb-6">
                Review and click publish. Your content goes live across all platforms.
              </p>

              <div className="flex justify-center">
                <Button variant="heroOutline" size="lg" className="border-cyan/50 hover:border-cyan hover:bg-cyan/10">
                  <Send className="w-5 h-5 mr-2" />
                  Publish
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Visual Connection */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center mt-12"
          >
            <div className="flex items-center gap-4 glass rounded-full px-6 py-3 border border-border/50">
              <MousePointer className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">That's it. Two clicks to better rankings.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
