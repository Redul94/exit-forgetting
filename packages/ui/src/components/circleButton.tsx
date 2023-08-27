import { ColorStyleProp } from '@tamagui/web/types/types'
import { YStack, Text, Button } from 'tamagui'

export interface CircleButtonProps {
  backgroundColor: ColorStyleProp
  text: string
  emoji: string
  key: string | number
}

export const CircleButton = ({ backgroundColor, emoji, text }: CircleButtonProps) => {
  return (
    <YStack alignItems="center" gap="$2">
      <Button size="$12" circular fontSize="$9" backgroundColor={backgroundColor}>
        {emoji}
      </Button>
      <Text>{text}</Text>
    </YStack>
  )
}
