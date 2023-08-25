import React from 'react'
import { Search } from '@tamagui/lucide-icons'
import { Button } from 'tamagui'
import { XStack, YStack, Input } from 'tamagui'

export const SearchBar = () => (
  <YStack>
    <XStack padding={10} justifyContent="center">
      <Input size="$3.5" borderWidth={2} borderRadius={22} width={440} marginRight={9} />
      <Button icon={Search} borderRadius={22}>
        Search
      </Button>
    </XStack>
  </YStack>
)
