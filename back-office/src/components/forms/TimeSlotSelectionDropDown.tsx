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
import TimeslotInputRow from './TimeslotInputRow';

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

    useEffect(() => { //en fonction du nmbr de slot passés en prop on crée un array de timeslot pour mapper dessus ensuite
        setTimeslots([]);
        for(let i = 0; i < nbSlot; i++){
            setTimeslots(timeslots => [...timeslots, {duration: workshopDuration, startsAt: null,}]);
        }
    }, [nbSlot]);


    return(
        <VStack direction={'column'} align='left'>
            {workshopDuration > 0 &&
            <>
            <Text>Créneaux du {day}</Text>
            {!!timeslots.length && timeslots.map((e, index) => {
                return(
                    <TimeslotInputRow index={index} workshopDuration={workshopDuration}/>
                );
            })}
            </> 
            }
        </VStack>
    )
}

interface WorkshopEndingTimeProps {
    res: string
}

const WorkshopEndingTime: FC<WorkshopEndingTimeProps> = ({res}: WorkshopEndingTimeProps) => {
    return(
        <Text color={'gray.600'} fontWeight='normal'>{res}
        </Text>
    );
}

export default TimeSlotSelectionDropDown;