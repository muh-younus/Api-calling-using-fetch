//context creation
//provider
//usecontext hook
import React from "react";

const AppContext = React.createContext();

//to create a provider function
const AppProvider =({children})=>{

    return (

        <AppContext.Provider value={"Hello, i am context"}>{children}</AppContext.Provider>
    )
};

//custom hook
const useGlobalContext = () => {
    return React.useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };