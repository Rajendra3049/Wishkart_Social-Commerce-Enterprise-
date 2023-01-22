import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Navbar from "./components/Navbar";
import NewNavbar from "./components/NewNavbar";

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
    <div style={{ border: "1px solid red" }}>
      <Navbar />
      <AllRoutes />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
