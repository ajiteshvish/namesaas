import { motion } from 'framer-motion';
import { Calendar, Clock, Check, Sparkles } from 'lucide-react';

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
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              AI <span className="gradient-text">post scheduler</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule content for months ahead. Set it once, and NAME keeps your 
              business active and engaging without any effort from you.
            </p>

            <div className="space-y-4 mb-8">
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
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="glass rounded-xl p-4 border border-primary/30 inline-flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                "Set it once. NAME keeps you active."
              </span>
            </div>
          </motion.div>

          {/* Calendar Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6 border border-border/50">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="text-lg font-semibold text-foreground">January 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Auto-scheduling</span>
                </div>
              </div>

              {/* Week Days */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-xs text-muted-foreground py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-6">
                {[...Array(31)].map((_, i) => {
                  const hasPost = [1, 3, 5, 8, 10, 12, 15, 17, 19, 22, 24, 26, 29].includes(i + 1);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.02 }}
                      className={`aspect-square rounded-lg flex items-center justify-center text-sm relative ${
                        hasPost ? 'bg-primary/20 text-foreground' : 'bg-secondary/50 text-muted-foreground'
                      }`}
                    >
                      {i + 1}
                      {hasPost && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Scheduled Posts List */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground mb-3">This week</h4>
                {scheduledPosts.map((post, index) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <span className="text-xs font-semibold text-muted-foreground">{post.day}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{post.title}</p>
                      <p className="text-xs text-muted-foreground">{post.type}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(post.status)}`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
