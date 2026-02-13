import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AppShell } from '../components/layout/AppShell';
import { StepHeader } from '../components/registration/StepHeader';
import type { RegistrationData } from '../features/registration/types';
import { ArrowLeft, Calendar, Clock, Mail, User, FileText, CheckCircle2 } from 'lucide-react';

interface ReviewProps {
  data: RegistrationData;
  onConfirm: () => void;
  onBack: () => void;
}

export function Review({ data, onConfirm, onBack }: ReviewProps) {
  return (
    <AppShell>
      <div className="max-w-2xl mx-auto space-y-6">
        <StepHeader step={3} totalSteps={3} title="Review & Confirm" />

        <Card>
          <CardHeader>
            <CardTitle>Registration Summary</CardTitle>
            <CardDescription>Please review your information before confirming</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">Student Name</p>
                  <p className="text-base font-semibold">{data.studentName}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">Student ID</p>
                  <p className="text-base font-semibold">{data.studentId}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-base font-semibold">{data.email}</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Exam Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Exam</p>
                  <p className="text-base font-semibold">{data.examName}</p>
                  <p className="text-sm text-muted-foreground">Course Code: {data.examId}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Date</p>
                      <p className="text-base font-semibold">
                        {new Date(data.sessionDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Time</p>
                      <p className="text-base font-semibold">{data.sessionTime}</p>
                    </div>
                  </div>
                </div>

                {data.accommodations && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Special Accommodations</p>
                    <p className="text-base">{data.accommodations}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Agreed to terms and conditions</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Edit Details
          </Button>
          <Button onClick={onConfirm} className="flex-1">
            Confirm Registration
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
