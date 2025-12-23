import React, { createContext, useState, useContext } from 'react';

const HeaderFooterContext = createContext({
  isHeaderFooterVisible: true,
  setHeaderFooterVisibility: () => {},
});
export const useHeaderFooter = () =>{
  const context = useContext(HeaderFooterContext);
  return context;
}

export const HeaderFooterProvider = ({ children }) => {
  const [isHeaderFooterVisible, setHeaderFooterVisible] = useState(true);

  return (
    <HeaderFooterContext.Provider value={{ isHeaderFooterVisible, setHeaderFooterVisibility: setHeaderFooterVisible }}>
      {children}
    </HeaderFooterContext.Provider>
  );
};
