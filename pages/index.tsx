import type { NextPage } from 'next'
import Head from 'next/head'
import { trpc } from '../utils/trpc'
import Image from 'next/image'
import HomeImage from '../public/images/home.png'
import { Container, Center, Box ,useColorModeValue, SimpleGrid,Text} from '@chakra-ui/react'
import Content from '../components/content'
import { Spinner } from '@chakra-ui/react'

const Home: NextPage = () => {

  const { data, isLoading } = trpc.useQuery(["datas.getAll"]);


  return (
    <div >
      <Head>
        <title>NPM ALL</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Center mt={6}>
          <Image src={HomeImage} alt="Home Image" width={242} height={138} />
        </Center>
        <Box 
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          mb={6}
          p={3}
          mt={6}
          alignItems="center"
          textAlign="center"
        >
          <Text>Easy Copy Paste npm Woof !!</Text>
        </Box>
        </Container>


       {isLoading || !data ? <Center><Spinner  size="lg" /></Center> : 
        <SimpleGrid columns={[1,1,2]} gap={6}>
          {data?.map((data) => {
            return ( <Content key={data.name}  name={data.name} nameNPM={data?.nameNpm} /> )
          })}
        </SimpleGrid>
       }

   
    
    </div>
  )
}

export default Home
