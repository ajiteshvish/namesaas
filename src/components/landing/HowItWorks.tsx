import { motion } from 'framer-motion';
import { 
  Brain, 
  Search, 
  Wrench, 
  FileText, 
  MessageSquare, 
  Globe, 
  BarChart3 
} from 'lucide-react';

const steps = [
  {
    icon: Brain,
    title: 'AI understands your business',
    description: 'Tell us about your business once. NAME learns everything it needs.',
  },
  {
    icon: Search,
    title: 'Runs a detailed audit',
    description: 'Comprehensive analysis of your online presence and competitors.',
  },
  {
    icon: Wrench,
    title: 'Fixes profile issues',
    description: 'Automatically optimizes your Google Business Profile.',
  },
  {
    icon: FileText,
    title: 'Writes and schedules posts',
    description: 'Creates engaging content that drives local traffic.',
  },
  {
    icon: MessageSquare,
    title: 'Manages reviews',
    description: 'Responds to reviews with personalized, authentic replies.',
  },
  {
    icon: Globe,
    title: 'Builds your website',
    description: 'Creates a dynamic, SEO-optimized site that updates itself.',
  },
  {
    icon: BarChart3,
    title: 'Tracks everything',
    description: 'Monitors rankings, traffic, and performance in real-time.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How <span className="gradient-text">NAME</span> fixes this
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, automated workflow that handles everything for you.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 inline-block max-w-md ${
                    index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                  }`}>
                    <div className={`flex items-center gap-4 mb-3 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Step Number */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg glow">
                  {index + 1}
                </div>

                {/* Spacer for layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
