'use client';

import { GoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';

import { useAppDispatch } from '@/store/hooks';
import { googleLogin } from '@/features/auth/authSlice';

export default function GoogleLoginButton() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  async function handleGoogleLogin(credential?: string) {
    if (!credential) {
      return;
    }

    const result = await dispatch(googleLogin(credential));

    if (googleLogin.fulfilled.match(result)) {
      router.replace('/dashboard');
    }
  }

  return (
    <div className="flex justify-center">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          handleGoogleLogin(credentialResponse.credential);
        }}
        onError={() => {
          console.error('Google sign-in was unsuccessful.');
        }}
        theme="outline"
        size="large"
        shape="rectangular"
        text="continue_with"
        width="350"
      />
    </div>
  );
}
