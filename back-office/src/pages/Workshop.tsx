import { FC } from 'react';
import { Box, Center, Text } from '@chakra-ui/react'

import ContentContainer from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';
import WorkshopsList from '../components/WorkshopsList';

const Workshop: FC = () => {
    return(
        <Box 
        display='flex'
        flex={6}  
        overflow='hidden'
        >
          <ContentContainer>
                <ContentHeader page='Ateliers' />
                <WorkshopsList />
            </ContentContainer>
        </Box>
    );
}

export default Workshop;