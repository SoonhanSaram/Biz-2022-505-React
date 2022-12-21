import { useProContext } from "../context/ProContext";

const ProValue = () => {
  //const { nation } = useContext(ProContextProvider);
  const { nation } = useProContext();
  return (
    <>
      <h1>{nation}</h1>
    </>
  );
};
export default ProValue;
