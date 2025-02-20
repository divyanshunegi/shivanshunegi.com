import React, { useState } from 'react';

export default function AcademyHero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    education: '',
    field: '',
    experience: '',
    software: '',
    equipment: '',
    goals: '',
    portfolio: '',
    referral: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/academy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit application');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        education: '',
        field: '',
        experience: '',
        software: '',
        equipment: '',
        goals: '',
        portfolio: '',
        referral: '',
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Failed to submit application';
      setErrorMessage(message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 pt-[288px]'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-12 items-start'>
          {/* Left Column - Text Content */}
          <div className='space-y-8'>
            <div>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
                  Master the Art of Visual Storytelling
                </span>
              </h1>
              <p className='text-xl text-gray-300 mb-8'>
                Join an exclusive masterclass on Storytelling, Cinematography,
                and Film Editing taught by an industry professional.
              </p>
            </div>

            <div className='space-y-4'>
              <h3 className='text-2xl font-semibold'>
                What You&apos;ll Learn:
              </h3>
              <ul className='space-y-3'>
                <li className='flex items-center'>
                  <svg
                    className='w-6 h-6 mr-2 text-blue-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Advanced Storytelling Techniques</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-6 h-6 mr-2 text-blue-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Professional Cinematography Skills</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-6 h-6 mr-2 text-blue-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Advanced Film Editing & Color Grading</span>
                </li>
              </ul>
            </div>

            <div className='pt-6'>
              <button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg'>
                Join the Waitlist
              </button>
            </div>
          </div>

          {/* Right Column - Enhanced Form */}
          <div className='bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700'>
            <h2 className='text-2xl font-bold mb-6'>Register Your Interest</h2>
            {submitStatus === 'success' ? (
              <div className='text-center py-8'>
                <svg
                  className='w-16 h-16 text-green-500 mx-auto mb-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <h3 className='text-xl font-semibold mb-2'>
                  Application Submitted!
                </h3>
                <p className='text-gray-300'>
                  Thank you for your interest. We&apos;ll review your
                  application and get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Personal Information */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-blue-400'>
                    Personal Information
                  </h3>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <label
                        htmlFor='firstName'
                        className='block text-sm font-medium mb-2'
                      >
                        First Name <span className='text-red-500'>*</span>
                      </label>
                      <input
                        type='text'
                        id='firstName'
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        placeholder='John'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='lastName'
                        className='block text-sm font-medium mb-2'
                      >
                        Last Name <span className='text-red-500'>*</span>
                      </label>
                      <input
                        type='text'
                        id='lastName'
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        placeholder='Doe'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium mb-2'
                    >
                      Email Address <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='email'
                      id='email'
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='john@example.com'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium mb-2'
                    >
                      Phone Number <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='+1 (555) 000-0000'
                    />
                  </div>
                </div>

                {/* Educational Background */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-blue-400'>
                    Educational Background
                  </h3>
                  <div>
                    <label
                      htmlFor='education'
                      className='block text-sm font-medium mb-2'
                    >
                      Highest Education Level{' '}
                      <span className='text-red-500'>*</span>
                    </label>
                    <select
                      id='education'
                      required
                      value={formData.education}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    >
                      <option value=''>Select education level</option>
                      <option value='High School Diploma'>
                        High School Diploma
                      </option>
                      <option value='Bachelors Degree'>Bachelors Degree</option>
                      <option value='Masters Degree'>Masters Degree</option>
                      <option value='PhD'>PhD</option>
                      <option value='Other'>Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor='field'
                      className='block text-sm font-medium mb-2'
                    >
                      Field of Study <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      id='field'
                      required
                      value={formData.field}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='e.g., Film Studies, Photography, etc.'
                    />
                  </div>
                </div>

                {/* Technical Proficiency */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-blue-400'>
                    Technical Proficiency
                  </h3>
                  <div>
                    <label
                      htmlFor='experience'
                      className='block text-sm font-medium mb-2'
                    >
                      Experience Level <span className='text-red-500'>*</span>
                    </label>
                    <select
                      id='experience'
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    >
                      <option value=''>Select your experience level</option>
                      <option value='Beginner'>Beginner</option>
                      <option value='Intermediate'>Intermediate</option>
                      <option value='Advanced'>Advanced</option>
                      <option value='Professional'>Professional</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor='software'
                      className='block text-sm font-medium mb-2'
                    >
                      Software Proficiency{' '}
                      <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      id='software'
                      required
                      value={formData.software}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='e.g., Adobe Premiere, DaVinci Resolve'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='equipment'
                      className='block text-sm font-medium mb-2'
                    >
                      Equipment Experience{' '}
                      <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      id='equipment'
                      required
                      value={formData.equipment}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='e.g., Canon EOS R5, DJI Ronin'
                    />
                  </div>
                </div>

                {/* Goals and Portfolio */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-blue-400'>
                    Goals and Portfolio
                  </h3>
                  <div>
                    <label
                      htmlFor='goals'
                      className='block text-sm font-medium mb-2'
                    >
                      What are your learning goals?{' '}
                      <span className='text-red-500'>*</span>
                    </label>
                    <textarea
                      id='goals'
                      rows={3}
                      required
                      value={formData.goals}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Describe what you hope to achieve from this course'
                    ></textarea>
                  </div>
                  <div>
                    <label
                      htmlFor='portfolio'
                      className='block text-sm font-medium mb-2'
                    >
                      Portfolio URL
                    </label>
                    <input
                      type='url'
                      id='portfolio'
                      value={formData.portfolio}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='https://your-portfolio.com'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='referral'
                      className='block text-sm font-medium mb-2'
                    >
                      How did you hear about us?{' '}
                      <span className='text-red-500'>*</span>
                    </label>
                    <select
                      id='referral'
                      required
                      value={formData.referral}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    >
                      <option value=''>Select an option</option>
                      <option value='Social Media'>Social Media</option>
                      <option value='Search Engine'>Search Engine</option>
                      <option value='Personal Referral'>
                        Personal Referral
                      </option>
                      <option value='Advertisement'>Advertisement</option>
                      <option value='Other'>Other</option>
                    </select>
                  </div>
                </div>

                {submitStatus === 'error' && (
                  <div className='text-red-500 text-sm p-4 bg-red-500/10 rounded-lg'>
                    <p className='font-semibold'>
                      Error submitting application:
                    </p>
                    <p>{errorMessage || 'Please try again'}</p>
                  </div>
                )}

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
