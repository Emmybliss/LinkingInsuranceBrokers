import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = () => setMatches(mediaQuery.matches);

    // Add event listener to update state when media query result changes
    mediaQuery.addEventListener("change", handleChange);

    // Clean up the event listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
