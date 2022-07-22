import type { NextPage } from 'next'
import Head from 'next/head'
import { trpc } from '../utils/trpc'
import Image from 'next/image'
import HomeImage from '../public/images/home.png'
import { Container, Center, Box ,useColorModeValue, SimpleGrid} from '@chakra-ui/react'
import Content from '../components/content'

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
          <Image src={HomeImage} alt="Home Image" />
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
          Easy Copy Paste npm Woof !!
        </Box>
        </Container>

        

       {isLoading || !data ? <div><h1>loadinggg</h1></div> : 
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
