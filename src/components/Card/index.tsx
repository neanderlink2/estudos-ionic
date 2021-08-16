import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

type CardProps = BoxProps

const Card = ({ children, ...rest }: PropsWithChildren<CardProps>) => {
    const bgColor = useColorModeValue('white', 'gray.900')
    return (
        <Box
            bg={bgColor}
            borderRadius="2xl"
            padding={8}
            boxShadow="0px 24px 48px #2C27380D"
            {...rest}
        >
            {children}
        </Box>
    )
}

export default Card