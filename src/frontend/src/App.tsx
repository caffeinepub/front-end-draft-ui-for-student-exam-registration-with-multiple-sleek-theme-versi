import { ThemeProvider } from './theme/ThemeProvider';
import { RegistrationFlow } from './features/registration/RegistrationFlow';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold tracking-tight">Exam Registration</h1>
            <ThemeSwitcher />
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 md:py-12">
          <RegistrationFlow />
        </main>
        <footer className="border-t border-border/40 mt-auto py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} • Built with ❤️ using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'exam-registration')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
