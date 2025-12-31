import { Helmet } from 'react-helmet-async';
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
  return (
    <>
      <Helmet>
        <title>NAME - AI Local SEO Manager | Rank Higher Automatically</title>
        <meta name="description" content="NAME is an AI-powered Local SEO Manager that automatically improves your Google Business Profile, rankings, reviews, posts, and website." />
        <meta name="keywords" content="local SEO, AI SEO, Google Business Profile, local rankings, review management" />
        <link rel="canonical" href="https://name.com" />
        <meta property="og:title" content="NAME - AI Local SEO Manager" />
        <meta property="og:description" content="AI-powered Local SEO that helps you rank higher, automatically." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NAME - AI Local SEO Manager" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <TrustStrip />
        <FeatureFlow />
        <Security />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;
