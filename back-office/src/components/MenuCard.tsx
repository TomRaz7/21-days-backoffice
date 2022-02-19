import { FC } from "react";
import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'

interface MenuCardProps{
    title: string,
    icon: string,
    isActive: boolean
    onClick: Function
}

const MenuCard: FC<MenuCardProps> = ({title, icon, isActive, onClick}: MenuCardProps) =>{
    return(
        <Flex
        alignItems='center'
        backgroundColor={isActive ? 'white' : 'gray.100'}
        borderRadius={isActive ? 'lg' : 'none'}
        boxShadow={isActive ? 'base' : 'none'}
        direction='row'
        onClick={() => {
            onClick(title);
        }}
        p={4}
        w='250px'
        >
            <Box
            backgroundColor={isActive ? 'teal.300' : 'white'}
            borderRadius='lg'
            boxSize='30px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            >
                <CalendarIcon color={isActive ? 'white' : 'teal.300'}/>
            </Box>
            <Text color={isActive ? 'gray.600' : 'gray.400'} ml={2}>{title}</Text>
        </Flex>
    );
}

export default MenuCard;