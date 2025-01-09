import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";

import maps from "../../assets/maps.png";

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
          {/* Mapa como Imagem Responsiva */}
          <Box flex="1" textAlign="center">
            <a
              href="https://www.google.com/maps/place/SUPERGASBRAS/@-19.9626167,-43.9867167,847m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa6962e0adfb379:0x9dbf9882e84ef01!8m2!3d-19.9626167!4d-43.9867167!16s%2Fg%2F11wpnt6k10?entry=ttu&amp;g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                src={maps} // Substitua por uma imagem gerada do mapa
                alt="Localização no Google Maps"
                width={["280px","340px", "600px"]}
                maxW="600px"
                borderRadius="8px"
                cursor="pointer"
                mx="auto"
              />
            </a>
          </Box>

          {/* Informações de Contato */}
          <Box flex="1" textAlign={["center", "left"]}>
            <Heading as="h2" size="xl" color="teal.700" mb={4}>
              Como pedir o gás?
            </Heading>
            <Text fontSize="md" color="teal.600" mb={4}>
              <strong>Central de atendimento</strong>
            </Text>
            <Flex
              align="center"
              gap={2}
              fontSize={["md", "2xl"]}
              color="teal.600"
              justifyContent={["center", "flex-start"]}
            >
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/color/48/whatsapp--v5.png"
                alt="whatsapp--v5"
              />
              (31) 98255-7807
            </Flex>
            <Flex
              align="center"
              gap={2}
              fontSize={["md", "2xl"]}
              color="teal.600"
              mb={6}
              justifyContent={["center", "flex-start"]}
            >
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-rounded/24/phone--v1.png"
                alt="phone--v1"
              />
              (31) 3047-8448
            </Flex>

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
