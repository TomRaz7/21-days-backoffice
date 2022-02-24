import { FC } from 'react';
import { Box, Center, Text } from '@chakra-ui/react'

import ContentContainer from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';

const Workshop: FC = () => {
    return(
        <Box 
        display='flex'
        flex={6}  
        overflow='hidden'
        backgroundColor='green.100'
        >
          <ContentContainer>
                <ContentHeader page='Ateliers' />
                <Center flex={8}>
                    <Text>Mes ateliers</Text>
                </Center>
            </ContentContainer>
        </Box>
    );
}

export default Workshop;