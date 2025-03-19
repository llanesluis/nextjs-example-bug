import { Suspense } from "react";
import Count from "./components/count";
import SearchResults from "./components/search-results";
import { sleep } from "@/lib/utils";

interface ResultPageProps {
  params: Promise<{ id: string }>;
}

export default async function ResultPage({ params }: ResultPageProps) {
  console.log("rendering ResultPage");

  await sleep(1000);
  const id = (await params).id;

  return (
    <div>
      <div>ResultPage {id}</div>
      <Suspense fallback={<div>Count loading...</div>}>
        <Count />
      </Suspense>
      <Suspense fallback={<div>Results loading...</div>}>
        <SearchResults id={id} />
      </Suspense>
    </div>
  );
}
