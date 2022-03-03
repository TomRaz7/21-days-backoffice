import { FC } from 'react';
import { Center, Flex, HStack, Input, NumberInput, NumberInputField, Text, VStack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import {  MdHome } from 'react-icons/md';

interface AdressInputProps {
    placeholder: string
}

const WorkshopAdressInput: FC<AdressInputProps> = ({placeholder}: AdressInputProps) => {
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
                <Icon as={MdHome} color="white" h={4} w={4} /> 
                </Center>
            </HStack>
            <VStack spacing={1} align='flex-start' mt={2}>
                <Text color='gray.400' fontWeight='normal'>Adresse</Text>
                <Input focusBorderColor='teal.300' size='md' mt={4} type='text'/>
            </VStack>
            <VStack spacing={1} align='flex-start' mt={2}>
                <Text color='gray.400' fontWeight='normal'>Code postale</Text>
                <NumberInput focusBorderColor='teal.300' size='md' mt={4} w='100%'><NumberInputField maxLength={5}/></NumberInput>
            </VStack>
            <VStack spacing={1} align='flex-start' mt={2}>
                <Text color='gray.400' fontWeight='normal'>Ville</Text>
                <Input focusBorderColor='teal.300' size='md' mt={4} type='text'/>
            </VStack>
        </Flex>
    );
}

export default WorkshopAdressInput;