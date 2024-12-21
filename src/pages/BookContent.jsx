import React from "react";
import { useParams } from "react-router-dom";
import bookRoutes from "./bookRoutes";
import { Box, Text } from "@chakra-ui/react";

const BookContent = () => {
  const { bookName } = useParams();

  // Obtener el componente correspondiente
  const BookComponent = bookRoutes[bookName.toLowerCase()];

  return (
    <Box>
      {BookComponent ? (
        <BookComponent />
      ) : (
        <Text>El libro solicitado aún no está disponible</Text>
      )}
    </Box>
  );
};

export default BookContent;
