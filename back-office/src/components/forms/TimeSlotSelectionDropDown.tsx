import { FC, useEffect, useState, useCallback } from 'react';
import {
    Text,
    VStack,
  } from '@chakra-ui/react'

import IWorkshopSlot from '../../interfaces/IWorkshopSlot';
import ITimeSlot from '../../interfaces/ITimeSlot';
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

const DaySlotsBundle: FC<DaySlotsProps> = ({day, nbSlot, workshopDuration}:DaySlotsProps) => {

    const [timeslots, setTimeslots] = useState<ITimeSlot[]>([]);

    useEffect(() => { //en fonction du nmbr de slot passés en prop on crée un array de timeslot pour mapper dessus ensuite
        setTimeslots([]);
        for(let i = 0; i < nbSlot; i++){
            setTimeslots(timeslots => [...timeslots, {duration: workshopDuration, startsAt: 0,}]);
        }
    }, [nbSlot]);

    useEffect(() => { //si la durée du workshop est modifiée depuis le parent on map sur l'ensemble des timeslot pour MAJ le workshop duration
        if(!!timeslots.length){
            let copy =  timeslots.map(e => {return {...e, duration: workshopDuration}});
            setTimeslots(copy);
        }
    }, [workshopDuration])

    const checkSlotIntersection = (inputStartTimeH: number, inputStartTimeMin: number): boolean => {
        console.log(timeslots);
        let startTime = inputStartTimeH*3600 + inputStartTimeMin*60;
        if(timeslots.some((slot) => slot?.startsAt <= startTime + workshopDuration)){
            return true //intersection
        } 

        return false;
    }

    const handleRowInput = useCallback((index: number, inputStartTimeH: number, inputStartTimeMin: number): void => { 
        let startTime = inputStartTimeH*3600 + inputStartTimeMin*60;
        //if(!checkSlotIntersection(inputStartTimeH, inputStartTimeMin)){ //si pas d'intersection de créneau
            let copy = timeslots;
            if(copy[index]){
                copy[index].startsAt = startTime;
                setTimeslots(copy);
            }
            console.log(copy);
        //}
    }, [timeslots]);

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