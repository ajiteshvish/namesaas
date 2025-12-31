import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Calculator, Search, FileText, BarChart3 } from 'lucide-react';
import { useNavbarState } from '@/hooks/useNavbarState';

interface DropdownItem {
    title: string;
    description: string;
    icon: any;
    href: string;
}

interface SimpleDropdownProps {
    title: string;
    items: DropdownItem[];
}

const freeToolsData = [
    {
        title: "Local Rank Checker",
        description: "Check your local search rankings for free",
        icon: Search,
        href: "#rank-checker"
    },
    {
        title: "Review Response Generator",
        description: "Generate professional review responses",
        icon: FileText,
        href: "#review-generator"
    },
    {
        title: "Local SEO Audit",
        description: "Get a free audit of your local SEO",
        icon: BarChart3,
        href: "#seo-audit"
    },
    {
        title: "Citation Builder",
        description: "Find citation opportunities for your business",
        icon: Calculator,
        href: "#citation-builder"
    }
];

export function SimpleDropdown({ title, items }: SimpleDropdownProps) {
    const { isOpen, isAnyMenuOpen, openMenu, closeMenu, closeAllMenus } = useNavbarState(title.toLowerCase());

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

                        {/* Dropdown */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50"
                        >
                            <div className="bg-background border border-border rounded-2xl shadow-elevated p-4 min-w-[320px]">
                                <div className="space-y-2">
                                    {items.map((item, index) => (
                                        <motion.a
                                            key={item.title}
                                            href={item.href}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors duration-200 group mega-menu-item"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                                                <item.icon className="w-4 h-4 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 text-sm">
                                                    {item.title}
                                                </h4>
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t border-border">
                                    <p className="text-xs text-muted-foreground text-center">
                                        All tools are completely free to use
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FreeToolsDropdown() {
    return <SimpleDropdown title="Free Tools" items={freeToolsData} />;
}