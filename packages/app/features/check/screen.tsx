import { Share, Edit2 } from '@tamagui/lucide-icons'
import { Button } from 'tamagui'
import { XStack, YStack, Text, H1, Progress } from 'tamagui'
import { demoRecent } from '../home/screen'
import { CircleButton, Stack } from '@my/ui/src'
import { FlatList } from 'react-native'

export const Check = () => {
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
        <Text>10%</Text>
        <Progress maxWidth={'$20'} value={60}>
          <Progress.Indicator backgroundColor={'$green8'} animation="bouncy" />
        </Progress>
      </XStack>

      <Text>Touch to check</Text>

      <Stack flex={1}>
        <FlatList
          numColumns={3}
          renderItem={({ item }) => <CircleButton small {...item} />}
          data={demoRecent}
          contentContainerStyle={{ gap: 25 }}
          columnWrapperStyle={{ gap: 25 }}
        />
      </Stack>
    </YStack>
  )
}
