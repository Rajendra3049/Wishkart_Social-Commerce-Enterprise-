// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Checkbox,
//   Stack,
//   Link,
//   Button,
//   Heading,
//   Image,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdminSignin() {
//   // const [token, setToken] = useState("");
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");

//   const handleSubmit = () => {
//     const payload = {
//       email,
//       pass,
//     };

//     fetch("https://zany-bikini-bass.cyclic.app/admin/login", {
//       method: "POST",
//       body: JSON.stringify(payload),
//       headers: {
//         "Content-type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         localStorage.setItem(
//           "token",
//           JSON.stringify(res),
//           console.log(res)
//         );
//         if (
//           (email === "singhparmar1908@gmail.com" && pass === "Shalini1908") ||
//           (email === "abhijeetkale5733@gmail.com" && pass === "abhi5733") ||
//           (email === "ganesh12345bahire@gmail.com" && pass === "ganeshbahire01") ||
//           (email === "kashifrezw1850@gmail.com" && pass === "Kashif-Rezwi") ||
//           (email === "kakadem.b.99@gmail.com" && pass === "MadhukarKakade")

//         ) {
//           navigate("/admin");
//         } else {
//           navigate("/");
//         }
//       })
//       .catch((err) => console.log(err));
//   };

 

//   return (
//     <Box display={"flex"} m={"auto"} mt={"30px"}>
//       <Flex minH={"70vh"} mt={"0px"} ml={"30px"}>
//         <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={12} px={6}>
//           <Stack>
//             <Heading fontSize={"2xl"}>Sign in as Admin</Heading>
//           </Stack>
//           <Box
//             bg={useColorModeValue("white", "gray.700")}
//             w={"400px"}
//             h={"60vh"}
//             boxShadow={"lg"}
//             p={8}
//           >
//             <Stack spacing={4}>
//               <FormControl id="email" isRequired>
//                 <FormLabel>Email address</FormLabel>
//                 <Input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl id="password" isRequired>
//                 <FormLabel>Password</FormLabel>
//                 <Input
//                   type="password"
//                   value={pass}
//                   onChange={(e) => setPass(e.target.value)}
//                 />
//               </FormControl>
//               <Stack spacing={10}>
//                 <Stack
//                   direction={{ base: "column", sm: "row" }}
//                   align={"start"}
//                   justify={"space-between"}
//                 >
//                   <Checkbox>Remember me</Checkbox>
//                   <Link color={"#ff3f6c"}>Forgot password?</Link>
//                 </Stack>
//                 <Button
//                   bg={"#ff3f6c"}
//                   color={"white"}
//                   _hover={{
//                     bg: "#ff3f6c",
//                   }}
//                   onClick={handleSubmit}
//                 >
//                   Sign in
//                 </Button>
//               </Stack>
//             </Stack>
//           </Box>
//         </Stack>
//       </Flex>

//       <Box mt={"50px"}>
//         <Image
//           src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
//           w={"95%"}
//           m={"auto"}
//         ></Image>
//       </Box>
//     </Box>
//   );
// }



// const [form, setForm] = useState(initState);
// const {email, pass} =form


// const navigate = useNavigate()

//   const handleSubmit = async()=>{

//     let {data} =  await axios.post("https://zany-bikini-bass.cyclic.app/admin/login",form)
   
//     localStorage.setItem("admindata",JSON.stringify(data))
//     // localStorage.setItem("token",data.token)


//    if( data.token){

//     navigate('/admin')

//    }

//   }
  
// const handleChange=(e)=>{
// e.preventDefault();
// const {value, name} = e.target;

// setForm({...form,[name]:value})
// //  console.log(form)

// }




import React from "react";
import { Link, useNavigate } from "react-router-dom";

import style from "../styles/signup.module.css";
import { useDispatch, useSelector } from "react-redux";

import { Get_Admins_Data } from "../redux/user/user.action";
import Loader from "../components/Loader";

export default function AdminSignUp() {
  // redux start
  let { loading, error, isAuth, admin } = useSelector(
    (store) => store.UserManager
  );
  let dispatch = useDispatch();
  // redux end
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

  // handle number input
  function HandleEmailChange(e) {
    setEmail(e.target.value);
  }

  // handle continue button
  function HandleSubmit() {
    if (email==="admin@gmail.com") {
      dispatch(Get_Admins_Data(email));
      localStorage.setItem("email", email);
      console.log("Current Email", email);
      navigate("/admin");
    } else {
      window.alert("Enter Valid Email");
    }
  }

  React.useEffect(() => {
    console.log("user used in useEffect signup", admin);
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className={style.sign_up}>
        <div className={style.main_box}>
          <div className={style.main_top}>
            <img
              className={style.sign_up_img}
              src="https://images.meesho.com/images/marketing/1661417516766.webp"
              alt="top box"
            />
          </div>
          <div className={style.main_bottom}>
            <p className={style.heading}>Sign In as Admin</p>
            <div className={style.flex_box}>
              {" "}
              {/* <div>
                <p className={style.country}>Country</p>
                <p className={style.country_code}>IN +91</p>
              </div> */}
              <div>
                <p>Email</p>
                <input
                //   className={style.input_box}
               
                  type="email"
                  placeholder="Email Address"
                  required
                
                  value={email}
                  onChange={HandleEmailChange}
                />
              </div>
            </div>
            <button className={style.continue_btn} onClick={HandleSubmit}>
              Continue
            </button>
    

            <div className={style.footer}>
              By continuing, you agree to Meesho's{" "}
              <span> Terms & Conditions</span>
              and <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
