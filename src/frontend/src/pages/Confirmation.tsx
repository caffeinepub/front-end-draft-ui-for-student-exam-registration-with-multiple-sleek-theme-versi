import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AppShell } from '../components/layout/AppShell';
import { CheckCircle2 } from 'lucide-react';

interface ConfirmationProps {
  onReset: () => void;
}

export function Confirmation({ onReset }: ConfirmationProps) {
  return (
    <AppShell>
      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="border-2 border-primary/20">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Registration Complete!</CardTitle>
            <CardDescription className="text-base">
              Your exam registration has been successfully submitted
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold">What's Next?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>You will receive a confirmation email shortly with your exam details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Please arrive 15 minutes before your scheduled exam time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Bring a valid student ID and any required materials</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-center pt-4">
              <Button onClick={onReset} variant="outline">
                Register for Another Exam
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
