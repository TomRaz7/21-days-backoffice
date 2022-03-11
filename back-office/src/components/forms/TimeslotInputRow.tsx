import { FC, useEffect, useState } from 'react';
import {
    Text,
    NumberInput, 
    NumberInputField,
    Box,
    HStack,
  } from '@chakra-ui/react';

import MinutePickerList from './MinutePickerList';

interface TimeslotInputRowProps { // ajouter une prop de validité qui est trigger au check l'intersection de créneau
    index: number,
    workshopDuration: number,
    handleInput(key: number, startH: number, startMin: number):void
}

const TimeslotInputRow: FC<TimeslotInputRowProps> = ({index, workshopDuration, handleInput}: TimeslotInputRowProps) => {

    const [startingHour, setStartingHour] = useState<number>(8); // pas d'atelier possible avant 8 h AM
    const [startingMin, setStartingMin] = useState<number>(0);

    useEffect(() => {
        //console.log(index);
        handleInput(index, startingHour, startingMin);
    }, [startingHour, startingMin]);

    const formatWorkshopSlotEndTime = (startHour: number , startMinute: number, duration: number) => {
        let startH = startHour;
        let startMin = startMinute;
        let durationH = Math.trunc(duration / 3600);
        let durationMin = (duration % 3600)/60;
        let carriedNum = 0;

        if(startMin + durationMin >= 60){
            carriedNum += 1;
        }
        let resMin = (startMin + durationMin)%60;
        let resHour = startH + durationH + carriedNum;

        if(resMin === 0){
            return `${resHour}h00`;
        }

        return `${resHour}h${resMin}`;
    }

    const handeHourStartTime = (val: number): void => {
        if(isNaN(val)) {
            setStartingHour(8);
        } else {
            setStartingHour(val);
        }
    }

    const handeMinStartTime = (val: number): void => {
        setStartingMin(val);
    }

    return(
        <Box key={index}>
            <Text color={'gray.400'} fontWeight='normal'>Créneau n° {index + 1}</Text>
            <HStack>
                <Text color={'gray.600'} fontWeight='normal'>De</Text>
                <NumberInput min={8} max={20} onChange={(val) => { //les max et min d l'input devront être récupérés via les heures d'ouverture
                        handeHourStartTime(parseInt(val))}}>
                    <NumberInputField placeholder='8'/>
                </NumberInput>
                <Text color={'gray.600'} fontWeight='normal'>h</Text>
                <MinutePickerList handleSelectedButton={handeMinStartTime}/>
                <Text color={'gray.600'} fontWeight='normal'>à</Text>
                <WorkshopEndingTime res={formatWorkshopSlotEndTime(startingHour, startingMin, workshopDuration)} />
            </HStack>
        </Box>
    );
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

export default TimeslotInputRow;