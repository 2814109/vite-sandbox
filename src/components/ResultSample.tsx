import { useDataFetchOfResultType } from "../hooks/result";
export const ResultSample = () => {
	const fetchUrl = "https://pokeapi.co/api/v2/pokemon/ditto";
	const { result } = useDataFetchOfResultType(fetchUrl);
	console.log(result);
	return <h1>test : {result}</h1>;
};
