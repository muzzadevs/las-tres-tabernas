import React from "react";
import { Box, Text, Heading, Center } from "@chakra-ui/react";


const Home = () => {
  return (
    <Box
      h="100vh"
      w="100%"
      position="relative"
      overflow="hidden"
      bg="gray.800"
    >
      {/* Fondo con imagen */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        backgroundImage="url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        backgroundSize="cover"
        backgroundPosition="center"
        filter="grayscale(100%)"
        opacity="0.1"
        zIndex="1"
      />



      {/* Contenido principal */}
      <Center h="100%" zIndex="3" position="relative">
        <Box textAlign="center" color="gray.200">
          <Heading size="lg" mb={4}>
            BIENVENIDOS A LAS TRES TABERNAS
          </Heading>
          <Text fontSize="lg">
            UN ENCUENTRO ENTRE EL ESTUDIANTE DE LA BIBLIA Y DIOS PARA ILUMINAR
          </Text>
        </Box>
      </Center>
    </Box>
  );
};

export default Home;
