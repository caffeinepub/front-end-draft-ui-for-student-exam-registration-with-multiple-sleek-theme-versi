import { type ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {children}
    </div>
  );
}
