import { YStack, Text, H2, H5 } from 'tamagui'

interface HeroTextProps {
  mainHeading: string
  subHeading: string
}

export const HeroText = ({ mainHeading, subHeading }: HeroTextProps) => {
  return (
    <YStack alignItems="center" gap="$2">
      <H2 letterSpacing="$1">{mainHeading}</H2>
      <Text>{subHeading}</Text>
    </YStack>
  )
}
