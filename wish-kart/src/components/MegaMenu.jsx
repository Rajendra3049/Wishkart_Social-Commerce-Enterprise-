import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  // ChevronRightIcon,
} from "@chakra-ui/icons";
import "../index.css";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_LOGOUT } from "../redux/user/user.type";

export default function MegaMenu() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const [value, setValue] = useState("");
  const navigate = useNavigate();
  // redux start
  let { isAuth, user } = useSelector((store) => store.UserManager);
  let dispatch = useDispatch();
  // redux end
  React.useEffect(() => {}, [dispatch, user, isAuth]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  // login-logout
  function HandleLogin() {
    if (isAuth) {
      dispatch({ type: USER_LOGOUT });
      navigate("/");
    } else {
      navigate("/signup");
    }
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        boxShadow={
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        }
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}>
        <Flex ml={"10px"} display={{ sm: "flex", md: "none", lg: "none" }}>
          <Flex>
            {" "}
            <Box>
              {" "}
              <IconButton
                minH={"30px"}
                minW={"30px"}
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={5} h={5} mt={8} />
                  ) : (
                    <HamburgerIcon w={10} h={10} mt={8} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Box>
            <Flex>
              <Box>
                <RouterLink to="/">
                  <Flex mt={"10px"} ml={"10px"}>
                    <p style={{ marginLeft: "10px", fontSize: "14px" }}>Home</p>
                  </Flex>
                </RouterLink>
              </Box>
              <Box>
                <RouterLink to="/admin">
                  <Flex mt={"10px"} ml={"10px"}>
                    <p style={{ marginLeft: "10px", fontSize: "14px" }}>
                      Admin
                    </p>
                  </Flex>
                </RouterLink>
              </Box>
              <Box>
                <RouterLink to="/signup">
                  <Flex mt={"10px"} ml={"10px"}>
                    <p
                      style={{ marginLeft: "10px", fontSize: "14px" }}
                      onClick={HandleLogin}>
                      {isAuth ? "Sign Out" : "Sign Up"}
                    </p>
                  </Flex>
                </RouterLink>
              </Box>
              <Box>
                <RouterLink to="/cart">
                  <Flex mt={"10px"} ml={"10px"}>
                    <p style={{ marginLeft: "10px", fontSize: "14px" }}>
                      My Orders
                    </p>
                  </Flex>
                </RouterLink>
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          justify={{
            sm: "none",
            md: "space-around",
            lg: "space-around",
          }}
          margin={"auto"}
          padding={"10px"}
          display={["none", "none", "flex"]}>
          <DesktopNav />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("black", "black");
  const linkHoverColor = useColorModeValue("#f43397", "black");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={6}>
      {NAV_ITEMS.map((navItem, i) => (
        <Box key={i}>
          <Popover trigger={"hover"} placement={"bottom-end"}>
            <PopoverTrigger>
              <RouterLink to={navItem.href} key={navItem.label}>
                <Box
                  p={4}
                  _hover={{
                    borderBottom: "3px solid #f43397",
                  }}
                  fontSize={["none", "10px", "10px", "16px"]}
                  fontWeight={500}
                  h={"100%"}
                  color={linkColor}>
                  {navItem.label}
                </Box>
              </RouterLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                display={"flex"}
                rounded={"xl"}
                minW={"1600px"}
                minH={"300px"}
                pl={"50px"}
                pr={"50px"}>
                <Flex>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Flex>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({
  label,
  href,
  subLabel,
  subLabel1,
  subLabel2,
  subLabel3,
  subLabel4,
  subLabel5,
  subLabel6,
  subLabel7,
}) => {
  return (
    <RouterLink
      to={href}
      role={"group"}
      display={"block"}
      p={6}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}>
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            color={"#f43397"}
            fontSize={["5px", "10px", "16px"]}
            fontWeight={500}>
            {label}
          </Text>
          <Box ml={"5%"}>
            <Text
              fontSize={"15px"}
              mt={"18px"}
              color={"gray"}
              _hover={{ color: "black" }}>
              {subLabel}
            </Text>
            <Text
              fontSize={"14px"}
              mt={"10px"}
              color={"gray"}
              _hover={{ color: "black" }}
              w={"150px"}>
              {subLabel1}
            </Text>
            <Text
              fontSize={"14px"}
              mt={"10px"}
              color={"gray"}
              _hover={{ color: "black" }}
              w={"140px"}>
              {subLabel2}
            </Text>
            <Text
              fontSize={"14px"}
              mt={"10px"}
              color={"gray"}
              _hover={{ color: "black" }}>
              {subLabel3}
            </Text>
            <Text
              fontSize={"14px"}
              mt={"10px"}
              color={"gray"}
              _hover={{ color: "black" }}>
              {subLabel4}
            </Text>
            <Text
              fontSize={"14px"}
              mt={"10px"}
              color={"gray"}
              _hover={{ color: "black" }}>
              {subLabel5}
            </Text>
            <Text
              fontSize={"14px"}
              mt={"10px"}
              color={"gray"}
              _hover={{ color: "black" }}>
              {subLabel6}
            </Text>
            <Text
              fontSize={"14px"}
              mt={"10px"}
              color={"gray"}
              _hover={{ color: "black" }}>
              {subLabel7}
            </Text>
          </Box>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}></Flex>
      </Stack>
    </RouterLink>
  );
};

const MobileNav = () => {
  return (
    <>
      {" "}
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        pl={"20px"}
        fontSize={12}
        display={{ md: "none" }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    </>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}>
        <Text
          fontWeight={600}
          fontSize={12}
          color={useColorModeValue("black", "black")}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}>
          {children &&
            children.map((child) => (
              <RouterLink key={child.label} py={2} to={child.href}>
                {child.label}
              </RouterLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "All",
    href: "#",
    children: [
      {
        label: "All Women Ethnic",
        subLabel: "View All",
        href: "/products",
      },
      {
        label: "Sarees",
        subLabel: "All Sarees",
        subLabel1: "Silk Sarees",
        subLabel2: "Cotton Silk Sarees",
        subLabel3: "Cotton Sarees ",
        subLabel4: "Georgette Sarees",
        subLabel5: "Chiffon Sarees",
        subLabel6: "Satin Sarees",
        subLabel7: "Embroidered Sarees",

        href: "/women",
      },
      {
        label: "Kurtis",
        subLabel: "All Kurtis",
        subLabel1: "Anarkali Kurtis",
        subLabel2: "Rayon Kurtis",
        subLabel3: "Cotton Kurtis",
        subLabel4: "Embroidered Kurtis",
        href: "/women",
      },
      {
        label: "Kurta Sets",
        subLabel: "All Kurta Sets",
        href: "/women",
      },
      {
        label: "Suits and Dress Materials",
        subLabel: "All Suits & Dress Material",
        subLabel1: "Cotton Suits",
        subLabel2: "Embroidered Suits",
        subLabel3: "Chanderi Suits",
        href: "/women",
      },
      {
        label: "Other Ethnic",
        subLabel: "Blouses",
        subLabel1: "Dupattas",
        subLabel2: "Lehanga",
        subLabel3: "Gown",
        subLabel4: "Ethnic Bottomwear",
        href: "/women",
      },
    ],
  },
  {
    label: "Women Western",
    href: "#",
    children: [
      {
        label: "Top Wear",
        subLabel: "Tops",
        subLabel1: "Dresses",
        subLabel2: "Sweaters",
        subLabel3: "Jumpsuits",
        href: "/women",
      },
      {
        label: "Bottom Wear",
        subLabel: "Jeans",
        subLabel1: "Jeggings",
        subLabe2: "Palazzos",
        subLabel3: "Shorts",
        subLabel4: "Skirts",
        href: "/women",
      },
      {
        label: "Innner Wear",
        subLabel: "Bras",
        subLabel1: "Breifs",
        href: "/women",
      },
      {
        label: "Sleep Wear",
        subLabel: "Nightsuits",
        subLabel1: "Babydolls",
        href: "/women",
      },
    ],
  },
  {
    label: "Men",
    href: "#",
    children: [
      {
        label: "Top Wear",
        subLabel: "All Top Wear",
        subLabel1: "Tshirts",
        subLabel2: " Shirts",
        href: "/men",
      },
      {
        label: "Bottom Wear",
        subLabel: "Track Pants",
        subLabel1: "Jeans",
        subLabel2: "Trousers",
        href: "/men",
      },
      {
        label: "Mens Accessories",
        subLabel: "All Men Accessories",
        subLabel1: "Watches",
        subLabel2: "Belts",
        subLabel3: "Wallets",
        subLabel4: "Jewellery",
        subLabel5: "Sunglasses",
        subLabel6: "Bags",
        href: "/men",
      },
      {
        label: "Mens Footwear",
        subLabel: "All Men Accessories",
        subLabel1: "Casual Shoes",
        subLabel2: "Sports Shoes",
        subLabel3: "Sandals",
        subLabel4: "Jewellery",
        subLabel5: "Formal Shoes",

        href: "/men",
      },
      {
        label: "Ethnic Wear",
        subLabel: "Men Kurtas",
        subLabel1: "Ethnic Jackets",
        href: "/men",
      },
      {
        label: "Inner & Sleep Wear",
        subLabel: "All Inner & Sleep Wear",
        subLabel1: "Vests",
        href: "/men",
      },
    ],
  },
  {
    label: "Kids",
    href: "#",
    children: [
      {
        label: "Boys & Girls 2+ Years",
        subLabel: "Dresses",
        href: "/men",
      },
      {
        label: "Infant 0-2 Years",
        subLabel: "Rompers",
        href: "/men",
      },
      {
        label: "Toys & Accessories",
        subLabel: "Soft Toys",
        subLabel1: "Footwear",
        subLabel2: "Stationery",
        subLabel3: "Watches",
        subLabel4: "Bags & Backpacks",
        href: "/men",
      },
      {
        label: "Baby Care",
        subLabel: "All Baby Care",
        href: "/men",
      },
    ],
  },
  {
    label: "Home & Kitchen",
    href: "#",
    children: [
      {
        label: "Home Furnishing",
        subLabel: "Bedsheets",
        subLabel1: "Doormats",
        subLabel2: "Curtains & Sheers",
        subLabel3: "Cushions & Cushion Covers",
        subLabel4: "Mattress Protectors",
        href: "/homeKitchen",
      },
      {
        label: "Home Decor",
        subLabel: "All Home Decor",
        subLabel1: "Stickers",
        subLabel2: "Clocks",
        subLabel3: "Showpieces",
        href: "/homeKitchen",
      },
      {
        label: "Kitchen & Dining",
        subLabel: "Kitchen Storage",
        subLabel1: "Cookware & Bakeware",
        href: "/homeKitchen",
      },
    ],
  },
  {
    label: "Beauty & Health",
    href: "#",
    children: [
      {
        label: "Makeup",
        subLabel: "Face",
        subLabel1: "Eyes",
        subLabel2: "Lips",
        subLabel3: "Nails",
        href: "/beauthHealth",
      },
      {
        label: "Wellness",
        subLabel: "Sanitizers",
        subLabel1: "Oral Care",
        subLabel2: "Feminine Hygiene",
        href: "/beauthHealth",
      },
      {
        label: "Skincare",
        subLabel: "Deodrants",
        href: "/beauthHealth",
      },
    ],
  },
  {
    label: "Bags & Footwear",
    href: "#",
    children: [
      {
        label: "Women Bags",
        subLabel: "All Women Bags",
        subLabel1: "Handbags",
        subLabel2: "Clutches",
        subLabel3: "Slingbags",
        href: "/bagsFootwear",
      },
      {
        label: "Men Bags",
        subLabel: "All Men Bags",
        subLabel1: "Men Wallets",
        href: "/bagsFootwear",
      },
      {
        label: "Men Footwear",
        subLabel: "Sports Shoes",
        subLabel1: "Casual Shoes",
        subLabel2: "Formal Shoes",
        subLabel3: "Sandals",
        href: "/bagsFootwear",
      },
      {
        label: "Women Footwear",
        subLabel: "Flats",
        subLabel1: "Bellies",
        subLabel2: "Jutties",
        href: "/bagsFootwear",
      },
    ],
  },
  {
    label: "Jewellery & Accessories",
    href: "#",
    children: [
      {
        label: "Jewellery",
        subLabel: "Jewellery Set",
        subLabel1: "Earrings",
        subLabel2: "Mangalsutras",
        subLabel3: "Studs",
        subLabel4: "Bangles",
        subLabel5: "Necklaces",
        subLabel6: "Rings",
        subLabel7: "Anklets",
        href: "/jewellery",
      },
      {
        label: "Women Accessory",
        subLabel: "Bags",
        subLabel1: "Watches",
        subLabel2: "Hair Accessories",
        subLabel3: "Sunglasses",
        subLabel4: "Socks",

        href: "/jewellery",
      },
    ],
  },
  {
    label: "Electronics",
    children: [
      {
        label: "Mobile & Accessories",
        subLabel: "All Mobile & Accessories",
        subLabel1: "Smartwatches",
        subLabel2: "Mobile Holders",
        subLabel3: "Mobile cases and covers",

        href: "/jewellery",
      },
      {
        label: "Appliances",
        subLabel: "All Appliances",
        subLabel1: "Grooming",
        subLabel2: "Home Appliances",

        href: "/jewellery",
      },
    ],
  },
];
