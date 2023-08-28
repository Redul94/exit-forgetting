import { ColorStyleProp } from '@tamagui/web/types/types'
import { YStack, Text, ZStack, Circle, Stack } from 'tamagui'
import { useLink } from 'solito/link'
import { Check } from '@tamagui/lucide-icons'
import { GestureResponderEvent } from 'react-native'

export interface CircleButtonProps {
  backgroundColor: ColorStyleProp
  text: string
  emoji: string
  key: string | number
  href?: string
  small?: boolean
  checked?: boolean
  onPress?: ((event: GestureResponderEvent) => void) | null
}

export const CircleButton = ({
  backgroundColor,
  emoji,
  text,
  href,
  small,
  checked,
  onPress,
}: CircleButtonProps) => {
  const link = useLink({
    href: href ?? '/check',
  })

  return (
    <YStack
      {...link}
      onPress={onPress ?? link.onPress}
      animation={'lazy'}
      alignItems="center"
      gap="$2"
      hoverStyle={{
        scale: 1.2,
      }}
      pressStyle={{
        scale: 0.5,
      }}
    >
      <ZStack w={small ? '$10' : '$12'} h={small ? '$10' : '$12'}>
        <Circle
          opacity={checked ? 0.7 : 1}
          size={small ? '$10' : '$12'}
          backgroundColor={backgroundColor}
        >
          <Text fontSize={small ? '$8' : '$9'}>{emoji}</Text>
        </Circle>
        {checked && (
          <ZStack f={1}>
            <Circle
              {...link}
              onPress={onPress ?? link.onPress}
              enterStyle={{
                scale: 1.5,
                y: -10,
                opacity: 0,
              }}
              hoverStyle={{
                scale: 1.2,
              }}
              pressStyle={{
                scale: 0.5,
              }}
              backgroundColor={'$green7'}
              animation="quick"
              opacity={0.4}
              f={1}
            />
            <Stack f={1} alignItems="center" justifyContent="center">
              <Check size={'$7'} color="$green11" />
            </Stack>
          </ZStack>
        )}
      </ZStack>
      <Text opacity={checked ? 0.5 : 1}>{text}</Text>
    </YStack>
  )
}
