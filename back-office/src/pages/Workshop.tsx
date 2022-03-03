import { FC, useEffect, useState } from 'react';
import { Box, Center, Spinner, Text } from '@chakra-ui/react'

import ContentContainer from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';
import WorkshopsList from '../components/WorkshopsList';
import IWorkshop from '../interfaces/IWorkshop';

const Workshop: FC = () => {

    const [workshops, setWorkshops] = useState<IWorkshop[]>([]);

    useEffect(() => {
        fetch('http://localhost:2000/workshops/findAll')
        .then((response) => response.json())
        .then((responseJson) => {
            setWorkshops(responseJson);
        })
    }, [])

    return(
        <Box 
        display='flex'
        flex={6}  
        overflow='hidden'
        >
          <ContentContainer>
                <ContentHeader page='Ateliers' />
                {!!workshops.length ? <WorkshopsList workshops={workshops} /> : <Spinner color='teal.300' />}
            </ContentContainer>
        </Box>
    );
}

export default Workshop;