"use client";

import { createSearchQuery } from "@/lib/actions/search";
import { useTransition } from "react";

export function StartSearch() {
  const [isLoading, startTransition] = useTransition();

  const handleClick = async () => {
    startTransition(async () => {
      await createSearchQuery();
    });
  };

  if (isLoading) return <div className="animate-pulse">Loading for server action...</div>;

  return (
    <button
      onClick={handleClick}
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    >
      Generate Random Search
    </button>
  );
}
