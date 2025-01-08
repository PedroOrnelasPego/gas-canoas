import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Features = () => {
  return (
    <Container maxW="1200px" px={[4, 8]} py={28}>
      {/* Título principal */}
      <Box textAlign="center" mb={12}>
        <Image
          src="../src/assets/supergas.png"
          alt="Supergasbras logo"
          maxW={["300px", "500px", "700px"]} // Ajuste maior para corresponder ao exemplo
          mx="auto"
          mb={4}
        />
      </Box>

      {/* Seção de Destaques */}
      <Flex
        direction={["column", "row"]} // Coluna em telas pequenas, linha em maiores
        justify="space-between"
        align="flex-start"
        gap={[8, 12]} // Espaçamento entre as colunas
      >
        {/* Coluna 1 */}
        <Box flex="1" textAlign={["center", "left"]}>
          <Heading as="h3" size="lg" color="teal.700" mb={4}>
            Certificado
          </Heading>
          <Text fontSize="md" color="teal.600" mb={4}>
            Garantir o controle de qualidade dos nossos produtos é fundamental.
          </Text>
          <Text fontSize="md" color="teal.600">
            Oferecemos botijões de gás com o selo do INMETRO e da ANT, para que
            você tenha um produto devidamente certificado e qualificado.
          </Text>
        </Box>

        {/* Coluna 2 */}
        <Box flex="1" textAlign={["center", "left"]}>
          <Heading as="h3" size="lg" color="teal.700" mb={4}>
            Segurança
          </Heading>
          <Text fontSize="md" color="teal.600" mb={4}>
            Saber que consome um produto que passe segurança a você e sua
            família é essencial.
          </Text>
          <Text fontSize="md" color="teal.600">
            Os botijões contam com o mais moderno processo de enchimento do
            mundo e na hora da entrega o cliente é informado do nome do
            entregador para garantir a sua segurança e evitar problemas com
            falsos entregadores.
          </Text>
        </Box>

        {/* Coluna 3 */}
        <Box flex="1" textAlign={["center", "left"]}>
          <Heading as="h3" size="lg" color="teal.700" mb={4}>
            Qualidade
          </Heading>
          <Text fontSize="md" color="teal.600" mb={4}>
            A qualidade dos nossos botijões de gás é, sem dúvidas, um de nossos
            principais diferenciais.
          </Text>
          <Text fontSize="md" color="teal.600">
            Oferecemos produtos seguros, com eficiência no alto poder calorífico
            e combustão controlada com todos os botijões lacrados e
            inspecionados.
          </Text>
        </Box>
      </Flex>

      {/* Botão ao final */}
      <Box textAlign="center" mt={12}>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => window.open("https://wa.me/5581982557807", "_blank")}
        >
          Pedir pelo WhatsApp
        </Button>
      </Box>
    </Container>
  );
};

export default Features;
