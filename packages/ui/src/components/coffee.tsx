import { Button, XStack } from 'tamagui'
import { Book, Coffee as CoffeeIcon } from '@tamagui/lucide-icons'

export function Coffee() {
  return (
    <XStack justifyContent="space-between">
      <Button icon={Book} marginRight={13}>
        Learn More
      </Button>
      <Button icon={CoffeeIcon}>Buy me a coffee</Button>
    </XStack>
  )
}
