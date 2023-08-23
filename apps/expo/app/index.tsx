import { XStack } from '@my/ui/types'
import { HomeScreen } from 'app/features/home/screen'
import { SearchBar } from 'app/features/Search/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <XStack>
      <Stack.Screen
        options={{
          title: 'Search',
        }}
      />
      {/* <HomeScreen /> */}
      <SearchBar />
    </XStack>
  )
}
