import {
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
export default function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  return (
    <VStack mt={20}>
      <Heading size="xl">ENTRAR</Heading>
      <Text fontSize="lg">Seja bem vindo de volta!</Text>
      <Text fontSize="lg">entre com seus dados abaixo</Text>
      <FormControl isRequired maxW="500px" textAlign="center">
        <FormLabel>Email</FormLabel>
        <Input
          focusBorderColor="yellow.400"
          variant="flushed"
          placeholder="usuario@email.com"
        />
        <FormLabel>Senha</FormLabel>
        <InputGroup>
          <Input
            type={`${mostrarSenha ? "text" : "password"}`}
            focusBorderColor="yellow.400"
            variant="flushed"
            placeholder="* * * * * *"
          />
          <InputRightElement width="4.5rem">
            <Button
              color="gray.400"
              size="sm"
              onClick={() => setMostrarSenha(!mostrarSenha)}
            >
              {mostrarSenha ? "esconder" : "mostrar"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Flex gap={1} justify="center" mt={8}>
          <Text>Ainda não tem uma conta? </Text>
          <Link href="/cadastro">
            <Text fontWeight="bold" color="yellow.400">
              Cadastre-se
            </Text>
          </Link>
        </Flex>
        <Button mt={5} colorScheme="yellow" w="250px" color="yellow.900">
          ENTRAR
        </Button>
      </FormControl>
    </VStack>
  );
}
