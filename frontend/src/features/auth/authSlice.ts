
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { AuthState, User } from './authTypes';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// API response type
interface AuthResponse {
  message: string;
  user: User;
}

// Login credentials
interface LoginCredentials {
  identifier: string;
  password: string;
}

// Registration credentials
interface RegisterCredentials {
  username: string;
  password: string;
}

// API error response
interface ApiError {
  message?: string | string[];
}

// Extract API error messages
function getErrorMessage(data: ApiError | null): string {
  if (Array.isArray(data?.message)) {
    return data.message.join(', ');
  }

  return data?.message || 'Something went wrong';
}

// Username/password login
export const loginUser = createAsyncThunk<
  User,
  LoginCredentials,
  { rejectValue: string }
>(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      if (!API_URL) {
        return rejectWithValue('API URL is not configured');
      }

      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        return rejectWithValue(getErrorMessage(data));
      }

      if (!data?.user) {
        return rejectWithValue('Invalid server response');
      }

      return data.user as User;
    } catch {
      return rejectWithValue('Unable to connect to the server');
    }
  }
);

// Google login
export const googleLogin = createAsyncThunk<
  User,
  string,
  { rejectValue: string }
>(
  'auth/googleLogin',
  async (credential, { rejectWithValue }) => {
    try {
      if (!API_URL) {
        return rejectWithValue('API URL is not configured');
      }

      const response = await fetch(`${API_URL}/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ credential }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        return rejectWithValue(getErrorMessage(data));
      }

      if (!data?.user) {
        return rejectWithValue('Invalid server response');
      }

      return data.user as User;
    } catch {
      return rejectWithValue('Unable to connect to the server');
    }
  }
);

// Username/password registration
export const registerUser = createAsyncThunk<
  User,
  RegisterCredentials,
  { rejectValue: string }
>(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      if (!API_URL) {
        return rejectWithValue('API URL is not configured');
      }

      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        return rejectWithValue(getErrorMessage(data));
      }

      if (!data?.user) {
        return rejectWithValue('Invalid server response');
      }

      return data.user as User;
    } catch {
      return rejectWithValue('Unable to connect to the server');
    }
  }
);

// Initial Redux state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },

    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Username/password login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      })

      // Google login
      .addCase(googleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Google login failed';
      })

      // Registration
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Registration failed';
      });
  },
});

export const { logout, clearError } = authSlice.actions;

export default authSlice.reducer;
