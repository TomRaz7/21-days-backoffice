import { FC, useState } from 'react';
import { Icon } from '@chakra-ui/icons';
import { MdOutlineEmail, MdVpnKey } from 'react-icons/md';
import { Box, FormControl, Input, 
    FormLabel,
    FormErrorMessage,
    FormHelperText,  } from '@chakra-ui/react';

interface InputProps {
    type: string;
    handleInput: (param: string) => void;
    placeholder: string;
    isValid?: boolean;
}

const OnboardingFormInput: FC<InputProps> = ({ type, handleInput, placeholder, isValid = false }) => {
    
    const [isError, setIsError] = useState<boolean>(true)
    const [input, setInput] = useState<string>('');

    const getIcon = (type: string) => {
        const choices = [
            { key: 'email', icon: <Icon as={MdOutlineEmail} color="white" h={6} w={6} /> },
            { key: 'password', icon: <Icon as={MdVpnKey} color="white" h={6} w={6} /> },
            { key: 'text', icon: <Icon as={MdVpnKey} color="white" h={6} w={6} /> },
        ];
        const object = choices.find((element) => element.key === type);

        return object?.icon;
    };

    return (
        <Box
            alignItems="center"
            borderRadius="lg"
            boxShadow="lg"
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            p="2"
            w="100%"
            backgroundColor='white'
        >
            <Box
                alignItems="center"
                bg="teal.300"
                borderRadius="lg"
                boxShadow="base"
                display="flex"
                height={50}
                justifyContent="center"
                width={50}
            >
                {getIcon(type)}
            </Box>
            <FormControl width="80%" isRequired isInvalid = {!isValid}>
                <Input
                    isInvalid={!isValid}
                    onChange={(event) => {
                        handleInput(event.target.value);
                    }}
                    placeholder={placeholder}
                    type={type === 'name' ? 'text' : type}
                    variant="flushed"
                />
                {!isValid && <FormErrorMessage>Champs obligatoire</FormErrorMessage>}
            </FormControl>
        </Box>
    );
};

export default OnboardingFormInput;