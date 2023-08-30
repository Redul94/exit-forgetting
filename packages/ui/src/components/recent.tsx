import { CircleButton, CircleButtonProps } from './circleButton'
import { FlatList } from 'react-native'
import { YStack, Text, Stack } from 'tamagui'

interface RecentProps {
  list: CircleButtonProps[]
}

export const Recent = ({ list }: RecentProps) => {
  return (
    <>
      <YStack gap="$2">
        <Text fontSize={'$5'}>Recent</Text>
        <Stack>
          <FlatList
            numColumns={2}
            renderItem={({ item }) => <CircleButton {...item} />}
            data={list}
            contentContainerStyle={{ gap: 20 }}
            columnWrapperStyle={{
              gap: 30,
              justifyContent: 'center',
            }}
          />
        </Stack>
      </YStack>
    </>
  )
}
