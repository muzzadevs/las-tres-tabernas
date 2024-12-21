import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
  Stack,
} from "@chakra-ui/react";

const Sidebar = () => {
  const librosAntiguo = [
    "Génesis", "Éxodo", "Levítico", "Números", "Deuteronomio",
    "Josué", "Jueces", "Rut", "1 Samuel", "2 Samuel",
    "1 Reyes", "2 Reyes", "1 Crónicas", "2 Crónicas", "Esdras",
    "Nehemías", "Ester", "Job", "Salmos", "Proverbios",
    "Eclesiastés", "Cantares", "Isaías", "Jeremías", "Lamentaciones",
    "Ezequiel", "Daniel", "Oseas", "Joel", "Amós",
    "Abdías", "Jonás", "Miqueas", "Nahúm", "Habacuc",
    "Sofonías", "Hageo", "Zacarías", "Malaquías",
  ];

  const librosNuevo = [
    "Mateo", "Marcos", "Lucas", "Juan", "Hechos",
    "Romanos", "1 Corintios", "2 Corintios", "Gálatas", "Efesios",
    "Filipenses", "Colosenses", "1 Tesalonicenses", "2 Tesalonicenses",
    "1 Timoteo", "2 Timoteo", "Tito", "Filemón", "Hebreos",
    "Santiago", "1 Pedro", "2 Pedro", "1 Juan", "2 Juan",
    "3 Juan", "Judas", "Apocalipsis",
  ];

  return (
    <Box
      as="nav"
      w="250px"
      h="100vh"
      bg="gray.700"
      overflowY="auto"
      borderRight="1px solid"
      borderColor="gray.600"
    >
      <Accordion allowToggle>
        {/* Antiguo Testamento */}
        <AccordionItem border="none">
          <AccordionButton
            _hover={{ bg: "gray.600" }}
            bg="gray.800"
            mb={2}
            _focus={{ boxShadow: "none" }} /* Elimina el borde azul claro */
          >
            <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold" color="gray.200">
              Antiguo Testamento
            </Box>
            <AccordionIcon color="gray.400" />
          </AccordionButton>
          <AccordionPanel pb={4} bg="gray.800">
            <Stack spacing={2}>
              {librosAntiguo.map((libro) => (
                <Link
                  key={libro}
                  href={`/book/${libro.toLowerCase().replace(/\s+/g, "-").replace(/[áéíóú]/g, (char) => ({
                    á: "a",
                    é: "e",
                    í: "i",
                    ó: "o",
                    ú: "u",
                  }[char]))}`}
                  color="gray.400"
                  _hover={{ color: "gray.200" }}
                >
                  {libro}
                </Link>
              ))}
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        {/* Nuevo Testamento */}
        <AccordionItem border="none">
          <AccordionButton
            _hover={{ bg: "gray.600" }}
            bg="gray.800"
            _focus={{ boxShadow: "none" }} /* Elimina el borde azul claro */
          >
            <Box flex="1" textAlign="left" fontSize="lg" fontWeight="bold" color="gray.200">
              Nuevo Testamento
            </Box>
            <AccordionIcon color="gray.400" />
          </AccordionButton>
          <AccordionPanel pb={4} bg="gray.800">
            <Stack spacing={2}>
              {librosNuevo.map((libro) => (
                <Link
                  key={libro}
                  href={`/book/${libro.toLowerCase().replace(/\s+/g, "-").replace(/[áéíóú]/g, (char) => ({
                    á: "a",
                    é: "e",
                    í: "i",
                    ó: "o",
                    ú: "u",
                  }[char]))}`}
                  color="gray.400"
                  _hover={{ color: "gray.200" }}
                >
                  {libro}
                </Link>
              ))}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Sidebar;
