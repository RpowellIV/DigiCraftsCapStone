import React, { createContext, useContext, useReducer } from "react";

//preparing data for what is about to come
export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
//children is <App /> in this context