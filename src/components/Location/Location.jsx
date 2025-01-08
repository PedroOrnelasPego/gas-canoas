import React from "react";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Location = () => {
  return (
    <div className="fundo2">
      <Container maxW="1200px" px={[4, 8]} py={16}>
        <Heading as="h1" size="2xl" textAlign="center" color="teal.700" mb={12}>
          Localização
        </Heading>

        <Flex
          direction={["column", "row"]} // Coluna em telas pequenas, linha em maiores
          justify="space-between"
          align="center"
          gap={[8, 12]} // Espaçamento entre o mapa e as informações
          wrap="wrap"
        >
          {/* Mapa */}
          <Box flex="1" textAlign="center" width="100%">
            <Box
              width="100%"
              maxW="600px"
              height="0"
              paddingBottom="56.25%" // Proporção 16:9
              position="relative"
              mx="auto"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.0927357086343!2d-43.9865623!3d-19.9626019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697076f891b55%3A0xb8fd5fdbde7f9352!2sCanoas%20G%C3%A1s%20e%20%C3%81gua%20Mineral!5e0!3m2!1spt-BR!2sbr!4v1736359857781!5m2!1spt-BR!2sbr"
                style={{
                  border: "0",
                  borderRadius: "8px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>

          {/* Informações de Contato */}
          <Box flex="1" textAlign={["center", "left"]}>
            <Heading as="h2" size="xl" color="teal.700" mb={4}>
              Como pedir o gás?
            </Heading>
            <Text fontSize="md" color="teal.600" mb={4}>
              <strong>Central de atendimento</strong>
            </Text>
            <Text fontSize="md" color="teal.600" mb={2}>
              📞 (31) 98255-7807
            </Text>
            <Text fontSize="md" color="teal.600" mb={4}>
              📞 (31) 3047-8448
            </Text>
            <Text fontSize="md" color="teal.600" mb={6}>
              Peça pelo WhatsApp <br /> Pedir agora
            </Text>
            <Button
              colorScheme="teal"
              size="lg"
              onClick={() =>
                window.open("https://wa.me/5531982557807", "_blank")
              }
            >
              Pedir pelo WhatsApp
            </Button>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default Location;
