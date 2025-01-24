import { Input } from "@/components/ui/input";
import { PopoverTrigger } from "@radix-ui/react-popover";

interface ISearchInput {
  searchTerm: string;
  handleOnInputChange: (value: string) => void;
}
export const SearchInput = ({
  searchTerm,
  handleOnInputChange,
}: ISearchInput) => {
  return (
    <PopoverTrigger asChild>
      <Input
        type="search"
        placeholder="home"
        value={searchTerm}
        onChange={(e) => handleOnInputChange(e.target.value)}
        className="focus-visible:ring-transparent"
      />
    </PopoverTrigger>
  );
};
