import { X,Delete,Home,CheckCircle,Book,Coffee } from '@tamagui/lucide-icons'
import { GetProps, Stack, styled } from 'tamagui' // or '@tamagui/core'
import { useState } from 'react'

import {Adapt,Button,Dialog,Fieldset,Label,Sheet,TooltipSimple,Unspaced,H2,XStack,YStack,} from 'tamagui'


export function PickUp() {

  return <DialogInstance />
 

function DialogInstance() {

  const [open, setOpen] = useState(false)
  return (

    <Dialog
      modal
      onOpenChange={(open) => {
        setOpen(open)
      }}
    >

      <Dialog.Trigger asChild>

        <Button>Show Dialog</Button>

      </Dialog.Trigger>
      <Adapt when="sm" platform="touch">

        <Sheet zIndex={200000} modal dismissOnSnapToBottom>

          <Sheet.Frame padding="$4" gap="$4">

            <Adapt.Contents />

          </Sheet.Frame>

          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />

        </Sheet>

      </Adapt>
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

          {/* <Dialog.Title>Edit profile</Dialog.Title> */}

          <Dialog.Description  marginTop={280}>

            <YStack backgroundColor="white" marginBottom={20}>
            <Button icon={Delete} justifyContent='flex-end'backgroundColor="white" marginBottom={13}/>
            <Stack alignItems="center">
            <CheckCircle color='green' size={"$10"}  height={100} /></Stack> 
            
            <H2 justify-Content='center' alignItems='center' alignSelf='center' marginBottom={25}>All Picked</H2>
            <Button icon={Home} marginBottom={13} width={200} alignSelf='center' justifyContent='center' backgroundColor={"grey"} borderRadius={20}>Go Home</Button>
            <XStack>
                <Button icon={Book} marginRight={13} backgroundColor={"grey"} borderRadius={20}>Learn More</Button>
                <Button icon={Coffee} backgroundColor={"grey"} borderRadius={20}>Buy me a coffee</Button>
            </XStack>   
            </YStack>         

          </Dialog.Description>

          <Fieldset gap="$4" horizontal>

            {/* <Label width={160} justifyContent="flex-end" htmlFor="name">

              Name

            </Label> */}

            {/* <Input flex={1} id="name" defaultValue="Nate Wienert" /> */}

          </Fieldset>

          <Fieldset gap="$4" horizontal>

            <Label width={160} justifyContent="flex-end" htmlFor="username">

              <TooltipSimple label="Pick your favorite" placement="bottom-start">

                {/* <Paragraph>Food</Paragraph> */}

              </TooltipSimple>

            </Label>

           

          </Fieldset>
          <XStack alignSelf="flex-end" gap="$4">

            <DialogInstance />
            <Dialog.Close displayWhenAdapted asChild>

              {/* <Button theme="alt1" aria-label="Close">

                Save changes

              </Button> */}

            </Dialog.Close>

          </XStack>
          <Unspaced>

            <Dialog.Close asChild>

              <Button
                position="absolute"
                top="$3"
                right="$3"
                size="$2"
                circular
                icon={X}
              />

            </Dialog.Close>

          </Unspaced>

        </Dialog.Content>

      </Dialog.Portal>

    </Dialog>

  )

}
}
