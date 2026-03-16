import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body as {
      name: string
      email: string
      phone?: string
      subject: string
      message: string
    }

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      )
    }

    if (name.length < 3 || message.length < 20) {
      return NextResponse.json(
        { error: 'Nama minimal 3 karakter dan pesan minimal 20 karakter' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email tidak valid' },
        { status: 400 }
      )
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        subject,
        message,
      },
    })

    console.log('Contact form submitted successfully:', contact.id)

    return NextResponse.json(
      {
        success: true,
        message: 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.',
        id: contact.id
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving contact:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.' },
      { status: 500 }
    )
  }
}
