import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Phone, Mail, Zap, X } from 'lucide-react';

const quickActions = [
    { icon: Zap, label: 'Sign Up', href: 'https://login.saralone.com/', color: 'bg-soft-blue' },
    { icon: Phone, label: 'Call Us', href: 'tel:+917771880677', color: 'bg-green-500' },
    { icon: Mail, label: 'Email', href: 'mailto:support@saralone.com', color: 'bg-orange-500' },
];

export function FloatingActionButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-24 right-4 z-40">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute bottom-16 right-0 space-y-3"
                    >
                        {quickActions.map((action, index) => (
                            <motion.div
                                key={action.label}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <span className="bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium text-foreground whitespace-nowrap">
                                    {action.label}
                                </span>
                                <motion.a
                                    href={action.href}
                                    className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <action.icon className="w-5 h-5" />
                                </motion.a>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-soft-blue to-light-purple flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: isOpen ? 45 : 0 }}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
            </motion.button>
        </div>
    );
}