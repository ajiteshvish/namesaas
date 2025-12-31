import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Sarah Johnson', role: 'Owner, The Coffee House', quote: 'NAME completely transformed our online presence. We went from page 3 to the top 3 in just 2 months.', rating: 5 },
  { name: 'Michael Chen', role: 'Director, Chen Dental Clinic', quote: 'Managing reviews used to take hours every week. Now NAME handles it all automatically.', rating: 5 },
  { name: 'Emma Williams', role: 'Founder, Williams Law Firm', quote: 'The website builder alone is worth the subscription. Our leads have increased 3x.', rating: 5 },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Trusted by businesses <span className="gradient-text">worldwide</span></h2>
          <p className="text-lg text-muted-foreground">See what our customers have to say about NAME.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="soft-card p-6 relative">
              <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/20" />
              <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}</div>
              <p className="text-muted-foreground mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"><span className="font-bold text-primary">{t.name.charAt(0)}</span></div>
                <div><p className="text-sm font-semibold text-foreground">{t.name}</p><p className="text-xs text-muted-foreground">{t.role}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
