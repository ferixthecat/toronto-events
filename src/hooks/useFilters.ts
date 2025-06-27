// URL Search Params (recommended for filters):

"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function useFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`?${params.toString()}`);
  };

  return {
    category: searchParams.get("category") || "all",
    date: searchParams.get("date") || new Date().toISOString().split("T")[0], // Default to today
    search: searchParams.get("search") || "",
    updateFilter,
  };
}
