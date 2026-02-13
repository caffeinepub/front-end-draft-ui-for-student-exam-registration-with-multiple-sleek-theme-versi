import type { RegistrationData, ValidationErrors } from './types';

export function validateRegistrationData(data: Partial<RegistrationData>): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.studentName?.trim()) {
    errors.studentName = 'Student name is required';
  } else if (data.studentName.trim().length < 2) {
    errors.studentName = 'Student name must be at least 2 characters';
  }

  if (!data.studentId?.trim()) {
    errors.studentId = 'Student ID is required';
  } else if (!/^[A-Z0-9]{6,12}$/i.test(data.studentId.trim())) {
    errors.studentId = 'Student ID must be 6-12 alphanumeric characters';
  }

  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.examId) {
    errors.examId = 'Please select an exam';
  }

  if (!data.sessionDate) {
    errors.sessionDate = 'Please select a date';
  }

  if (!data.sessionTime) {
    errors.sessionTime = 'Please select a time';
  }

  if (!data.agreedToTerms) {
    errors.agreedToTerms = 'You must agree to the terms and conditions';
  }

  return errors;
}

export function isValidRegistration(data: Partial<RegistrationData>): boolean {
  const errors = validateRegistrationData(data);
  return Object.keys(errors).length === 0;
}
