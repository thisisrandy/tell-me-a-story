import { useState, useEffect } from "react";

export function useStateWithLocalStorage(
  key,
  initialValue,
  filter = () => true
) {
  if (key in localStorage) initialValue = JSON.parse(localStorage.getItem(key));
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(
      key,
      JSON.stringify(Array.isArray(value) ? value.filter(filter) : value)
    );
  }, [value]);

  return [value, setValue];
}
