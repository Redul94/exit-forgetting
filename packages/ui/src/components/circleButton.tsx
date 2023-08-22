import { ColorStyleProp } from '@tamagui/web/types/types'
import { YStack, Text, Button } from 'tamagui'

interface CircleButtonProps {
  backgroundColor: ColorStyleProp
  text: string
  emoji: string
}

export const CircleButton = ({ backgroundColor, emoji, text }: CircleButtonProps) => {
  return (
    <YStack alignItems="center" gap="$2">
      <Button size="$10" circular fontSize="$7" backgroundColor={backgroundColor}>
        {emoji}
      </Button>
      <Text>{text}</Text>
    </YStack>
  )
}
