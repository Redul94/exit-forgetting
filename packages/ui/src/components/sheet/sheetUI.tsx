import { Button, Circle, ListItem, Text, XStack, YGroup, YStack } from 'tamagui'
import { GitCompare, Home, Info, Sun, Moon, X } from '@tamagui/lucide-icons'
import { useSheetStore } from 'app/state/useSheetStore'
import Constants from 'expo-constants'
import { useThemeStore } from 'app/state/useThemeStore'
import { useColorScheme } from 'react-native'

export const SheetUI = () => {
  const state = useSheetStore()
  const useTheme = useThemeStore()
  const scheme = useColorScheme()

  return (
    <YStack space={'$2'}>
      <XStack space={'$2'} justifyContent={'flex-end'}>
        <Button
          icon={useTheme.getThemeName(scheme) === 'dark' ? Moon : Sun}
          onPress={() => useTheme.toggle(scheme)}
          circular
        />
        <Button icon={X} onPress={() => state.setOpen(false)} circular />
      </XStack>
      <YStack alignItems={'center'} space={'$2'}>
        <Circle size="$12" backgroundColor={'lightgreen'}>
          <Text color={'black'}>Logo</Text>
        </Circle>
        <Text>{Constants.manifest?.name}</Text>
      </YStack>
      <YGroup alignSelf={'center'} bordered size={'$4'} mt={'$4'}>
        <YGroup.Item>
          <ListItem icon={Home} pressTheme hoverTheme>
            Home
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem icon={GitCompare} pressTheme hoverTheme>
            Pare Item
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem icon={Info} pressTheme hoverTheme>
            About
          </ListItem>
        </YGroup.Item>
      </YGroup>
    </YStack>
  )
}
