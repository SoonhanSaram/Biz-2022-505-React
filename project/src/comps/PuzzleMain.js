import { PuzzleContextProvider } from "../context/PuzzleContext";
import WriteModal from "./WriteModal";
import Uploadpage from "./Uploadpage";
import PuzzleImage from "./PuzzleImage";

const PuzzleMain = () => {
  return (
    <PuzzleContextProvider>
      <PuzzleImage />
      <Uploadpage />
      <WriteModal />
    </PuzzleContextProvider>
  );
};

export default PuzzleMain;
