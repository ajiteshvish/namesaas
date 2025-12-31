import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot, User, Sparkles, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
    id: string;
    type: 'user' | 'bot';
    content: string;
    timestamp: Date;
    isTyping?: boolean;
}

interface ChatbotProps {
    isOpen: boolean;
    onClose: () => void;
}

const predefinedResponses = {
    greeting: [
        "Hi there! I'm SARA, your AI assistant. I'm here to help you learn about SARALONE's local SEO services. What would you like to know?",
        "Hello! Welcome to SARALONE. I can help you understand how our AI-powered local SEO platform works. What questions do you have?",
        "Hey! I'm SARA, and I'm excited to help you discover how SARALONE can boost your local search rankings. What can I help you with today?"
    ],
    pricing: [
        "SARALONE offers three main plans:\n\n🚀 **Starter** - $29/month\n• Perfect for single location businesses\n• AI-powered Google Business Profile optimization\n• Automated review responses\n• Basic reporting\n\n💼 **Professional** - $79/month\n• Everything in Starter\n• Advanced SEO analytics\n• Social media scheduling\n• Priority support\n\n🏢 **Enterprise** - Custom pricing\n• Multi-location management\n• White-label options\n• Dedicated account manager\n• Custom integrations\n\nAll plans come with a free trial! Would you like to know more about any specific plan?"
    ],
    features: [
        "SARALONE's AI handles your complete local SEO automatically:\n\n🎯 **Google Business Profile Optimization**\n• Automatic profile updates\n• Keyword optimization\n• Photo management\n\n⭐ **Review Management**\n• AI-generated authentic responses\n• Review monitoring\n• Sentiment analysis\n\n📱 **Content & Social Media**\n• Automated post scheduling\n• Seasonal content creation\n• Multi-platform publishing\n\n📊 **SEO Analytics**\n• Real-time ranking tracking\n• Traffic analysis\n• Competitor insights\n\nWhat specific feature interests you most?"
    ],
    howItWorks: [
        "Getting started with SARALONE is super simple:\n\n1️⃣ **Connect Your Accounts** (2 minutes)\n• Link your Google Business Profile\n• Connect social media accounts\n• Add your website\n\n2️⃣ **AI Analysis** (24 hours)\n• Our AI analyzes your business\n• Identifies optimization opportunities\n• Creates your custom strategy\n\n3️⃣ **Automatic Optimization** (Ongoing)\n• AI handles daily tasks\n• Monitors and improves rankings\n• Responds to reviews\n• Posts engaging content\n\nNo technical knowledge required! Want to see a demo?"
    ],
    reviews: [
        "Our AI review management is pretty amazing:\n\n✨ **Authentic Responses**\n• Sounds like you, not a robot\n• Personalized to each review\n• Maintains your brand voice\n\n⚡ **Lightning Fast**\n• Responds within minutes\n• 24/7 monitoring\n• Never misses a review\n\n📈 **Proven Results**\n• 40% increase in response rates\n• Improved local rankings\n• Better customer relationships\n\nBusinesses see ranking improvements within 30 days. Would you like to see some examples?"
    ],
    support: [
        "We've got your back with multiple support options:\n\n💬 **Live Chat** - Available 24/7\n📧 **Email Support** - support@saralone.com\n📞 **Phone Support** - For Professional & Enterprise plans\n📚 **Knowledge Base** - Comprehensive guides\n🎥 **Video Tutorials** - Step-by-step walkthroughs\n\nOur average response time is under 2 hours. Plus, our AI handles most of the work automatically, so you'll rarely need support!\n\nNeed help with something specific?"
    ],
    demo: [
        "I'd love to show you SARALONE in action! Here's what you can do:\n\n🎬 **Watch Our Demo Video**\n• See real results from actual businesses\n• 3-minute overview of key features\n\n🆓 **Start Free Trial**\n• No credit card required\n• Full access to all features\n• 14 days to explore everything\n\n📞 **Book a Personal Demo**\n• One-on-one walkthrough\n• Customized to your business\n• Q&A with our experts\n\nWhich option sounds best for you?"
    ]
};

const quickReplies = [
    "How does pricing work?",
    "What features do you offer?",
    "How does it work?",
    "Tell me about review management",
    "Do you offer support?",
    "Can I see a demo?"
];

