import { FC } from 'react';
import { Box, Center, Flex, HStack, Input, NumberInput, NumberInputField, Text, VStack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import { MdModeEditOutline, MdEuro } from 'react-icons/md';

interface FormInputProps {
    placeholder: string,
    associatedField: string,
    type: string
}

const FormInput: FC<FormInputProps> = ({placeholder, associatedField, type}: FormInputProps) => {

    const getIcon = (filter: string) => {
        const choices = [
            { key: 'title', icon: <Icon as={MdModeEditOutline} color="teal.300" h={4} w={4} /> },
            { key: 'price', icon: <Icon as={MdEuro} color="teal.300" h={4} w={4} /> },
        ];
        const object = choices.find((element) => element.key === filter);

        return object?.icon;
    } 

    return(
        <Flex
        boxShadow='base'
        direction='column'
        p={6}
        borderRadius='lg'
        backgroundColor='teal.300'
        color='white'
        fontWeight='semibold'
        w='400px'
        mb={2}
        >
            <HStack spacing={2}>
                <Text color='white' fontWeight='semibold'>{placeholder}</Text>
                <Center
                display='flex'
                h='30px'
                w='30px'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                borderRadius='full'
                p={2}
                backgroundColor='white'
                >
                {getIcon(associatedField)}
                </Center>
            </HStack>
            {type === 'numeric' ? <NumberInput size='md' mt={4}><NumberInputField/></NumberInput> : <Input size='md' mt={4} type={type}/>}
        </Flex>
    );
}

export default FormInput;