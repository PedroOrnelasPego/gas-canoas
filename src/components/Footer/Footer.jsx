import React from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="teal.700" color="white" py={8}>
      <Container maxW="1200px" px={[4, 8]}>
        <Flex
          direction={["column", "row"]} // Coluna em telas pequenas, linha em maiores
          justify={["center", "space-between"]} // Centraliza em telas pequenas
          align={["center", "flex-start"]} // Centraliza verticalmente em telas pequenas
          textAlign={["center", "left"]} // Centraliza texto em telas pequenas
          gap={[8, 12]}
        >
          {/* Contatos */}
          <Box>
            <Heading as="h3" size="md" mb={4}>
              CONTATOS
            </Heading>
            <Text fontSize="md">(31) 3047-8448</Text>
            <Text fontSize="md">(31) 98255-7807</Text>
          </Box>

          {/* Horários */}
          <Box>
            <Heading as="h3" size="md" mb={4}>
              HORÁRIOS
            </Heading>
            <Text fontSize="md">Segunda a Sexta: 08:00 até às 23:00 h.</Text>
            <Text fontSize="md">Sábado: 08:00 até às 22:00 h.</Text>
            <Text fontSize="md">
              Domingos e feriados: 08:00 até às 22:00 h.
            </Text>
          </Box>

          {/* Localização */}
          <Box>
            <Heading
              as="h3"
              size="md"
              mb={4}
              display="flex"
              justifyContent={["center", "flex-start"]} // Centraliza título em telas menores
              alignItems="center"
              gap={2}
            >
              LOCALIZAÇÃO
            </Heading>
            <Text fontSize="md" mb={1}>Rua das Canoas, 757 A</Text>
            <Text fontSize="md" mb={1}>Betânia, Belo Horizonte/MG</Text>
            <Text fontSize="md">CEP: 30.580-040</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
