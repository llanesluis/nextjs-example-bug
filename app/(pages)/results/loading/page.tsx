"use client";

import { createSearchQuery } from "@/lib/actions/search";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Loading() {
    const router = useRouter();

    useEffect(() => {
        const load = async () => {
            const query = await createSearchQuery();
            router.push(`/results/${query.id}`);
        };
        load();
    }, [router]);

    return (
        <div>
            We are loading...
        </div>
    )
}
