import React from 'react'
import { Coffee, BookOpen } from '@tamagui/lucide-icons'
import { Button, Anchor } from 'tamagui'
import { XStack, YStack, Text, H1 } from 'tamagui'

export const About = () => {
  return (
    <YStack justifyContent="space-between" flexDirection="column" height={'100%'} paddingBottom={7}>
      <YStack>
        <XStack justifyContent="center" borderEndColor={'red'}>
          <H1 justifyContent="center" alignItems="center">
            About
          </H1>
        </XStack>

        <YStack margin={23} backgroundColor={'grey'} borderRadius={15} padding={12} gap={6}>
          <YStack gap={5}>
            <Text fontSize={20} fontWeight={'bold'}>
              App Name
            </Text>
            <Text marginLeft={9}>Exit Forgetting</Text>
          </YStack>
          <YStack gap={5}>
            <Text fontSize={20} fontWeight={'bold'}>
              Version
            </Text>
            <Text marginLeft={9}>V1.0 2023</Text>
          </YStack>
          <YStack gap={5}>
            <Text fontSize={20} fontWeight={'bold'}>
              Email
            </Text>
            <Anchor href="mail@biplobsd.me" marginLeft={9}>
              mail@biplobsd.me
            </Anchor>
          </YStack>
          <YStack gap={5}>
            <Text fontSize={20} fontWeight={'bold'}>
              Source Code
            </Text>
            <Anchor href="https://github.com/biplobsd" marginLeft={9}>
              https://github.com/biplobsd
            </Anchor>
          </YStack>
          <YStack gap={5}>
            <Text fontSize={20} fontWeight={'bold'}>
              Blogs
            </Text>
            <Anchor href="https://biplobsd.github.io" marginLeft={9}>
              https://biplobsd.github.io
            </Anchor>
          </YStack>
          <YStack gap={5}>
            <Text fontSize={20} fontWeight={'bold'}>
              Developers
            </Text>
            <YStack justifyContent="flex-start" marginLeft={9}>
              <Anchor href="https://github.com/bisplobsd">Biplob Kumar Sutradhar</Anchor>

              <Anchor href="https://github.com/redul94">Redul Hossen</Anchor>
            </YStack>
          </YStack>
        </YStack>
      </YStack>
      <XStack justifyContent="center" alignItems="flex-end">
        <Button icon={BookOpen} marginRight={9}>
          Learn more
        </Button>
        <Button icon={Coffee}>Buy me a coffe</Button>
      </XStack>
    </YStack>
  )
}
