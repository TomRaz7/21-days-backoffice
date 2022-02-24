import { FC } from 'react';
import { Icon } from '@chakra-ui/icons';
import { MdPerson } from 'react-icons/md';
import { Flex, Text } from '@chakra-ui/react'

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
        backgroundColor='gray.100'
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
        <Flex
        direction='row'
        align='center'
        justify='center'
        onClick={() => {
            onClick();
        }}
        boxShadow='base'
        borderRadius='lg'
        backgroundColor='teal.300'
        p={4}
        >
            <Icon as={MdPerson} color='white' h={6} w={6}/>
            <Text color='white' fontWeight='semibold' ml={1}>Déconnexion</Text>
        </Flex>
    );
}

export default ContentHeader;