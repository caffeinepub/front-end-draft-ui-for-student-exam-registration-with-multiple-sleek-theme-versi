import { CheckCircle2 } from 'lucide-react';

interface StepHeaderProps {
  step: number;
  totalSteps: number;
  title: string;
}

export function StepHeader({ step, totalSteps, title }: StepHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors ${
              s < step 
                ? 'bg-primary border-primary text-primary-foreground' 
                : s === step 
                ? 'border-primary text-primary font-semibold' 
                : 'border-muted-foreground/30 text-muted-foreground'
            }`}>
              {s < step ? <CheckCircle2 className="h-4 w-4" /> : s}
            </div>
            {s < totalSteps && (
              <div className={`flex-1 h-0.5 mx-2 ${
                s < step ? 'bg-primary' : 'bg-muted-foreground/30'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">Step {step} of {totalSteps}</p>
      </div>
    </div>
  );
}
