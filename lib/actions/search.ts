"use server";

import { redirect } from "next/navigation";
import { sleep } from "../utils";

export const createSearchQuery = async () => {
  const id = Math.random().toString(36).substring(2, 15);
  await sleep(1000);

  redirect(`/results/${id}`);
};
