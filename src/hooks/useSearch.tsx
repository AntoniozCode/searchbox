import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebounce } from "./useDebounce";

interface ISearchParams {
  isEnabled: boolean;
}

export function useSearch({ isEnabled }: ISearchParams) {
  const [criterion, setCriterion] = useState<{
    searchTerm: string;
  }>({
    searchTerm: "",
  });

  const debouncedSearchTerm = useDebounce({
    value: criterion.searchTerm,
    delay: 500,
  });

  const enabled =
    isEnabled || (!!debouncedSearchTerm && !!criterion.searchTerm);

  const { data, isLoading } = useQuery({
    queryKey: ["search", debouncedSearchTerm],
    queryFn: () => {
      return fetch(
        `/api/io/_v/api/intelligent-search/search_suggestions?query=${debouncedSearchTerm}&locale=es-PE`,
        {
          method: "GET",
        }
      ).then((res) => res.json());
    },
    enabled,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    updateAndRefetch: setCriterion,
  };
}
