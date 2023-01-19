import { Load } from "../components/Styles";
import { Image } from "@chakra-ui/react";
import Wish from "../images/wish.png"
// import { Zoom } from "react-reveal";

const Loader = () => {
    return (
        <div style={{backgroundColor:"white"}}>
        <Load>
          {/* <Zoom> */}
          <Image src={Wish} borderRadius={"30%"}/>
          {/* </Zoom> */}
        </Load>
        </div>
    );
};

export default Loader;