import { useEffect, useState } from "react";

interface IDebounceParms {
  value: string | number;
  delay: number;
}
export function useDebounce({ value, delay }: IDebounceParms) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounceValue;
}
