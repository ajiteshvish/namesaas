import { motion } from 'framer-motion';
import { Heart, Shield, MessageSquare } from 'lucide-react';
import { ReviewsDashboard } from '@/components/ui/reviews-dashboard';

const reviewExamples = [
  {
    name: 'Sarah M.',
    rating: 5,
    review: 'Excellent coffee and amazing atmosphere! The baristas are so friendly.',
    reply: 'Thank you so much, Sarah! We\'re thrilled you enjoyed your visit. Our team takes pride in creating a welcoming space. See you again soon! ☕',
    date: '2 days ago',
  },
  {
    name: 'James R.',
    rating: 4,
    review: 'Great food but the wait was a bit long during lunch rush.',
    reply: 'Hi James, thank you for your honest feedback! We\'re working on improving our lunch service times. We appreciate your patience and hope to serve you faster next time!',
    date: '5 days ago',
  },
];

const features = [
  { icon: Heart, label: 'Authentic tone', description: 'Sounds like you, not a robot' },
  { icon: MessageSquare, label: 'Personalized', description: 'Tailored to each review' },
  { icon: Shield, label: 'Not spammy', description: 'Builds genuine trust' },
];

export function Reviews() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-light/10 to-neutral-50">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            <span className="gradient-text">Reviews</span> done right
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI-generated review responses that sound authentic, build trust, and improve your ranking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Animated Review Management Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <ReviewsDashboard />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card-soft p-8 hover-lift">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Why SARALONE reviews work
              </h3>

              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-6"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-soft-blue/10 to-light-purple/10 flex items-center justify-center shrink-0 border border-soft-blue/20">
                      <feature.icon className="w-7 h-7 text-soft-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {feature.label}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200"
            >
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-green-700 font-semibold">📈 Result:</span> Businesses using SARALONE
                see an average 40% increase in review response rates and improved local rankings within 30 days.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
