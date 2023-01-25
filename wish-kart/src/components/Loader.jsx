import { Load } from "../components/Styles";
import { Image } from "@chakra-ui/react";
import Wish from "../images/wish.png"


const Loader = () => {
    return (
        <div style={{backgroundColor:"white"}}>
        <Load>
      
          <Image src={Wish} borderRadius={"30%"}/>
  
        </Load>
        </div>
    );
};

export default Loader;