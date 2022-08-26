import "./App.css";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import Header from "./Components/Header";
import GridContainer from "./Components/Grid";
import Keyboard from "./Components/Keyboard";

function App() {
  return (
    <ChakraProvider>
      <VStack>
        <Header />
        <GridContainer />
        <Keyboard />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
