import { ColorStyleProp } from '@tamagui/web/types/types'
import { YStack, Text, Button, SizeTokens, FontSizeTokens } from 'tamagui'
import { useLink } from 'solito/link'

export interface CircleButtonProps {
  backgroundColor: ColorStyleProp
  text: string
  emoji: string
  key: string | number
  href?: string
  small?: boolean
}

export const CircleButton = ({ backgroundColor, emoji, text, href, small }: CircleButtonProps) => {
  const link = useLink({
    href: href ?? '/check',
  })

  return (
    <YStack alignItems="center" gap="$2">
      <Button
        {...link}
        size={small ? '$10' : '$12'}
        circular
        fontSize={small ? '$9' : '$9'}
        backgroundColor={backgroundColor}
      >
        {emoji}
      </Button>
      <Text>{text}</Text>
    </YStack>
  )
}
