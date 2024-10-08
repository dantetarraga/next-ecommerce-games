'use client'

import { Auth } from '@/app/api'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
  token: null,
  user: null,
  login: null,
  logout: null,
  updateUser: null,
  status: 'not-authenticated'
}

export const useAuthStore = create(
  persist(
    (set) => ({
      ...initialState,
      onLogin: async (formValue) => {
        set({ status: 'checking' })
        const { user, jwt } = await Auth.login(formValue)
        set({ token: jwt, user })
        set({ status: 'authenticated' })
      },
      onChecking: () => {
        set({ status: 'checking' })
        set({ token: null, user: null })
      },
      onLogout: () => {
        Auth.logout()
        set(initialState)
      },
      onUpdateUser: (user) => set({ user })
    }),
    {
      name: 'access-token',
      getStorage: () => localStorage,
      partialize: (state) => ({ token: state.token })
    }
  )
)
