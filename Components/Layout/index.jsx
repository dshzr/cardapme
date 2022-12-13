import { VStack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../commons/Header";


export default function Layout({ children }) {
  return (
    <div >
      <Header />
      {children}
    </div>
  );
}
