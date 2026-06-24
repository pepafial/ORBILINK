
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import SignupForm from './signup-form'

export default async function SignUp() {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (data?.session) {
    redirect('/')
  }

  return <SignupForm />
}
