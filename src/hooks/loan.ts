import { useState, useEffect } from "react";

const fetcher = (url: string) => async (): Promise<string> => {
	const response = await fetch(url);
	const body = await response.json();
	return body.name as string;
};

export const useDataFetchLoanLoading = (url: string) => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<string>();

	const withReader = withLoadingReader(setLoading);

	useEffect(() => {
		(async () => {
			const result = await withReader({ exec: fetcher(url) });
			setData(() => result);
		})();
	}, [url]);

	return { result: data, isLoading };
};
type Props = {
	exec: () => Promise<string>;
};

const withLoadingReader =
	(setState: React.Dispatch<React.SetStateAction<boolean>>) =>
	async ({ exec }: Props) => {
		try {
			setState(() => true);
			return await exec();
		} catch (err) {
			throw new Error(err as string);
		} finally {
			setState(() => false);
		}
	};
