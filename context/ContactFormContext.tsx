'use client';

import { createContext, useContext, useState } from 'react';

interface ContactFormContextType {
  isContactOpen: boolean;
  openContactForm: () => void;
  closeContactForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(
  undefined
);

export function ContactFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContactForm = () => setIsContactOpen(true);
  const closeContactForm = () => setIsContactOpen(false);

  return (
    <ContactFormContext.Provider
      value={{ isContactOpen, openContactForm, closeContactForm }}
    >
      {children}
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (context === undefined) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
}
