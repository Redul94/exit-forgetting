import { ColorStyleProp } from '@tamagui/web/types/types'
import { YStack, Text, ZStack, Circle, Stack, Button } from 'tamagui'
import { useLink } from 'solito/link'
import { Check, XCircle } from '@tamagui/lucide-icons'
import { GestureResponderEvent } from 'react-native'

export interface CircleButtonProps {
  backgroundColor: ColorStyleProp
  text: string
  emoji: string
  key: string | number
  href?: string
  small?: boolean
  checked?: boolean
  removed?: boolean
  onPress?: ((event: GestureResponderEvent) => void) | null
}

export const CircleButton = ({
  backgroundColor,
  emoji,
  text,
  href,
  small,
  checked,
  removed,
  onPress,
}: CircleButtonProps) => {
  const link = useLink({
    href: href ?? '/check',
  })

  return (
    <YStack
      {...link}
      onPress={removed ? null : onPress ?? link.onPress}
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
              onPress={removed ? null : onPress ?? link.onPress}
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
        {removed && (
          <Button
            hoverStyle={{
              scale: 1.2,
            }}
            pressStyle={{
              scale: 0.5,
            }}
            theme={'red'}
            y={1}
            x={70}
            size={'$2'}
            icon={<XCircle size={'$1'} />}
            color={'$red10'}
            onPress={onPress}
            animation={'lazy'}
            circular
            transparent
          />
        )}
      </ZStack>
      <Text opacity={checked ? 0.5 : 1}>{text}</Text>
    </YStack>
  )
}
