import { CircleButton, CircleButtonProps } from './circleButton'

import { DraggableGrid } from 'react-native-draggable-grid'

import { YStack, Text, Stack } from 'tamagui'

interface RecentProps {
  list: CircleButtonProps[]
}

export const Recent = ({ list }: RecentProps) => {
  return (
    <>
      <YStack gap="$2">
        <Text fontSize={'$5'}>Recent</Text>
        <Stack w={'100%'}>
          <DraggableGrid
            numColumns={2}
            renderItem={(item) => <CircleButton {...item} />}
            data={list}
          />
        </Stack>
      </YStack>
    </>
  )
}
