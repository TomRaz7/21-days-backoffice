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
    MenuDivider,
    HStack,
    Text
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const weekDays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

interface DaysSelectionDropdownProps {
    handleSelectedDays: Function
}

const DaysSelectionDropdown: FC<DaysSelectionDropdownProps> = ({handleSelectedDays}: DaysSelectionDropdownProps) => {

    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const handleCkeck = (day: string): void => {
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
    handleCheck(day: string): void
}

const CheckBoxRow: FC<CheckBoxRowProps> = ({key, associatedDay, handleCheck}: CheckBoxRowProps) => {
    return(
        <HStack p={2} justify='space-between' ml={2} mr={2} key={key}>
            <Text fontWeight='normal'>{associatedDay}</Text>
            <Checkbox colorScheme='teal' onChange={() => {
                handleCheck(associatedDay);
            }}/>
        </HStack>
    );
}

export default DaysSelectionDropdown;