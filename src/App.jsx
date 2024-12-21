import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import BookContent from "./pages/BookContent";

const App = () => {
  return (
    <Flex direction="column" h="100vh" bg="gray.800" color="gray.200">
      {/* Navbar */}
      <Box as="header" w="100%">
        <Navbar />
      </Box>
      <Flex as="main" flex="1" overflow="hidden">
        {/* Sidebar */}
        <Sidebar />
        {/* Contenido principal */}
        <Box flex="1" p="4" overflow="auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:bookName" element={<BookContent />} />
          </Routes>
        </Box>
      </Flex>
    </Flex>
  );
};

export default App;
