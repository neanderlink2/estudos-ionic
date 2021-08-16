import {
    createStandaloneToast,
    extendTheme,
    ThemeConfig
} from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
})

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({
    config,
    breakpoints,
    fonts: {
        heading: "'Segoi UI', sans-serif",
        body: "'Segoi UI', sans-serif",
    },
    letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0.025em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.15em',
    },
    styles: {
        global: (props) => ({
            '.chakra-slide.chakra-modal__content form': {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
            },
            body: {
                backgroundColor: props.colorMode === 'light' ? '#EBF4F8' : '#23222D',
            },
        }),
    },
})

export const toast = createStandaloneToast({ theme })

export default theme