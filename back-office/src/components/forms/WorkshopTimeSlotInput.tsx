import { FC, useState } from 'react';
import { Button, Center, Flex, HStack, NumberInput, NumberInputField, Text, VStack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import {  MdCalendarToday } from 'react-icons/md';

import DaysSelectionDropdown from './DaysSelectionDropdown';
import IWorkshopSlot from '../../interfaces/IWorkshopSlot';
import TimeSlotSelectionDropDown from './TimeSlotSelectionDropDown';

interface WorkshopTimeSlotInputProps {
    placeholder: string
}

const WorkshopTimeSlotInput: FC<WorkshopTimeSlotInputProps> = ({placeholder}: WorkshopTimeSlotInputProps) => {

    const [durationUnit, setDurationUnit] = useState<string>('h');
    const [duration, setDuration] = useState<number>(0);
    const [workshopSlots, setWorkshopSlots] = useState<IWorkshopSlot[]>([]);

    const handleSelectedDays = (days: IWorkshopSlot[]): void => {
        setWorkshopSlots(days);
    }

    /**
     * TO DO 
     * --> virer la possibilité de ne mettre une durée qu'en min 
     * --> check pk on rentre pas dans le NAN
     */

    const handleMinDurationInput = (val: number): void => {
        if(val === NaN) {
            setDuration(0);
        } else {
            setDuration(val*60);
        }
    }

    const handleHDurationInput = (val: number, type: string): void => {
        console.log(val);
        console.log('jhgqskdhgqskjhgdkjqshdkjqhsdjkqhs')
        if(type === 'min') { 
            setDuration(duration+val*60); //résoudre le pb des sommes
        } else {
            if(val === NaN) {
                console.log('dans le nan')
                setDuration(0);
            } else {
                console.log(val);
                setDuration(duration+val*3600);
            }
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
                        <Button size='sm' mr={2} backgroundColor='white' color={durationUnit === 'min' ? 'gray.400' : 'teal.300'} onClick={() => {
                            setDurationUnit('h');
                            setDuration(0);
                        }}>
                                h
                        </Button>
                        <Button size='sm' backgroundColor='white' color={durationUnit === 'min' ? 'teal.300' : 'gray.400'} onClick={() => {
                            setDurationUnit('min');
                            setDuration(0);
                        }}>
                            min
                        </Button>
                    </Flex>
                </Flex>
                {durationUnit === 'min' ? 
                    <NumberInput w='100%' max={59} onChange={(val) => {
                        handleMinDurationInput(parseInt(val))
                    }}>
                        <NumberInputField placeholder='minute(s)' />
                    </NumberInput> : 
                    <HStack>
                         <NumberInput onReset={() => {setDuration(0);}} onChange={(val) => {
                             handleHDurationInput(parseInt(val), 'h');
                         }}>
                            <NumberInputField placeholder='heure(s)'/>
                         </NumberInput>
                        <Text color='gray.400' fontWeight='light'>h</Text>
                        <HStack>
                            <Button size={'sm'} fontSize={12}>
                                00
                            </Button>
                            <Button size={'sm'} fontSize={12}>
                                15
                            </Button>
                            <Button size={'sm'} fontSize={12}>
                                30
                            </Button>
                            <Button size={'sm'} fontSize={12}>
                                45
                            </Button>
                        </HStack>
                        {/* <NumberInput max={59} onChange={(val) => {
                            handleHDurationInput(parseInt(val), 'min');
                        }}>
                            <NumberInputField placeholder='minute(s)'/>
                        </NumberInput> */}
                        <Text color='gray.400' fontWeight='light'>min</Text>
                    </HStack>
                }
            </VStack>
            <DaysSelectionDropdown handleSelectedDays={handleSelectedDays} workshopDuration={duration}/>
            {!!workshopSlots.length && 
                <TimeSlotSelectionDropDown slots={workshopSlots} workshopDuration={duration}/> 
            }
        </Flex>
    );
}

export default WorkshopTimeSlotInput;