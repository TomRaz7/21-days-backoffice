import { useState } from 'react';
import { ChakraProvider, Box, Center, Text } from '@chakra-ui/react'

import AppContainer from './components/AppContainer';
import IMenuCard from './interfaces/IMenuCard';
import Menu from './components/Menu';
import useWindowDimensions from "./hooks/use-window-dimensions";
import ContentRouter from './components/ContentRouter';

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
        icon: 'Chart',
        isActive: false
    },
    {
        title: 'Ateliers',
        icon: 'Workshop',
        isActive: false
    },
    {
      title: 'Profil',
      icon: 'Profile',
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
        <ContentRouter selectedScreen={selectedMenuItem}/>
      </AppContainer>
    </ChakraProvider>
  );
}

export default App;
