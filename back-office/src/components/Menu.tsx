import { FC, useState } from "react";
import { Box, Divider, Flex, Text, VStack } from '@chakra-ui/react'

import IMenuCard from "../interfaces/IMenuCard";
import MenuCard from './MenuCard';

interface MenuProps{
    menuItems: IMenuCard[],
    handleMenuItem: Function
}

const Menu: FC<MenuProps> = ({handleMenuItem, menuItems}: MenuProps) => {

    return(
        <Flex
        flex={1}
        direction='column'
        p={2}
        pt={8}
        backgroundColor='gray.100'
        >
            <Box p={2}>
                <Text color='gray.600' fontSize='l' textAlign='center' mb={7}> 21 days BO</Text>
                <Divider mt={2} borderColor='gray.300'/>
            </Box>
            <VStack mt={2}>
                {menuItems.map((e) => {
                    return(
                        <MenuCard 
                        title={e.title} 
                        icon={e.icon} 
                        isActive={e.isActive}
                        onClick={handleMenuItem}
                        />
                    );
                })}
            </VStack>
        </Flex>
    );
}

export default Menu;
