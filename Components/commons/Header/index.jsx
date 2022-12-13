import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, useMediaQuery } from "@chakra-ui/react";

import {
  ButtonGroup,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const router = useRouter();
  return (
    <Flex bg="white" justify="space-between" alignItems="center" my={5} mx={10}>
      <Link href="/">
        <Image
          src="\assets\logo.png"
          w="250px"
          alt="Logo cardap.me"
          cursor="pointer"
        />
      </Link>
      <Flex>
        <ButtonGroup gap="2" display={{ base: "none", md: "block" }}>
          {router.pathname != "/login" &&
            (router.pathname != "/cadastro" ? (
              <Link href="/login ">
                <Button colorScheme="green" size="sm" px={10} fontWeight="700">
                  CADASTRAR / ENTRAR
                </Button>
              </Link>
            ) : null)}
          <Link href="/restaurantes">
            <Button
              colorScheme="yellow"
              size="sm"
              color="yellow.900"
              px={10}
              fontWeight="700"
            >
              FAZER PEDIDO
            </Button>
          </Link>
        </ButtonGroup>
        {isMobile && (
          <Menu>
            <MenuButton
              px={8}
              py={1}
              borderRadius={5}
              fontWeight={700}
              as={IconButton}
              icon={<HamburgerIcon />}
            >
              MENU
            </MenuButton>
            <MenuList>
              <MenuItem
                borderRadius={5}
                mx={2}
                color="white"
                bg="green.500"
                w="full"
                fontWeight="700"
                mb={2}
              >
                CADASTRAR
              </MenuItem>
              <MenuItem
                bg="yellow.400"
                borderRadius={5}
                mx={2}
                color="yellow.900"
                w="full"
                fontWeight="700"
              >
                FAZER PEDIDO
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Flex>
  );
}
