"use client";
import Image from 'next/image'
import React, { useState } from 'react'

const LOGO_URL = 'https://ik.imagekit.io/tnvhh8yfa/public/smile-baby-logo.webp?updatedAt=1773300923285';

const fields = [
  {
    id: 'name',
    label: 'Full Name *',
    type: 'text',
    placeholder: 'Enter your full name',
  },
  {
    id: 'email',
    label: 'Email Address *',
    type: 'email',
    placeholder: 'Enter your email address',
  },
  {
    id: 'phone',
    label: 'Phone Number *',
    type: 'tel',
    placeholder: 'Enter your phone number',
  },
] as const;

const ClientFeedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suggestions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | ''; text: string }>({ type: '', text: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear message when user starts typing
    if (message.text) setMessage({ type: '', text: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      setMessage({ type: 'error', text: 'Please enter a valid 10-digit mobile number.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || undefined,
          message: formData.suggestions.trim(),
          treatment: 'Client Feedback',
          source: 'Smile Baby Client Feedback Page',
          formName: 'Smile Baby Client Feedback',
          consent: true,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Feedback submitted successfully!' });
        setFormData({ name: '', email: '', phone: '', suggestions: '' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to submit feedback' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#fff7fb] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-2xl items-center justify-center">
          <div className="w-full rounded-2xl border border-[#ec4899]/15 bg-white/95 p-5 shadow-[0_24px_70px_rgba(30,47,95,0.12)] backdrop-blur sm:p-8">
            <div className="mb-6 flex items-center justify-center">
              <div className="flex items-center justify-center rounded-2xl border border-[#ec4899]/15 bg-white px-5 py-4 shadow-[0_12px_34px_rgba(236,72,153,0.10)]">
                <div className="relative h-16 w-44 sm:h-20 sm:w-56">
                  <Image
                    src={LOGO_URL}
                    alt="Smile Baby IVF logo"
                    fill
                    sizes="(min-width: 640px) 224px, 176px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="mb-9 text-center sm:mb-5">
              <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-[#ec4899]" />
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ec4899]">
                Smile Baby Feedback
              </p>
              <h4 className="mb-4 text-3xl font-black text-[#1e2f5f] sm:text-5xl">
                Help Us Improve
              </h4>
              <p className="mx-auto mb-4 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
                Tell us what did not meet your expectations. We genuinely value your feedback and will work on making things better.
              </p>
            </div>

            {message.text && (
              <div className={`mb-5 border px-4 py-3 text-center text-sm font-medium ${
                message.type === 'success'
                  ? 'border-[#1e2f5f]/20 bg-[#1e2f5f]/8 text-[#1e2f5f]'
                  : 'border-[#ec4899]/30 bg-[#fff0f7] text-[#be185d]'
              }`}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {fields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="mb-2 block text-sm font-semibold text-[#1e2f5f]">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                    maxLength={field.id === 'phone' ? 10 : undefined}
                    pattern={field.id === 'phone' ? '\\d{10}' : undefined}
                    disabled={isSubmitting}
                    className="w-full rounded-lg border border-[#ec4899]/20 bg-white px-4 py-3 text-sm text-[#1e2f5f] outline-none transition focus:border-[#ec4899] focus:ring-4 focus:ring-[#ec4899]/15 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="suggestions" className="mb-2 block text-sm font-semibold text-[#1e2f5f]">
                  Your Suggestions *
                </label>
                <textarea
                  id="suggestions"
                  name="suggestions"
                  value={formData.suggestions}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full resize-none rounded-lg border border-[#ec4899]/20 bg-white px-4 py-3 text-sm text-[#1e2f5f] outline-none transition focus:border-[#ec4899] focus:ring-4 focus:ring-[#ec4899]/15 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
                  placeholder="Share your valuable suggestions and feedback..."
                />
              </div>

              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer rounded-lg border-2 border-[#ec4899] bg-[#ec4899] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(236,72,153,0.22)] transition hover:bg-[#db2777] disabled:cursor-not-allowed disabled:border-gray-400 disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                </button>
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  disabled={isSubmitting}
                  className="w-full cursor-pointer rounded-lg border-2 border-[#1e2f5f] bg-transparent px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1e2f5f] transition hover:bg-[#1e2f5f] hover:text-white disabled:cursor-not-allowed disabled:border-gray-400 disabled:text-gray-400"
                >
                  Back to Home
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientFeedback
