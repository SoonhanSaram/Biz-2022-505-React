import { PuzzleContextProvider } from "../context/PuzzleContext";
import Uploadpage from "./Uploadpage";
import PuzzleImage from "./PuzzleImage";


const PuzzleMain = () => {
  return (
    <PuzzleContextProvider>
      <PuzzleImage />
      <Uploadpage />
    </PuzzleContextProvider>
  );
};

export default PuzzleMain;
