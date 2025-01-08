import React from "react";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import p13 from "../../assets/p13.png";
import p20 from "../../assets/p20.jpg";
import p45 from "../../assets/p45.png";

const Products = () => {
  return (
    <Container maxW="1200px" px={[4, 8]} py={28}>
      {/* Título da Seção */}
      <Box textAlign="center" mb={12}>
        <Heading as="h2" size="xl" color="teal.700">
          Nossos Produtos
        </Heading>
      </Box>

      {/* Produtos */}
      <Flex
        direction={["column", "row"]} // Empilha em telas pequenas, lado a lado em maiores
        justify="space-between"
        align="flex-start"
        gap={[8, 12]} // Espaçamento entre os itens
        wrap="wrap" // Permite quebra de linha
      >
        {/* Produto 1 */}
        <Box flex="1" textAlign="center">
          <Image
            src={p13} // Caminho da imagem do produto
            alt="Gás P13"
            maxW="200px"
            mx="auto"
            mb={4}
          />
          <Text fontSize="lg" fontWeight="bold" color="orange.500" mb={4}>
            Gás P13
          </Text>
          <Text fontSize="md" color="teal.600">
            O botijão de gás de 13kg, também chamado P13, é aquele utilizado
            comumente na cozinha, nos fogões residenciais de todo o país.
          </Text>
          <Text fontSize="md" color="teal.600">
            O seu principal uso é o preparo de alimentos, e é super seguro
            graças a um dispositivo chamado plug fusível.
          </Text>
        </Box>

        {/* Produto 2 */}
        <Box flex="1" textAlign="center">
          <Image
            src={p20} // Caminho da imagem do produto
            alt="Gás P20"
            maxW="200px"
            mx="auto"
            mb={4}
          />
          <Text fontSize="lg" fontWeight="bold" color="orange.500" mb={4}>
            Gás P20
          </Text>
          <Text fontSize="md" color="teal.600">
            Os cilindros de 20kg são utilizados em empilhadeiras à combustão por
            gás. É o único gás permitido pela ANP como combustível para veículos
            automotores.
          </Text>
          <Text fontSize="md" color="teal.600">
            São projetados para utilização na posição horizontal, já que todo o
            consumo se dá na fase líquida e não na gasosa, como acontece nos
            demais recipientes.
          </Text>
        </Box>

        {/* Produto 3 */}
        <Box flex="1" textAlign="center">
          <Image
            src={p45} // Caminho da imagem do produto
            alt="Gás P45"
            maxW="200px"
            mx="auto"
            mb={4}
          />
          <Text fontSize="lg" fontWeight="bold" color="orange.500" mb={4}>
            Gás P45
          </Text>
          <Text fontSize="md" color="teal.600">
            Os cilindros de 45kg são utilizados em larga escala, podendo ser
            instalado em residências, comércios, bares, restaurantes e em
            centrais de GLP.
          </Text>
          <Text fontSize="md" color="teal.600">
            Vale lembrar que, para a instalação, é necessário seguir as normas
            técnicas e devidas documentações estabelecidas.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Products;
