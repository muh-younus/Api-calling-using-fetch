import ApiCalling  from "./getdata/api";  
import {useContext} from "react";
import {AppContext,AppProvider} from "./getdata/context";

function App() {
  const contextValue = useContext(AppContext);
  return (
    <>
    <ApiCalling />
    {/* <h1>{contextValue}</h1> */}
    </>
  )
}

export default App;
