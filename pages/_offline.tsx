import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const Offline = () => {
  return (
    <Flex
      className={inter.className}
      flexDir="column"
      bg={useColorModeValue("gray.50", "gray.800")}
      minH="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="lg">You&apos;re Offline</Text>
    </Flex>
  );
};

export default Offline;
