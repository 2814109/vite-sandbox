import { useDataFetch } from "../hooks/sample";
export const Sample = () => {
  const fetchUrl = "https://pokeapi.co/api/v2/pokemon/ditto";
  const { result } = useDataFetch(fetchUrl);
  console.log(result);
  return <h1>test : {result}</h1>;
};
