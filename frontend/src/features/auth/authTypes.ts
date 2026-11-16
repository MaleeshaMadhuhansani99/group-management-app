export interface User {
  id: string;
  username: string | null;
  email: string | null;
  name: string | null;
  image: string | null;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// API response type
export interface AuthResponse {
  message: string;
  user: User;
}

// Login credentials
export interface LoginCredentials {
  identifier: string;
  password: string;
}

// Registration credentials
export interface RegisterCredentials {
  username: string;
  password: string;
}

// API error response
export interface ApiError {
  message?: string | string[];
}