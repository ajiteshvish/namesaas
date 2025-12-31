import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 soft-gradient-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">Let AI manage your Local SEO so you can <span className="gradient-text">focus on your business</span></h2>
          <p className="text-lg text-muted-foreground mb-10">Join thousands of businesses already growing with NAME. Start your free trial today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">Start Free Trial<ArrowRight className="w-5 h-5 ml-2" /></Button>
            <Button variant="heroOutline" size="lg"><Calendar className="w-5 h-5 mr-2" />Book Demo</Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
            <span>✓ No credit card required</span><span>✓ Cancel anytime</span><span>✓ Full access during trial</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
