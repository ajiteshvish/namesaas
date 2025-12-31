import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calendar, Clock, Image, Video, FileText, Send, CheckCircle, Eye } from 'lucide-react';

interface SocialSchedulerProps {
    className?: string;
}

export function SocialScheduler({ className = '' }: SocialSchedulerProps) {
    const [currentPost, setCurrentPost] = useState(0);
    const [publishingStatus, setPublishingStatus] = useState<'idle' | 'publishing' | 'published'>('idle');

    const posts = [
        {
            id: 1,
            type: 'image',
            content: 'Fresh roasted coffee beans arriving this morning! ☕️ #FreshCoffee #MorningBrew',
            platform: 'Instagram',
            scheduledTime: '9:00 AM',
            status: 'scheduled',
            engagement: { likes: 45, comments: 12, shares: 8 }
        },
        {
            id: 2,
            type: 'video',
            content: 'Watch our barista create the perfect latte art! 🎨 What\'s your favorite design?',
            platform: 'TikTok',
            scheduledTime: '2:00 PM',
            status: 'publishing',
            engagement: { likes: 128, comments: 23, shares: 15 }
        },
        {
            id: 3,
            type: 'text',
            content: 'Happy Friday! What\'s your go-to weekend coffee order? Tell us in the comments! 🌟',
            platform: 'Facebook',
            scheduledTime: '5:00 PM',
            status: 'draft',
            engagement: { likes: 67, comments: 34, shares: 12 }
        }
    ];

    const weeklyStats = {
        postsScheduled: 24,
        engagement: '+32%',
        reach: '12.5K',
        clicks: 456
    };

    // Simulate publishing process
    useEffect(() => {
        const interval = setInterval(() => {
            if (publishingStatus === 'idle') {
                setPublishingStatus('publishing');
                setTimeout(() => setPublishingStatus('published'), 3000);
                setTimeout(() => setPublishingStatus('idle'), 6000);
            }
        }, 10000);

        return () => clearInterval(interval);
    }, [publishingStatus]);

    // Cycle through posts
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPost(prev => (prev + 1) % posts.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [posts.length]);

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'image': return Image;
            case 'video': return Video;
            default: return FileText;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'scheduled': return 'text-blue-600 bg-blue-100';
            case 'publishing': return 'text-yellow-600 bg-yellow-100';
            case 'published': return 'text-green-600 bg-green-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`bg-white rounded-2xl shadow-xl border border-gray-200 p-6 ${className}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Content Scheduler</h3>
                        <p className="text-sm text-gray-500">AI-generated posts</p>
                    </div>
                </div>
                <motion.div
                    animate={{
                        scale: publishingStatus === 'publishing' ? [1, 1.2, 1] : 1,
                        backgroundColor: publishingStatus === 'published' ? '#10B981' : '#6366F1'
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-3 h-3 bg-purple-500 rounded-full"
                />
            </div>

            {/* Weekly Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                >
                    <div className="text-2xl font-bold text-gray-900">{weeklyStats.postsScheduled}</div>
                    <div className="text-xs text-gray-500">Posts Scheduled</div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <div className="text-2xl font-bold text-green-600">{weeklyStats.engagement}</div>
                    <div className="text-xs text-gray-500">Engagement</div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <div className="text-2xl font-bold text-blue-600">{weeklyStats.reach}</div>
                    <div className="text-xs text-gray-500">Weekly Reach</div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <div className="text-2xl font-bold text-purple-600">{weeklyStats.clicks}</div>
                    <div className="text-xs text-gray-500">Link Clicks</div>
                </motion.div>
            </div>

            {/* Current Post Preview */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPost}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50 rounded-xl p-4 mb-4"
                >
                    <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                            {(() => {
                                const Icon = getTypeIcon(posts[currentPost].type);
                                return <Icon className="w-5 h-5 text-white" />;
                            })()}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium text-gray-900">{posts[currentPost].platform}</span>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(posts[currentPost].status)}`}>
                                    {posts[currentPost].status}
                                </span>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <Clock className="w-3 h-3" />
                                    {posts[currentPost].scheduledTime}
                                </div>
                            </div>
                            <p className="text-sm text-gray-700 mb-3">{posts[currentPost].content}</p>

                            {/* Engagement Preview */}
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span>❤️ {posts[currentPost].engagement.likes}</span>
                                <span>💬 {posts[currentPost].engagement.comments}</span>
                                <span>🔄 {posts[currentPost].engagement.shares}</span>
                            </div>
                        </div>
                    </div>

                    {/* Publishing Status */}
                    {publishingStatus === 'publishing' && currentPost === 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg border border-yellow-200"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                                <Send className="w-4 h-4 text-yellow-600" />
                            </motion.div>
                            <span className="text-sm text-yellow-700">Publishing to {posts[currentPost].platform}...</span>
                        </motion.div>
                    )}

                    {publishingStatus === 'published' && currentPost === 1 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-2 p-2 bg-green-50 rounded-lg border border-green-200"
                        >
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-green-700">Successfully published!</span>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Calendar Preview */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-medium text-gray-900">This Week</h4>
                    <Eye className="w-4 h-4 text-gray-500" />
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                        <div key={day} className="text-center">
                            <div className="text-xs text-gray-500 mb-1">{day}</div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium ${index < 5 ? 'bg-purple-100 text-purple-600' : 'bg-gray-200 text-gray-500'
                                    }`}
                            >
                                {index < 5 ? index + 3 : 0}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-purple-500 text-white rounded-lg py-2 px-4 text-sm font-medium flex items-center justify-center gap-2"
                >
                    <Send className="w-4 h-4" />
                    Schedule Posts
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gray-100 text-gray-700 rounded-lg py-2 px-4 text-sm font-medium flex items-center justify-center gap-2"
                >
                    <Calendar className="w-4 h-4" />
                    View Calendar
                </motion.button>
            </div>
        </motion.div>
    );
}