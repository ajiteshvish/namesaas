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
    description: 'Tell us about your business once. SARALONE learns everything it needs.',
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
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-light/20 to-purple-light/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            How <span className="gradient-text">SARALONE</span> fixes this
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A simple, automated workflow that handles everything for you.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-soft-blue/30 via-soft-blue to-soft-blue/30 hidden lg:block" />

          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`card-soft p-8 hover-lift inline-block max-w-md w-full ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                    }`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                      }`}>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-soft-blue/10 to-light-purple/10 flex items-center justify-center border border-soft-blue/20">
                        <step.icon className="w-7 h-7 text-soft-blue" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Step Number */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-soft-blue to-light-purple flex items-center justify-center text-white font-bold shadow-lg text-lg">
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
