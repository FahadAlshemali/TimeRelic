import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {

  return (
   
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    
  );
}

export default MyApp;
