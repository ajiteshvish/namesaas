import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { useNavbarState } from '@/hooks/useNavbarState';
import {
    BarChart3,
    Search,
    Star,
    MessageSquare,
    FileText,
    Users,
    Building2,
    Zap,
    Shield,
    TrendingUp,
    Globe,
    BookOpen,
    Video,
    Award,
    Target,
    Lightbulb
} from 'lucide-react';

interface MenuItem {
    title: string;
    description: string;
    icon: any;
    href: string;
    badge?: string;
}

interface MenuSection {
    title: string;
    items: MenuItem[];
}

interface MegaMenuProps {
    title: string;
    sections: MenuSection[];
    rightContent?: {
        title: string;
        description: string;
        ctaText: string;
        ctaHref: string;
    };
}

const menuData = {
    features: {
        sections: [
            {
                title: "Core Features",
                items: [
                    {
                        title: "Local Rank Tracker",
                        description: "Track your local search rankings in real-time",
                        icon: BarChart3,
                        href: "#rank-tracker"
                    },
                    {
                        title: "Google Business Profile Manager",
                        description: "Optimize and manage your GBP automatically",
                        icon: Building2,
                        href: "#gbp-manager"
                    },
                    {
                        title: "Review Management",
                        description: "Monitor and respond to reviews automatically",
                        icon: Star,
                        href: "#reviews"
                    },
                    {
                        title: "Local SEO Audit",
                        description: "Get detailed insights on your local SEO performance",
                        icon: Search,
                        href: "#audit"
                    }
                ]
            },
            {
                title: "Advanced Tools",
                items: [
                    {
                        title: "Content Generator",
                        description: "AI-powered content for posts and updates",
                        icon: FileText,
                        href: "#content"
                    },
                    {
                        title: "Competitor Analysis",
                        description: "Track and analyze your local competitors",
                        icon: Target,
                        href: "#competitors"
                    },
                    {
                        title: "Local Citations",
                        description: "Manage your business listings across the web",
                        icon: Globe,
                        href: "#citations"
                    },
                    {
                        title: "Reputation Protection",
                        description: "Protect your online reputation 24/7",
                        icon: Shield,
                        href: "#protection"
                    }
                ]
            }
        ],
        rightContent: {
            title: "Try NAME Free",
            description: "See how NAME can boost your local rankings and grow your business automatically.",
            ctaText: "Start 14 days free",
            ctaHref: "#signup"
        }
    },
    solutions: {
        sections: [
            {
                title: "By Business Type",
                items: [
                    {
                        title: "For Agencies",
                        description: "Manage multiple client profiles with automation",
                        icon: Users,
                        href: "#agencies"
                    },
                    {
                        title: "For Small Businesses",
                        description: "Get found by local customers ready to buy",
                        icon: Building2,
                        href: "#small-business"
                    },
                    {
                        title: "For Franchises",
                        description: "Scale local SEO across all locations",
                        icon: TrendingUp,
                        href: "#franchises"
                    }
                ]
            },
            {
                title: "By Industry",
                items: [
                    {
                        title: "Restaurants & Food",
                        description: "Attract more diners and delivery orders",
                        icon: Zap,
                        href: "#restaurants"
                    },
                    {
                        title: "Healthcare & Medical",
                        description: "Help patients find your practice",
                        icon: Shield,
                        href: "#healthcare"
                    },
                    {
                        title: "Professional Services",
                        description: "Generate more leads and appointments",
                        icon: Award,
                        href: "#professional"
                    }
                ]
            }
        ],
        rightContent: {
            title: "Find Your Solution",
            description: "Every local business deserves to be found by their customers.",
            ctaText: "Start 14 days free",
            ctaHref: "#signup"
        }
    },
    resources: {
        sections: [
            {
                title: "Learn",
                items: [
                    {
                        title: "Local SEO Guide",
                        description: "Complete guide to local search optimization",
                        icon: BookOpen,
                        href: "#guide"
                    },
                    {
                        title: "Video Tutorials",
                        description: "Step-by-step video walkthroughs",
                        icon: Video,
                        href: "#tutorials"
                    },
                    {
                        title: "Webinars",
                        description: "Live training sessions with experts",
                        icon: Users,
                        href: "#webinars"
                    },
                    {
                        title: "Case Studies",
                        description: "Real success stories from our customers",
                        icon: Award,
                        href: "#case-studies"
                    }
                ]
            },
            {
                title: "Support",
                items: [
                    {
                        title: "Help Center",
                        description: "Find answers to common questions",
                        icon: Lightbulb,
                        href: "#help"
                    },
                    {
                        title: "Contact Support",
                        description: "Get help from our expert team",
                        icon: MessageSquare,
                        href: "#contact"
                    },
                    {
                        title: "Community Forum",
                        description: "Connect with other local business owners",
                        icon: Users,
                        href: "#community"
                    },
                    {
                        title: "API Documentation",
                        description: "Integrate NAME with your tools",
                        icon: FileText,
                        href: "#api"
                    }
                ]
            }
        ],
        rightContent: {
            title: "Get Expert Help",
            description: "Our local SEO experts are here to help you succeed.",
            ctaText: "Contact Support",
            ctaHref: "#contact"
        }
    }
};

