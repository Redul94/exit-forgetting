import { YStack } from 'tamagui'
import { CircleButton } from './circleButton'
import { HeroText } from './heroText'

export const HeroSection = () => {
  return (
    <YStack space>
      <HeroText mainHeading="Exit Forgetting" subHeading="Forgetting items when leaving" />
      <CircleButton backgroundColor="$red3Light" emoji="➕" text="Create" />
    </YStack>
  )
}
