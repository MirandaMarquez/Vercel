import { NextRequest, NextResponse } from 'next/server'

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY || ''
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID || '57237c1b37'
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER || 'us7'
const MAILCHIMP_API_URL = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`

if (!MAILCHIMP_API_KEY) {
  console.error('MAILCHIMP_API_KEY no está configurada en las variables de entorno')
}

export async function POST(request: NextRequest) {
  try {
    if (!MAILCHIMP_API_KEY) {
      return NextResponse.json(
        { error: 'Configuración de MailChimp no encontrada' },
        { status: 500 }
      )
    }

    const { email } = await request.json()

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Enviar email a MailChimp
    const response = await fetch(MAILCHIMP_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    })

    const data = await response.json()

    if (response.ok) {
      return NextResponse.json(
        { message: 'Email suscrito exitosamente a MailChimp' },
        { status: 200 }
      )
    } else {
      // MailChimp puede devolver errores específicos
      const errorMessage = data.title || data.detail || 'Error al suscribir a MailChimp'
      
      // Si el email ya está suscrito, considerarlo como éxito
      if (data.status === 400 && data.title === 'Member Exists') {
        return NextResponse.json(
          { message: 'Email ya está suscrito' },
          { status: 200 }
        )
      }

      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      )
    }

  } catch (error) {
    console.error('Error al suscribir email a MailChimp:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
