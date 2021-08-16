import { Box, ChakraProvider, Heading, HStack } from '@chakra-ui/react';
import { IonContent, IonPage } from '@ionic/react';
import theme from '../styles/theme';

type LayoutProps = {
    title: string;
    children: React.ReactNode;
}

const Layout = ({
    title,
    children,
}: LayoutProps) => {
    return (
        <IonPage>
            <IonContent>
                <ChakraProvider theme={theme}>
                    <Box color="gray">
                        <HStack justify="center">
                            <Heading>{title}</Heading>
                        </HStack>
                        {children}
                    </Box>
                </ChakraProvider>
            </IonContent>
        </IonPage>
    )
}

export default Layout
