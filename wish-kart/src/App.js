import Navbar from "./components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Home from "./Pages/Home";


function App() {
  return (
    <>
    <div style={{backgroundColor:"white",width:"100%"}}>
 <Navbar/>
   
 
      <Home/>
      <AllRoutes />
  
    </div>
    </>
  );
}

export default App;
