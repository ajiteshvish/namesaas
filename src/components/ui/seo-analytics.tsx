import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, TrendingUp, Target, Globe, BarChart3, ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface SEOAnalyticsProps {
    className?: string;
}

export function SEOAnalytics({ className = '' }: SEOAnalyticsProps) {
    const [currentKeyword, setCurrentKeyword] = useState(0);
    const [scanningStatus, setScanningStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');

    const keywords = [
        {
            keyword: 'best coffee shop',
            position: 3,
            change: +2,
            volume: '2.1K',
            difficulty: 'Medium'
        },
        {
            keyword: 'coffee near me',
            position: 7,
            change: +5,
            volume: '8.5K',
            difficulty: 'High'
        },
        {
            keyword: 'specialty coffee',
            position: 12,
            change: -1,
            volume: '1.8K',
            difficulty: 'Low'
        },
        {
            keyword: 'artisan coffee',
            position: 5,
            change: 0,
            volume: '950',
            difficulty: 'Medium'
        }
    ];

    const metrics = {
        organicTraffic: 12547,
        avgPosition: 8.2,
        clickThroughRate: 3.4,
        impressions: 45230
    };

    const recentChanges = [
        { keyword: 'coffee shop downtown', oldPos: 15, newPos: 8, change: +7 },
        { keyword: 'fresh roasted coffee', oldPos: 23, newPos: 18, change: +5 },
        { keyword: 'local coffee roaster', oldPos: 12, newPos: 9, change: +3 }
    ];

    // Simulate SEO scanning
    useEffect(() => {
        const interval = setInterval(() => {
            if (scanningStatus === 'idle') {
                setScanningStatus('scanning');
                setTimeout(() => setScanningStatus('complete'), 4000);
                setTimeout(() => setScanningStatus('idle'), 8000);
            }
        }, 12000);

        return () => clearInterval(interval);
    }, [scanningStatus]);

    // Cycle through keywords
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentKeyword(prev => (prev + 1) % keywords.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [keywords.length]);

    const getChangeIcon = (change: number) => {
        if (change > 0) return ArrowUp;
        if (change < 0) return ArrowDown;
        return Minus;
    };

    const getChangeColor = (change: number) => {
        if (change > 0) return 'text-green-600';
        if (change < 0) return 'text-red-600';
        return 'text-gray-600';
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
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <Search className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">SEO Analytics</h3>
                        <p className="text-sm text-gray-500">Real-time rankings</p>
                    </div>
                </div>
                <motion.div
                    animate={{
                        scale: scanningStatus === 'scanning' ? [1, 1.2, 1] : 1,
                        backgroundColor: scanningStatus === 'complete' ? '#10B981' : '#059669'
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-3 h-3 bg-green-500 rounded-full"
                />
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                >
                    <div className="text-2xl font-bold text-gray-900">{metrics.organicTraffic.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Organic Traffic</div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <div className="text-2xl font-bold text-blue-600">{metrics.avgPosition}</div>
                    <div className="text-xs text-gray-500">Avg Position</div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <div className="text-2xl font-bold text-green-600">{metrics.clickThroughRate}%</div>
                    <div className="text-xs text-gray-500">CTR</div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <div className="text-2xl font-bold text-purple-600">{metrics.impressions.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Impressions</div>
                </motion.div>
            </div>

            {/* Keyword Tracking */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-medium text-gray-900">Keyword Rankings</h4>
                    {scanningStatus === 'scanning' && (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="text-green-600"
                        >
                            <Search className="w-4 h-4" />
                        </motion.div>
                    )}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentKeyword}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-between p-3 bg-white rounded-lg"
                    >
                        <div className="flex-1">
                            <div className="font-medium text-gray-900 mb-1">
                                {keywords[currentKeyword].keyword}
                            </div>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                                <span>Volume: {keywords[currentKeyword].volume}</span>
                                <span>Difficulty: {keywords[currentKeyword].difficulty}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <div className="text-2xl font-bold text-gray-900">
                                    #{keywords[currentKeyword].position}
                                </div>
                                <div className={`flex items-center gap-1 text-xs ${getChangeColor(keywords[currentKeyword].change)}`}>
                                    {(() => {
                                        const Icon = getChangeIcon(keywords[currentKeyword].change);
                                        return <Icon className="w-3 h-3" />;
                                    })()}
                                    {Math.abs(keywords[currentKeyword].change)}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Recent Improvements */}
            <div className="bg-green-50 rounded-xl p-4 mb-4">
                <h4 className="text-sm font-medium text-green-800 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Recent Improvements
                </h4>
                <div className="space-y-2">
                    {recentChanges.map((change, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-between text-sm"
                        >
                            <span className="text-gray-700">{change.keyword}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">#{change.oldPos}</span>
                                <ArrowUp className="w-3 h-3 text-green-600" />
                                <span className="font-medium text-green-700">#{change.newPos}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Scanning Status */}
            {scanningStatus !== 'idle' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg border ${scanningStatus === 'scanning'
                            ? 'bg-blue-50 border-blue-200'
                            : 'bg-green-50 border-green-200'
                        }`}
                >
                    <div className="flex items-center gap-2">
                        {scanningStatus === 'scanning' ? (
                            <>
                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="w-2 h-2 bg-blue-500 rounded-full"
                                />
                                <span className="text-sm text-blue-700">Scanning search results...</span>
                            </>
                        ) : (
                            <>
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                <span className="text-sm text-green-700">Scan complete! Found 3 ranking improvements</span>
                            </>
                        )}
                    </div>
                </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-green-500 text-white rounded-lg py-2 px-4 text-sm font-medium flex items-center justify-center gap-2"
                >
                    <Target className="w-4 h-4" />
                    Optimize Keywords
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gray-100 text-gray-700 rounded-lg py-2 px-4 text-sm font-medium flex items-center justify-center gap-2"
                >
                    <BarChart3 className="w-4 h-4" />
                    View Report
                </motion.button>
            </div>
        </motion.div>
    );
}