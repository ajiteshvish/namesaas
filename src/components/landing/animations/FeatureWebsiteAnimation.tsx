import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Globe, Star, Image, Mail, RefreshCw } from 'lucide-react';

export function FeatureWebsiteAnimation() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [reviewCount, setReviewCount] = useState(127);
  const [lastUpdate, setLastUpdate] = useState('Just now');

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      setTimeout(() => {
        setReviewCount(prev => prev + 1);
        setLastUpdate('Just now');
        setIsUpdating(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="soft-card p-6 md:p-8">
      {/* Browser Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-amber-400/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 flex items-center gap-2 bg-secondary rounded-lg px-3 py-1.5">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">yourbusiness.name.site</span>
        </div>
      </div>

      {/* Website Preview */}
      <div className="bg-secondary/30 rounded-2xl overflow-hidden">
        {/* Hero */}
        <div className="h-24 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
          <div className="text-center">
            <h4 className="font-bold text-foreground">Your Business Name</h4>
            <p className="text-sm text-muted-foreground">Premium Coffee Shop</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="p-4 space-y-4">
          {/* Reviews Section */}
          <motion.div
            animate={isUpdating ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 0.3 }}
            className={`bg-background rounded-xl p-4 border transition-colors ${
              isUpdating ? 'border-primary/50' : 'border-border'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-semibold text-foreground">Reviews</span>
              </div>
              {isUpdating && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <RefreshCw className="w-4 h-4 text-primary" />
                </motion.div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <div>
                <motion.p
                  key={reviewCount}
                  initial={{ scale: 1.2, color: 'hsl(var(--primary))' }}
                  animate={{ scale: 1, color: 'hsl(var(--foreground))' }}
                  className="text-2xl font-bold"
                >
                  {reviewCount}
                </motion.p>
                <p className="text-xs text-muted-foreground">Total reviews</p>
              </div>
              <div className="flex-1 h-8 bg-secondary rounded-lg overflow-hidden">
                <motion.div
                  animate={{ width: ['60%', '75%', '60%'] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="h-full bg-primary/30 rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Gallery Mock */}
          <div className="bg-background rounded-xl p-4 border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Image className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Gallery</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square bg-secondary rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Contact Mock */}
          <div className="bg-background rounded-xl p-4 border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Contact</span>
            </div>
            <div className="h-16 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Interactive map</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span>Auto-syncing enabled</span>
        </div>
        <span className="text-xs text-muted-foreground">Updated: {lastUpdate}</span>
      </div>
    </div>
  );
}
