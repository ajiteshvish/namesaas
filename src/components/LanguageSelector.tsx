import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pl', name: 'Polish', flag: '🇵🇱' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'pt', name: 'Portuguese (Brazil)', flag: '🇧🇷' },
];

export function LanguageSelector() {
    const { t } = useTranslation();
    const { currentLanguage, changeLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

    const handleLanguageChange = (languageCode: string) => {
        changeLanguage(languageCode);
        setIsOpen(false);
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
    };

    const handleMouseEnter = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setIsOpen(false);
        }, 200);
        setTimeoutId(id);
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative" onMouseLeave={handleMouseLeave}>
            <Button
                variant="ghost"
                size="default"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                className={`flex items-center gap-2 h-10 px-3 transition-colors duration-200 ${isOpen
                    ? 'text-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-label="Select language"
            >
                <Languages className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline text-sm md:text-base font-medium">{currentLang.code.toUpperCase()}</span>
                <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Dropdown */}
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full right-0 mt-2 w-72 md:w-80 bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden"
                            onMouseEnter={handleMouseEnter}
                        >
                            <div className="p-3">
                                {languages.map((language) => (
                                    <button
                                        key={language.code}
                                        onClick={() => handleLanguageChange(language.code)}
                                        className={`w-full flex items-center gap-4 px-4 py-3 text-left rounded-md transition-colors duration-200 ${currentLanguage === language.code
                                            ? 'bg-primary/10 text-primary'
                                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                                            }`}
                                        aria-pressed={currentLanguage === language.code}
                                    >
                                        <span className="text-xl md:text-2xl" role="img" aria-label={`${language.name} flag`}>
                                            {language.flag}
                                        </span>
                                        <span className="font-medium text-sm md:text-base">{t(`languages.${language.code}`)}</span>
                                        {currentLanguage === language.code && (
                                            <div className="ml-auto w-2 h-2 md:w-2.5 md:h-2.5 bg-primary rounded-full" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}