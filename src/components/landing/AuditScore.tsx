import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';
import { SEOAnalytics } from '@/components/ui/seo-analytics';

const scoreBreakdown = [
  { label: 'Profile completeness', score: 92, status: 'good' },
  { label: 'Keyword optimization', score: 78, status: 'warning' },
  { label: 'Review management', score: 95, status: 'good' },
  { label: 'Post frequency', score: 45, status: 'bad' },
  { label: 'Website SEO', score: 88, status: 'good' },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'good':
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    case 'warning':
      return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    case 'bad':
      return <XCircle className="w-5 h-5 text-destructive" />;
    default:
      return null;
  }
};

const getScoreColor = (score: number) => {
  if (score >= 80) return 'bg-green-500';
  if (score >= 60) return 'bg-yellow-500';
  return 'bg-destructive';
};

export function AuditScore() {
  const overallScore = 79;

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-light/10 to-purple-light/10">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Your <span className="gradient-text">SEO Score</span> out of 100
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transparent, actionable insights. No human onboarding required.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* SEO Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <SEOAnalytics />
          </motion.div>

          {/* Score Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-soft p-8 hover-lift"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">Score Breakdown</h3>

            <div className="space-y-6">
              {scoreBreakdown.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(item.status)}
                      <span className="text-foreground font-medium">{item.label}</span>
                    </div>
                    <span className="text-lg font-bold text-foreground">{item.score}%</span>
                  </div>
                  <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full ${getScoreColor(item.score)}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="mt-8 p-6 bg-gradient-to-r from-soft-blue/10 to-light-purple/10 rounded-2xl border border-soft-blue/20"
            >
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-soft-blue font-semibold">💡 AI Insight:</span> Your post frequency needs attention.
                SARALONE can automatically schedule engaging posts to improve this score by 40+ points.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
