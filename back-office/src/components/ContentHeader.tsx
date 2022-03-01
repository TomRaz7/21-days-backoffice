import { FC } from 'react';
import { Icon } from '@chakra-ui/icons';
import { MdPerson } from 'react-icons/md';
import {Button, Flex, Text } from '@chakra-ui/react'

interface ContentHeaderProps {
    page: string,
}

const ContentHeader: FC<ContentHeaderProps> = ({page}: ContentHeaderProps) => {

    const handleSignOut = (): void => {
        console.log('sign out');
    }

    return(
        <Flex
        direction='row'
        w='100%'
        backgroundColor='gray.50'
        flex={1}
        p={5}
        align='center'
        justify='space-between'
        >
            <Flex 
            direction='column'
            >
                <Flex>
                    <Text color='gray.400'>Pages </Text>
                    <Text color='gray.600' ml={1}> / {page}</Text>
                </Flex>
                <Text color='gray.600' fontWeight='semibold'>{page}</Text>
            </Flex>
            <SignoutButton onClick={handleSignOut} />
        </Flex>
    );
}

interface SignoutButtonProps {
    onClick: Function
}

const SignoutButton: FC<SignoutButtonProps> = ({onClick}: SignoutButtonProps) => {
    return(
        <Button
        leftIcon={<MdPerson/>}
        color='teal.300'
        onClick={() => {
            onClick();
        }}
        colorScheme='teal'
        variant='outline'
        >
            Déconnexion
        </Button>
    );
}

export default ContentHeader;