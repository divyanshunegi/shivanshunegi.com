'use client';

import {
  ContactFormProvider,
  useContactForm,
} from '@/context/ContactFormContext';
import { ThemeProvider } from '@/context/ThemeContext';

import ContactForm from './ContactForm';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ContactFormProvider>
        {children}
        <ContactFormWithContext />
      </ContactFormProvider>
    </ThemeProvider>
  );
}

// Wrapper component to consume context and pass props to ContactForm
function ContactFormWithContext() {
  const { isContactOpen: isOpen, closeContactForm: onClose } = useContactForm();
  return <ContactForm isOpen={isOpen} onClose={onClose} />;
}
