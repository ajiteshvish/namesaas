import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, TrendingUp, MessageCircle, Globe, BarChart3, Users, Calendar, Bell } from 'lucide-react';

interface DashboardProps {
    variant?: 'analytics' | 'reviews' | 'seo' | 'social';
    className?: string;
}

export function AnimatedDashboard({ variant = 'analytics', className = '' }: DashboardProps) {
    const [currentNotification, setCurrentNotification] = useState(0);
    const [metrics, setMetrics] = useState({
        seoScore: 94,
        reviews: 127,
        ranking: 3,
        traffic: 47
    });

    const notifications = [
        {
            icon: TrendingUp,
            title: 'Ranking improved for "best coffee shop"',
            time: '2m ago',
            color: 'text-blue-600'
        },
        {
            icon: MessageCircle,
            title: 'New review replied automatically',
            time: '15m ago',
            color: 'text-green-600'
        },
        {
            icon: Globe,
            title: 'Website content updated',
            time: '1h ago',
            color: 'text-purple-600'
        },
        {
            icon: Bell,
            title: 'SEO audit completed',
            time: '2h ago',
            color: 'text-orange-600'
        }
    ];

    // Animate metrics
    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(prev => ({
                seoScore: Math.min(100, prev.seoScore + Math.random() * 2 - 1),
                reviews: prev.reviews + Math.floor(Math.random() * 3),
                ranking: Math.max(1, Math.min(10, prev.ranking + Math.random() * 2 - 1)),
                traffic: Math.max(0, prev.traffic + Math.random() * 10 - 5)
            }));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Cycle through notifications
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNotification(prev => (prev + 1) % notifications.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [notifications.length]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 ${className}`}
        >
            {/* Browser Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 ml-4">
                    <span className="text-xs text-gray-500">saralone.com/dashboard</span>
                </div>
            </div>

            {/* Rating Badge */}
            <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-6 right-6 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-200"
            >
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                    <div>
                        <div className="text-lg font-bold text-gray-900">4.9 Rating</div>
                        <div className="text-sm text-gray-500">+12 this week</div>
                    </div>
                </div>
            </motion.div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gray-50 rounded-xl p-3 sm:p-4 text-center"
                >
                    <motion.div
                        key={metrics.seoScore}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        className="text-3xl font-bold text-blue-600 mb-1"
                    >
                        {Math.round(metrics.seoScore)}
                    </motion.div>
                    <div className="text-sm text-gray-600">SEO Score</div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gray-50 rounded-xl p-3 sm:p-4 text-center"
                >
                    <motion.div
                        key={metrics.reviews}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        className="text-3xl font-bold text-gray-900 mb-1"
                    >
                        {metrics.reviews}
                    </motion.div>
                    <div className="text-sm text-gray-600">Reviews</div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gray-50 rounded-xl p-3 sm:p-4 text-center"
                >
                    <motion.div
                        key={metrics.ranking}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        className="text-3xl font-bold text-gray-900 mb-1"
                    >
                        #{Math.round(metrics.ranking)}
                    </motion.div>
                    <div className="text-sm text-gray-600">Rankings</div>
                </motion.div>
            </div>

            {/* Activity Feed */}
            <div className="space-y-3 mb-6">
                <AnimatePresence mode="wait">
                    {notifications.slice(currentNotification, currentNotification + 3).map((notification, index) => {
                        const Icon = notification.icon;
                        return (
                            <motion.div
                                key={`${currentNotification}-${index}`}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 20, opacity: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                            >
                                <div className={`w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center`}>
                                    <Icon className={`w-4 h-4 ${notification.color}`} />
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-900">{notification.title}</div>
                                    <div className="text-xs text-gray-500">{notification.time}</div>
                                </div>
                                {index === 0 && (
                                    <motion.div
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-2 h-2 bg-blue-500 rounded-full"
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="flex items-center justify-between">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2"
                >
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <div className="text-lg font-bold text-purple-700">+{Math.round(metrics.traffic)}%</div>
                        <div className="text-xs text-purple-600">Traffic growth</div>
                    </div>
                </motion.div>

                <div className="flex gap-1">
                    {Array.from({ length: 12 }, (_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.9 + i * 0.05 }}
                            className={`w-2 rounded-full ${i < 8 ? 'bg-blue-500 h-4' : 'bg-gray-300 h-2'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}