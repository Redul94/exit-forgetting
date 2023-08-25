import {ChevronDown} from '@tamagui/lucide-icons'
import {Sheet,} from '@tamagui/sheet'
import {Button} from 'tamagui'
import {useSheetStore} from "app/state/useSheetStore";
import {SheetUI} from "./sheetUI";

export const SheetLayout = () => {

    const state = useSheetStore();

    return <Sheet
        open={state.open}
        onOpenChange={state.setOpen}
        dismissOnSnapToBottom
        zIndex={100_000}
        animation="bouncy"
    >
        <Sheet.Overlay
            animation="lazy"
            enterStyle={{opacity: 0}}
            exitStyle={{opacity: 0}}
        />
        <Sheet.Handle/>
        <Sheet.Frame
            padding="$4"
        >
            <SheetUI />
        </Sheet.Frame>
    </Sheet>


}