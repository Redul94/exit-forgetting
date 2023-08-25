import { Menu, Search, UserCircle } from '@tamagui/lucide-icons'
import { Button, XStack } from 'tamagui'

export const Right = () => {
  return (
    <XStack gap={10}>
      <Button icon={Search} circular />
      <Button icon={UserCircle} circular />
    </XStack>
  )
}
