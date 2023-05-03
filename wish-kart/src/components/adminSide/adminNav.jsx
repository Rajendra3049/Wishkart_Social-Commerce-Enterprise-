import {
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import {
  FiChevronDown,
  FiCompass,
  FiHome,
  FiMenu,
  FiSettings,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogout } from "../../redux/admin/admin.action";

const LinkItems = [
  { name: "Dashboard", icon: FiHome },
  { name: "Products", icon: FiStar },
  { name: "Add New Product", icon: FiCompass },
  { name: "Orders", icon: FiTrendingUp },
  { name: "Logout", icon: FiSettings },
];

export default function AdminNav({ children, showPage, setShowPage }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, products, adminAuth, token, pagination } = useSelector(
    (store) => store.AdminManager
  );
  // const [showPage, setShowPage] = React.useState("Dashboard");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!adminAuth) {
      navigate("/");
    }
  }, []);

  return (
    <Box>
      <Box>
        <SidebarContent onClose={() => onClose} setShowPage={setShowPage} />
      </Box>

      {/* <Box
        w="80%"
        minH="710px"
        ml={"20%"}
        bg={useColorModeValue("gray.100", "gray.900")}
        p="5px 10px">
        {showPage === "Dashboard" ? (
          <Dashboard />
        ) : showPage === "Products" ? (
          <ProductManager />
        ) : showPage === "Add New Product" ? (
          <AddNewProduct setShowPage={setShowPage} />
        ) : null}
      </Box> */}
    </Box>
  );
}

const SidebarContent = ({ onClose, setShowPage, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "sm", md: "md" }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
        mb="20px">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Welcome to Wishkart
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box mt="10px" pt="20px">
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} setShowPage={setShowPage}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, children, setShowPage, ...rest }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Link
      onClick={() =>
        children !== "Logout" ? setShowPage(children) : dispatch(adminLogout())
      }
      // href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}>
      <Flex
        fontSize={"20px"}
        align="center"
        p="6"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="18"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ image, username, onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 10 }}
      height="70px"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      <Box w="15%">
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <HStack spacing="5">
                <Avatar size={"xl"} src={image} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="3px"
                  mr="20px">
                  <Text fontSize="xl">{username}</Text>
                  <Text fontSize="lg" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown size="20" />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}>
              <MenuItem>
                <Text fontSize={"xl"}>Profile</Text>
              </MenuItem>

              <MenuItem>
                {" "}
                <Text fontSize={"xl"}>Settings</Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                {" "}
                <Text fontSize={"xl"}>Sign out</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </Flex>
  );
};
