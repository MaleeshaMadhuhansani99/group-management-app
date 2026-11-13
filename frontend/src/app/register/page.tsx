
'use client';

import { useState } from 'react';
import type { SubmitEvent } from 'react';

import { useRouter } from 'next/navigation';
import GoogleLoginButton from '@/components/google_login_btn';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { registerUser, clearError } from '@/features/auth/authSlice';

export default function RegisterPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState('');

  const { loading, error } = useAppSelector(
    (state) => state.auth
  );

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSuccess('');
    dispatch(clearError());

    if (password !== confirmPassword) {
      // We'll use local validation below instead of sending this to the API.
      setSuccess('');
      return;
    }

    const result = await dispatch(
      registerUser({
        username: username.trim(),
        password,
      })
    );

    if (registerUser.fulfilled.match(result)) {
      setSuccess('Account created successfully! Redirecting to login...');

      setUsername('');
      setPassword('');
      setConfirmPassword('');

      router.push('/login');
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Get started by creating your account.
          </p>
        </div>

        {/* Registration form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              minLength={3}
              maxLength={30}
              pattern="[a-zA-Z0-9_]+"
              title="Use only letters, numbers, and underscores."
              autoComplete="username"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              minLength={8}
              maxLength={128}
              autoComplete="new-password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />

            <p className="mt-1.5 text-xs text-gray-500">
              Use at least 8 characters.
            </p>
          </div>

          {/* Confirm password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Confirm password
            </label>

            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter your password again"
              minLength={8}
              maxLength={128}
              autoComplete="new-password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Error */}
          {error && (
            <div
              role="alert"
              className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div
              role="status"
              className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700"
            >
              {success}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        {/* Google registration */}
        <div className="mt-6">
          <GoogleLoginButton />
        </div>

        {/* Login link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <a
            href="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Sign in
          </a>
        </p>

      </div>
    </main>
  );
}
