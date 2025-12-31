import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function LanguageDemo() {
    const { t, i18n } = useTranslation();

    return (
        <Card className="w-full max-w-md mx-auto mt-8">
            <CardHeader>
                <CardTitle>Language Demo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <p className="text-sm text-muted-foreground">Current Language:</p>
                    <p className="font-semibold">{t(`languages.${i18n.language}`)}</p>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Hero Title:</p>
                    <p className="text-sm">{t('hero.title')} <span className="text-primary">{t('hero.titleHighlight')}</span></p>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Navigation:</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-muted px-2 py-1 rounded">{t('nav.features')}</span>
                        <span className="bg-muted px-2 py-1 rounded">{t('nav.pricing')}</span>
                        <span className="bg-muted px-2 py-1 rounded">{t('nav.faq')}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}