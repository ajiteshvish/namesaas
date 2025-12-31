import { motion } from 'framer-motion';
import {
  Puzzle,
  FileWarning,
  Search,
  CalendarX,
  MessageSquareX,
  DollarSign,
  Eye
} from 'lucide-react';

const painPoints = [
  {
    icon: Puzzle,
    title: 'Complicated tools',
    description: 'Too many platforms, dashboards, and settings to manage.',
  },
  {
    icon: FileWarning,
    title: 'Incomplete profiles',
    description: 'Google Business Profiles missing critical information.',
  },
  {
    icon: Search,
    title: 'No keyword strategy',
    description: 'Guessing what customers are searching for.',
  },
  {
    icon: CalendarX,
    title: 'Irregular posting',
    description: 'Weeks go by without any updates or engagement.',
  },
  {
    icon: MessageSquareX,
    title: 'Unmanaged reviews',
    description: 'Reviews pile up with no responses or strategy.',
  },
  {
    icon: DollarSign,
    title: 'Expensive websites',
    description: 'Paying too much for sites that don\'t perform.',
  },
  {
    icon: Eye,
    title: 'No visibility',
    description: 'No idea how you rank or what\'s working.',
  },
];

export function PainPoints() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-neutral-50 to-blue-light/10">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Why local businesses{' '}
            <span className="gradient-text">struggle online</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            It's not your fault. Local SEO is complex, time-consuming, and constantly changing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full card-soft p-8 hover-lift group-hover:border-red-200 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors border border-red-100">
                  <point.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
