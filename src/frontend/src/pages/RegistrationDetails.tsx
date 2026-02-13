import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AppShell } from '../components/layout/AppShell';
import { StepHeader } from '../components/registration/StepHeader';
import { validateRegistrationData, isValidRegistration } from '../features/registration/validation';
import type { RegistrationData, ValidationErrors } from '../features/registration/types';
import { ArrowLeft } from 'lucide-react';

interface RegistrationDetailsProps {
  data: RegistrationData;
  onSubmit: (data: Partial<RegistrationData>) => void;
  onBack: () => void;
}

const MOCK_DATES = [
  '2026-03-15',
  '2026-03-22',
  '2026-03-29',
  '2026-04-05',
];

const MOCK_TIMES = [
  '09:00 AM',
  '01:00 PM',
  '03:00 PM',
];

export function RegistrationDetails({ data, onSubmit, onBack }: RegistrationDetailsProps) {
  const [formData, setFormData] = useState<Partial<RegistrationData>>({
    studentName: data.studentName,
    studentId: data.studentId,
    email: data.email,
    examId: data.examId,
    examName: data.examName,
    sessionDate: data.sessionDate,
    sessionTime: data.sessionTime,
    accommodations: data.accommodations,
    agreedToTerms: data.agreedToTerms,
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      setErrors(validateRegistrationData(formData));
    }
  }, [formData, touched]);

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allFields = ['studentName', 'studentId', 'email', 'sessionDate', 'sessionTime', 'agreedToTerms'];
    const allTouched = allFields.reduce((acc, field) => ({ ...acc, [field]: true }), {});
    setTouched(allTouched);

    const validationErrors = validateRegistrationData(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    }
  };

  const isValid = isValidRegistration(formData);

  return (
    <AppShell>
      <div className="max-w-2xl mx-auto space-y-6">
        <StepHeader step={2} totalSteps={3} title="Your Details" />

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Registration Information</CardTitle>
              <CardDescription>
                Exam: {data.examName || 'Not selected'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="studentName">Full Name *</Label>
                <Input
                  id="studentName"
                  value={formData.studentName}
                  onChange={(e) => setFormData(prev => ({ ...prev, studentName: e.target.value }))}
                  onBlur={() => handleBlur('studentName')}
                  placeholder="John Doe"
                  aria-invalid={touched.studentName && !!errors.studentName}
                  aria-describedby={touched.studentName && errors.studentName ? 'studentName-error' : undefined}
                />
                {touched.studentName && errors.studentName && (
                  <p id="studentName-error" className="text-sm text-destructive">{errors.studentName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID *</Label>
                <Input
                  id="studentId"
                  value={formData.studentId}
                  onChange={(e) => setFormData(prev => ({ ...prev, studentId: e.target.value }))}
                  onBlur={() => handleBlur('studentId')}
                  placeholder="STU123456"
                  aria-invalid={touched.studentId && !!errors.studentId}
                  aria-describedby={touched.studentId && errors.studentId ? 'studentId-error' : undefined}
                />
                {touched.studentId && errors.studentId && (
                  <p id="studentId-error" className="text-sm text-destructive">{errors.studentId}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  onBlur={() => handleBlur('email')}
                  placeholder="john.doe@university.edu"
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                />
                {touched.email && errors.email && (
                  <p id="email-error" className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sessionDate">Exam Date *</Label>
                  <Select
                    value={formData.sessionDate}
                    onValueChange={(value) => {
                      setFormData(prev => ({ ...prev, sessionDate: value }));
                      handleBlur('sessionDate');
                    }}
                  >
                    <SelectTrigger id="sessionDate" aria-invalid={touched.sessionDate && !!errors.sessionDate}>
                      <SelectValue placeholder="Select date" />
                    </SelectTrigger>
                    <SelectContent>
                      {MOCK_DATES.map(date => (
                        <SelectItem key={date} value={date}>
                          {new Date(date).toLocaleDateString('en-US', { 
                            weekday: 'short', 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {touched.sessionDate && errors.sessionDate && (
                    <p className="text-sm text-destructive">{errors.sessionDate}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sessionTime">Exam Time *</Label>
                  <Select
                    value={formData.sessionTime}
                    onValueChange={(value) => {
                      setFormData(prev => ({ ...prev, sessionTime: value }));
                      handleBlur('sessionTime');
                    }}
                  >
                    <SelectTrigger id="sessionTime" aria-invalid={touched.sessionTime && !!errors.sessionTime}>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {MOCK_TIMES.map(time => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {touched.sessionTime && errors.sessionTime && (
                    <p className="text-sm text-destructive">{errors.sessionTime}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accommodations">Special Accommodations (Optional)</Label>
                <Textarea
                  id="accommodations"
                  value={formData.accommodations}
                  onChange={(e) => setFormData(prev => ({ ...prev, accommodations: e.target.value }))}
                  placeholder="Extra time, separate room, etc."
                  rows={3}
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Checkbox
                  id="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) => {
                    setFormData(prev => ({ ...prev, agreedToTerms: checked === true }));
                    handleBlur('agreedToTerms');
                  }}
                  aria-invalid={touched.agreedToTerms && !!errors.agreedToTerms}
                />
                <div className="space-y-1">
                  <Label htmlFor="agreedToTerms" className="font-normal cursor-pointer">
                    I agree to the exam terms and conditions *
                  </Label>
                  {touched.agreedToTerms && errors.agreedToTerms && (
                    <p className="text-sm text-destructive">{errors.agreedToTerms}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3 pt-6">
            <Button type="button" variant="outline" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Button type="submit" disabled={!isValid} className="flex-1">
              Review Registration
            </Button>
          </div>
        </form>
      </div>
    </AppShell>
  );
}
