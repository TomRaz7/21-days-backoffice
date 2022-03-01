import { FC } from 'react';
import { Flex } from '@chakra-ui/react'

const ContentContainer: FC = (props: any) => {
    return(
        <Flex
        direction='column'
        backgroundColor='grey.100'
        width='100%'
        align='center'
        >
            {props.children}
        </Flex>
    );
}

export default ContentContainer;