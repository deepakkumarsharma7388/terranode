import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { sendContactEmail } from './mailer.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, email, company, industry, message } = req.body || {}

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' })
  }

  try {
    await sendContactEmail({ name, email, company, industry, message })
    res.json({ ok: true })
  } catch (err) {
    console.error('Failed to send contact email:', err)
    res.status(500).json({ error: 'Could not send your message right now. Please try again later.' })
  }
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
