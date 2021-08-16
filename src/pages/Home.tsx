import { Heading, Text } from '@chakra-ui/react';
import Card from '../components/Card';
import Layout from '../layout';

const Home: React.FC = () => {
  return (
    <Layout title="Início">
      <Card margin={3}>
        <Heading>Cabeçalho</Heading>
        <Text>Texto</Text>
      </Card>
    </Layout>
  );
};

export default Home;
