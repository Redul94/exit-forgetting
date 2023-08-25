import { Menu } from '@tamagui/lucide-icons'
import { Button } from 'tamagui'
import {useSheetStore} from "app/state/useSheetStore";

export const Left = () => {
  const state = useSheetStore();

  return <Button icon={Menu} onPress={() => state.setOpen(true)} circular />
}
