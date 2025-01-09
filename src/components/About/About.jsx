import React from "react";
import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import "./About.scss";
import entrega2 from "../../assets/entrega2.jpg";
import canoasgas from "../../assets/canoasgas.png";

const About = () => {
  return (
    <div className="fundo">
      <Container maxW="1200px" px={[4, 8]} py={28}>
        <Flex
          direction={["column", "row"]} // Coluna em telas pequenas, linha em maiores
          align="center"
          justify="center"
          gap={[8, 8]} // Mais espaçamento para telas pequenas
          wrap="wrap" // Permite quebra para ajustar elementos
        >
          {/* Seção da Imagem */}
          <Box flex={["1", "1.2"]} textAlign="center" mb={[6, 0]}>
            <Flex
              direction={["column", "row"]} // Coluna em telas pequenas, linha em maiores
              align="center"
              justify="center"
              gap={[8, 8]} // Mais espaçamento para telas pequenas
              wrap="wrap" // Permite quebra para ajustar elementos
            >
              <Image
                src={entrega2} // Substitua pelo caminho real da imagem
                alt="Entregador com botijões"
                maxW={["100%", "100%", "500px"]} // Garante responsividade
                borderRadius="md"
                objectFit="cover" // Ajusta a imagem para o espaço disponível
              />
            </Flex>
          </Box>
          {/* Seção de Texto */}
          <Box flex={["1", "2"]} textAlign="left">
            <Flex
              direction={["column", "row"]} // Coluna em telas pequenas, linha em maiores
              align="center"
              justify="center"
              gap={[8, 8]} // Mais espaçamento para telas pequenas
              wrap="wrap" // Permite quebra para ajustar elementos
            >
              <Image
                src={canoasgas}
                alt="Canoas Gás logo"
                maxW={["300px", "400px", "600px"]} // Ajuste progressivo
                mx={["auto", "0"]}
                mb={6}
              />
              <Text
                fontSize={["lg", "lg"]} // Tamanho maior para telas grandes
                color="teal.600"
              >
                A CANOAS GAS foi criada com o intuito de levar até você e a sua
                família as melhores soluções para que possa desfrutar dos
                melhores momentos da alimentação em família.
              </Text>
              <Text fontSize={["lg", "lg"]} color="teal.600">
                O nosso objetivo é fornecer produtos e serviços de forma segura,
                sustentável e confiável, satisfazendo as necessidades dos nossos
                clientes.
              </Text>
              <Text fontSize={["lg", "lg"]} color="teal.600">
                Com muito trabalho, comprometimento e eficiência, conquistamos a
                confiança de diversos clientes, oferecendo mais conforto e
                facilidade em suas casas e negócios.
              </Text>
              <Text fontSize={["lg", "lg"]} color="teal.600" mb={6}>
                Prezando pela maior comodidade dos nossos clientes, trabalhamos
                todos os dias até às 23 horas, garantindo seu lanche, jantar e
                festa noturna.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default About;
