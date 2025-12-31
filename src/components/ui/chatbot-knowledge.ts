// Knowledge base for the SARALONE AI Chatbot
export const chatbotKnowledge = {
    // Company Information
    company: {
        name: "SARALONE",
        description: "AI-powered Local SEO Manager that automatically optimizes your Google Business Profile, manages reviews, and improves local search rankings",
        location: "F-1, C-09, KLIC, Bhopal, Madhya Pradesh, 462023, India",
        contact: {
            email: "support@saralone.com",
            phone: "7771880677",
            whatsapp: "7771880677"
        }
    },

    // Pricing Plans
    pricing: {
        starter: {
            name: "Starter",
            price: "$29/month",
            features: [
                "AI-powered Google Business Profile optimization",
                "Automated review responses",
                "Basic reporting",
                "Single location",
                "14-day free trial"
            ],
            bestFor: "Single location businesses"
        },
        professional: {
            name: "Professional",
            price: "$79/month",
            features: [
                "Everything in Starter",
                "Advanced SEO analytics",
                "Social media scheduling",
                "Priority support",
                "Multi-location support (up to 5)"
            ],
            bestFor: "Growing businesses with multiple locations"
        },
        enterprise: {
            name: "Enterprise",
            price: "Custom pricing",
            features: [
                "Unlimited locations",
                "White-label options",
                "Dedicated account manager",
                "Custom integrations",
                "Advanced reporting & analytics"
            ],
            bestFor: "Large businesses and agencies"
        }
    },

    // Key Features
    features: {
        googleBusinessProfile: {
            name: "Google Business Profile Optimization",
            description: "Automatic profile updates, keyword optimization, photo management, hours & info updates",
            benefits: ["Higher local search visibility", "More profile views", "Better local rankings"]
        },
        reviewManagement: {
            name: "AI Review Management",
            description: "AI-generated authentic responses, review monitoring, sentiment analysis",
            benefits: ["40% increase in response rates", "Improved customer relationships", "Better online reputation"]
        },
        contentCreation: {
            name: "Content & Social Media",
            description: "Automated post scheduling, seasonal content creation, multi-platform publishing",
            benefits: ["Consistent online presence", "Higher engagement", "More customer touchpoints"]
        },
        seoAnalytics: {
            name: "SEO Analytics",
            description: "Real-time ranking tracking, traffic analysis, competitor insights, performance reports",
            benefits: ["Data-driven decisions", "Track ROI", "Competitive advantage"]
        }
    },

    // Results & Statistics
    results: {
        averageImprovements: {
            localVisibility: "67% increase in 90 days",
            profileViews: "45% more Google Business Profile views",
            reviewResponse: "89% review response rate",
            websiteTraffic: "34% increase in website traffic",
            phoneCalls: "52% more phone calls from search"
        },
        timeline: {
            week1: "Profile optimization complete",
            week2to4: "Review responses automated, first ranking improvements",
            month2: "Significant ranking improvements visible",
            month3: "Major traffic growth and lead generation"
        }
    },

    // Industries Served
    industries: [
        "Healthcare (Dental, Medical, Veterinary)",
        "Food & Beverage (Restaurants, Coffee shops, Bars)",
        "Professional Services (Law firms, Accounting, Real estate)",
        "Home Services (Plumbing, HVAC, Landscaping)",
        "Retail (Boutiques, Auto dealers, Fitness centers)"
    ],

    // Common Questions & Answers
    faq: {
        "How quickly will I see results?": "Most businesses see initial improvements within 2 weeks, with significant results by month 2. Our AI works 24/7 for continuous optimization.",
        "Do I need technical knowledge?": "Not at all! SARALONE is designed to be completely automated. Just connect your accounts and our AI handles everything.",
        "What makes SARALONE different?": "Unlike traditional SEO tools that just report data, our AI actually does the work - optimizing profiles, responding to reviews, creating content, and improving rankings automatically.",
        "Can I cancel anytime?": "Yes, all plans are month-to-month with no long-term contracts. You can cancel anytime.",
        "Do you offer support?": "Yes! We offer 24/7 live chat, email support, and phone support for Professional & Enterprise plans.",
        "Is there a free trial?": "Yes, all plans come with a 14-day free trial. No credit card required to start."
    },

    // Integration Information
    integrations: [
        "Google Business Profile",
        "Facebook",
        "Instagram",
        "Twitter",
        "Yelp",
        "WordPress",
        "Shopify",
        "Squarespace"
    ],

    // Success Stories
    successStories: [
        {
            business: "Coffee Shop",
            result: "Went from page 3 to #1 for 'best coffee shop'",
            timeframe: "2 months"
        },
        {
            business: "Dental Clinic",
            result: "3x increase in appointment bookings",
            timeframe: "3 months"
        },
        {
            business: "Law Firm",
            result: "150% more qualified leads",
            timeframe: "90 days"
        }
    ]
};

// Helper function to get contextual responses
export const getContextualResponse = (topic: string, userMessage: string): string | null => {
    const message = userMessage.toLowerCase();

    switch (topic) {
        case 'pricing':
            if (message.includes('starter')) {
                const plan = chatbotKnowledge.pricing.starter;
                return `The ${plan.name} plan is ${plan.price} and perfect for ${plan.bestFor}. It includes:\n\n${plan.features.map(f => `• ${f}`).join('\n')}\n\nReady to start your free trial? Visit: https://login.saralone.com/`;
            }
            if (message.includes('professional')) {
                const plan = chatbotKnowledge.pricing.professional;
                return `The ${plan.name} plan is ${plan.price} and ideal for ${plan.bestFor}. It includes:\n\n${plan.features.map(f => `• ${f}`).join('\n')}\n\nThis is our most popular plan! Want to learn more?`;
            }
            if (message.includes('enterprise')) {
                const plan = chatbotKnowledge.pricing.enterprise;
                return `The ${plan.name} plan offers ${plan.price} and is designed for ${plan.bestFor}. It includes:\n\n${plan.features.map(f => `• ${f}`).join('\n')}\n\nLet's schedule a call to discuss your specific needs!`;
            }
            break;

        case 'results':
            return `Here are the average results our customers see:\n\n📈 **90-Day Improvements:**\n• ${chatbotKnowledge.results.averageImprovements.localVisibility}\n• ${chatbotKnowledge.results.averageImprovements.profileViews}\n• ${chatbotKnowledge.results.averageImprovements.reviewResponse}\n• ${chatbotKnowledge.results.averageImprovements.websiteTraffic}\n• ${chatbotKnowledge.results.averageImprovements.phoneCalls}\n\nWant to see what's possible for your business?`;

        case 'industries':
            return `SARALONE works great for many industries:\n\n${chatbotKnowledge.industries.map(industry => `• ${industry}`).join('\n')}\n\nWhat type of business do you have? I can share specific examples for your industry!`;

        default:
            return null;
    }
};