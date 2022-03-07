import { FC, useState } from 'react';
import { Button, HStack } from '@chakra-ui/react'

interface MinutePickerListProps {
    handleSelectedButton(value : number):void
}

const MinutePickerList: FC<MinutePickerListProps> = ({handleSelectedButton}: MinutePickerListProps) => {

    const handleMinDurationButton = (value: number):void => {
        handleSelectedButton(value)
    }

    const [activeButton, setActiveButton] = useState<number>(0);

    return(
        <HStack>
            <Button size={'sm'} fontSize={12} border={activeButton === 0 ? '1px' : '0px'} borderColor='teal.300' isActive={activeButton === 0} onClick={() => {
                handleMinDurationButton(0);
                setActiveButton(0);
            }}>
                00
            </Button>
            <Button size={'sm'} fontSize={12} border={activeButton === 1 ? '1px' : '0px'} borderColor='teal.300' isActive={activeButton === 1} onClick={() => {
                handleMinDurationButton(15);
                setActiveButton(1);
            }}>
                15
            </Button>
            <Button size={'sm'} fontSize={12} border={activeButton === 2 ? '1px' : '0px'} borderColor='teal.300' isActive={activeButton === 2} onClick={() => {
                handleMinDurationButton(30);
                setActiveButton(2);
            }}>
                30
            </Button>
            <Button size={'sm'} fontSize={12} border={activeButton === 3 ? '1px' : '0px'} borderColor='teal.300' isActive={activeButton === 3} onClick={() => {
                handleMinDurationButton(45);
                setActiveButton(3);
            }}>
                45
            </Button>
        </HStack>
    );
}

export default MinutePickerList