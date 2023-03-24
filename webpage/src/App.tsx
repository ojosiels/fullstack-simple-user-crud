import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ChakraProvider>
        <Routes />
        <ToastContainer limit={3} pauseOnHover />
      </ChakraProvider>
    </>
  );
}

export default App;
