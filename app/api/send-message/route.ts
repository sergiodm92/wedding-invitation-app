import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Analizar el cuerpo de la solicitud como JSON
  const { to, messageContent } = await request.json();

  // Verificar que los datos requeridos están presentes
  if (!to || !messageContent) {
    return NextResponse.json({ message: 'Faltan datos: número de teléfono o contenido del mensaje.' }, { status: 400 });
  }

  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const fromPhoneNumberId = process.env.WHATSAPP_FROM_PHONE_NUMBER_ID;

  const url = `https://graph.facebook.com/v21.0/${fromPhoneNumberId}/messages`;

  const body = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: to,
    type: 'text',
    text: {
      preview_url: false,
      body: messageContent,
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ message: 'Error al enviar el mensaje', error: data }, { status: response.status });
    }

    return NextResponse.json({ message: 'Mensaje enviado', data }, { status: 200 });
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    return NextResponse.json({ message: 'Error interno del servidor.' }, { status: 500 });
  }
}
