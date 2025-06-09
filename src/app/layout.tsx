// src/app/layout.tsx
import './globals.css';  
import { ThemeProvider } from '../app/context/ThemeContext'; // adjust path if needed
import { AuthProvider } from '../app/context/AuthContext';
import AppShell from './components/AppShell';

export const metadata = {
  title: 'My App',
  description: 'My Tailwind CSS App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <AppShell>{children}</AppShell>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
