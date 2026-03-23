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

    const html = `
      <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6;">
        <h2 style="margin: 0 0 12px; color: #0f172a;">Нова заявка з сайту</h2>
        <p style="margin: 0 0 16px;">Отримано нову заявку з контактної форми.</p>
        <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 520px;">
          <tr>
            <td style="padding: 10px 12px; border: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">Ім'я батьків</td>
            <td style="padding: 10px 12px; border: 1px solid #e5e7eb;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">Телефон</td>
            <td style="padding: 10px 12px; border: 1px solid #e5e7eb;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">Вік дитини</td>
            <td style="padding: 10px 12px; border: 1px solid #e5e7eb;">${age}</td>
          </tr>
        </table>
      </div>
    `;

    await resend.emails.send({
      from: "ABC Enerdgy <info@abcenerdgy.com>",
      to: "abc-enerdgy@ukr.net",
      subject: "Нова заявка з форми на сайті",
      html,
      text: `Нова заявка з форми:
Ім'я батьків: ${name}
Телефон: ${phone}
Вік дитини: ${age}`,
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

