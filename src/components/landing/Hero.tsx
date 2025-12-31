import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Check, Star, Globe } from 'lucide-react';
import { AnimatedDashboard } from '@/components/ui/animated-dashboard';

const highlights = [
  { icon: Check, text: 'No learning curve' },
  { icon: Globe, text: 'Works globally' },
  { icon: Check, text: 'Secure and compliant' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-blue-light/30 to-purple-light/30">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-light/20 to-purple-light/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-soft-blue/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-light-purple/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-soft-blue/20 mb-8 shadow-soft"
            >
              <Star className="w-4 h-4 text-soft-blue" />
              <span className="text-sm text-muted-foreground font-medium">AI-Powered Local SEO</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-foreground">
              AI Local SEO Manager that helps you{' '}
              <span className="gradient-text">rank higher</span>
              , automatically
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              SARALONE understands your business and manages your complete local SEO—Google Business Profile,
              reviews, posts, and website—without any manual work.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button variant="hero" size="lg" className="shadow-lg hover-lift" asChild>
                <a href="https://login.saralone.com/">Get Started</a>
              </Button>
              <Button variant="heroOutline" size="lg" className="hover-lift" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6ao8MXwubcMeoWlHzb-mTNVf4id50Dq7xXBW3YqQkauJ9RA/viewform">
                  <Play className="w-5 h-5" />
                  Book Demo
                </a>
              </Button>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-soft-blue/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-soft-blue" />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <AnimatedDashboard variant="analytics" className="max-w-lg mx-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
