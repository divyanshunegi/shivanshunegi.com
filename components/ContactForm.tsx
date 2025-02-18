'use client';

import { useEffect, useRef, useState } from 'react';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';

// Replace this URL with your Google Apps Script deployment URL
const FORM_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbyDecrMHcL-jJs3M6ifrRvKopqSuyYGb_0tL4e0qdyD_0fxjfbqL9ic9B-kvg5eM0X7fg/exec';

// Backup submission URL using formsubmit.co service
const BACKUP_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(
  'shivanshunegi@gmail.com'
)}`;

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [useBackup, setUseBackup] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on escape key press and handle click outside
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const submitToBackup = async () => {
    const response = await fetch(BACKUP_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _template: 'table',
      }),
    });

    if (!response.ok) {
      throw new Error('Backup submission failed');
    }

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      if (!useBackup) {
        try {
          // Simpler data format
          const data = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            timestamp: new Date().toISOString(),
          };

          // Test the endpoint first
          await fetch(FORM_ENDPOINT);

          // Create URL with data as query parameters
          const params = new URLSearchParams();
          Object.entries(data).forEach(([key, value]) => {
            params.append(key, value);
          });

          const url = `${FORM_ENDPOINT}?${params.toString()}`;

          await fetch(url, {
            method: 'GET',
            mode: 'no-cors',
          });

          setSubmitStatus('success');

          // Clear form on success
          setTimeout(() => {
            onClose();
            setSubmitStatus('idle');
            setFormData({ name: '', email: '', subject: '', message: '' });
          }, 2000);
        } catch (error) {
          // If primary submission fails, try backup
          setUseBackup(true);
          throw new Error('Primary submission failed, trying backup...');
        }
      } else {
        // Use backup submission
        await submitToBackup();
        setSubmitStatus('success');

        // Clear form on success
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setUseBackup(false); // Reset to primary method for next attempt
        }, 2000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please try again later.'
      );
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn'>
      {/* Backdrop */}
      <div className='absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300' />

      {/* Form Container */}
      <div
        ref={modalRef}
        className='relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform transition-all duration-300 scale-100 animate-modalSlideIn'
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700'
          aria-label='Close'
        >
          <FaTimes className='w-5 h-5' />
        </button>

        <div className='p-6 sm:p-8'>
          <h2 className='text-2xl font-bold mb-2 text-gray-900 dark:text-white'>
            Get in Touch
          </h2>
          <p className='text-gray-600 dark:text-gray-300 mb-6'>
            Have a project in mind? Let's discuss how we can work together.
          </p>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                >
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400'
                  placeholder='your@email.com'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='subject'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
              >
                Subject
              </label>
              <input
                type='text'
                name='subject'
                id='subject'
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400'
                placeholder='What is this about?'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none'
                placeholder='Tell me about your project...'
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 text-white font-medium transition-all duration-200 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02]'
              }`}
            >
              {isSubmitting ? (
                <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
              ) : submitStatus === 'success' ? (
                'Message Sent!'
              ) : submitStatus === 'error' ? (
                'Error Sending Message'
              ) : (
                <>
                  <FaPaperPlane className='w-4 h-4' />
                  Send Message
                </>
              )}
            </button>
          </form>

          {errorMessage && (
            <div className='mt-4 p-3 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-200 rounded-lg text-sm'>
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
