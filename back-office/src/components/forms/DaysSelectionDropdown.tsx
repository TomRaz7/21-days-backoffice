import { FC, useState, useEffect } from 'react';
import {
    Button,
    Checkbox,
    Menu,
    MenuButton,
    MenuList,
    HStack,
    Text,
    NumberInputField,
    NumberInput,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import IWorkshopSlot from '../../interfaces/IWorkshopSlot';

const weekDays = [
    {day:'Lundi', index:0},
    {day:'Mardi', index:1},
    {day:'Mercredi', index:2},
    {day:'Jeudi', index:3},
    {day:'Vendredi', index:4},
    {day:'Samedi', index:5},
    {day:'Dimanche', index:6}
];

interface DaysSelectionDropdownProps {
    handleSelectedDays: Function,
    workshopDuration: number
}

const DaysSelectionDropdown: FC<DaysSelectionDropdownProps> = ({handleSelectedDays, workshopDuration}: DaysSelectionDropdownProps) => {

    const [workshopSlots, setWorkshopSlots] = useState<IWorkshopSlot[]>([]);

    const handleCheckSlots = (day: string, dayIndex:number, nbSlot: number, from:string): void => {
        let found = workshopSlots.find(w => w.day === day); //on regarde si le jour est déjà présent dans le tableau
        if(found && found.nbSlot === nbSlot && from === 'box'){ //case décocher un vire l'élément
            setWorkshopSlots(workshopSlots.filter((w) => w.day !== day));
        } else if (found && found.nbSlot !== nbSlot && from === 'slot') { //on met à jour le nb de slot pour ce jour
            let workshopSlotsCopy = workshopSlots.filter((w) => w.day !== day);
            workshopSlotsCopy.push({day, dayIndex, nbSlot});
            setWorkshopSlots(workshopSlotsCopy);
        } else {
            setWorkshopSlots(workshopSlots => [...workshopSlots, {day, dayIndex, nbSlot}]); //on ajoute un nouvel élément si inexistant
        }
    }

    useEffect(() => { //si la durée du workshop est nulle on reset le tableau d'array à vide
        if(workshopDuration === 0){
            setWorkshopSlots([]);
        }
    }, [workshopDuration])

    useEffect(() => {
        handleSelectedDays(workshopSlots);
    }, [workshopSlots])

    return(
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Disponibilités
            </MenuButton>
            <MenuList>
                <Text color='gray.600' p={2} ml={2} mr={2} fontWeight='semibold'>Renseignez la disponibilité et le nombre de créneaux par jour</Text>
                {workshopDuration === 0 && 
                <Text mt={1} textAlign='center' fontWeight={'normal'} color={'red.400'}>
                    Veuillez tout d'abord renseigner la durée de l'atelier
                </Text>}
                {weekDays.map((e, index) => {
                    return(
                        <CheckBoxRow 
                        key={index} 
                        associatedDay={e.day} 
                        dayIndex={e.index}
                        handleCheck={handleCheckSlots} 
                        isDisabled={workshopDuration === 0}
                        />
                    )
                })}
            </MenuList>
        </Menu>
    );
}

interface CheckBoxRowProps {
    key: number,
    associatedDay: string,
    dayIndex: number,
    handleCheck(day: string, dayIndex:number, nbSlot: number, from: string): void,
    isDisabled: boolean
}


const CheckBoxRow: FC<CheckBoxRowProps> = ({key, associatedDay, dayIndex, handleCheck, isDisabled}: CheckBoxRowProps) => { 

    const [isChecked, setIsCheked] = useState<boolean>(false);
    const [nbSlot, setNbSlot] = useState<number>(0);

    const handleNbSlot = (value:any):void => {
        setNbSlot(value);
        handleCheck(associatedDay, dayIndex, value, 'slot');
    }

    useEffect(() => {
        setNbSlot(0)
        setIsCheked(false);
    },[isDisabled])

    return(
        <HStack p={2} justify='space-between' ml={2} mr={2} key={key}>
            <HStack spacing={2}>
                <Text fontWeight='normal'>{associatedDay}</Text>
                {(isChecked && !isDisabled) && 
                <NumberInput min={1} maxW='100px' mr='2rem' value={nbSlot} onChange={handleNbSlot}>
                    <NumberInputField />
                </NumberInput>
                }
            </HStack>
            <Checkbox isDisabled={isDisabled} colorScheme='teal' isChecked={isChecked} onChange={() => {
                setIsCheked(!isChecked);
                if(!isChecked){ //la checkbox vient d'être cochée
                    setNbSlot(1);
                    handleCheck(associatedDay, dayIndex, 1, 'slot');
                } else {
                    setNbSlot(0);
                    handleCheck(associatedDay, dayIndex, nbSlot, 'box');
                }                
            }}/>
        </HStack>
    );
}

export default DaysSelectionDropdown;