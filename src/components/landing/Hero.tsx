import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { HeroSearchAnimation } from './HeroSearchAnimation';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20 soft-gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 text-foreground">
              {t('hero.title')}{' '}
              <span className="gradient-text">{t('hero.titleHighlight')}</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="lg" className="text-base px-6 py-3 h-12 md:h-14">
                {t('hero.signUp')}
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base px-6 py-3 h-12 md:h-14">
                <Play className="w-4 h-4 md:w-5 md:h-5" />
                {t('hero.watchDemo')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Google Search Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <HeroSearchAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
