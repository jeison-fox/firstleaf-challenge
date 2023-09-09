import React, { useMemo, useState } from "react";

import AppBarContext from "context/AppBarContext";

export default function AppBarContextProvider({ children }) {
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [searchBarVisibility, setSearchBarVisibility] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [title, setTitle] = useState("");

  const appBarContextValue = useMemo(
    () => ({
      appBarTitle: title,
      buttonVisibility,
      searchBarVisibility,
      searchTerm,
      setButtonVisibility,
      setSearchBarVisibility,
      setSearchTerm,
      setTitle,
    }),
    [
      buttonVisibility,
      searchBarVisibility,
      searchTerm,
      setButtonVisibility,
      setSearchBarVisibility,
      setSearchTerm,
      setTitle,
      title,
    ]
  );

  return (
    <AppBarContext.Provider value={appBarContextValue}>
      {children}
    </AppBarContext.Provider>
  );
}
