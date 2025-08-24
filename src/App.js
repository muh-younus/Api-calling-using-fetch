import ApiCalling  from "./getdata/api";  
import {useContext} from "react";
import {AppContext,AppProvider} from "./getdata/context";
import Navbar from "./navbar/Navbar";


function App() {
  const contextValue = useContext(AppContext);
  return (
    <>
    <Navbar />
    <ApiCalling />
    
    </>
  )
}

export default App;
