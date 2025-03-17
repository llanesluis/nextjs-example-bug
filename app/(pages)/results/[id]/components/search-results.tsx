import { getSearchResults } from "../actions";

interface SearchResultsProps {
  id: string;
}

export default async function SearchResults({ 
  id 
}: SearchResultsProps) {
  const results = await getSearchResults(id);
  
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  );
}
