const budgetLabels = {
  '5-10': '5–10 млн ₽',
  '10-20': '10–20 млн ₽',
  '20+': 'Более 20 млн ₽',
}

// Держать в синхроне с валидацией в src/components/ContactForm.jsx
const PHONE_FORMAT_REGEX = /^[\d\s\+\-\(\)]{7,20}$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, email, budget, message } = req.body || {}

  if (!name || !phone) {
    return res.status(400).json({ error: 'Имя и телефон обязательны' })
  }

  if (!PHONE_FORMAT_REGEX.test(phone)) {
    return res.status(400).json({ error: 'Неверный формат телефона' })
  }
  const phoneDigits = phone.replace(/\D/g, '')
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return res.status(400).json({ error: 'Неверный формат телефона' })
  }

  if (email && !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'Неверный формат email' })
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.error('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured')
    return res.status(500).json({ error: 'Отправка временно недоступна' })
  }

  const lines = [
    'Новая заявка с сайта',
    `Имя: ${name}`,
    `Телефон: ${phone}`,
  ]
  if (email) lines.push(`Email: ${email}`)
  if (budget) lines.push(`Бюджет: ${budgetLabels[budget] || budget}`)
  if (message) lines.push(`Сообщение: ${message}`)

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: lines.join('\n') }),
    })

    if (!telegramRes.ok) {
      const errorBody = await telegramRes.text()
      console.error('Telegram API error:', errorBody)
      return res.status(502).json({ error: 'Не удалось отправить заявку' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Failed to send Telegram message:', err)
    return res.status(502).json({ error: 'Не удалось отправить заявку' })
  }
}
