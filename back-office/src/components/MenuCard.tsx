import { FC } from "react";
import { Box, Flex, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { MdCalendarToday, MdBarChart, MdWork, MdPerson } from 'react-icons/md';
import { IconType } from "react-icons";

interface MenuCardProps{
    title: string,
    icon: string,
    isActive: boolean
    onClick: Function
}


interface IconItem {
    name: string,
    iconType: IconType
}

const MenuCard: FC<MenuCardProps> = ({title, icon, isActive, onClick}: MenuCardProps) =>{

    const getCardIcon = (icon: string): IconType | undefined => {

        const icons: IconItem[]  = [
            {name: 'CalendarIcon', iconType: MdCalendarToday},
            {name: 'Chart', iconType: MdBarChart},
            {name: 'Workshop', iconType: MdWork},
            {name: 'Profile', iconType: MdPerson},
        ];

        return icons.find(i => i.name === icon)?.iconType;
    }

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
                <Icon as={getCardIcon(icon)} color={isActive ? 'white' : 'teal.300'}/>
            </Box>
            <Text color={isActive ? 'gray.600' : 'gray.400'} ml={2}>{title}</Text>
        </Flex>
    );
}

export default MenuCard;