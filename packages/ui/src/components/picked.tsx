import { Home, CheckCircle, Book, Coffee, X } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Button, Dialog, H2, XStack, YStack } from 'tamagui'
import { Cofe } from './coffee'

export function PickUp() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Dialog
        open={open}
        modal
        onOpenChange={(open) => {
          setOpen(open)
        }}
      >
        <Dialog.Trigger />
        <Dialog.Portal>
          <Dialog.Overlay
            key="overlay"
            animation="quick"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
          <Dialog.Content
            bordered
            elevate
            key="content"
            animateOnly={['transform', 'opacity']}
            animation={[
              'quick',
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            gap="$4"
          >
            <YStack marginBottom={20}>
              <XStack justifyContent="flex-end">
                <Button onPress={() => setOpen(false)} marginBottom={13} width={50} icon={X} />
              </XStack>

              <YStack alignItems="center" space={'$2'} mb={'$5'}>
                <CheckCircle color="$green10" size={'$20'} height={100} />
                <H2>All Picked</H2>
              </YStack>

              <XStack justifyContent="center">
                <Button icon={Home} marginBottom={39}>
                  Go Home
                </Button>
              </XStack>
              <Cofe />
            </YStack>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </>
  )
}
