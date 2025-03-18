// this file was the actions.tsx file, but it's not needed to fetch data

import { cache } from "react";

export const getCount = cache(async () => {
  return 1;
});

export const getSearchResults = cache(async (id: string) => {
  console.log("getSearchResults", id);
  return [
    {
      id: id + "-1",
      title: "First search result for " + id,
      description: "This is the first mock search result",
      date: new Date().toISOString(),
      relevance: 95.7,
      tags: ["mock", "first", "important"],
      url: `https://example.com/results/${id}/1`,
    },
    {
      id: id + "-2",
      title: "Second search result for " + id,
      description: "Another mock search result with medium relevance",
      date: new Date().toISOString(),
      relevance: 82.3,
      tags: ["mock", "second"],
      url: `https://example.com/results/${id}/2`,
    },
    {
      id: id + "-3",
      title: "Third search result for " + id,
      description: "A less relevant mock search result",
      date: new Date().toISOString(),
      relevance: 67.1,
      tags: ["mock", "third"],
      url: `https://example.com/results/${id}/3`,
    },
  ];
});
