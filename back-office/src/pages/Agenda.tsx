import { FC } from 'react';
import { Box, Center, Text, Flex } from '@chakra-ui/react'

import ContentContainer from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';

const Agenda: FC = () => {
    return(
        <Box 
        display='flex'
        flex={6}  
        overflow='hidden'
        backgroundColor='green.100'
        >
            <ContentContainer>
                <ContentHeader page='Agenda' />
                <Center flex={8}>
                    <Text>Mon agenda</Text>
                </Center>
            </ContentContainer>
        </Box>
    );
}

export default Agenda;