export function AIChatbot({ isOpen, onClose }: ChatbotProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showQuickReplies, setShowQuickReplies] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Send initial greeting
            setTimeout(() => {
                const greeting = predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)];
                addBotMessage(greeting);
            }, 500);
        }
    }, [isOpen]);

    const addBotMessage = (content: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            type: 'bot',
            content,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, newMessage]);
    };

    const addUserMessage = (content: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            content,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, newMessage]);
    };

    const getBotResponse = (userMessage: string): string => {
        const message = userMessage.toLowerCase();

        // Greeting patterns
        if (message.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
            return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)];
        }

        // Pricing patterns
        if (message.includes('price') || message.includes('cost') || message.includes('plan') || message.includes('pricing')) {
            return predefinedResponses.pricing[0];
        }

        // Features patterns
        if (message.includes('feature') || message.includes('what do you do') || message.includes('what can you do') || message.includes('capabilities')) {
            return predefinedResponses.features[0];
        }

        // How it works patterns
        if (message.includes('how') && (message.includes('work') || message.includes('start') || message.includes('begin'))) {
            return predefinedResponses.howItWorks[0];
        }

        // Review patterns
        if (message.includes('review') || message.includes('rating') || message.includes('feedback')) {
            return predefinedResponses.reviews[0];
        }

        // Support patterns
        if (message.includes('support') || message.includes('help') || message.includes('contact') || message.includes('assistance')) {
            return predefinedResponses.support[0];
        }

        // Demo patterns
        if (message.includes('demo') || message.includes('trial') || message.includes('test') || message.includes('try')) {
            return predefinedResponses.demo[0];
        }

        // Default responses for unmatched queries
        const defaultResponses = [
            "That's a great question! Let me help you with that. SARALONE is an AI-powered local SEO platform that automatically optimizes your Google Business Profile, manages reviews, and improves your local search rankings. What specific aspect would you like to know more about?",
            "I'd be happy to help! SARALONE uses AI to handle all your local SEO tasks automatically - from optimizing your Google Business Profile to responding to reviews and creating content. Would you like to know about our features, pricing, or see a demo?",
            "Thanks for asking! SARALONE makes local SEO effortless by automating everything - profile optimization, review management, content creation, and ranking improvements. What would you like to explore first?",
            "Great question! I can tell you about SARALONE's features, pricing plans, how it works, or show you a demo. What interests you most?"
        ];

        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = inputValue.trim();
        setInputValue('');
        setShowQuickReplies(false);

        // Add user message
        addUserMessage(userMessage);

        // Show typing indicator
        setIsTyping(true);

        // Simulate AI thinking time
        setTimeout(() => {
            setIsTyping(false);
            const response = getBotResponse(userMessage);
            addBotMessage(response);
        }, 1000 + Math.random() * 1000); // 1-2 seconds delay
    };

    const handleQuickReply = (reply: string) => {
        setShowQuickReplies(false);
        addUserMessage(reply);

        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const response = getBotResponse(reply);
            addBotMessage(response);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden"
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-soft-blue to-light-purple p-4 text-white">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Bot className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold">SARA AI Assistant</h3>
                            <p className="text-xs opacity-90">Always here to help</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <AnimatePresence>
                    {messages.map((message) => (
                        <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            {message.type === 'bot' && (
                                <div className="w-8 h-8 bg-gradient-to-br from-soft-blue to-light-purple rounded-full flex items-center justify-center shrink-0">
                                    <Bot className="w-4 h-4 text-white" />
                                </div>
                            )}

                            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.type === 'user'
                                ? 'bg-soft-blue text-white'
                                : 'bg-gray-100 text-gray-900'
                                }`}>
                                <div className="text-sm whitespace-pre-line">{message.content}</div>
                                <div className={`text-xs mt-1 opacity-70 ${message.type === 'user' ? 'text-white/70' : 'text-gray-500'
                                    }`}>
                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>

                            {message.type === 'user' && (
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                                    <User className="w-4 h-4 text-gray-600" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3 justify-start"
                    >
                        <div className="w-8 h-8 bg-gradient-to-br from-soft-blue to-light-purple rounded-full flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl px-4 py-3">
                            <div className="flex gap-1">
                                <motion.div
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                                    className="w-2 h-2 bg-gray-400 rounded-full"
                                />
                                <motion.div
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                                    className="w-2 h-2 bg-gray-400 rounded-full"
                                />
                                <motion.div
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                                    className="w-2 h-2 bg-gray-400 rounded-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Quick Replies */}
                {showQuickReplies && messages.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-2"
                    >
                        <p className="text-xs text-gray-500 px-2">Quick questions:</p>
                        <div className="flex flex-wrap gap-2">
                            {quickReplies.map((reply, index) => (
                                <motion.button
                                    key={reply}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    onClick={() => handleQuickReply(reply)}
                                    className="text-xs bg-soft-blue/10 text-soft-blue px-3 py-2 rounded-full hover:bg-soft-blue/20 transition-colors"
                                >
                                    {reply}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                    <div className="flex-1 relative">
                        <textarea
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me anything about SARALONE..."
                            className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-soft-blue/20 focus:border-soft-blue text-sm"
                            rows={1}
                            style={{ minHeight: '44px', maxHeight: '100px' }}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim()}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-soft-blue text-white rounded-lg flex items-center justify-center hover:bg-soft-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                    Powered by SARALONE AI • Always learning to help you better
                </p>
            </div>
        </motion.div>
    );
}

// Chatbot Trigger Button Component
export function ChatbotTrigger() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasNewMessage, setHasNewMessage] = useState(false);

    useEffect(() => {
        // Show notification after 10 seconds if chatbot hasn't been opened
        const timer = setTimeout(() => {
            if (!isOpen) {
                setHasNewMessage(true);
            }
        }, 10000);

        return () => clearTimeout(timer);
    }, [isOpen]);

    const handleOpen = () => {
        setIsOpen(true);
        setHasNewMessage(false);
    };

    return (
        <>
            <motion.button
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-4 right-4 w-16 h-16 bg-gradient-to-r from-soft-blue to-light-purple text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-3xl transition-shadow"
            >
                <MessageCircle className="w-6 h-6" />

                {/* Notification Badge */}
                {hasNewMessage && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 bg-white rounded-full"
                        />
                    </motion.div>
                )}

                {/* Floating Message Preview */}
                {hasNewMessage && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        className="absolute right-20 bottom-0 bg-white rounded-2xl shadow-xl p-4 max-w-xs border border-gray-200"
                    >
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-soft-blue to-light-purple rounded-full flex items-center justify-center shrink-0">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Hi! I'm SARA 👋</p>
                                <p className="text-xs text-gray-600 mt-1">
                                    I can help you learn about SARALONE's AI-powered local SEO features. Ask me anything!
                                </p>
                            </div>
                        </div>
                        <div className="absolute -right-2 bottom-4 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45" />
                    </motion.div>
                )}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <AIChatbot isOpen={isOpen} onClose={() => setIsOpen(false)} />
                )}
            </AnimatePresence>
        </>
    );
}