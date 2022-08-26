import "./App.css";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import Header from "./Components/Header";
import GridContainer from "./Components/Grid";
import Keyboard from "./Components/Keyboard";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <VStack>
          <Header />
          <GridContainer />
          <Keyboard />
        </VStack>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
