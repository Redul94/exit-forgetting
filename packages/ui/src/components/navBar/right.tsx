import { Search, UserCircle } from '@tamagui/lucide-icons'
import { Button, XStack } from 'tamagui'
import { useColorScheme } from 'react-native'
import { useThemeStore } from 'app/state/useThemeStore'

export const Right = () => {
  const scheme = useColorScheme()
  const useTheme = useThemeStore()

  return (
    <XStack theme={useTheme.getThemeName(scheme)} gap={10}>
      <Button icon={Search} circular />
      <Button icon={UserCircle} circular />
    </XStack>
  )
}
