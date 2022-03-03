import { FC, useState } from 'react';
import { Button, Center, Flex, HStack, Input, NumberInput, NumberInputField, Text, VStack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import {  MdCalendarToday } from 'react-icons/md';

import DaysSelectionDropdown from './DaysSelectionDropdown';

interface WorkshopTimeSlotInputProps {
    placeholder: string
}

const WorkshopTimeSlotInput: FC<WorkshopTimeSlotInputProps> = ({placeholder}: WorkshopTimeSlotInputProps) => {

    const [durationUnit, setDurationUnit] = useState<string>('h')

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
            <VStack mb={4} align='flex-start'>
                <Flex direction='row' justify='space-between' align='center' w='100%'>
                    <Text color='gray.400' fontWeight='normal'>Durée de l'atelier</Text>
                    <Flex direction='row' justify='space-around' align='center' >
                        <Button size='sm' mr={2} backgroundColor='white' color={durationUnit === 'min' ? 'gray.400' : 'teal.300'} onClick={() => {setDurationUnit('h')}}>h</Button>
                        <Button size='sm' backgroundColor='white' color={durationUnit === 'min' ? 'teal.300' : 'gray.400'} onClick={() => {setDurationUnit('min')}}>min</Button>
                    </Flex>
                </Flex>
                {durationUnit === 'min' ? 
                    <NumberInput w='100%' max={59} onChange={(val) => {
                        console.log(val)
                    }}>
                        <NumberInputField placeholder='minute(s)' />
                    </NumberInput> : 
                    <HStack>
                         <NumberInput>
                            <NumberInputField placeholder='heures(s)'/>
                         </NumberInput>
                        <Text color='gray.400' fontWeight='light'>h</Text>
                        <NumberInput max={59}>
                            <NumberInputField placeholder='minute(s)'/>
                        </NumberInput>
                        <Text color='gray.400' fontWeight='light'>min</Text>
                    </HStack>
                }
            </VStack>
            <DaysSelectionDropdown handleSelectedDays={handleSelectedDays} />
        </Flex>
    );
}

export default WorkshopTimeSlotInput;