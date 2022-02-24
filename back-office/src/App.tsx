import { useState } from 'react';
import { ChakraProvider, Box, Center, Text } from '@chakra-ui/react'

import AppContainer from './components/AppContainer';
import IMenuCard from './interfaces/IMenuCard';
import Menu from './components/Menu';
import useWindowDimensions from "./hooks/use-window-dimensions";

function App() {

  const { height } = useWindowDimensions();
  const [ selectedMenuItem, setSelectedMenuItem ] = useState<string>('Agenda');

  const [menuItems, setMenuItems] = useState<IMenuCard[]>([
    {
        title: 'Agenda',
        icon: 'CalendarIcon',
        isActive: true
    },
    {
        title: 'Dashboard',
        icon: 'StarIcon',
        isActive: false
    },
    {
        title: 'Ateliers',
        icon: 'ViewIcon',
        isActive: false
    },
]);

  const handleSelectedMenuItem = (title: string): void => {
    let currentActiveIndex = menuItems.findIndex(e => e.isActive === true);
    let newActiveIndex = menuItems.findIndex(e => e.title === title);
    let copy = [...menuItems];
    copy[currentActiveIndex].isActive = false;
    copy[newActiveIndex].isActive = true;
    
    setMenuItems(copy);
    setSelectedMenuItem(title);
  }

  return (
    <ChakraProvider>
      <AppContainer>
        <Menu handleMenuItem={handleSelectedMenuItem} menuItems={menuItems}/>
        <Box 
        display='flex'
        flex={6} 
        borderWidth='1px' 
        boxShadow='base' 
        overflow='hidden'
        backgroundColor='green.100'
        >
          <Center>
            <Text>{selectedMenuItem}</Text>
          </Center>
        </Box>
      </AppContainer>
    

    </ChakraProvider>
  );
}

export default App;
