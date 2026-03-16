'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
        reset()
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitted && (
        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-semibold text-green-900">Pesan Terkirim!</h4>
            <p className="text-sm text-green-700">Kami akan segera menghubungi Anda dalam 1-2 jam kerja.</p>
          </div>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
          Nama Lengkap
        </label>
        <input
          id="name"
          type="text"
          {...register('name', {
            required: 'Nama harus diisi',
            minLength: { value: 3, message: 'Nama minimal 3 karakter' },
          })}
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Masukkan nama lengkap Anda"
          disabled={isLoading}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email harus diisi',
            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email tidak valid' },
          })}
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Masukkan email Anda"
          disabled={isLoading}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
          Subjek
        </label>
        <select
          id="subject"
          {...register('subject', { required: 'Subjek harus dipilih' })}
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
            errors.subject ? 'border-red-500' : 'border-gray-300'
          }`}
          disabled={isLoading}
        >
          <option value="">Pilih subjek</option>
          <option value="Desain Grafis">Desain Grafis</option>
          <option value="Ilustrasi & Icon">Ilustrasi & Icon</option>
          <option value="Undangan Digital">Undangan Digital</option>
          <option value="Pembuatan Website">Pembuatan Website</option>
          <option value="Template Digital">Template Digital</option>
          <option value="Konsultasi Kreatif">Konsultasi Kreatif</option>
          <option value="Pertanyaan Umum">Pertanyaan Umum</option>
        </select>
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Pesan
        </label>
        <textarea
          id="message"
          {...register('message', {
            required: 'Pesan harus diisi',
            minLength: { value: 20, message: 'Pesan minimal 20 karakter' },
          })}
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          rows={5}
          placeholder="Deskripsikan proyek atau pertanyaan Anda..."
          disabled={isLoading}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed ${
          isLoading ? 'bg-gray-400' : ''
        }`}
      >
        <span>{isLoading ? 'Mengirim...' : 'Kirim Pesan'}</span>
        {!isLoading && <Send size={18} className="ml-2" />}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Kami akan membalas pesan Anda dalam waktu 1-2 jam kerja (Senin-Jumat, 9:00-17:00 WIB)
      </p>
    </form>
  )
}
