import { useSearch } from "@/hooks/useSearch";
import { useEffect, useMemo, useState } from "react";
import { SmartSearchBox } from "./components/SmartSearchBox/SmartSearchBox";

const FT_SMART_SEARCH_BOX = true;

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, updateAndRefetch } = useSearch({
    isEnabled: false,
  });

  const isOpen = useMemo(() => {
    return !!searchTerm && Boolean(data?.searches.length);
  }, [data, searchTerm]);

  const handleOnInputChange = (newValue: string) => {
    setSearchTerm(newValue);
    updateAndRefetch({
      searchTerm: newValue,
    });
  };

  useEffect(() => {
    if (searchTerm === "error") {
      throw new Error("Error");
    }
  },[searchTerm])

  return (
    <div>
      <SmartSearchBox
        isOpen={isOpen && FT_SMART_SEARCH_BOX}
        id="smart-search-box"
      >
        <SmartSearchBox.SearchInput
          searchTerm={searchTerm}
          handleOnInputChange={handleOnInputChange}
        />
        {FT_SMART_SEARCH_BOX && isOpen && (
          <SmartSearchBox.SearchSuggestions isLoading={isLoading} data={data} />
        )}
      </SmartSearchBox>
    </div>
  );
}
