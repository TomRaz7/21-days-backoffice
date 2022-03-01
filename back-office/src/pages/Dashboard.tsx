import { FC } from 'react';
import { Box, Center, Text } from '@chakra-ui/react'

import ContentContainer from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';

const Dashboard: FC = () => {
    return(
        <Box 
        display='flex'
        flex={6}  
        overflow='hidden'
        backgroundColor='green.100'
        >
          <ContentContainer>
                <ContentHeader page='Dashboard' />
                <Center flex={10}>
                    <Text>Mon Dashboard</Text>
                </Center>
            </ContentContainer>
        </Box>
    );
}

export default Dashboard;