import { create } from 'zustand'
import { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance'
import { Theme } from '@react-navigation/native/src/types'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native'

type ThemeSchemeName = 'light' | 'dark' | 'auto'

interface ThemeState {
  mode: ThemeSchemeName
  setMode: (mode: ThemeSchemeName) => void
  getMode: (systemMode: ColorSchemeName) => Theme
  getThemeName: (systemMode: ColorSchemeName) => 'light' | 'dark'
  toggle: (systemMode: ColorSchemeName) => void
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  mode: 'auto',
  toggle: (systemMode) =>
    set(({ mode }) => ({ mode: get().getThemeName(systemMode) === 'dark' ? 'light' : 'dark' })),
  setMode: (mode) => set(() => ({ mode })),
  getMode: (systemMode) => {
    const defaultTheme: Theme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: 'white',
      },
    }
    switch (get().mode) {
      case 'dark':
        return DarkTheme
      case 'light':
        return defaultTheme
      case 'auto':
        return systemMode === 'dark' ? DarkTheme : defaultTheme
      default:
        return DarkTheme
    }
  },
  getThemeName: (systemMode) => {
    return get().getMode(systemMode).dark ? 'dark' : 'light'
  },
}))
