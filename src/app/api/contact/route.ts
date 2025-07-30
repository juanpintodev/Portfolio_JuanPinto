import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Simulación de guardado (aquí podrías integrar con cualquier servicio)
    const contact = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
    }

    // Simulación de envío de email o guardado
    console.log('Contact received:', contact)
    
    // Aquí podrías integrar con servicios como:
    // - EmailJS
    // - Nodemailer
    // - SendGrid
    // - O cualquier otro servicio de email

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado con éxito',
        id: contact.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending message:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    )
  }
}