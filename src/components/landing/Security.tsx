import { motion } from 'framer-motion';
import { Shield, Lock, Server, Globe } from 'lucide-react';

const securityFeatures = [
  { icon: Shield, title: 'Secure infrastructure', description: 'Enterprise-grade security with encryption at rest and in transit.' },
  { icon: Lock, title: 'Data privacy first', description: 'Your data is yours. We never sell or share your information.' },
  { icon: Server, title: 'Built to scale', description: 'Reliable infrastructure that grows with your business.' },
  { icon: Globe, title: 'Global compliance', description: 'Compliant with GDPR, CCPA, and international regulations.' },
];

export function Security() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Security & <span className="gradient-text">stability</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Your trust is our priority. Built with security and privacy at the core.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="soft-card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
