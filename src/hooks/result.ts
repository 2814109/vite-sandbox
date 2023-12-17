import { useState, useEffect } from "react";
import { ok, err, Result } from "neverthrow";
const fetcher = (url: string) => async (): Promise<string> => {
	const response = await fetch(url);
	const body = await response.json();
	return body.name as string;
};

export const useDataFetchOfResultType = (url: string) => {
	const [data, setData] = useState<string>();
	useEffect(() => {
		(async () => {
			const result = await withReader({ exec: fetcher(url) });
			result.match(
				(callback) => setData(() => callback),
				() => console.log("err"),
			);
		})();
	}, [url]);
	return { result: data };
};

type Props = {
	exec: () => Promise<string>;
};
const withReader = async ({ exec }: Props): Promise<Result<string, Error>> => {
	try {
		return ok(await exec());
	} catch (e) {
		return err(new Error(e as string));
	}
};
