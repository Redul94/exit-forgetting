import { Share, Edit2 } from '@tamagui/lucide-icons'
import { Button } from 'tamagui'
import { XStack, YStack, Text, H1, Progress } from 'tamagui'
import { demoRecent } from '../home/screen'
import { CircleButton, Stack } from '@my/ui/src'
import { FlatList } from 'react-native'
import { useState } from 'react'

export const Check = () => {
  const [checkedList, setCheckList] = useState(new Array<boolean>(demoRecent.length).fill(false))

  const completedCount = ((checkedList.filter((x) => x).length / demoRecent.length) * 100).toFixed(
    0
  )
  return (
    <YStack flex={1} mt={'$2'} alignItems="center" space>
      <YStack alignItems="center" space={'$1.5'}>
        <H1 letterSpacing={'$1'} fontWeight={'$1'}>
          Check
        </H1>
        <Text mb={'$2'} fontSize={'$4'}>
          🏫 University
        </Text>
        <XStack space>
          <Button icon={Edit2}>Edit</Button>
          <Button icon={Share}>Share</Button>
        </XStack>
      </YStack>

      <XStack space alignItems="center">
        <Stack alignItems="flex-end" w={'$3'}>
          <Text>{completedCount}%</Text>
        </Stack>
        <Progress maxWidth={'$20'} value={parseInt(completedCount)}>
          <Progress.Indicator enterStyle={{}} backgroundColor={'$green8'} animation="bouncy" />
        </Progress>
      </XStack>

      <Text>Touch to check</Text>

      <Stack flex={1}>
        <FlatList
          numColumns={3}
          renderItem={({ item, index }) => (
            <CircleButton
              onPress={() =>
                setCheckList((x) => {
                  x[index] = !x[index]
                  return [...x]
                })
              }
              checked={checkedList[index]}
              small
              {...item}
            />
          )}
          data={demoRecent}
          contentContainerStyle={{ gap: 25 }}
          columnWrapperStyle={{ gap: 25 }}
        />
      </Stack>
    </YStack>
  )
}
