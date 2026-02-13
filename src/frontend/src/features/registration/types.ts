export interface RegistrationData {
  studentName: string;
  studentId: string;
  email: string;
  examId: string;
  examName: string;
  sessionDate: string;
  sessionTime: string;
  accommodations: string;
  agreedToTerms: boolean;
}

export interface ValidationErrors {
  studentName?: string;
  studentId?: string;
  email?: string;
  examId?: string;
  sessionDate?: string;
  sessionTime?: string;
  agreedToTerms?: string;
}
