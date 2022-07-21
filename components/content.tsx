import { Container, Center, Box ,useColorModeValue, Flex, Heading,Button, Text, SimpleGrid} from '@chakra-ui/react'
import { AiOutlineRight } from "react-icons/ai";

type Props = {
    name: String,
    nameNPM: String
}

const Content: React.FC<Props> = ({name, nameNPM}) => {
return (
    <Box borderRadius="lg"
    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
    p={1}
    mt={6}
    alignItems="center"
    textAlign="center">
    <Text mb={2} borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}>{name}</Text>
    <Flex justifyContent='space-between' alignItems="center">
        <Flex  alignItems="center" >
          <AiOutlineRight/> <Text ml={2}>{nameNPM}</Text>
        </Flex>
        <Button>
          Copy
        </Button>
    </Flex>
  </Box>
  )
}

export default Content