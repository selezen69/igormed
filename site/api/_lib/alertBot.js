// Отдельный телеграм-бот для уведомлений о сбоях (не путать с ботом заявок в site/api/contact.js)
const ALERTS_BOT_TOKEN = process.env.TELEGRAM_ALERTS_BOT_TOKEN
const ALERTS_CHAT_ID = process.env.TELEGRAM_ALERTS_CHAT_ID

export async function sendFailureAlert(message) {
  if (!ALERTS_BOT_TOKEN || !ALERTS_CHAT_ID) return

  try {
    const res = await fetch(`https://api.telegram.org/bot${ALERTS_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: ALERTS_CHAT_ID, text: `⚠️ ${message}` }),
    })
    if (!res.ok) {
      console.error('Alert bot: Telegram API error:', await res.text())
    }
  } catch (err) {
    console.error('Alert bot: failed to send alert:', err)
  }
}
