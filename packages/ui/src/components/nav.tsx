import React from 'react'; // Make sure to import React
import { Menu, Search, UserCircle } from '@tamagui/lucide-icons';
import { Button } from 'tamagui';
import { XStack } from 'tamagui';
import { red } from '@tamagui/themes';

export const Navbar = () => {
    return (
        <XStack justifyContent='space-between' borderEndColor={"red"}> 
            <Button icon={Menu}/>
            
            <XStack gap={10}>
            <Button icon={Search}/>
            <Button icon={UserCircle}/>
            </XStack>
        </XStack>
    );
}



  

