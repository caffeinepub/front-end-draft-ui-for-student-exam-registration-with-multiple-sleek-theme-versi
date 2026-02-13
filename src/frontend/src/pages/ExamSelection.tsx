import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AppShell } from '../components/layout/AppShell';
import { StepHeader } from '../components/registration/StepHeader';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';

interface ExamSelectionProps {
  onSelect: (examId: string, examName: string) => void;
  onBack: () => void;
}

const MOCK_EXAMS = [
  { id: 'CS101', name: 'Introduction to Computer Science', duration: '2 hours', credits: 3 },
  { id: 'MATH201', name: 'Calculus II', duration: '3 hours', credits: 4 },
  { id: 'PHYS150', name: 'Physics I: Mechanics', duration: '2.5 hours', credits: 4 },
  { id: 'ENG102', name: 'English Composition', duration: '2 hours', credits: 3 },
  { id: 'CHEM110', name: 'General Chemistry', duration: '3 hours', credits: 4 },
];

export function ExamSelection({ onSelect, onBack }: ExamSelectionProps) {
  const [selectedExam, setSelectedExam] = useState<string>('');

  const handleContinue = () => {
    const exam = MOCK_EXAMS.find(e => e.id === selectedExam);
    if (exam) {
      onSelect(exam.id, exam.name);
    }
  };

  return (
    <AppShell>
      <div className="max-w-3xl mx-auto space-y-6">
        <StepHeader step={1} totalSteps={3} title="Select Your Exam" />

        <div className="grid gap-4">
          {MOCK_EXAMS.map((exam) => (
            <Card
              key={exam.id}
              className={`cursor-pointer transition-all hover:border-primary/50 ${
                selectedExam === exam.id ? 'border-primary border-2 bg-primary/5' : ''
              }`}
              onClick={() => setSelectedExam(exam.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{exam.name}</CardTitle>
                    <CardDescription className="mt-1">Course Code: {exam.id}</CardDescription>
                  </div>
                  <div className={`rounded-full w-5 h-5 border-2 flex items-center justify-center shrink-0 ${
                    selectedExam === exam.id ? 'border-primary bg-primary' : 'border-muted-foreground/30'
                  }`}>
                    {selectedExam === exam.id && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{exam.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{exam.credits} credits</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button onClick={handleContinue} disabled={!selectedExam} className="flex-1">
            Continue
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
