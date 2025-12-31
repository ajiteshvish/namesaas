import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface EnhancedNavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    showArrow?: boolean;
}

export function EnhancedNavLink({
    href,
    children,
    className = '',
    onClick,
    showArrow = false
}: EnhancedNavLinkProps) {
    return (
        <motion.a
            href={href}
            onClick={onClick}
            className={`group flex items-center gap-2 text-muted-foreground hover:text-soft-blue transition-all duration-200 ${className}`}
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
            {showArrow && (
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            )}
        </motion.a>
    );
}