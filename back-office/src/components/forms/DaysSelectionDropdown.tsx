import { FC, useState, useEffect } from 'react';
import {
    Button,
    Checkbox,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    HStack,
    Text,
    NumberInputField,
    NumberInput,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const weekDays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

interface IWorkshopSlot {
    day: string,
    nbSlot: number,
}

interface DaysSelectionDropdownProps {
    handleSelectedDays: Function
}

const DaysSelectionDropdown: FC<DaysSelectionDropdownProps> = ({handleSelectedDays}: DaysSelectionDropdownProps) => {

    const [workshopSlots, setWorkshopSlots] = useState<IWorkshopSlot[]>([]);

    const handleCheckSlots = (day: string, nbSlot: number, from:string): void => {
        let found = workshopSlots.find(w => w.day === day); //on regarde si le jour est déjà présent dans le tableau
        if(found && found.nbSlot === nbSlot && from === 'box'){ //case décocher un vire l'élément
            setWorkshopSlots(workshopSlots.filter((w) => w.day !== day));
        } else if (found && found.nbSlot !== nbSlot && from === 'slot') { //on met à jour le nb de slot pour ce jour
            let workshopSlotsCopy = workshopSlots.filter((w) => w.day !== day);
            workshopSlotsCopy.push({day, nbSlot});
            setWorkshopSlots(workshopSlotsCopy);
        } else {
            setWorkshopSlots(workshopSlots => [...workshopSlots, {day, nbSlot}]); //on ajoute un nouvel élément
        }
    }

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
                {weekDays.map((e, index) => {
                    return(
                        <CheckBoxRow key={index} associatedDay={e} handleCheck={handleCheckSlots}/>
                    )
                })}
            </MenuList>
        </Menu>
    );
}

interface CheckBoxRowProps {
    key: number,
    associatedDay: string,
    handleCheck(day: string, nbSlot: number, from: string): void
}

const CheckBoxRow: FC<CheckBoxRowProps> = ({key, associatedDay, handleCheck}: CheckBoxRowProps) => {

    const [isChecked, setIsCheked] = useState<boolean>(false);
    const [nbSlot, setNbSlot] = useState<number>(0);

    const handleNbSlot = (value:any):void => {
        setNbSlot(value);
        handleCheck(associatedDay, value, 'slot');
    }

    return(
        <HStack p={2} justify='space-between' ml={2} mr={2} key={key}>
            <HStack spacing={2}>
                <Text fontWeight='normal'>{associatedDay}</Text>
                {isChecked && 
                <NumberInput min={0} maxW='100px' mr='2rem' value={nbSlot} onChange={handleNbSlot}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                }
            </HStack>
            <Checkbox colorScheme='teal' onChange={() => {
                setIsCheked(!isChecked);
                setNbSlot(0);
                handleCheck(associatedDay, nbSlot, 'box');
            }}/>
        </HStack>
    );
}

export default DaysSelectionDropdown;