import {
  Heading,
  Text,
  VStack,
  Flex,
  Image,
  Highlight,
  Tag,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Flex
      flexDirection="column"
      mx="auto"
      maxW={1200}
      justify="center"
      h={["20vh", "20vh", "80vh"]}
      px={8}
      align="center"
      my={{ base: 80, md: 0 }}
    >
      <Flex
        w="full"
        justify="center"
        flexDirection={{ base: "column", md: "row" }}
        align="center"
      >
        <VStack justify="center" align="flex-start" gap={4}>
          <Heading size="3xl">
            FACILITE A VIDA DE <br /> SEUS{" "}
            <Highlight query="CLIENTES" styles={{ color: "yellow.400" }}>
              CLIENTES
            </Highlight>
          </Heading>

          <Text fontSize={25} fontWeight={400}>
            Deixe com que seus clientes façam seus <br />{" "}
            <Tag
              size={"xl"}
              color="yellow.800"
              fontWeight={700}
              lineHeight={1.5}
              mr={2}
            >
              pedidos
            </Tag>
            com mais
            <Tag
              size={"xl"}
              color="green"
              fontWeight={700}
              lineHeight={1.5}
              ml={2}
            >
              facilidade
            </Tag>
          </Text>
        </VStack>
        <Image src="\assets\market.svg" maxW={400} />
      </Flex>
      <Link href="/cadastro ">
        <Button mt={10} colorScheme="green" minW="400px" py={5}>
          QUERO CADASTRAR MEU NEGÓCIO
        </Button>
      </Link>
    </Flex>
  );
}
