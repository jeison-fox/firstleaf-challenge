import { createContext } from "react";

const AppBarContext = createContext({
  appBarTitle: "",
  buttonVisibility: false,
  searchBarVisibility: false,
  searchTerm: "",
  setButtonVisibility: () => {},
  setSearchBarVisibility: () => {},
  setSearchTerm: () => {},
  setTitle: () => {},
});

export default AppBarContext;
