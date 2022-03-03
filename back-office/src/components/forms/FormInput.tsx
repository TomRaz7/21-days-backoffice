import { FC } from 'react';
import { 
    Center, 
    Flex, 
    HStack, 
    Input, 
    NumberInput, 
    NumberInputField, 
    NumberIncrementStepper, 
    NumberDecrementStepper, 
    Text 
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import { MdModeEditOutline, MdEuro, MdFace } from 'react-icons/md';

interface FormInputProps {
    placeholder: string,
    associatedField: string,
    type: string
}

const FormInput: FC<FormInputProps> = ({placeholder, associatedField, type}: FormInputProps) => {

    const getIcon = (filter: string) => {
        const choices = [
            { key: 'title', icon: <Icon as={MdModeEditOutline} color="white" h={4} w={4} /> },
            { key: 'price', icon: <Icon as={MdEuro} color="white" h={4} w={4} /> },
            { key: 'nbMinParticipants', icon: <Icon as={MdFace} color="white" h={4} w={4} /> },
        ];
        const object = choices.find((element) => element.key === filter);

        return object?.icon;
    } 

    return(
        <Flex
        border='1px'
        borderColor='teal.300'
        boxShadow='base'
        direction='column'
        p={6}
        borderRadius='lg'
        backgroundColor='white'
        color='gray.600'
        fontWeight='bold'
        w='400px'
        mb={2}
        >
            <HStack spacing={2}>
                <Text color='teal.300' fontWeight='bold'>{placeholder}</Text>
                <Center
                display='flex'
                h='30px'
                w='30px'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                borderRadius='full'
                p={2}
                backgroundColor='teal.300'
                >
                {getIcon(associatedField)}
                </Center>
            </HStack>
            {type === 'numeric' ? <NumberInput focusBorderColor='teal.300' size='md' mt={4}>{associatedField === 'nbMinParticipants' ? 
                <NumberInputField placeholder='Nombre minimum de participants' />
            : <NumberInputField />}</NumberInput> : <Input focusBorderColor='teal.300' size='md' mt={4} type={type}/>}
        </Flex>
    );
}

export default FormInput;