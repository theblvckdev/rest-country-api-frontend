import { createContext, useState } from "react";

export const FilterRegionContext = createContext();

export const FilterRegionProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState('');

  // select region logic
  const handleSelectChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <FilterRegionContext.Provider value={{selectedRegion, handleSelectChange}}>
      {children}
    </FilterRegionContext.Provider>
  )
}