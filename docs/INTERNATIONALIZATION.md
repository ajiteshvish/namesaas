# Internationalization (i18n) Setup

This project supports multiple languages using `react-i18next`. The implementation includes:

## Supported Languages

- 🇺🇸 English (en) - Default
- 🇵🇱 Polish (pl)
- 🇩🇪 German (de)
- 🇫🇷 French (fr)
- 🇪🇸 Spanish (es)
- 🇧🇷 Portuguese Brazil (pt)

## Features

- **Automatic Language Detection**: Detects user's browser language
- **Persistent Language Selection**: Saves language preference in localStorage
- **Dynamic Language Switching**: Switch languages without page reload
- **SEO-Friendly**: Updates document language attribute and meta tags
- **Loading States**: Shows loading spinner while translations load

## File Structure

```
src/
├── i18n/
│   ├── index.ts              # i18n configuration
│   └── locales/
│       ├── en.json           # English translations
│       ├── pl.json           # Polish translations
│       ├── de.json           # German translations
│       ├── fr.json           # French translations
│       ├── es.json           # Spanish translations
│       └── pt.json           # Portuguese translations
├── components/
│   └── LanguageSelector.tsx  # Language dropdown component
└── hooks/
    └── useLanguage.ts        # Custom language hook
```

## Usage

### Using Translations in Components

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  );
}
```

### Using the Language Selector

```tsx
import { LanguageSelector } from '@/components/LanguageSelector';

function Header() {
  return (
    <header>
      <nav>
        {/* Other nav items */}
        <LanguageSelector />
      </nav>
    </header>
  );
}
```

### Using the Custom Hook

```tsx
import { useLanguage } from '@/hooks/useLanguage';

function MyComponent() {
  const { currentLanguage, changeLanguage, isReady } = useLanguage();
  
  return (
    <div>
      <p>Current language: {currentLanguage}</p>
      <button onClick={() => changeLanguage('es')}>
        Switch to Spanish
      </button>
    </div>
  );
}
```

## Adding New Languages

1. Create a new translation file in `src/i18n/locales/[language-code].json`
2. Add the language to the `resources` object in `src/i18n/index.ts`
3. Add the language option to the `languages` array in `src/components/LanguageSelector.tsx`
4. Update the `languages` translation key in all locale files

## Translation Keys Structure

```json
{
  "nav": {
    "features": "Features",
    "howItWorks": "How it Works",
    "pricing": "Pricing",
    "faq": "FAQ",
    "signIn": "Sign In",
    "getStarted": "Get Started"
  },
  "hero": {
    "title": "AI Local SEO Manager that helps your business",
    "titleHighlight": "rank higher automatically",
    "description": "Description text...",
    "getStarted": "Get Started",
    "watchDemo": "Watch Demo"
  },
  "meta": {
    "title": "Page title for SEO",
    "description": "Meta description for SEO",
    "keywords": "SEO keywords"
  },
  "languages": {
    "en": "English",
    "pl": "Polish",
    "de": "German",
    "fr": "French",
    "es": "Spanish",
    "pt": "Portuguese (Brazil)"
  }
}
```

## Configuration

The i18n configuration in `src/i18n/index.ts` includes:

- **Language Detection**: Browser language, localStorage
- **Fallback Language**: English (en)
- **Caching**: localStorage for persistence
- **Debug Mode**: Disabled in production

## Testing

The language selector includes:

- Visual feedback for current language
- Smooth animations
- Mobile-responsive design
- Keyboard accessibility
- Click outside to close functionality

## Browser Support

- Modern browsers with ES6+ support
- localStorage support required for persistence
- Automatic fallback to English if language not supported