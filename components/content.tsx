import { Box ,useColorModeValue,Flex,Button, Text} from '@chakra-ui/react'
import { useState } from 'react';
import { AiOutlineRight } from "react-icons/ai";
import useClipboard from "react-use-clipboard";
import {toast} from 'react-toastify'

type Props = {
    name: string,
    nameNPM: string
}

const Content: React.FC<Props> = ({name, nameNPM}) => {
  

  const [isCopied, setCopied] = useClipboard(nameNPM);

  const handleClick = () => {
    setCopied()
    toast("📑 Copied To Your Clipboard",{theme: "dark"})
  }

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
        <Button onClick={handleClick} >
          Copy
        </Button>
    </Flex>
  </Box>
  )
}

export default Content