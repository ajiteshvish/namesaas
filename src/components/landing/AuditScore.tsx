import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

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
    <section id="features" className="py-24 relative overflow-hidden">
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
            Your <span className="gradient-text">SEO Score</span> out of 100
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent, actionable insights. No human onboarding required.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Score Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer Ring */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-secondary flex items-center justify-center relative">
                {/* Animated Progress Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke="url(#scoreGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${overallScore * 2.83} 283`}
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--cyan))" />
                      <stop offset="100%" stopColor="hsl(var(--teal))" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Score Display */}
                <div className="text-center z-10">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-6xl md:text-7xl font-bold gradient-text"
                  >
                    {overallScore}
                  </motion.span>
                  <p className="text-muted-foreground mt-2">Overall Score</p>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Score Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 md:p-8 border border-border/50"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Score Breakdown</h3>
            
            <div className="space-y-5">
              {scoreBreakdown.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(item.status)}
                      <span className="text-sm text-foreground">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">{item.score}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      className={`h-full rounded-full ${getScoreColor(item.score)}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-primary/10 rounded-xl border border-primary/30">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">💡 Insight:</span> Your post frequency needs attention. 
                NAME can automatically schedule posts to improve this score.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
