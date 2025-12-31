import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How does SARALONE work?',
    answer: 'SARALONE uses AI to analyze your business, audit your online presence, and automatically optimize your Google Business Profile, reviews, posts, and website. Simply connect your accounts, and our AI handles the rest.',
  },
  {
    question: 'Do I need technical knowledge to use SARALONE?',
    answer: 'Not at all! SARALONE is designed to be simple and intuitive. There\'s no learning curve—just connect your business and let the AI work. Everything is automated and explained in plain language.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most businesses see improvements in their local rankings within 2-4 weeks. However, results can vary based on your industry, competition, and current online presence.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use enterprise-grade encryption and security measures. Your data is never sold or shared with third parties. We\'re fully compliant with GDPR, CCPA, and other data protection regulations.',
  },
  {
    question: 'Can I use SARALONE for multiple locations?',
    answer: 'Yes! Our Enterprise plan is designed for multi-location businesses and agencies. You can manage all your locations from a single dashboard.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers. Our payment system works globally with support for multiple currencies.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time with no hidden fees or penalties. Your access continues until the end of your billing period.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! All plans come with a free trial so you can experience the full power of SARALONE before committing. No credit card required to start.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl border border-border/50 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
