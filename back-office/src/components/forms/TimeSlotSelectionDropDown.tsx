import { FC, useEffect, useState } from 'react';
import {
    Text,
    VStack,
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
    startsAt: Date["getHours"] | number 
    duration: number
}

const DaySlotsBundle: FC<DaySlotsProps> = ({day, nbSlot, workshopDuration}:DaySlotsProps) => {

    const [timeslots, setTimeslots] = useState<ITimeSlot[]>([]);

    useEffect(() => { //en fonction du nmbr de slot passés en prop on crée un array de timeslot pour mapper dessus ensuite
        setTimeslots([]);
        for(let i = 0; i < nbSlot; i++){
            setTimeslots(timeslots => [...timeslots, {duration: workshopDuration, startsAt: 0,}]);
        }
    }, [nbSlot]);


    const handleRowInput = (index: number, inputStartTimeH: number, inputStartTimeMin: number): void => { 
        let startTime = inputStartTimeH*3600 + inputStartTimeMin*60;
        if(timeslots.some((slot) => slot?.startsAt <= startTime + workshopDuration)){ //on sera tjrs vrai si par defaut on met start at 0
            console.log('intersection entre deux créneaux')
        } else {
            let copy = timeslots;
            copy[index].startsAt = startTime;
            setTimeslots(copy);
        }
        
        //check intersection puis persister les créneaux et passer le invalid si check faux
        console.log('input n°'+index);
        console.log(inputStartTimeH, inputStartTimeMin);
    } 

    return(
        <VStack direction={'column'} align='left'>
            {workshopDuration > 0 &&
            <>
            <Text>Créneaux du {day}</Text>
            {!!timeslots.length && timeslots.map((e, index) => {
                return(
                    <TimeslotInputRow index={index} workshopDuration={workshopDuration} handleInput={handleRowInput}/>
                );
            })}
            </> 
            }
        </VStack>
    )
}

export default TimeSlotSelectionDropDown;