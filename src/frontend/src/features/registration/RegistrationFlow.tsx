import { useState } from 'react';
import { LandingStart } from '../../pages/LandingStart';
import { ExamSelection } from '../../pages/ExamSelection';
import { RegistrationDetails } from '../../pages/RegistrationDetails';
import { Review } from '../../pages/Review';
import { Confirmation } from '../../pages/Confirmation';
import type { RegistrationData } from './types';

type Step = 'start' | 'exam-selection' | 'details' | 'review' | 'confirmation';

export function RegistrationFlow() {
  const [currentStep, setCurrentStep] = useState<Step>('start');
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    studentName: '',
    studentId: '',
    email: '',
    examId: '',
    examName: '',
    sessionDate: '',
    sessionTime: '',
    accommodations: '',
    agreedToTerms: false,
  });

  const handleStart = () => {
    setCurrentStep('exam-selection');
  };

  const handleExamSelect = (examId: string, examName: string) => {
    setRegistrationData(prev => ({ ...prev, examId, examName }));
    setCurrentStep('details');
  };

  const handleDetailsSubmit = (data: Partial<RegistrationData>) => {
    setRegistrationData(prev => ({ ...prev, ...data }));
    setCurrentStep('review');
  };

  const handleConfirm = () => {
    setCurrentStep('confirmation');
  };

  const handleReset = () => {
    setRegistrationData({
      studentName: '',
      studentId: '',
      email: '',
      examId: '',
      examName: '',
      sessionDate: '',
      sessionTime: '',
      accommodations: '',
      agreedToTerms: false,
    });
    setCurrentStep('start');
  };

  const handleBack = () => {
    if (currentStep === 'exam-selection') setCurrentStep('start');
    else if (currentStep === 'details') setCurrentStep('exam-selection');
    else if (currentStep === 'review') setCurrentStep('details');
  };

  return (
    <>
      {currentStep === 'start' && <LandingStart onStart={handleStart} />}
      {currentStep === 'exam-selection' && (
        <ExamSelection onSelect={handleExamSelect} onBack={handleBack} />
      )}
      {currentStep === 'details' && (
        <RegistrationDetails
          data={registrationData}
          onSubmit={handleDetailsSubmit}
          onBack={handleBack}
        />
      )}
      {currentStep === 'review' && (
        <Review
          data={registrationData}
          onConfirm={handleConfirm}
          onBack={handleBack}
        />
      )}
      {currentStep === 'confirmation' && <Confirmation onReset={handleReset} />}
    </>
  );
}
