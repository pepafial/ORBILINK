
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import LoginForm from './login-form'

export default async function Login() {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (data?.session) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("account_type")
      .eq("id", data.session.user.id)
      .single()

    if (profile) {
      if (profile.account_type === "fornecedor") {
        return redirect("/dashboard/fornecedor")
      } else {
        return redirect("/dashboard/comprador")
      }
    }
    redirect("/")
  }

  return <LoginForm />
}
