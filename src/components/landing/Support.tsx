import { motion } from 'framer-motion';
import { Mail, LayoutDashboard, BookOpen, Clock } from 'lucide-react';

const supportChannels = [
  {
    icon: Mail,
    title: 'Email support',
    description: 'Get help directly from our team via email.',
    detail: 'support@saralone.com',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard support',
    description: 'In-app help center with instant answers.',
    detail: 'Built into your dashboard',
  },
  {
    icon: BookOpen,
    title: 'Knowledge base',
    description: 'Comprehensive guides and tutorials.',
    detail: '100+ articles',
  },
  {
    icon: Clock,
    title: 'Quick responses',
    description: 'We respond fast because your time matters.',
    detail: '< 24 hour response',
  },
];

export function Support() {
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
            Real <span className="gradient-text">support</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here when you need us. Multiple ways to get help, whenever you need it.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <channel.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{channel.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{channel.description}</p>
              <p className="text-xs text-primary font-medium">{channel.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
