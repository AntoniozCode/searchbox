import { Popover } from "@radix-ui/react-popover";
import { SearchInput } from "./SearchInput";
import { SearchSuggestions } from "./SearchSuggestions";

interface ISearchBoxParams {
  id: string;
  isOpen: boolean;
  updateIsOpen?: (openValue: boolean) => void;
  children: React.ReactNode;
}
export const SmartSearchBox = ({
  id,
  isOpen,
  updateIsOpen,
  children,
  ...rest
}: ISearchBoxParams) => {
  return (
    <div {...rest} data-testid={id} className="w-[300px]">
      <Popover open={isOpen} onOpenChange={updateIsOpen}>
        {children}
      </Popover>
    </div>
  );
};

SmartSearchBox.SearchInput = SearchInput;
SmartSearchBox.SearchSuggestions = SearchSuggestions;
