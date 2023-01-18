import Navbar from "./components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Home from "./Pages/Home";


function App() {
  return (
    
    <>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet"></link>
    </head>
    <div style={{backgroundColor:"white",width:"100%"}}>
 <Navbar/>
  
 
      {/* <Home/> */}
      <AllRoutes />
  
    </div>
    </>
  );
}

export default App;
