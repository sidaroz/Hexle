import "./App.css";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import Header from "./Components/Header";
import GridContainer from "./Components/Grid";

function App() {
  return (
    <ChakraProvider>
      <VStack>
        <Header />
        <GridContainer />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
