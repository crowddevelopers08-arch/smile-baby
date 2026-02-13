// app/components/SmileBabyForm.tsx
"use client"

import { useState } from "react"
import { Baby, ChevronRight, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface FormData {
  name: string
  phone: string
  whatsapp: string
  womansAgeBracket: string
  tryingDuration: string
  consent: boolean
  formName: string
  source: string
  treatment: string
}

export default function SmileBabyForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    whatsapp: '',
    womansAgeBracket: '',
    tryingDuration: '',
    consent: true,
    formName: 'Smile Baby',
    source: 'Smile Baby IVF Form',
    treatment: 'IVF Consultation'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.womansAgeBracket || !formData.tryingDuration || !formData.whatsapp) {
      setErrorMessage('Please fill in all required fields')
      setIsSubmitting(false)
      return
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^\d{10}$/
    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage('Please enter a valid 10-digit mobile number')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          isWhatsapp: formData.whatsapp === 'yes' ? 'Yes' : 'No',
          // message: `IVF Consultation Request - Age: ${formData.womansAgeBracket}, Trying for: ${formData.tryingDuration}`
        }),
      })

      const data = await response.json()

      if (response.ok) {
        router.push('/thank-you')
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        setIsSubmitting(false)
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection.')
      setIsSubmitting(false)
    }
  }

  return (
    <div id="forms" className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 lg:p-8 mx-0 sm:mx-2 lg:mx-0">
      <div className="flex items-center gap-2 mb-2">
        <Baby className="h-6 w-6 text-pink-500" />
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
          Get IVF Plan & Case-Wise Estimate
        </h3>
      </div>
      <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
        Fill in your details and we'll get back to you
      </p>

      {errorMessage && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-medium">Submission failed</p>
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {/* Row 1: Full Name and Mobile Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Mobile Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition"
              required
              maxLength={10}
              pattern="\d{10}"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Row 2: WhatsApp and Woman's Age */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* WhatsApp - Dropdown */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Have you tried any treatments before? *
            </label>
            <select
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition"
              required
              disabled={isSubmitting}
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Woman's Age */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Age Group *
            </label>
            <select
              name="womansAgeBracket"
              value={formData.womansAgeBracket}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition"
              required
              disabled={isSubmitting}
            >
              <option value="">Select age bracket</option>
              <option value="<30">&lt;30</option>
              <option value="30-34">30–34</option>
              <option value="35-39">35–39</option>
              <option value="40+">40+</option>
            </select>
          </div>
        </div>

        {/* Row 3: Trying Duration */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            Trying for how long? *
          </label>
          <select
            name="tryingDuration"
            value={formData.tryingDuration}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition"
            required
            disabled={isSubmitting}
          >
            <option value="">Select duration</option>
            <option value="0-6 months">0–6 months</option>
            <option value="6-12 months">6–12 months</option>
            <option value="1-2 years">1–2 years</option>
            <option value="2+ years">2+ years</option>
          </select>
        </div>

        {/* Primary CTA */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn-primary w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold shadow-xl text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 transition-all ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-pink-500 hover:to-pink-600'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">⏳</span>
              Submitting...
            </span>
          ) : (
            <>
              Get Cost Breakdown on WhatsApp
              <ChevronRight className="arrow-icon inline-block ml-1 sm:ml-2 h-4 w-4" />
            </>
          )}
        </button>

        {/* Microcopy */}
        <p className="text-xs text-gray-500 text-center mt-3 sm:mt-4">
          Privacy maintained. We follow ethical care and do not promise
          guaranteed outcomes.
        </p>
      </form>
    </div>
  )
}