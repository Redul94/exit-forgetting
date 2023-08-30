import { Button, XStack } from 'tamagui'
import { Book, Coffee } from '@tamagui/lucide-icons'
export function Cofe() {
  return (
    <XStack justifyContent="space-between">
      <Button icon={Book} marginRight={13}>
        Learn More
      </Button>
      <Button icon={Coffee}>Buy me a coffee</Button>
    </XStack>
  )
}
