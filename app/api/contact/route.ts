import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, age } = body as {
      name?: string;
      phone?: string;
      age?: string;
    };

    if (!name || !phone || !age) {
      return NextResponse.json(
        { success: false, error: "Заповніть усі обовʼязкові поля." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "Служба відправки тимчасово недоступна." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "АБС ЕНЕРДЖІ <no-reply@resend.dev>",
      to: ["abc-enerdgy@ukr.net"],
      subject: "Нова заявка з форми на сайті",
      text: `Нова заявка з форми зворотного звʼязку:

Імʼя: ${name}
Телефон: ${phone}
Вік дитини: ${age}

Будь ласка, звʼяжіться з батьками для уточнення деталей.`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Помилка відправки листа через Resend", error);
    return NextResponse.json(
      { success: false, error: "Не вдалося надіслати лист." },
      { status: 500 }
    );
  }
}

