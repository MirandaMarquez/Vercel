import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // URL de tu Google Apps Script
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbyFXudlKRLtbYzGo34u-ZtrC7p9Hi_u8ym1aYLrSNXy6sTUo8K2Bx3VxdTeG1jf3dcmAQ/exec'

    // Enviar email a Google Sheets
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (response.ok) {
      return NextResponse.json(
        { message: 'Email guardado en Google Sheets exitosamente' },
        { status: 200 }
      )
    } else {
      throw new Error('Error al enviar a Google Sheets')
    }

  } catch (error) {
    console.error('Error al guardar email:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
