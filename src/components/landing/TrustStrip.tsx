import { motion } from 'framer-motion';
import { Shield, Globe, Sparkles, Building2 } from 'lucide-react';

const trustItems = [
  { icon: Shield, label: 'Safe & secure' },
  { icon: Globe, label: 'Works globally' },
  { icon: Sparkles, label: 'AI-powered optimization' },
  { icon: Building2, label: 'Built for local businesses' },
];

export function TrustStrip() {
  return (
    <section className="py-12 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
