import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Check, Circle, ChevronRight, Sparkles } from 'lucide-react';

const tasks = [
  { id: 1, title: 'Add business hours', priority: 'High', completed: false },
  { id: 2, title: 'Upload 5 more photos', priority: 'Medium', completed: false },
  { id: 3, title: 'Add service descriptions', priority: 'High', completed: false },
  { id: 4, title: 'Respond to pending reviews', priority: 'Medium', completed: false },
  { id: 5, title: 'Update business categories', priority: 'Low', completed: false },
];

export function FeatureEnhancementAnimation() {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [activeTask, setActiveTask] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedTasks(prev => {
        if (prev.length >= tasks.length) {
          // Reset the cycle
          setActiveTask(1);
          return [];
        }
        const nextTask = prev.length + 1;
        setActiveTask(nextTask + 1);
        return [...prev, nextTask];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="soft-card p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Enhancement Tasks</h4>
            <p className="text-sm text-muted-foreground">
              {completedTasks.length}/{tasks.length} completed
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-primary">
            {Math.round((completedTasks.length / tasks.length) * 100)}%
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-secondary rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(completedTasks.length / tasks.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Task List */}
      <div className="space-y-3">
        <AnimatePresence>
          {tasks.map((task) => {
            const isCompleted = completedTasks.includes(task.id);
            const isActive = activeTask === task.id;
            
            return (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                  isCompleted
                    ? 'bg-primary/5 border-primary/20'
                    : isActive
                    ? 'bg-secondary border-primary/30 shadow-soft'
                    : 'bg-secondary/50 border-transparent'
                }`}
              >
                {/* Checkbox */}
                <motion.div
                  animate={isCompleted ? { scale: [1, 1.2, 1] } : {}}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                    isCompleted
                      ? 'bg-primary'
                      : 'border-2 border-border'
                  }`}
                >
                  {isCompleted && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    >
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </motion.div>
                  )}
                </motion.div>

                {/* Task Info */}
                <div className="flex-1">
                  <p className={`font-medium transition-colors ${
                    isCompleted ? 'text-muted-foreground line-through' : 'text-foreground'
                  }`}>
                    {task.title}
                  </p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    task.priority === 'High'
                      ? 'bg-destructive/10 text-destructive'
                      : task.priority === 'Medium'
                      ? 'bg-amber-500/10 text-amber-600'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {task.priority}
                  </span>
                </div>

                {/* Arrow */}
                {isActive && !isCompleted && (
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
