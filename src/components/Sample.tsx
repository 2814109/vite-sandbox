import { useDataFetchLoanLoading } from "../hooks/loan";
export const Sample = () => {
	const fetchUrl = "https://pokeapi.co/api/v2/pokemon/ditto";
	const { result, isLoading } = useDataFetchLoanLoading(fetchUrl);
	console.log(result);
	return (
		<h1>
			test : {result} {String(isLoading)}
		</h1>
	);
};
