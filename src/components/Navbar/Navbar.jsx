import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
        
      >
        {/* Logo */}
        <HStack spacing={8} alignItems="center">
          <Box>
            <Image
              src="../src/assets/canoasgas.png" // Substitua pelo caminho do logo
              alt="Canoas Gás Logo"
              maxW="160px"
            />
          </Box>
        </HStack>

        {/* Menu para telas grandes */}
        <HStack
          as="nav"
          spacing={4}
          display={{ base: "none", md: "flex" }} // Esconde em telas pequenas
        >
          <Link href="#about" color="black" fontWeight="semibold">
            Sobre
          </Link>
          <Link href="#services" color="black" fontWeight="semibold">
            Serviços
          </Link>
          <Link href="#contact" color="black" fontWeight="semibold">
            Contato
          </Link>
        </HStack>

        {/* Botão de Ação */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Button colorScheme="teal" size="lg">
            Pedir Gás
          </Button>
        </HStack>

        {/* Menu para telas pequenas */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Abrir Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Itens do menu para telas pequenas */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Link href="#about" color="black" fontWeight="semibold">
              Sobre
            </Link>
            <Link href="#services" color="black" fontWeight="semibold">
              Serviços
            </Link>
            <Link href="#contact" color="black" fontWeight="semibold">
              Contato
            </Link>
            <Button colorScheme="teal"   size="sm">
              Pedir Gás
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
