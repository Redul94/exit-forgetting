import { YStack } from 'tamagui'
import { CircleButton } from './circleButton'
import { HeroText } from './heroText'

export const HeroSection = () => {
  return (
    <YStack mt={'$2'} space>
      <HeroText mainHeading="Exit Forgetting" subHeading="Forgetting items when leaving" />
      <CircleButton
        href="/create_edit/Create"
        key={1}
        backgroundColor="$purple5"
        emoji="➕"
        text="Create"
      />
    </YStack>
  )
}
