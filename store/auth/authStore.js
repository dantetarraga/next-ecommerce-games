'use client'

import { Auth } from '@/api'
import { create } from 'zustand'

const initialState = {
  token: null,
  user: null,
  login: null,
  logout: null,
  updateUser: null
}

export const useAuthStore = create((set) => ({
  ...initialState,
  onLogin: async (formValue) => {
    const { token, user } = await Auth.login(formValue)
    set({ token, user })
  },
  onLogout: () => {
    Auth.logout()
    set(initialState)
  },
  onUpdateUser: (user) => set({ user })
}))
