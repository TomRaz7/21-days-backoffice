import { FC, useEffect, useState } from 'react';
import { Button, Center, Flex, HStack, NumberInput, NumberInputField, Text, VStack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import {  MdCalendarToday } from 'react-icons/md';

import DaysSelectionDropdown from './DaysSelectionDropdown';
import IWorkshopSlot from '../../interfaces/IWorkshopSlot';
import TimeSlotSelectionDropDown from './TimeSlotSelectionDropDown';
import MinutepickerList from './MinutePickerList';

interface WorkshopTimeSlotInputProps {
    placeholder: string
}

const WorkshopTimeSlotInput: FC<WorkshopTimeSlotInputProps> = ({placeholder}: WorkshopTimeSlotInputProps) => {

    const [duration, setDuration] = useState<number>(0);
    const [workshopSlots, setWorkshopSlots] = useState<IWorkshopSlot[]>([]);
    const [minutes, setMinutes] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);

    const handleSelectedDays = (days: IWorkshopSlot[]): void => {
        setWorkshopSlots(days);
    }

    useEffect(() => {
        setDuration(hours*3600 + minutes*60);
    }, [minutes, hours]);

    useEffect(() => {
        console.log('dans le workshop time slot input')
        console.log(duration)
        if(duration === 0){
            setWorkshopSlots([]);
        }
    }, [duration])

    const handleMinDurationButton = (val: number): void => {
        setMinutes(val);
        setDuration(duration + val*60);
    }

    const handleHDurationInput = (val: number): void => {
        if(isNaN(val)) {
            setHours(0);
        } else {
            setHours(val);
        }
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
                </Flex> 
                <HStack>
                        <NumberInput onReset={() => {setDuration(0);}} onChange={(val) => {
                            handleHDurationInput(parseInt(val));
                        }}>
                        <NumberInputField placeholder='heure(s)'/>
                        </NumberInput>
                    <Text color='gray.400' fontWeight='light'>h</Text>
                    <MinutepickerList handleSelectedButton={handleMinDurationButton}/>
                    <Text color='gray.400' fontWeight='light'>min</Text>
                </HStack>
            </VStack>
            <DaysSelectionDropdown handleSelectedDays={handleSelectedDays} workshopDuration={duration}/>
            {!!workshopSlots.length && 
                <TimeSlotSelectionDropDown slots={workshopSlots} workshopDuration={duration}/> 
            }
        </Flex>
    );
}

export default WorkshopTimeSlotInput;