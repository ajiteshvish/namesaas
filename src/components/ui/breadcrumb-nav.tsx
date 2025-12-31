import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
    isActive?: boolean;
}

interface BreadcrumbNavProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function BreadcrumbNav({ items, className = '' }: BreadcrumbNavProps) {
    return (
        <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
            <motion.a
                href="/"
                className="flex items-center text-muted-foreground hover:text-soft-blue transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Home className="w-4 h-4" />
            </motion.a>

            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    {item.href && !item.isActive ? (
                        <motion.a
                            href={item.href}
                            className="text-muted-foreground hover:text-soft-blue transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item.label}
                        </motion.a>
                    ) : (
                        <span className={`${item.isActive ? 'text-soft-blue font-medium' : 'text-muted-foreground'}`}>
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}