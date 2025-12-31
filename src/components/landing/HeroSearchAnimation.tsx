import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, Star, MapPin, ArrowUp, CheckCircle2 } from 'lucide-react';

interface RankingItem {
  name: string;
  position: number;
  rating: number;
  reviews: number;
  highlight?: boolean;
}

const rankings: RankingItem[] = [
  { name: 'Your Business', position: 3, rating: 4.2, reviews: 48 },
  { name: 'Competitor A', position: 1, rating: 4.8, reviews: 127 },
  { name: 'Competitor B', position: 2, rating: 4.5, reviews: 89 },
];

const improvedRankings: RankingItem[] = [
  { name: 'Your Business', position: 1, rating: 4.9, reviews: 156, highlight: true },
  { name: 'Competitor A', position: 2, rating: 4.8, reviews: 127 },
  { name: 'Competitor B', position: 3, rating: 4.5, reviews: 89 },
];

export function HeroSearchAnimation() {
  const [isImproved, setIsImproved] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [searchText, setSearchText] = useState('');
  const fullSearchText = 'best coffee shop near me';

  useEffect(() => {
    // Typing animation
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex <= fullSearchText.length) {
        setSearchText(fullSearchText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        // Start the ranking improvement cycle
        setTimeout(() => {
          setIsImproved(true);
        }, 1500);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (!isTyping) {
      const cycleInterval = setInterval(() => {
        setIsImproved(prev => !prev);
      }, 4000);
      return () => clearInterval(cycleInterval);
    }
  }, [isTyping]);

  const currentRankings = isImproved ? improvedRankings : rankings;
  const sortedRankings = [...currentRankings].sort((a, b) => a.position - b.position);

  return (
    <div className="relative">
      {/* Main Search Card */}
      <div className="soft-card p-6 md:p-8">
        {/* Search Bar */}
        <div className="flex items-center gap-3 bg-secondary rounded-2xl px-5 py-4 mb-6">
          <Search className="w-5 h-5 text-muted-foreground" />
          <span className="text-foreground flex-1">
            {searchText}
            {isTyping && <span className="animate-pulse">|</span>}
          </span>
        </div>

        {/* Results */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {sortedRankings.map((item, index) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: isTyping ? 0 : index * 0.1,
                  layout: { duration: 0.5 }
                }}
                className={`relative p-4 rounded-2xl border transition-all duration-500 ${
                  item.highlight 
                    ? 'bg-primary/5 border-primary/30 shadow-soft' 
                    : 'bg-secondary/50 border-transparent'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Position Badge */}
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold ${
                    item.highlight 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {item.position}
                  </div>

                  {/* Business Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold ${item.highlight ? 'text-primary' : 'text-foreground'}`}>
                        {item.name}
                      </span>
                      {item.highlight && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full"
                        >
                          <ArrowUp className="w-3 h-3" />
                          +2
                        </motion.span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(item.rating) 
                                ? 'text-amber-400 fill-amber-400' 
                                : 'text-muted-foreground/30'
                            }`} 
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">
                          {item.rating} ({item.reviews})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Location Pin */}
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                </div>

                {/* Shimmer effect for highlighted card */}
                {item.highlight && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Status Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-6 pt-4 border-t border-border"
        >
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>NAME is optimizing</span>
            </div>
            {isImproved && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-1.5 text-primary font-medium"
              >
                <CheckCircle2 className="w-4 h-4" />
                Rank improved!
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Floating decoration */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-4 bg-background soft-card p-3 shadow-elevated"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Star className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">4.9 Rating</p>
            <p className="text-xs text-muted-foreground">+108 reviews</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
