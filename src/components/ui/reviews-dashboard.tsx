import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, MessageCircle, ThumbsUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface ReviewsDashboardProps {
    className?: string;
}

export function ReviewsDashboard({ className = '' }: ReviewsDashboardProps) {
    const [activeReview, setActiveReview] = useState(0);
    const [responseStatus, setResponseStatus] = useState<'typing' | 'sent' | 'idle'>('idle');

    const reviews = [
        {
            id: 1,
            author: 'Sarah M.',
            rating: 5,
            text: 'Amazing coffee and great service! The atmosphere is perfect for working.',
            time: '2 hours ago',
            status: 'responded',
            response: 'Thank you Sarah! We\'re delighted you enjoyed your experience with us.'
        },
        {
            id: 2,
            author: 'Mike R.',
            rating: 4,
            text: 'Good coffee but the wait was a bit long during lunch rush.',
            time: '5 hours ago',
            status: 'responding',
            response: 'Hi Mike, thank you for your feedback. We\'re working on improving our service speed during peak hours.'
        },
        {
            id: 3,
            author: 'Emma L.',
            rating: 5,
            text: 'Best latte in town! The baristas really know their craft.',
            time: '1 day ago',
            status: 'new',
            response: ''
        }
    ];

    const stats = {
        totalReviews: 127,
        avgRating: 4.8,
        responseRate: 98,
        responseTime: '12m'
    };

    // Simulate review response typing
    useEffect(() => {
        const interval = setInterval(() => {
            if (responseStatus === 'idle') {
                setResponseStatus('typing');
                setTimeout(() => setResponseStatus('sent'), 2000);
                setTimeout(() => setResponseStatus('idle'), 4000);
            }
        }, 8000);

        return () => clearInterval(interval);
    }, [responseStatus]);

    // Cycle through reviews
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveReview(prev => (prev + 1) % reviews.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [reviews.length]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 ${className}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Review Manager</h3>
                        <p className="text-sm text-gray-500">AI-powered responses</p>
                    </div>
                </div>
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-500 rounded-full"
                />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                >
                    <div className="text-2xl font-bold text-gray-900">{stats.totalReviews}</div>
                    <div className="text-xs text-gray-500">Total Reviews</div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <div className="text-2xl font-bold text-yellow-600 flex items-center justify-center gap-1">
                        {stats.avgRating} <Star className="w-4 h-4 fill-yellow-400" />
                    </div>
                    <div className="text-xs text-gray-500">Avg Rating</div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <div className="text-2xl font-bold text-green-600">{stats.responseRate}%</div>
                    <div className="text-xs text-gray-500">Response Rate</div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <div className="text-2xl font-bold text-blue-600">{stats.responseTime}</div>
                    <div className="text-xs text-gray-500">Avg Response</div>
                </motion.div>
            </div>

            {/* Active Review */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeReview}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50 rounded-xl p-4 mb-4"
                >
                    <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                                {reviews[activeReview].author.charAt(0)}
                            </span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-gray-900">{reviews[activeReview].author}</span>
                                <div className="flex gap-1">
                                    {Array.from({ length: reviews[activeReview].rating }, (_, i) => (
                                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-xs text-gray-500">{reviews[activeReview].time}</span>
                            </div>
                            <p className="text-sm text-gray-700">{reviews[activeReview].text}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            {reviews[activeReview].status === 'responded' && (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                            )}
                            {reviews[activeReview].status === 'responding' && (
                                <Clock className="w-4 h-4 text-yellow-500" />
                            )}
                            {reviews[activeReview].status === 'new' && (
                                <AlertCircle className="w-4 h-4 text-red-500" />
                            )}
                        </div>
                    </div>

                    {/* AI Response */}
                    {reviews[activeReview].response && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="ml-13 bg-white rounded-lg p-3 border-l-4 border-blue-500"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-medium text-blue-600">SARALONE AI Response</span>
                                {responseStatus === 'typing' && (
                                    <motion.div
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="flex gap-1"
                                    >
                                        <div className="w-1 h-1 bg-blue-500 rounded-full" />
                                        <div className="w-1 h-1 bg-blue-500 rounded-full" />
                                        <div className="w-1 h-1 bg-blue-500 rounded-full" />
                                    </motion.div>
                                )}
                                {responseStatus === 'sent' && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="text-green-500"
                                    >
                                        <CheckCircle className="w-3 h-3" />
                                    </motion.div>
                                )}
                            </div>
                            <p className="text-sm text-gray-700">{reviews[activeReview].response}</p>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-blue-500 text-white rounded-lg py-2 px-4 text-sm font-medium flex items-center justify-center gap-2"
                >
                    <MessageCircle className="w-4 h-4" />
                    Auto-Respond
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gray-100 text-gray-700 rounded-lg py-2 px-4 text-sm font-medium flex items-center justify-center gap-2"
                >
                    <ThumbsUp className="w-4 h-4" />
                    Approve All
                </motion.button>
            </div>
        </motion.div>
    );
}