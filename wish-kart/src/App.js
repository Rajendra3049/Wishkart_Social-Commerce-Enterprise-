import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Navbar from "./components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    let timer = setTimeout(() => {
      setIsLoading(false);
      return () => clearInterval(timer);
    }, 1000);
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div>
        <Navbar />
        <AllRoutes />
        <Footer />
        <Footer2 />
      </div>
    </>
  );
}

export default App;
