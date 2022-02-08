import React, { createContext, useState } from "react";
import categoriesData from "../data/categoriesData";

const CategoryContext = createContext();
export default CategoryContext;

export const CategoryProvider = ({ children }) => {
  const [catalogs, setCatalog] = useState(categoriesData);

  return (
    <CategoryContext.Provider
      value={{
        catalogs
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
