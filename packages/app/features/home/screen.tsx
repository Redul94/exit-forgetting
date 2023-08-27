import { YStack } from 'tamagui'
import { HeroSection } from '@my/ui/src'
import { PickUp } from '@my/ui/src/components/picked'
import React from 'react'
import { useThemeStore } from 'app/state/useThemeStore'
import { useColorScheme } from 'react-native'

export function HomeScreen() {
  const scheme = useColorScheme()
  const useTheme = useThemeStore()
  return (
    <YStack theme={useTheme.getThemeName(scheme)}>
      {/* <HeroSection /> */}
      <PickUp />
    </YStack>
  )
}
