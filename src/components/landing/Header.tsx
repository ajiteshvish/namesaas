import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/LanguageSelector';
import { FeaturesMegaMenu, SolutionsMegaMenu, ResourcesMegaMenu } from '@/components/navigation/MegaMenu';
import { FreeToolsDropdown } from '@/components/navigation/SimpleDropdown';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'nav.pricing', href: '#pricing' },
];

export function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/90 backdrop-blur-lg shadow-soft py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary flex items-center justify-center shadow-button">
              <span className="text-lg md:text-xl font-bold text-primary-foreground">N</span>
            </div>
            <span className="text-lg md:text-xl font-bold text-foreground">NAME</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            <FeaturesMegaMenu />
            <SolutionsMegaMenu />
            <ResourcesMegaMenu />
            <FreeToolsDropdown />
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium py-2"
              >
                {t(link.label)}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <LanguageSelector />
            <Button variant="default" size="sm" className="text-sm">
              {t('nav.signUp')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-secondary/50 rounded-md transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-card p-6 md:p-8"
          >
            <nav className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#solutions"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <a
                href="#resources"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </a>
              <a
                href="#free-tools"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Free Tools
              </a>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(link.label)}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-6 border-t border-border">
                <div className="flex justify-center pb-3">
                  <LanguageSelector />
                </div>
                <Button variant="default" size="xl" className="w-full text-lg">
                  {t('nav.signUp')}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
