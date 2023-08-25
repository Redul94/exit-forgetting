import { ThemeProvider } from '@react-navigation/native'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { useThemeStore } from 'app/state/useThemeStore'

export default function HomeLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  const scheme = useColorScheme()
  const useTheme = useThemeStore()

  if (!loaded) {
    return null
  }
  return (
    <Provider>
      <ThemeProvider value={useTheme.getMode(scheme)}>
        <Stack />
      </ThemeProvider>
    </Provider>
  )
}