export function MegaMenu({ title, sections, rightContent }: MegaMenuProps) {
    const { isOpen, isAnyMenuOpen, openMenu, closeMenu, closeAllMenus } = useNavbarState(title.toLowerCase());
    const { t } = useTranslation();

    const handleMouseEnter = () => {
        if (isAnyMenuOpen) {
            // If any menu is open, switch immediately
            openMenu(true);
        } else {
            // If no menu is open, open with slight delay
            openMenu();
        }
    };

    const handleMouseLeave = () => {
        closeMenu(150);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (isOpen) {
                closeAllMenus();
            } else {
                openMenu(true);
            }
        } else if (event.key === 'Escape') {
            closeAllMenus();
        }
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={`flex items-center gap-1 transition-colors duration-200 text-sm font-medium py-2 px-2 rounded-md navbar-item ${isOpen
                    ? 'text-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                aria-expanded={isOpen}
                aria-haspopup="true"
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                {title}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40 navbar-backdrop"
                            onClick={closeAllMenus}
                        />

                        {/* Mega Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50"
                        >
                            <div className="bg-background border border-border rounded-2xl shadow-elevated p-6 min-w-[700px] max-w-[900px]">
                                <div className="grid grid-cols-12 gap-6">
                                    {/* Menu Sections */}
                                    <div className="col-span-8">
                                        <div className="grid grid-cols-2 gap-6">
                                            {sections.map((section, sectionIndex) => (
                                                <div key={section.title}>
                                                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                                                        {section.title}
                                                    </h3>
                                                    <div className="space-y-2">
                                                        {section.items.map((item, itemIndex) => (
                                                            <motion.a
                                                                key={item.title}
                                                                href={item.href}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                                                                className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-secondary/50 transition-colors duration-200 group"
                                                            >
                                                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                                                                    <item.icon className="w-4 h-4 text-primary" />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="flex items-center gap-2">
                                                                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 text-sm">
                                                                            {item.title}
                                                                        </h4>
                                                                        {item.badge && (
                                                                            <span className="text-xs font-medium bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">
                                                                                {item.badge}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    <p className="text-xs text-muted-foreground mt-0.5">
                                                                        {item.description}
                                                                    </p>
                                                                </div>
                                                            </motion.a>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Content */}
                                    {rightContent && (
                                        <div className="col-span-4">
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 }}
                                                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 h-full flex flex-col justify-between"
                                            >
                                                <div>
                                                    <h3 className="text-lg font-bold text-foreground mb-3">
                                                        {rightContent.title}
                                                    </h3>
                                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                                        {rightContent.description}
                                                    </p>
                                                </div>
                                                <a
                                                    href={rightContent.ctaHref}
                                                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                                                >
                                                    {rightContent.ctaText} →
                                                </a>
                                            </motion.div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FeaturesMegaMenu() {
    return <MegaMenu title="Features" sections={menuData.features.sections} rightContent={menuData.features.rightContent} />;
}

export function SolutionsMegaMenu() {
    return <MegaMenu title="Solutions" sections={menuData.solutions.sections} rightContent={menuData.solutions.rightContent} />;
}

export function ResourcesMegaMenu() {
    return <MegaMenu title="Resources" sections={menuData.resources.sections} rightContent={menuData.resources.rightContent} />;
}