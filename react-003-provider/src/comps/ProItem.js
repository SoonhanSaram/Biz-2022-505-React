//import { ProContextProvider } from "../context/ProContext";
//import { useContext } from "react";
import { useProContext } from "../context/ProContext";

const ProItem = ({ nation }) => {
  return (
    <>
      <h3>{nation}</h3>
    </>
  );
};
export default ProItem;
