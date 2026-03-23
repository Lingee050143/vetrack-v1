import React from 'react';
import { cn } from '../lib/utils';
import { Sparkles, AlertTriangle, CheckCircle2, Loader2 } from 'lucide-react';

interface AICardProps {
  state: 'idle' | 'processing' | 'result' | 'error';
  riskLevel?: 'safe' | 'alert';
  title?: string;
  description?: string;
  result?: React.ReactNode;
  recommendation?: string;
  className?: string;
}

const AICard: React.FC<AICardProps> = ({
  state,
  riskLevel = 'safe',
  title = 'AI Pet Diagnosis',
  description = 'AI is analyzing your pet\'s symptoms...',
  result,
  recommendation,
  className
}) => {
  const bgColors = {
    idle: 'bg-surface-base dark:bg-surface-base border-neutral-200 dark:border-neutral-700',
    processing: 'bg-ai-processing text-white border-transparent',
    result: riskLevel === 'safe' ? 'bg-ai-result text-white border-transparent' : 'bg-ai-alert text-white border-transparent',
    error: 'bg-error-500 text-white border-transparent',
  };

  const Icons = {
    idle: <Sparkles className="w-6 h-6 text-ai-base" />,
    processing: <Loader2 className="w-6 h-6 animate-spin text-white" />,
    result: riskLevel === 'safe' ? <CheckCircle2 className="w-6 h-6 text-white" /> : <AlertTriangle className="w-6 h-6 text-white" />,
    error: <AlertTriangle className="w-6 h-6 text-white" />,
  };

  return (
    <div
      className={cn(
        'p-4 rounded-lg flex flex-col gap-3 transition-all duration-base border shadow-lg relative overflow-hidden',
        bgColors[state],
        className
      )}
    >
      {/* Decorative Gradient Background for AI feel */}
      {state !== 'idle' && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      )}

      <div className="flex items-center justify-between">
        <h3 className={cn('text-h3', state === 'idle' ? 'text-neutral-900' : 'text-white')}>
          {title}
        </h3>
        {Icons[state]}
      </div>

      <div className={cn('text-body-md', state === 'idle' ? 'text-neutral-500' : 'text-white/90')}>
        {state === 'processing' ? 'Processing data...' : description}
      </div>

      {state === 'result' && (
        <div className="mt-2 space-y-3">
          <div className="bg-white/20 p-3 rounded-md backdrop-blur-sm border border-white/30">
            {result}
          </div>
          {recommendation && (
            <div className="p-3 bg-neutral-900/10 rounded-md border border-white/20">
              <span className="text-caption font-bold uppercase block mb-1">Recommendation</span>
              <p className="text-body-sm">{recommendation}</p>
            </div>
          )}
        </div>
      )}

      {state === 'idle' && (
        <button className="mt-4 px-4 py-2 bg-ai-base text-white rounded-md text-body-md font-semibold hover:opacity-90 active:scale-95 transition-all">
          Start AI Diagnosis
        </button>
      )}
    </div>
  );
};

export default AICard;
