import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Navbar from "./components/Navbar";

import AllRoutes from "./Pages/AllRoutes";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AdminNav from "./components/adminSide/adminNav";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  let { adminAuth } = useSelector((store) => store.AdminManager);
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
    <div>
      {adminAuth ? null : <Navbar />}

      <AllRoutes />
      {adminAuth ? null : (
        <>
          <Footer />
          <Footer2 />
        </>
      )}
    </div>
  );
}

export default App;
