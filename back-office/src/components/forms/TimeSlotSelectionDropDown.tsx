import { FC, useEffect, useState } from 'react';
import {
    Text,
    VStack,
    NumberInput, 
    NumberInputField,
    Box,
    HStack,
  } from '@chakra-ui/react'

import IWorkshopSlot from '../../interfaces/IWorkshopSlot';

interface TimeSlotSelectionDropDownProps {
    workshopDuration: number,
    slots: IWorkshopSlot[]
}

const TimeSlotSelectionDropDown: FC<TimeSlotSelectionDropDownProps> = ({
    workshopDuration, 
    slots}: TimeSlotSelectionDropDownProps) => {
    return(
        <VStack mt={4} direction={'column'} align='left' justify={'center'} spacing={4}>
            {slots.map((e) => {
                return(
                    <DaySlotsBundle day={e.day} nbSlot={e.nbSlot} workshopDuration={workshopDuration}/>
                )
            })}
        </VStack>
    );
}

interface DaySlotsProps {
    day: string,
    nbSlot: number,
    workshopDuration: number,
}


interface ITimeSlot{
    startsAt: Date["getHours"] | null
    duration: number
}

const DaySlotsBundle: FC<DaySlotsProps> = ({day, nbSlot, workshopDuration}:DaySlotsProps) => {

    const [timeslots, setTimeslots] = useState<ITimeSlot[]>([]);
    const [startingHour, setStartingHour] = useState<number>();
    const [startingMin, setStartingMin] = useState<number>();

    useEffect(() => { //en fonction du nmbr de slot passés en prop on crée un array de timeslot pour mapper dessus ensuite
        setTimeslots([]);
        for(let i = 0; i < nbSlot; i++){
            setTimeslots(timeslots => [...timeslots, {duration: workshopDuration, startsAt: null,}]);
        }
    }, [nbSlot]);

    useEffect(() => {
        formatWorkshopSlotEndTime();
    }, [startingHour, startingMin])

    const handeHourStartTime = (val: number): void => {
        setStartingHour(val);
    }

    const handeMinStartTime = (val: number): void => {
        setStartingMin(val);
    }

    const formatWorkshopSlotEndTime = () => {
        console.log(startingHour);
        console.log(startingMin);
        console.log(workshopDuration);
    }

    return(
        <VStack direction={'column'} align='left'>
            {workshopDuration > 0 &&
            <>
            <Text>Créneaux du {day}</Text>
            {!!timeslots.length && timeslots.map((e, index) => {
                return(
                    <Box key={index}>
                        <Text color={'gray.400'} fontWeight='normal'>Créneau n° {index + 1}</Text>
                        <HStack>
                            <Text color={'gray.600'} fontWeight='normal'>De</Text>
                            <NumberInput min={8} max={20} placeholder='h' onChange={(val) => { //les max et min d l'input devront être récupérés via les heures d'ouverture
                                    handeHourStartTime(parseInt(val))}}>
                                <NumberInputField />
                            </NumberInput>
                            <Text color={'gray.600'} fontWeight='normal'>h</Text>
                            <NumberInput max={59} placeholder='min' onChange={(val) => {
                                    handeMinStartTime(parseInt(val))}}>
                                <NumberInputField />
                            </NumberInput>
                            <Text color={'gray.600'} fontWeight='normal'>à</Text>
                            <Text color={'gray.600'} fontWeight='normal'>18h30</Text>
                        </HStack>
                    </Box>
                );
            })}
            </> 
            }
        </VStack>
    )
}

export default TimeSlotSelectionDropDown;