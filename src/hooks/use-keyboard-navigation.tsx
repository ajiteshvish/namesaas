import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
    sections: string[];
    onSectionChange?: (section: string) => void;
}

export function useKeyboardNavigation({ sections, onSectionChange }: UseKeyboardNavigationProps) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Only handle navigation if no input is focused
            if (document.activeElement?.tagName === 'INPUT' ||
                document.activeElement?.tagName === 'TEXTAREA') {
                return;
            }

            const currentSection = getCurrentSection(sections);
            const currentIndex = sections.indexOf(currentSection);

            switch (event.key) {
                case 'ArrowDown':
                case 'j': // Vim-style navigation
                    event.preventDefault();
                    if (currentIndex < sections.length - 1) {
                        scrollToSection(sections[currentIndex + 1]);
                        onSectionChange?.(sections[currentIndex + 1]);
                    }
                    break;

                case 'ArrowUp':
                case 'k': // Vim-style navigation
                    event.preventDefault();
                    if (currentIndex > 0) {
                        scrollToSection(sections[currentIndex - 1]);
                        onSectionChange?.(sections[currentIndex - 1]);
                    }
                    break;

                case 'Home':
                    event.preventDefault();
                    scrollToSection(sections[0]);
                    onSectionChange?.(sections[0]);
                    break;

                case 'End':
                    event.preventDefault();
                    scrollToSection(sections[sections.length - 1]);
                    onSectionChange?.(sections[sections.length - 1]);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [sections, onSectionChange]);
}

function getCurrentSection(sections: string[]): string {
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                return section;
            }
        }
    }

    return sections[0];
}

function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}