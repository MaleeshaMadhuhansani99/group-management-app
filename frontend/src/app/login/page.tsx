'use client'

import {useState} from 'react'
import type {SubmitEvent} from 'react'
import {GoogleLogin} from '@react-oauth/google'
import {useRouter} from 'next/navigation'

import {useAppDispatch, useAppSelector} from '@/store/hooks'
import {loginUser, googleLogin, clearError} from '@/features/auth/authSlice'

export default function LoginPage() {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')

  const {loading, error} = useAppSelector((state) => state.auth)

  // Username/password login
  async function handleLogin(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    dispatch(clearError())

    const result = await dispatch(loginUser({identifier, password}))

    if (loginUser.fulfilled.match(result)) {
      router.replace('/dashboard');
    }
  }

  // Google login
  async function handleGoogleLogin(credential?: string) {
    if (!credential) {
      return
    }

    dispatch(clearError())

    const result = await dispatch(googleLogin(credential))

    if (googleLogin.fulfilled.match(result)) {
      console.log('Google login successful. Redirecting...');
      router.replace('/dashboard');
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
            G
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Sign in to continue to your workspace
          </p>
        </div>

        {/* Google login */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              handleGoogleLogin(credentialResponse.credential)
            }}
            onError={() => {
              dispatch(clearError())
            }}
            theme="outline"
            size="large"
            shape="rectangular"
            text="continue_with"
            width="350"
          />
        </div>

        {/* Divider */}
        <div className="relative my-7">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-sm text-slate-400">
              OR CONTINUE WITH USERNAME
            </span>
          </div>
        </div>

        {/* Login form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="identifier"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Username
            </label>

            <input
              id="identifier"
              type="text"
              autoComplete="username"
              required
              value={identifier}
              onChange={(event) => setIdentifier(event.target.value)}
              placeholder="Enter your username"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        {/* Registration link */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Don't have an account?{' '}
          <a
            href="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Create an account
          </a>
        </p>
      </div>
    </main>
  )
}
