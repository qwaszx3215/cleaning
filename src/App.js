import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  List,
  ListIcon,
  ListItem,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import NavBar from "./component/navbar";
import { HashLink as Link } from "react-router-hash-link";
import { SiWorldhealthorganization } from "react-icons/si";
import { BsBank2, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

import { FaShieldAlt, FaSmile, FaBroom } from "react-icons/fa";
import { GoQuote } from "react-icons/go";
import laeimg from "./newlaw.png";

import { MdCheckCircle } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import Scroll6 from "./component/Scroll/scroll6";
import Scroll4 from "./component/Scroll/Scroll4";
import { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [scrolled]);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0 && !scrolled) {
      setScrolled(true);
    } else if (scrollTop === 0 && scrolled) {
      setScrolled(false);
    }
  };

  const scrollTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <div style={{ position: "fixed", bottom: 25, right: 25 }}>
        {scrolled ? (
          <Button
            as={IconButton}
            aria-label="Options"
            icon={<BsArrowUpCircleFill />}
            bg="#b4816b"
            color="white"
            onClick={scrollTop}
          ></Button>
        ) : (
          ""
        )}
      </div>
      <div style={{ width: "100%" }}>
        <NavBar />
        <Home />
        <Scroll4>
          <div id="service">
            <Service />
          </div>
        </Scroll4>

        <div id="profile">
          <Profile />
        </div>

        <div id="testimony">
          <Testimonials />
        </div>
        <div id="book">
          <Book />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
