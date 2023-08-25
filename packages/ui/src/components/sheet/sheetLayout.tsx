import { Sheet } from '@tamagui/sheet'
import { useSheetStore } from 'app/state/useSheetStore'
import { SheetUI } from './sheetUI'
import { useColorScheme } from 'react-native'
import { useThemeStore } from 'app/state/useThemeStore'

export const SheetLayout = () => {
  const state = useSheetStore()

  const scheme = useColorScheme()
  const useTheme = useThemeStore()

  return (
    <Sheet
      open={state.open}
      onOpenChange={state.setOpen}
      dismissOnSnapToBottom
      zIndex={100_000}
      animation="bouncy"
    >
      <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
      <Sheet.Handle theme={useTheme.getThemeName(scheme)} />
      <Sheet.Frame theme={useTheme.getThemeName(scheme)} padding="$4">
        <SheetUI />
      </Sheet.Frame>
    </Sheet>
  )
}
