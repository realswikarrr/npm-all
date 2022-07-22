import { Box, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center>
    <Box opacity={0.4} fontSize="sm" mt={10}>
      &copy; {new Date().getFullYear()} Swikar Adhikari. All Rights Reserved.
    </Box>
    </Center>
  );
};

export default Footer;