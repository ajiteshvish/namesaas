import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { TrustStrip } from '@/components/landing/TrustStrip';
import { FeatureFlow } from '@/components/landing/FeatureFlow';
import { Security } from '@/components/landing/Security';
import { Testimonials } from '@/components/landing/Testimonials';
import { FAQ } from '@/components/landing/FAQ';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <link rel="canonical" href="https://name.com" />

        {/* Open Graph */}
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://name.com" />
        <meta property="og:site_name" content="NAME" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.title')} />
        <meta name="twitter:description" content={t('meta.description')} />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="NAME" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content={i18n.language} />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "NAME",
            "description": t('meta.description'),
            "url": "https://name.com",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free trial available"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "156"
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background" role="main">
        <Header />
        <Hero />
        <TrustStrip />
        <section id="features" aria-label="Features">
          <FeatureFlow />
        </section>
        <section id="security" aria-label="Security">
          <Security />
        </section>
        <section id="testimonials" aria-label="Customer Testimonials">
          <Testimonials />
        </section>
        <section id="faq" aria-label="Frequently Asked Questions">
          <FAQ />
        </section>
        <section id="signup" aria-label="Sign Up">
          <FinalCTA />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Index;
