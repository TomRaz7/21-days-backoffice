import { FC } from "react";
import { Flex } from '@chakra-ui/react'

import useWindowDimensions from "../hooks/use-window-dimensions";

const AppContainer: FC = (props: any) => {

    const { height } = useWindowDimensions();

    return(
        <Flex
        direction='row'
        flex={1}
        h={height}
        w='100%'
        backgroundColor='gray.50'
        >
            {props.children}
        </Flex>
    );
}

export default AppContainer;