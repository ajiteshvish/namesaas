import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { SocialScheduler } from '@/components/ui/social-scheduler';

const scheduledPosts = [
  { day: 'Mon', title: 'Weekly Special Announcement', status: 'published', type: 'Promotion' },
  { day: 'Wed', title: 'Behind the Scenes', status: 'scheduled', type: 'Engagement' },
  { day: 'Fri', title: 'Customer Spotlight', status: 'scheduled', type: 'Social Proof' },
  { day: 'Sun', title: 'Weekend Hours Update', status: 'draft', type: 'Info' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'published':
      return 'bg-green-500';
    case 'scheduled':
      return 'bg-primary';
    case 'draft':
      return 'bg-muted';
    default:
      return 'bg-muted';
  }
};

export function PostScheduler() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-neutral-50 to-purple-light/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              AI <span className="gradient-text">post scheduler</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Schedule content for months ahead. Set it once, and SARALONE keeps your
              business active and engaging without any effort from you.
            </p>

            <div className="space-y-6 mb-10">
              {[
                'Automatically generates relevant content',
                'Posts at optimal times for engagement',
                'Covers all key content types',
                'Adapts to seasonal trends and events',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-soft-blue/10 flex items-center justify-center border border-soft-blue/20">
                    <Check className="w-5 h-5 text-soft-blue" />
                  </div>
                  <span className="text-muted-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-soft-blue/10 to-light-purple/10 rounded-2xl p-6 border border-soft-blue/20 inline-flex items-center gap-4"
            >
              <Sparkles className="w-6 h-6 text-soft-blue" />
              <span className="text-muted-foreground font-medium">
                "Set it once. SARALONE keeps you active."
              </span>
            </motion.div>
          </motion.div>

          {/* Animated Social Scheduler Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <SocialScheduler />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
