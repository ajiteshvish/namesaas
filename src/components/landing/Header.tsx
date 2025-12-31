import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Users, Building2, BookOpen, Wrench, BarChart3, MessageSquare, FileText, Shield, Star, Target, Search } from 'lucide-react';
import { SearchModal } from '@/components/ui/search-modal';

const navItems = [
  {
    label: 'Product',
    href: '#',
    hasDropdown: true,
    sections: [
      {
        title: 'Manage',
        items: [
          { icon: BarChart3, label: 'Tracking', description: 'Track Business Profile positions for selected local keywords', href: '#tracking' },
          { icon: FileText, label: 'Audit', description: 'Fix problems pushing Google Business Profiles down in search', href: '#audit' },
          { icon: Shield, label: 'Protection', description: 'Keep Google Business Profile information safe', href: '#protection' }
        ]
      },
      {
        title: 'Improve',
        items: [
          { icon: MessageSquare, label: 'Content Publisher', description: 'Create, plan, and publish engaging and seasonal content', href: '#content' },
          { icon: Star, label: 'Review Manager', description: 'Automate managing Google reviews', href: '#reviews' },
          { icon: FileText, label: 'Reports', description: 'Auto-generate and manage local SEO reports for clients', href: '#reports', badge: 'New' }
        ]
      }
    ],
    cta: {
      title: 'What we do',
      description: 'We automate the local SEO tasks that eat up time and effort so every business can be and stay visible in local searches.',
      buttonText: 'Sign Up',
      buttonHref: 'https://login.saralone.com/'
    }
  },
  {
    label: 'Solutions',
    href: '#',
    hasDropdown: true,
    sections: [
      {
        title: 'For Teams',
        items: [
          { icon: Users, label: 'For Agencies', description: 'Handle more local SEO client profiles with automation', href: '#agencies', badge: 'Book A Demo' },
          { icon: Building2, label: 'For Business Owners', description: 'Get found by local customers ready to buy your services or products', href: '#business' }
        ]
      }
    ],
    cta: {
      title: 'Who we do it for',
      description: 'We speak your language whether you\'re juggling client accounts, scaling an agency, or just want your local business found.',
      buttonText: 'Sign Up',
      buttonHref: 'https://login.saralone.com/'
    }
  },
  {
    label: 'Resources',
    href: '#',
    hasDropdown: true,
    sections: [
      {
        title: 'Local SEO Basics',
        items: [
          { icon: BookOpen, label: 'What Is Local SEO', description: 'Learn the fundamentals of local search optimization', href: '#what-is-local-seo' },
          { icon: Target, label: 'Why Is It Important for Local Businesses', description: 'Understand the impact on your business growth', href: '#importance' },
          { icon: Wrench, label: 'How to Optimize Google Business Profile', description: 'Step-by-step optimization guide', href: '#optimize-gbp' }
        ]
      },
      {
        title: 'Learn & Support',
        items: [
          { icon: MessageSquare, label: 'Contact Us', description: 'Send us an email, so we can support you and answer your questions', href: '#contact' },
          { icon: BookOpen, label: 'Knowledge Base', description: 'Read detailed guides about Localo and how it works', href: '#knowledge' },
          { icon: FileText, label: 'Blog', description: 'Find strategies for local marketing and SEO for businesses in Google', href: '#blog' }
        ]
      }
    ],
    cta: {
      title: 'Why we do it',
      description: 'Because every local business deserves to be found by their customers.',
      buttonText: 'Sign Up',
      buttonHref: 'https://login.saralone.com/'
    }
  },
  {
    label: 'Free Tools',
    href: '#',
    hasDropdown: true,
    sections: [
      {
        title: 'Free SEO Tools',
        items: [
          { icon: BarChart3, label: 'Local Rank Checker', description: 'See local business rankings in Google', href: '#rank-checker' },
          { icon: FileText, label: 'LocalBusiness Schema Generator', description: 'Generate a ready-to-paste schema', href: '#schema-generator' },
          { icon: Star, label: 'Review Poster Generator', description: 'Get a QR-code poster to collect reviews', href: '#review-poster' },
          { icon: MessageSquare, label: 'Review Response Generator', description: 'Reply to Google reviews automatically', href: '#review-response' }
        ]
      }
    ],
    cta: {
      title: 'Take a test drive',
      description: 'Check your rankings, get a ready LocalBusiness schema or reply to all reviews with auto-generated answers. All for free.',
      buttonText: 'Sign Up',
      buttonHref: 'https://login.saralone.com/'
    }
  },
  {
    label: 'Pricing',
    href: '#pricing',
    hasDropdown: false
  }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <img
                src="/site.ico"
                alt="SARALONE Logo"
                className="h-10 w-auto hover:opacity-90 transition-opacity"
                loading="eager"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-muted-foreground hover:text-soft-blue transition-colors duration-200 text-sm font-medium py-2"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                    )}
                  </a>
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="text-muted-foreground hover:text-foreground flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span className="hidden xl:inline">Search</span>
                <kbd className="hidden xl:inline-flex px-2 py-1 text-xs bg-neutral-100 rounded border">⌘K</kbd>
              </Button>
              <Button variant="hero" size="default" className="shadow-soft hover-lift" asChild>
                <a href="https://login.saralone.com/">Sign Up</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-soft-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-lg max-h-[80vh] overflow-y-auto"
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <a
                        href={item.href}
                        className="flex items-center justify-between text-muted-foreground hover:text-soft-blue transition-colors duration-200 text-base font-medium py-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                        {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                      </a>

                      {/* Mobile Dropdown Content */}
                      {item.hasDropdown && item.sections && (
                        <div className="pl-4 border-l-2 border-neutral-200 ml-2 mt-2">
                          {item.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="mb-4">
                              <h4 className="text-sm font-semibold text-foreground mb-2">{section.title}</h4>
                              {section.items.map((subItem, itemIndex) => (
                                <a
                                  key={itemIndex}
                                  href={subItem.href}
                                  className="flex items-start gap-3 py-2 text-sm text-muted-foreground hover:text-soft-blue transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <subItem.icon className="w-4 h-4 mt-0.5 text-soft-blue" />
                                  <div>
                                    <div className="font-medium">{subItem.label}</div>
                                    <div className="text-xs text-muted-foreground mt-1">{subItem.description}</div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="flex flex-col gap-3 pt-4 border-t border-neutral-200">
                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={() => setIsSearchOpen(true)}
                      className="w-full flex items-center gap-2"
                    >
                      <Search className="w-4 h-4" />
                      Search
                    </Button>
                    <Button variant="hero" size="lg" className="w-full shadow-soft" asChild>
                      <a href="https://login.saralone.com/">Sign Up</a>
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Desktop Dropdown Menus */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-lg"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container mx-auto px-4 lg:px-8 py-8">
              {navItems
                .filter(item => item.label === activeDropdown && item.sections)
                .map((item) => (
                  <div key={item.label} className="grid lg:grid-cols-4 gap-8">
                    {/* Navigation Sections */}
                    <div className="lg:col-span-3">
                      <div className="grid md:grid-cols-2 gap-8">
                        {item.sections?.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                              {section.title}
                              <ChevronDown className="w-4 h-4 text-soft-blue" />
                            </h3>
                            <div className="space-y-4">
                              {section.items.map((navItem, itemIndex) => (
                                <motion.a
                                  key={itemIndex}
                                  href={navItem.href}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: itemIndex * 0.05 }}
                                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-soft-blue/5 transition-all duration-200 group"
                                >
                                  <div className="w-10 h-10 rounded-xl bg-soft-blue/10 flex items-center justify-center group-hover:bg-soft-blue/20 transition-colors">
                                    <navItem.icon className="w-5 h-5 text-soft-blue" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-semibold text-foreground group-hover:text-soft-blue transition-colors">
                                        {navItem.label}
                                      </h4>
                                      {navItem.badge && (
                                        <span className="px-2 py-1 text-xs font-medium bg-soft-blue/10 text-soft-blue rounded-full">
                                          {navItem.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                      {navItem.description}
                                    </p>
                                  </div>
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Section */}
                    {item.cta && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-soft-blue/5 to-light-purple/5 rounded-2xl p-6 border border-soft-blue/20"
                      >
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {item.cta.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {item.cta.description}
                        </p>
                        <Button
                          variant="hero"
                          size="lg"
                          className="w-full shadow-soft hover-lift"
                          asChild
                        >
                          <a href={item.cta.buttonHref}>
                            {item.cta.buttonText} →
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}