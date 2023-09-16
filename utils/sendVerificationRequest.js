import { resend } from '@/lib/resend'
import MagicLinkEmail from '@/emails/MagicLinkEmail'

export async function sendVerificationRequest(params) {
  const { identifier, url, provider, theme } = params
  const { host } = new URL(url)

  try {
    const data = await resend.emails.send({
      from: 'YOUR_VERIFIED_DOMAIN',
      to: [identifier],
      subject: `Log in to ${host}`,
      text: text({ url, host }),
      react: MagicLinkEmail({ url, host })
    })
    return { success: true, data }
  } catch (error) {
    throw new Error('Failed to send the verification Email.')
  }
}

function text({ url, host }) {
  return `Sign in to ${host}\n${url}\n\n`
}
