"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div 
      className={cn(
        "animate-pulse bg-muted rounded-md", 
        className ?? ""
      )}
      aria-hidden="true"
    />
  );
}
