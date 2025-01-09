import React from "react";
import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import "./Header.scss";
import entregador from "../../assets/entregador.png";
import supergas from "../../assets/supergas.png";
import canoasgas from "../../assets/canoasgas.png";

const Header = () => {
  return (
    <div className="fundo2">
      <Container maxW="1200px" px={[4, 8]} py={22}>
        <Flex
          direction={["column", "row"]} // Coluna em telas pequenas, lado a lado em maiores
          align="center"
          wrap="wrap" // Garante que os elementos se ajustem
          gap={[4, 8]} // Espaçamento adicional entre os elementos
        >
          {/* Seção da Imagem */}
          <Box flex="1" textAlign="center" mb={[4, 0]}>
            <Image
              src={entregador}
              alt="Entregador com botijão"
              maxW={["200px", "300px", "700px"]}
              mx="auto"
            />
          </Box>

          {/* Seção de Texto */}
          <Box flex="2.5" pl={[0, 8]}>
            <Text
              fontSize={["lg", "xl", "2xl"]}
              fontWeight="bold"
              color="orange.500"
              mb={20}
              textAlign={["center", "left"]}
            >
              <Image
                src={supergas}
                alt="Supergasbras logo"
                maxW={["300px", "500px", "700px"]}
                mx="auto"
                mb={4}
              />
              <Image
                src={canoasgas}
                alt="Canoas Gás logo"
                maxW={["300px", "500px", "700px"]}
                mx="auto"
              />
            </Text>

            {/* Balão de Texto */}
            <Box
              bg="#135f63"
              color="white"
              borderRadius="2xl"
              p={[4, 6]}
              mb={[4, 20]}
              textAlign="center"
              maxW="600px"
              mx="auto"
            >
              <Text textAlign="start" fontSize={["sm", "md"]}>
                Prezando pela maior comodidade dos nossos clientes, trabalhamos
                todos os dias até às 23 horas e sua entrega com segurança e
                qualidade, em até 35 minutos.
              </Text>
            </Box>

            {/* Informações de contato */}
            <Flex
              direction="column"
              align={["center", "center", "center", "flex-end"]} // Centralizado em telas pequenas, à direita em maiores
              textAlign={["center", "right"]} // Texto alinhado à direita em telas maiores
              gap={4}
              mt={[8, 0]} // Margem superior em telas pequenas
            >
              <Flex
                align="center"
                gap={2}
                fontSize={["md", "2xl"]}
                fontWeight="bold"
              >
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-rounded/24/phone--v1.png"
                  alt="phone--v1"
                />
                (31) 3047-8448
              </Flex>
              <Flex
                align="center"
                gap={2}
                fontSize={["md", "2xl"]}
                fontWeight="bold"
              >
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/color/48/whatsapp--v5.png"
                  alt="whatsapp--v5"
                />
                (31) 98255-7807
              </Flex>

              {/* Botão do WhatsApp */}
              <Button
                colorScheme="teal"
                size="lg"
                width={["100%", "auto"]}
                onClick={() =>
                  window.open("https://wa.me/5581982557807", "_blank")
                }
              >
                Pedir pelo WhatsApp
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
