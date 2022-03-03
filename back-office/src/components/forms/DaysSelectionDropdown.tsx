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

interface selectedDay {
    day: string,
    nbSlot: number
}

interface DaysSelectionDropdownProps {
    handleSelectedDays: Function
}

const DaysSelectionDropdown: FC<DaysSelectionDropdownProps> = ({handleSelectedDays}: DaysSelectionDropdownProps) => {

    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const handleCkeck = (day: string, nbSlot: number): void => {
        if(selectedDays.includes(day)){
            setSelectedDays(selectedDays.filter((e) => e !== day));
        } else {
            setSelectedDays(selectedDays => [...selectedDays, day]);
        }
    }

    useEffect(() => {
        handleSelectedDays(selectedDays);
    }, [selectedDays])

    return(
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Disponibilités
            </MenuButton>
            <MenuList>
                <Text color='gray.600' p={2} ml={2} mr={2} fontWeight='semibold'>Renseignez la disponibilité et le nombre de créneaux par jour</Text>
                {weekDays.map((e, index) => {
                    return(
                        <CheckBoxRow key={index} associatedDay={e} handleCheck={handleCkeck}/>
                    )
                })}
            </MenuList>
        </Menu>
    );
}

interface CheckBoxRowProps {
    key: number,
    associatedDay: string,
    handleCheck(day: string, nbSlot: number): void
}

const CheckBoxRow: FC<CheckBoxRowProps> = ({key, associatedDay, handleCheck}: CheckBoxRowProps) => {

    const [isChecked, setIsCheked] = useState<boolean>(false);
    const [nbSlot, setNbSlot] = useState<number>(0);

    const handleNbSlot = (value:any):void => {
        setNbSlot(value);
    }

    return(
        <HStack p={2} justify='space-between' ml={2} mr={2} key={key}>
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
            <Checkbox colorScheme='teal' onChange={() => {
                setIsCheked(!isChecked);
                handleCheck(associatedDay, nbSlot);
            }}/>
        </HStack>
    );
}

export default DaysSelectionDropdown;