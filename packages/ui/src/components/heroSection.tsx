import { YStack } from 'tamagui'
import { CircleButton } from './circleButton'
import { HeroText } from './heroText'

export const HeroSection = () => {
  return (
    <YStack space>
      <HeroText mainHeading="Exit Forgetting" subHeading="Forgetting items when leaving" />
      <CircleButton key={1} backgroundColor="$purple5" emoji="➕" text="Create" />
    </YStack>
  )
}
