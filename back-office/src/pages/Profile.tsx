import { FC } from 'react';
import { Box, Center, Text } from '@chakra-ui/react'

import ContentContainer from '../components/ContentContainer';
import ContentHeader from '../components/ContentHeader';

const Profile: FC = () => {
    return(
        <Box 
        display='flex'
        flex={6}  
        overflow='hidden'
        backgroundColor='green.100'
        >
          <ContentContainer>
                <ContentHeader page='Profil' />
                <Center flex={8}>
                    <Text>Mon profil</Text>
                </Center>
            </ContentContainer>
        </Box>
    );
}

export default Profile;