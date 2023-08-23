import React from 'react'; // Make sure to import React
import { Menu, Search, UserCircle } from '@tamagui/lucide-icons';
import { Button } from 'tamagui';
import { XStack,YStack,Input,TextArea } from 'tamagui';
import { red } from '@tamagui/themes';

export const SearchBar = () => (
    <YStack>

    
    <XStack padding={10} justifyContent='center'>
    <Input size="$3.5" borderWidth={2} borderRadius={22}  width={440} marginRight={9}/>
    <Button icon={Search} borderRadius={22}>Search</Button>
    
    </XStack>
    


    </YStack>
  )



  

