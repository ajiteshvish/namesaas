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

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NAME - AI Local SEO Manager | Rank Higher Automatically</title>
        <meta 
          name="description" 
          content="NAME is an AI-powered Local SEO Manager that automatically improves your Google Business Profile, rankings, reviews, posts, and website. Start ranking higher today." 
        />
        <meta name="keywords" content="local SEO, AI SEO, Google Business Profile, local rankings, review management, SEO automation" />
        <link rel="canonical" href="https://name.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="NAME - AI Local SEO Manager" />
        <meta property="og:description" content="AI-powered Local SEO that helps you rank higher, automatically." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NAME - AI Local SEO Manager" />
        <meta name="twitter:description" content="AI-powered Local SEO that helps you rank higher, automatically." />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <PainPoints />
        <HowItWorks />
        <AuditScore />
        <OneClick />
        <Reviews />
        <PostScheduler />
        <WebsiteBuilder />
        <Testimonials />
        <Pricing />
        <Security />
        <Support />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;
