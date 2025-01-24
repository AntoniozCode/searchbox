import { PopoverContent } from "@radix-ui/react-popover";

interface ISearchSuggestionsParams {
  isLoading: boolean;
  data: {
    searches: Array<{
      term: string;
      count: number;
    }>;
  };
}

export function SearchSuggestions({
  isLoading,
  data,
}: Readonly<ISearchSuggestionsParams>) {
  return (
    <PopoverContent className="w-[300px] p-0 border">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className="">
          {data?.searches?.map((item) => (
            <li key={item.term}>{item.term}</li>
          ))}
        </ul>
      )}
    </PopoverContent>
  );
}
