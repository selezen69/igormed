export default async function handler(req, res) {
  const configured = Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID)

  if (!configured) {
    return res.status(500).json({ ok: false, error: 'TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured' })
  }

  return res.status(200).json({ ok: true })
}
