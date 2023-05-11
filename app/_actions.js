'use server'

import { updateUser } from '@/lib/mongo/users'

export async function updateName(name, email) {
  await updateUser(email, { name })
}
