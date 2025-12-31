import { motion } from 'framer-motion';
import { FeatureEnhancementAnimation } from './animations/FeatureEnhancementAnimation';
import { FeatureRankTrackingAnimation } from './animations/FeatureRankTrackingAnimation';
import { FeatureAIAutomationAnimation } from './animations/FeatureAIAutomationAnimation';
import { FeatureWebsiteAnimation } from './animations/FeatureWebsiteAnimation';

const features = [
  {
    id: 'enhancement',
    title: 'Step-by-step enhancement tips',
    description: 'NAME analyzes your Google Business Profile and provides clear, actionable tasks to improve your visibility. Each suggestion is prioritized by impact, so you know exactly what to fix first.',
    Animation: FeatureEnhancementAnimation,
  },
  {
    id: 'tracking',
    title: 'Real-time rank tracking',
    description: 'Monitor your search rankings across multiple keywords and locations. See exactly where you stand and track your progress as NAME optimizes your profile.',
    Animation: FeatureRankTrackingAnimation,
  },
  {
    id: 'automation',
    title: 'AI-powered automation',
    description: 'Let AI handle the heavy lifting. NAME automatically generates engaging posts, responds to reviews with personalized replies, and keeps your profile active 24/7.',
    Animation: FeatureAIAutomationAnimation,
  },
  {
    id: 'website',
    title: 'Dynamic website builder',
    description: 'Get an SEO-optimized website that automatically updates with your latest reviews, photos, and business info. Mobile-first design with custom domain support.',
    Animation: FeatureWebsiteAnimation,
  },
];

export function FeatureFlow() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Everything you need to <span className="gradient-text">rank higher</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            NAME handles your entire local SEO strategy—from profile optimization to content creation.
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Animation - Left on even, Right on odd */}
              <div className={`order-2 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <feature.Animation />
              </div>

              {/* Text - Right on even, Left on odd */}
              <div className={`order-1 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
