import { FC } from 'react';
import { Center, Flex, HStack, Input, NumberInput, NumberInputField, Text, VStack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import {  MdCalendarToday } from 'react-icons/md';

import DaysSelectionDropdown from './DaysSelectionDropdown';

interface WorkshopTimeSlotInputProps {
    placeholder: string
}

const WorkshopTimeSlotInput: FC<WorkshopTimeSlotInputProps> = ({placeholder}: WorkshopTimeSlotInputProps) => {

    const handleSelectedDays = (days: string[]): void => {
        console.log('jours sélectionnées depuis le parent');
        console.log(days)
    }

    return(
        <Flex
        border='1px'
        borderColor='teal.300'
        boxShadow='base'
        direction='column'
        p={6}
        borderRadius='lg'
        backgroundColor='white'
        color='gray.600'
        fontWeight='bold'
        w='400px'
        mb={2}
        >
            <HStack spacing={2} mb={4}>
                <Text color='teal.300' fontWeight='bold'>{placeholder}</Text>
                <Center
                display='flex'
                h='30px'
                w='30px'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                borderRadius='full'
                p={2}
                backgroundColor='teal.300'
                >
                <Icon as={MdCalendarToday} color="white" h={4} w={4} /> 
                </Center>
            </HStack>
            <DaysSelectionDropdown handleSelectedDays={handleSelectedDays} />
        </Flex>
    );
}

export default WorkshopTimeSlotInput;