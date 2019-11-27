import { useState, useEffect } from "react";

export function useStateWithLocalStorage(key, initialValue) {
  if (key in localStorage) initialValue = JSON.parse(localStorage.getItem(key));
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // TODO: provide a filter for incomplete items, e.g. those waiting for a
    // response from some external API
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
