import { YStack } from 'tamagui'
import { CircleButtonProps, HeroSection, Recent, ScrollView } from '@my/ui/src'
import React from 'react'
import { useThemeStore } from 'app/state/useThemeStore'
import { useColorScheme } from 'react-native'

export const demoRecent: CircleButtonProps[] = [
  {
    text: 'Home',
    emoji: '🏠',
    backgroundColor: '$blue5',
    key: '1',
  },
  {
    text: 'Office',
    emoji: '🏢',
    backgroundColor: '$yellow5',
    key: '2',
  },
  {
    text: 'Tour cox bazar',
    emoji: '🌊',
    backgroundColor: '$pink5',
    key: '3',
  },
  {
    text: 'Phone',
    emoji: '📱',
    backgroundColor: '$green5',
    key: '4',
  },
  {
    text: 'Home',
    emoji: '🏠',
    backgroundColor: '$blue5',
    key: '5',
  },
  {
    text: 'Office',
    emoji: '🏢',
    backgroundColor: '$yellow5',
    key: '6',
  },
  {
    text: 'Tour cox bazar',
    emoji: '🌊',
    backgroundColor: '$pink5',
    key: '7',
  },
  {
    text: 'Phone',
    emoji: '📱',
    backgroundColor: '$green5',
    key: '8',
  },
  {
    text: 'Home',
    emoji: '🏠',
    backgroundColor: '$blue5',
    key: '9',
  },
  {
    text: 'Office',
    emoji: '🏢',
    backgroundColor: '$yellow5',
    key: '10',
  },
  {
    text: 'Tour cox bazar',
    emoji: '🌊',
    backgroundColor: '$pink5',
    key: '11',
  },
  {
    text: 'Phone',
    emoji: '📱',
    backgroundColor: '$green5',
    key: '12',
  },
]

export function HomeScreen() {
  const scheme = useColorScheme()
  const useTheme = useThemeStore()

  return (
    <YStack theme={useTheme.getThemeName(scheme)}>
      <Recent list={demoRecent} listHeaderComponent={<HeroSection />} />
    </YStack>
  )
}
