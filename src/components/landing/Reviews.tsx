import { motion } from 'framer-motion';
import { Star, MessageSquare, Heart, Shield } from 'lucide-react';

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
            <span className="gradient-text">Reviews</span> done right
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-generated review responses that sound authentic, build trust, and improve your ranking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Review Examples */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {reviewExamples.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass rounded-2xl p-6 border border-border/50"
              >
                {/* Customer Review */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-sm font-semibold text-foreground">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.review}</p>
                </div>

                {/* AI Response */}
                <div className="pl-4 border-l-2 border-primary/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">AI</span>
                    </div>
                    <span className="text-xs text-primary font-medium">Response by NAME</span>
                  </div>
                  <p className="text-sm text-foreground">{review.reply}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Why NAME reviews work
              </h3>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-foreground mb-1">
                        {feature.label}
                      </h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-primary/10 rounded-2xl border border-primary/30">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">📈 Result:</span> Businesses using NAME 
                see an average 40% increase in review response rates and improved local rankings.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
