import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface NavigationIndicatorProps {
    sections: string[];
}

export function NavigationIndicator({ sections }: NavigationIndicatorProps) {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-neutral-200">
                <div className="space-y-2">
                    {sections.map((section, index) => (
                        <motion.button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === section
                                    ? 'bg-soft-blue scale-125'
                                    : 'bg-neutral-300 hover:bg-soft-blue/50'
                                }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            title={section.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}