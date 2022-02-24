import { FC } from 'react';
import { Flex } from '@chakra-ui/react'

const ContentContainer: FC = (props: any) => {
    return(
        <Flex
        direction='column'
        backgroundColor='blue.100'
        width='100%'
        >
            {props.children}
        </Flex>
    );
}

export default ContentContainer;