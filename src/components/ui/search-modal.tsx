import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchResult {
    title: string;
    description: string;
    href: string;
    category: string;
}

const searchData: SearchResult[] = [
    { title: 'AI Local SEO Manager', description: 'Automated local SEO optimization', href: '#hero', category: 'Product' },
    { title: 'Google Business Profile Tracking', description: 'Track your local rankings', href: '#features', category: 'Features' },
    { title: 'Review Management', description: 'Automated review responses', href: '#reviews', category: 'Features' },
    { title: 'Content Publisher', description: 'AI-powered content scheduling', href: '#post-scheduler', category: 'Features' },
    { title: 'Website Builder', description: 'SEO-optimized websites', href: '#website-builder', category: 'Features' },
    { title: 'Pricing Plans', description: 'Choose your plan', href: '#pricing', category: 'Pricing' },
    { title: 'Free Tools', description: 'Local SEO tools', href: '#free-tools', category: 'Tools' },
    { title: 'How It Works', description: 'Learn about our process', href: '#how-it-works', category: 'About' },
];

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);

    useEffect(() => {
        if (query.trim()) {
            const filtered = searchData.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
        } else {
            setResults(searchData.slice(0, 6)); // Show popular results
        }
    }, [query]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                if (!isOpen) {
                    // This would be handled by parent component
                }
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            >
                <div className="flex items-start justify-center pt-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Search Input */}
                        <div className="flex items-center gap-4 p-6 border-b border-neutral-200">
                            <Search className="w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search features, tools, or help..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-1 text-lg bg-transparent border-none outline-none placeholder:text-muted-foreground"
                                autoFocus
                            />
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={onClose}
                                className="p-2"
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Search Results */}
                        <div className="max-h-96 overflow-y-auto">
                            {results.length > 0 ? (
                                <div className="p-4">
                                    {!query && (
                                        <p className="text-sm text-muted-foreground mb-4 px-2">Popular searches</p>
                                    )}
                                    <div className="space-y-2">
                                        {results.map((result, index) => (
                                            <motion.a
                                                key={index}
                                                href={result.href}
                                                onClick={onClose}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-soft-blue/5 transition-colors group"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-soft-blue/10 flex items-center justify-center">
                                                    <Search className="w-5 h-5 text-soft-blue" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-foreground group-hover:text-soft-blue transition-colors">
                                                        {result.title}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">{result.description}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs px-2 py-1 bg-neutral-100 text-muted-foreground rounded-full">
                                                        {result.category}
                                                    </span>
                                                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-soft-blue transition-colors" />
                                                </div>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="p-8 text-center">
                                    <p className="text-muted-foreground">No results found for "{query}"</p>
                                    <p className="text-sm text-muted-foreground mt-2">Try searching for features, tools, or help topics</p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between p-4 border-t border-neutral-200 bg-neutral-50 rounded-b-2xl">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <kbd className="px-2 py-1 bg-white rounded border">↑</kbd>
                                    <kbd className="px-2 py-1 bg-white rounded border">↓</kbd>
                                    to navigate
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="px-2 py-1 bg-white rounded border">Enter</kbd>
                                    to select
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="px-2 py-1 bg-white rounded border">Esc</kbd>
                                    to close
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}