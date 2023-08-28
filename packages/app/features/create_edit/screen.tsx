import React, { useState } from 'react'
import { Save } from '@tamagui/lucide-icons'
import { XStack, YStack, Stack, Text, H1, Button, Input, Label } from 'tamagui'
import { CircleButton } from '@my/ui/src'
import { FlatList } from 'react-native'
import { demoRecent } from '../home/screen'
import { createParam } from 'solito'

const { useParam } = createParam<{ screenName: string }>()

export const CreateEdit = () => {
  const [screenName] = useParam('screenName')

  const [checkedList, setCheckList] = useState(demoRecent)

  return (
    <YStack flex={1} paddingBottom={7} marginHorizontal="$4">
      <XStack justifyContent="center">
        <H1 letterSpacing={'$1'} fontWeight={'$1'}>
          {screenName}
        </H1>
      </XStack>

      <YStack flex={1} space="$2">
        <YStack space="$1.5">
          <Label width={90} htmlFor="title">
            Where to go
          </Label>
          <XStack alignItems="center" space="$4">
            <Input flex={1} id="title" placeholder="Type title" />
          </XStack>
        </YStack>

        <XStack space="$3">
          <YStack>
            <Label width={90}>Emoji</Label>
            <Button>
              <Text fontSize={'$5'}>{'🔥'}</Text>
            </Button>
          </YStack>

          <YStack>
            <Label width={90}>Color</Label>
            <Button backgroundColor={'$green5'} />
          </YStack>

          <YStack f={1}>
            <Label width={90}>Owner</Label>
            <Stack f={1} alignContent="center" justifyContent="center">
              <Text opacity={0.7}>example@gmail.com</Text>
            </Stack>
          </YStack>
        </XStack>

        <YStack space="$1.5">
          <Label htmlFor="primaryItem">Primary Item</Label>
          <XStack alignItems="center" space="$2">
            <Input flex={1} id="primaryItem" placeholder="Type item name" />
            <Button>Add</Button>
          </XStack>
        </YStack>

        <YStack flex={1} space="$1.5">
          <Label htmlFor="carryItems">Ensure Carry Items</Label>
          <FlatList
            id="carryItems"
            numColumns={3}
            renderItem={({ item, index }) => (
              <CircleButton
                onPress={() =>
                  setCheckList((x) => {
                    x.splice(index, 1)
                    return [...x]
                  })
                }
                small
                {...item}
                removed
              />
            )}
            data={checkedList}
            contentContainerStyle={{ gap: 20 }}
            columnWrapperStyle={{ gap: 20 }}
          />
        </YStack>

        <Button icon={Save}>Save</Button>
      </YStack>
    </YStack>
  )
}
