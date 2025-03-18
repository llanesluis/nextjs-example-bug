import { createSearchQuery } from "@/lib/actions/search";

export default async function LoadingPage() {
  await createSearchQuery();

  return null;
}
