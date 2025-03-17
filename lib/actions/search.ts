"use server";

import { sleep } from "../utils";

export const createSearchQuery = async () => {
    const id = Math.random().toString(36).substring(2, 15);
    await sleep(1000);
    return {
        id,
        query: "test",
        createdAt: new Date(),
    };
};
