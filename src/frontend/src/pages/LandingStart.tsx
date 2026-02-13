import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AppShell } from '../components/layout/AppShell';
import { Calendar, Clock, FileCheck } from 'lucide-react';

interface LandingStartProps {
  onStart: () => void;
}

export function LandingStart({ onStart }: LandingStartProps) {
  return (
    <AppShell>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Register for Your Exam
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Complete your exam registration in minutes. Select your exam, choose a session, and confirm your details.
          </p>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Quick & Simple Process</CardTitle>
            <CardDescription>Three easy steps to complete your registration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 shrink-0">
                <FileCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Select Your Exam</h3>
                <p className="text-sm text-muted-foreground">
                  Choose from available exams in your program
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 shrink-0">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Pick a Session</h3>
                <p className="text-sm text-muted-foreground">
                  Select a date and time that works for you
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Confirm & Done</h3>
                <p className="text-sm text-muted-foreground">
                  Review your details and complete registration
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center pt-4">
          <Button size="lg" onClick={onStart} className="px-12">
            Start Registration
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
