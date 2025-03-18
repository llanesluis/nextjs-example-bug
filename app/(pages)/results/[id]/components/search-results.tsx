import { getSearchResults } from "../queries";

interface SearchResultsProps {
  id: string;
}

export default async function SearchResults({ id }: SearchResultsProps) {
  console.log("rendering SearchResults");
  const results = await getSearchResults(id);

  console.log("after calling getSearchResults");

  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  );
}
