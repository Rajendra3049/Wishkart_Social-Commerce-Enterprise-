import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Navbar from "./components/Navbar";
import AllRoutes from "./Pages/AllRoutes";



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
      <AllRoutes />
      <Footer/>
      <Footer2/>
    </div>
    </>
  );
}

export default App;
