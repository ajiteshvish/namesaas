import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { PainPoints } from '@/components/landing/PainPoints';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { AuditScore } from '@/components/landing/AuditScore';
import { OneClick } from '@/components/landing/OneClick';
import { Reviews } from '@/components/landing/Reviews';
import { PostScheduler } from '@/components/landing/PostScheduler';
import { WebsiteBuilder } from '@/components/landing/WebsiteBuilder';
import { Pricing } from '@/components/landing/Pricing';
import { Security } from '@/components/landing/Security';
import { Support } from '@/components/landing/Support';
import { Testimonials } from '@/components/landing/Testimonials';
import { FAQ } from '@/components/landing/FAQ';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';
import { FloatingActionButton } from '@/components/ui/floating-action-button';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { ChatbotTrigger } from '@/components/ui/ai-chatbot';
import { useKeyboardNavigation } from '@/hooks/use-keyboard-navigation';

const Index = () => {
  const sections = [
    'hero',
    'pain-points',
    'how-it-works',
    'features',
    'one-click',
    'reviews',
    'post-scheduler',
    'website-builder',
    'testimonials',
    'pricing',
    'faq'
  ];

  // Enable keyboard navigation
  useKeyboardNavigation({ sections });

  return (
    <>
      <Helmet>
        <title>SARALONE - AI Local SEO Manager | Rank Higher Automatically</title>
        <meta
          name="description"
          content="SARALONE is an AI-powered Local SEO Manager that automatically improves your Google Business Profile, rankings, reviews, posts, and website. Start ranking higher today with our comprehensive local SEO automation platform."
        />
        <meta name="keywords" content="local SEO, AI SEO, Google Business Profile, local rankings, review management, SEO automation, local search optimization, Google My Business, local SEO tools, automated SEO" />
        <link rel="canonical" href="https://saralone.com" />

        {/* Favicon and Icons */}
        <link rel="icon" type="image/x-icon" href="/site.ico" />
        <link rel="shortcut icon" href="/site.ico" />
        <link rel="apple-touch-icon" href="/site.ico" />
        <meta property="og:image" content="https://saralone.com/site.ico" />
        <meta name="twitter:image" content="https://saralone.com/site.ico" />

        {/* Enhanced Open Graph */}
        <meta property="og:title" content="SARALONE - AI Local SEO Manager | Rank Higher Automatically" />
        <meta property="og:description" content="AI-powered Local SEO that helps you rank higher, automatically. Manage your Google Business Profile, reviews, posts, and website with intelligent automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saralone.com" />
        <meta property="og:site_name" content="SARALONE" />
        <meta property="og:locale" content="en_US" />

        {/* Enhanced Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SARALONE - AI Local SEO Manager | Rank Higher Automatically" />
        <meta name="twitter:description" content="AI-powered Local SEO that helps you rank higher, automatically. Comprehensive local SEO automation platform." />
        <meta name="twitter:site" content="@saralone" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="SARALONE" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SARALONE",
            "url": "https://saralone.com",
            "description": "AI-powered Local SEO Manager that automatically improves your Google Business Profile, rankings, reviews, posts, and website.",
            "foundingDate": "2024",
            "sameAs": [
              "https://twitter.com/saralone",
              "https://linkedin.com/company/saralone"
            ]
          })}
        </script>

        {/* Structured Data - WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SARALONE",
            "url": "https://saralone.com",
            "description": "AI Local SEO Manager | Rank Higher Automatically",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://saralone.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>

        {/* Structured Data - SoftwareApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SARALONE",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "AI-powered Local SEO Manager that automatically improves your Google Business Profile, rankings, reviews, posts, and website.",
            "url": "https://saralone.com",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free trial available"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "127"
            }
          })}
        </script>
      </Helmet>

      <ScrollProgress />
      <main className="min-h-screen bg-background">
        <Header />
        <FloatingActionButton />
        <ChatbotTrigger />
        <section id="hero">
          <Hero />
        </section>
        <section id="pain-points">
          <PainPoints />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="features">
          <AuditScore />
        </section>
        <section id="one-click">
          <OneClick />
        </section>
        <section id="reviews">
          <Reviews />
        </section>
        <section id="post-scheduler">
          <PostScheduler />
        </section>
        <section id="website-builder">
          <WebsiteBuilder />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <Security />
        <Support />
        <section id="faq">
          <FAQ />
        </section>
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;