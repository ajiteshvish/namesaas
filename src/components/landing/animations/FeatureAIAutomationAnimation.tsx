import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Bot, Send, Check, MessageSquare, Sparkles } from 'lucide-react';

const automationSteps = [
  { id: 1, type: 'suggestion', text: 'New review detected! Generating personalized response...' },
  { id: 2, type: 'response', text: '"Thank you so much, Sarah! We\'re thrilled you enjoyed your visit. See you again soon!"' },
  { id: 3, type: 'post', text: 'Weekly post scheduled: "Fresh arrivals this weekend! 🌟"' },
  { id: 4, type: 'published', text: 'Content published successfully!' },
];

export function FeatureAIAutomationAnimation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        const next = (prev + 1) % (automationSteps.length + 2);
        if (next === 0) {
          setVisibleSteps([]);
        } else if (next <= automationSteps.length) {
          setVisibleSteps(arr => [...arr, next]);
        }
        return next;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="soft-card p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">AI Assistant</h4>
            <p className="text-sm text-muted-foreground">Always working for you</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Active</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="bg-secondary/30 rounded-2xl p-4 min-h-[240px] space-y-3">
        <AnimatePresence mode="popLayout">
          {automationSteps.map((step, index) => {
            if (!visibleSteps.includes(step.id)) return null;
            
            const isAI = step.type === 'suggestion' || step.type === 'response' || step.type === 'post';
            
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className={`flex gap-3 ${isAI ? '' : 'justify-end'}`}
              >
                {isAI && (
                  <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  isAI 
                    ? 'bg-background border border-border shadow-soft' 
                    : 'bg-primary text-primary-foreground'
                }`}>
                  <div className="flex items-start gap-2">
                    {step.type === 'published' && (
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    )}
                    {step.type === 'response' && (
                      <MessageSquare className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    )}
                    <p className={`text-sm ${isAI ? 'text-foreground' : 'text-primary-foreground'}`}>
                      {step.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Typing indicator */}
        {currentStep > 0 && currentStep <= automationSteps.length && !visibleSteps.includes(currentStep) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="bg-background border border-border rounded-2xl p-3 shadow-soft">
              <div className="flex gap-1">
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                    className="w-2 h-2 rounded-full bg-primary/50"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Mock */}
      <div className="mt-4 flex items-center gap-3 bg-secondary rounded-2xl px-4 py-3">
        <p className="text-muted-foreground text-sm flex-1">AI handles this automatically...</p>
        <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
          <Send className="w-4 h-4 text-primary" />
        </div>
      </div>
    </div>
  );
}
