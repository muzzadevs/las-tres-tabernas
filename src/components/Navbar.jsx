import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <Box bg="gray.700" w="100%" p="2" boxShadow="md">
      <Flex justify="center" align="center">
        <Heading
          size="md"
          textAlign="center"
          color="gray.200"
          cursor="pointer"
          _hover={{ color: "gray.400" }}
          onClick={handleHomeClick}
        >
          LAS TRES TABERNAS
        </Heading>
      </Flex>
    </Box>
  );
};

export default Navbar;
