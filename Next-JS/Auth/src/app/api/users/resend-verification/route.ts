import { authPost } from '@/helpers/authHandlers'

export const runtime = 'nodejs'
export const POST = authPost('resend-verification')
