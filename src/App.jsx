import "./App.css";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import Header from "./Components/Header";

function App() {
  return (
    <ChakraProvider>
      <VStack>
        <Header />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
