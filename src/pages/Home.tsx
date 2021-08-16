import { Heading, Text } from '@chakra-ui/layout';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Card';
import './Home.css';



const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Branco</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Card margin={3}>
          <Heading color="gray.800">Cabeçalho</Heading>
          <Text color="gray">Texto</Text>
        </Card>
      </IonContent>
    </IonPage>
  );
};

export default Home;
