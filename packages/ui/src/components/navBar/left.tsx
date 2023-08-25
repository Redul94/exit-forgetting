import { Menu } from '@tamagui/lucide-icons'
import { Button, Stack } from 'tamagui'
import { useSheetStore } from 'app/state/useSheetStore'
import { useColorScheme } from 'react-native'
import { useThemeStore } from 'app/state/useThemeStore'

export const Left = () => {
  const state = useSheetStore()
  const scheme = useColorScheme()
  const useTheme = useThemeStore()

  return (
    <Stack theme={useTheme.getThemeName(scheme)}>
      <Button icon={Menu} onPress={() => state.setOpen(true)} circular />
    </Stack>
  )
}
