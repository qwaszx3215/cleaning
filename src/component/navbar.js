import {
  Box,
  Button,
  Spacer,
  MenuButton,
  Flex,
  Menu,
  MenuList,
  IconButton,
  Heading,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../component/logo.png";
const NavBar = () => {
  //"#b4816b"
  return (
    <Box bg={"#8ed1fc"} color="black" width="100%">
      <Box pl={6} pr={6} pt={5} pb={7}>
        <Flex>
          <Link to="/">
            <Image mt="-40px" mb="-50px" h="150px" w="150px" src={logo} />
          </Link>

          <Spacer />
          <Box display={["none", "none", "flex", "flex"]} mt="10px">
            <Flex>
              <Lister name="Service" link="#service" />
              <Lister name="Contact" link="#contact" />
              <Lister name="Book Consulation" link="#book" />
              <Lister name="Our Team" link="#profile" />
              <Lister name="Testimony" link="#testimony" />
            </Flex>
          </Box>
          <Box display={["flex", "flex", "none", "none"]} mt="10px">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />

              <MenuList   zIndex="999999" display="grid">
                <Lister name="Service" link="#service" />
                <Lister name="Contact" link="#contact" />
                <Lister name="Book Consulation" link="#book" />
                <Lister name="Our Team" link="#profile" />{" "}
                <Lister name="Testimony" link="#testimony" />
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavBar;

export const Lister = ({ name, fw, link }) => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -140;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <Link to={link} scroll={(el) => scrollWithOffset(el, -150)}>
      <Button
        bg="transparent"
        _hover={{ color: "#7bdcb5" }}
        _active={{ color: "#7bdcb5" }}
        _focus={{ color: "#7bdcb5" }}
        fontWeight={fw}
      >
        {name}
      </Button>
    </Link>
  );
};
