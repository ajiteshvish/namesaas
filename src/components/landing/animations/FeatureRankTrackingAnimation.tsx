import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MapPin, TrendingUp } from 'lucide-react';

const locations = [
  { id: 1, name: 'Downtown', position: 3, improving: false },
  { id: 2, name: 'Midtown', position: 2, improving: false },
  { id: 3, name: 'Suburbs', position: 5, improving: false },
  { id: 4, name: 'Business District', position: 1, improving: false },
];

const improvedLocations = [
  { id: 1, name: 'Downtown', position: 1, improving: true },
  { id: 2, name: 'Midtown', position: 1, improving: true },
  { id: 3, name: 'Suburbs', position: 2, improving: true },
  { id: 4, name: 'Business District', position: 1, improving: false },
];

export function FeatureRankTrackingAnimation() {
  const [isImproved, setIsImproved] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImproved(prev => !prev);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentLocations = isImproved ? improvedLocations : locations;

  return (
    <div className="soft-card p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Rank Tracking</h4>
            <p className="text-sm text-muted-foreground">4 locations monitored</p>
          </div>
        </div>
        {isImproved && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-1.5 text-primary bg-primary/10 px-3 py-1.5 rounded-full"
          >
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">All improving</span>
          </motion.div>
        )}
      </div>

      {/* Map Visualization */}
      <div className="relative bg-secondary/50 rounded-2xl p-6 mb-6 h-48 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(5)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 border-t border-border" style={{ top: `${(i + 1) * 20}%` }} />
          ))}
          {[...Array(5)].map((_, i) => (
            <div key={`v-${i}`} className="absolute top-0 bottom-0 border-l border-border" style={{ left: `${(i + 1) * 20}%` }} />
          ))}
        </div>

        {/* Location pins */}
        {currentLocations.map((loc, index) => {
          const positions = [
            { x: 20, y: 25 },
            { x: 65, y: 40 },
            { x: 35, y: 70 },
            { x: 75, y: 20 },
          ];
          const pos = positions[index];
          
          return (
            <motion.div
              key={loc.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="absolute"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            >
              <motion.div
                animate={loc.improving ? { y: [0, -4, 0] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
                className={`relative w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-soft ${
                  loc.position === 1
                    ? 'bg-primary text-primary-foreground'
                    : loc.position <= 3
                    ? 'bg-amber-500 text-white'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                #{loc.position}
                {loc.improving && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <TrendingUp className="w-3 h-3 text-white" />
                  </motion.div>
                )}
              </motion.div>
              <p className="text-xs text-muted-foreground mt-1 text-center whitespace-nowrap">
                {loc.name}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-primary" />
          <span className="text-muted-foreground">#1 Position</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-amber-500" />
          <span className="text-muted-foreground">Top 3</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-muted" />
          <span className="text-muted-foreground">Improving</span>
        </div>
      </div>
    </div>
  );
}