export const Home = () => {
  return (
    <Box
      bg="gray.100"
      backgroundImage={[
        "",
        "",
        "url('https://www.houstoncleanconnections.com/wp-content/uploads/hero-row-banner-bg.webp')",
        "url('https://www.houstoncleanconnections.com/wp-content/uploads/hero-row-banner-bg.webp')",
        "url('https://www.houstoncleanconnections.com/wp-content/uploads/hero-row-banner-bg.webp')",
        "url('https://www.houstoncleanconnections.com/wp-content/uploads/hero-row-banner-bg.webp')",
      ]}
      backgroundRepeat="no-repeat"
      backgroundSize="contain" // or 'auto' based on your preference
      backgroundPosition="right"
      height={["auto", "auto", "100vh", "100vh", "100vh", "100vh"]}
      pt="50px"
    >
      <Box display={["grid", "grid", "flex", "flex"]}>
        <Box
          m="auto"
          w={["400px", "400px", "50%", "50%"]}
          py={["50px", "50px", "100px", "100px"]}
          fontSize={["22px", "22px", "25px", "25px"]}
        >
          <Scroll6>
            <Heading color="#7bdcb5">
              For a Fresh, Welcoming House Cleaning Services in Florida
            </Heading>
            We’re here to add that extra sparkle to your everyday life, giving
            you back the time you deserve to do the things that truly make you
            happy.
            <br />
            <br />
            You can trust us with taking care of those unwanted stains
          </Scroll6>
        </Box>
        <Box m="auto" w="30%" d={["none", "none", "grid", "grid"]}></Box>
      </Box>
    </Box>
  );
};
export const Service = () => {
  return (
    <Box m="60px" mt="-80px" pb="80px">
      <Heading size="lg" mb="30px">
        Our Cleaning Services
      </Heading>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Box w={["100%", "100%", "400px", "400px"]} mb="20px">
          <Text fontSize="20px" fontWeight="bold">
            Kitchen Appliance Cleaning
          </Text>
          <Text fontSize="12px" pr="20px" mt="10px">
            Deep cleaning of your oven, refrigerator, microwave, and other
            kitchen appliances to eliminate grease, grime, and food residues.
          </Text>
        </Box>

        <Box w={["100%", "100%", "400px", "400px"]} mb="20px">
          <Text fontSize="20px" fontWeight="bold">
            Tile and Grout Cleaning
          </Text>
          <Text fontSize="12px" pr="20px" mt="10px">
            Restore the sparkle of your tiles and remove dirt and mold from
            grout lines with our powerful cleaning solutions.
          </Text>
        </Box>

        <Box w={["100%", "100%", "400px", "400px"]} mb="20px">
          <Text fontSize="20px" fontWeight="bold">
            Maid Service
          </Text>
          <Text fontSize="12px" pr="20px" mt="10px">
            Reliable and thorough maid services to keep your home clean and
            organized on a regular or one-time basis.
          </Text>
        </Box>

        <Box w={["100%", "100%", "400px", "400px"]} mb="20px">
          <Text fontSize="20px" fontWeight="bold">
            Move In & Move Out Cleaning
          </Text>
          <Text fontSize="12px" pr="20px" mt="10px">
            Professional cleaning for homes during relocation to ensure a
            spotless space for new occupants or to get your deposit back.
          </Text>
        </Box>

        <Box w={["100%", "100%", "400px", "400px"]} mb="20px">
          <Text fontSize="20px" fontWeight="bold">
            Deep House Cleaning
          </Text>
          <Text fontSize="12px" pr="20px" mt="10px">
            A comprehensive cleaning of every corner of your home, ideal for
            seasonal refreshes or after events.
          </Text>
        </Box>

        <Box w={["100%", "100%", "400px", "400px"]} mb="20px">
          <Text fontSize="20px" fontWeight="bold">
            Carpet Cleaning
          </Text>
          <Text fontSize="12px" pr="20px" mt="10px">
            Effective carpet cleaning using modern techniques to remove stains,
            allergens, and revive your carpet’s look and feel.
          </Text>
        </Box>
        <Box w={["100%", "100%", "400px", "400px"]} mb="20px">
          <Text fontSize="20px" fontWeight="bold">
            Post Construction Cleaning
          </Text>
          <Text fontSize="12px" pr="20px" mt="10px">
            Thorough cleaning after construction or renovation to remove dust,
            debris, and leftover materials.
          </Text>
        </Box>
        <Box w={["100%", "100%", "400px", "400px"]} mb="20px">
          <Text fontSize="20px" fontWeight="bold">
            Window Cleaning
          </Text>
          <Text fontSize="12px" pr="20px" mt="10px">
            Interior and exterior window washing for a streak-free shine and
            improved natural light.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export const Profile = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -140;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <>
      <Box bg="#eceff2" p="60px">
        <Heading size="lg" mb="60px">
          For Professional House Cleaning
        </Heading>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          {/* Reliable & Fully Insured */}
          <Box
            maxW="md"
            mb="50px"
            border="1px solid transparent"
            bg="white"
            p="20px"
            borderRadius="8px"
            boxShadow="md"
          >
            <Flex mb="30px" gap="4" alignItems="center">
              <FaShieldAlt size="30px" color="#3182ce" />
              <Box>
                <Heading size="sm">Reliable & Fully Insured</Heading>
                <Text fontSize="sm" color="gray.500">
                  Trusted Cleaning Experience
                </Text>
              </Box>
            </Flex>
            <Text fontSize="14px">
              We’ve been trusted to bring a sense of calm and cleanliness to
              homes, making sure you walk into a space that feels just right.
              With our trained, insured, and licensed professionals, your home
              is in safe hands—cleaned exactly the way you like it.
            </Text>
          </Box>

          {/* Honest Prices, Happy People */}
          <Box
            maxW="md"
            mb="50px"
            border="1px solid transparent"
            bg="white"
            p="20px"
            borderRadius="8px"
            boxShadow="md"
          >
            <Flex mb="30px" gap="4" alignItems="center">
              <FaSmile size="30px" color="#38a169" />
              <Box>
                <Heading size="sm">Honest Prices, Happy People</Heading>
                <Text fontSize="sm" color="gray.500">
                  Quality & Trust in Every Step
                </Text>
              </Box>
            </Flex>
            <Text fontSize="14px">
              Every team member is carefully screened, trained, and insured to
              provide you peace of mind. We send only the best into your home,
              ensuring the job is always done with precision and care.
            </Text>
          </Box>

          {/* Your Cleanest Space, Every Time */}
          <Box
            maxW="md"
            mb="50px"
            border="1px solid transparent"
            bg="white"
            p="20px"
            borderRadius="8px"
            boxShadow="md"
          >
            <Flex mb="30px" gap="4" alignItems="center">
              <FaBroom size="30px" color="#d69e2e" />
              <Box>
                <Heading size="sm">Your Cleanest Space, Every Time</Heading>
                <Text fontSize="sm" color="gray.500">
                  Taking Care of Our People – You
                </Text>
              </Box>
            </Flex>
            <Text fontSize="14px">
              When we value and support our team, they bring their best to your
              home. That’s why we foster a culture of care so that our employees
              deliver cleaning with heart — consistently and reliably.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        backgroundImage="url('https://burst.shopifycdn.com/photos/cleaning-supply-flatlay-bottom.jpg?width=1000&format=pjpg&exif=0&iptc=0')" // Make sure the image path is valid
        height={["100vh", "100vh", "70vh", "70vh"]}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        p="80px"
      >
        <Heading size="lg" mb="30px">
          Why Choose Us
        </Heading>
        <Scroll4>
          <List spacing={6} fontSize="20px" fontWeight="700" mt="-60px">
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#8ed1fc" />
              Trusted by Hundreds of Families
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#8ed1fc" />
              Professionally Trained & Insured Cleaners
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#8ed1fc" />
              Eco-Friendly Cleaning Products
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#8ed1fc" />
              Flexible Scheduling That Works for You
            </ListItem>
          </List>
          <Link to="#book" scroll={(el) => scrollWithOffset(el, -150)}>
            <Button
              mt="20px"
              bg="transparent"
              border="2px solid white"
              color="white"
              borderRadius="10px"
              p="20px"
              _hover={{ background: "#8ed1fc", border: "2px solid #8ed1fc" }}
              _active={{ background: "#8ed1fc", border: "2px solid #8ed1fc" }}
              _focus={{ background: "#8ed1fc", border: "2px solid #8ed1fc" }}
            >
              Book a Cleaning
            </Button>
          </Link>
        </Scroll4>
      </Box>
    </>
  );
};
export const Testimonials = () => {
  return (
    <>
      <Box
        p={["10px", "10px", "80px", "80px"]}
        pt="40px"
        bg="#8ed1fc"
        color="white"
        pb="30px"
        mt={["-45px", "-45px", "0", "0"]}
      >
        <Box display={["grid", "grid", "flex", "flex"]}>
          <Box
            w={["90%", "90%", "60%", "60%"]}
            display={["grid", "grid", "grid", "grid"]}
          >
            <Heading size="lg" mb="30px">
              Client Testimonials
              <Heading size="md" color="#724e3f" mb="30px">
                <br></br>
                We are honored to serve you
              </Heading>
            </Heading>
          </Box>

          <List
            w={["90%", "90%", "40%", "40%"]}
            spacing={6}
            fontSize="14px"
            fontWeight="300"
            color="white"
            mt="-110px"
            mb="60px"
            pb="100px"
          >
            <Scroll4>
              <ListItem display="flex" mt="50px">
                <GoQuote size="40px" color="#724e3f" />
                <p style={{ marginTop: "20px" }}>
                  I can’t believe how spotless my home looked after the first
                  cleaning. The team was on time, friendly, and incredibly
                  thorough. I finally have weekends to myself again!
                  <br />
                  <b>-JESSICA</b>
                </p>
              </ListItem>
              <ListItem display="flex">
                <GoQuote size="40px" color="#724e3f" />
                <p style={{ marginTop: "20px" }}>
                  After trying several cleaning services, this one truly stands
                  out. They were respectful of our home and went above and
                  beyond in every room. It’s like a breath of fresh air!
                  <br />
                  <b>-MARCUS</b>
                </p>
              </ListItem>
              <ListItem display="flex">
                <GoQuote size="40px" color="#724e3f" />
                <p style={{ marginTop: "20px" }}>
                  The team was fantastic—punctual, professional, and detailed.
                  They even left a small thank-you note. I’ve signed up for
                  bi-weekly service now. Highly recommend!
                  <br />
                  <b>-LISA</b>
                </p>
              </ListItem>
              <ListItem display="flex">
                <GoQuote size="40px" color="#724e3f" />
                <p style={{ marginTop: "20px" }}>
                  My house has never felt so clean. I appreciated the
                  eco-friendly products and the care they took with my pets
                  around. Truly a 5-star experience.
                  <br />
                  <b>-DANIEL</b>
                </p>
              </ListItem>
            </Scroll4>
          </List>
        </Box>
      </Box>
    </>
  );
};
export const Book = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Booking:", formData);

    try {
      await axios.post("https://secondwa.onrender.com/sendmail7", formData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      m="auto"
      width={["90%", "90%", "60%", "60%"]}
      textAlign="center"
      mt="40px"
    >
      <Heading size="lg">BOOK A CLEANING SESSION</Heading>
      <Heading size="sm" color="#724e3f">
        FILL OUT THE FORM TO SCHEDULE YOUR SERVICE
      </Heading>

      <Box
        display={["grid", "grid", "flex", "flex"]}
        justifyContent="space-between"
      >
        <Input
          isRequired
          type="text"
          variant="flushed"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          m="30px"
        />
        <Input
          isRequired
          type="text"
          variant="flushed"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          m="30px"
        />
      </Box>

      <Box
        display={["grid", "grid", "flex", "flex"]}
        justifyContent="space-between"
      >
        <Input
          isRequired
          type="text"
          variant="flushed"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          m="30px"
        />
        <Input
          isRequired
          type="email"
          variant="flushed"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          m="30px"
        />
      </Box>

      <Textarea
        isRequired
        variant="flushed"
        placeholder="Tell us about your cleaning needs"
        name="message"
        value={formData.message}
        onChange={handleChange}
        mb="30px"
        w="95%"
      />

      <Box textAlign="center">
        <Button
          type="submit"
          bg="transparent"
          border="2px solid black"
          color="black"
          borderRadius="10px"
          p="20px"
          _hover={{
            color: "white",
            background: "#724e3f",
            border: "2px solid #724e3f",
          }}
          _active={{
            color: "white",
            background: "#724e3f",
            border: "2px solid #724e3f",
          }}
          _focus={{
            color: "white",
            background: "#724e3f",
            border: "2px solid #724e3f",
          }}
          fontWeight="100"
          fontSize={["15px", "15px", "", ""]}
        >
          Book Now
        </Button>
      </Box>
    </Box>
  );
};
export const Contact = () => {
  return (
    <>
      <Flex display="flex" flexWrap="wrap" mt="40px" p="40px">
        <Box width={["90%", "90%", "60%", "60%"]} textAlign="center">
          <Box display="flex" justifyContent="center">
            <Image
              mt="90px"
              src="https://atriainnovation.com/uploads/2023/11/Portada_3.jpg"
              alt="Dan Abramov"
              maxWidth="400px"
            />
          </Box>
        </Box>
        <Box width={["90%", "90%", "40%", "40%"]}>
          <Heading mt="20px" mb="20px">
            Get In Touch
          </Heading>
          <Text fontSize="20px" fontWeight="600" color="#b4816b">
            Phone
          </Text>
          <Text mb="20px"> (317) 572-0238</Text>
          <Text fontSize="20px" fontWeight="600" color="#b4816b">
            Email
          </Text>
          <Text mb="20px"> theodoreemagilll@gmail.com</Text>
          <Text fontSize="20px" fontWeight="600" color="#b4816b">
            Social
          </Text>
          <ButtonGroup variant="ghost" mb="30px">
            <IconButton
              as="a"
              href="https://www.facebook.com/share/162P3kBgAd/?mibextid=wwXIfr"
              aria-label="GitHub"
              icon={<BsFacebook fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Box>
      </Flex>
      <Text fontSize="sm" bg="black" color="white" textAlign="center">
        &copy; {new Date().getFullYear()} Theodoreema Gilll Cleaning, Inc. All
        rights reserved.
      </Text>
    </>
  );
};
