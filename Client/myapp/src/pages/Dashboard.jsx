import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { FiLogOut } from "react-icons/fi";
import Bottombar from "../components/Bottombar";
import Projectslider from "../components/Projectslider";
import { useNavigate } from "react-router-dom";
import { Chart } from "./Chart";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Box w={{ base: "100vw", md: "100%", lg: "100%" }}>
      
        <Box
          h={{ base: "18vw", md: "200px", lg: "150px" }}
          w={{ base: "100%" }}
          backgroundRepeat={"no-repeat"}
          backgroundSize={{ base: "100% 100%", md: "cover", lg: "cover" }}
          backgroundImage={
            "url(https://github.com/Ashutosh5333/Ashutosh5333/assets/101393850/378867ef-86a2-470b-89d4-918d152c3278)"
          }
          mb={{ md: "35px", lg: "10px" }}
        >
          <Box
            w={{ base: "99%", md: "70%", lg: "70%" }}
            h={{ base: "15vh", lg: "20vh" }}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box p="2">
              <Text
                textAlign={"center"}
                mt={{ base: "5", md: "10", lg: "10" }}
                fontSize={{ base: "1rem", md: "1.2rem", lg: "1.2rem" }}
                color={"#ffffff"}
                fontWeight={"500"}
              >
                {" "}
                Dashboard{" "}
              </Text>
            </Box>

            <Box
              align={{ base: "end", lg: "start" }}
              display={{ base: "none", md: "none", lg: "flex" }}
            >
              <Image
                src="https://github.com/Ashutosh5333/Ashutosh5333/assets/101393850/86b70f8e-b78a-4fff-9b8a-7ef4468719d8"
                alt="logo"
                width={{ base: "40%", md: "100%", lg: "100%" }}
              />
            </Box>

            <Box display={{ base: "flex", md: "none", lg: "none" }} mt="5">
              <FiLogOut
                onClick={handleLogout}
                fontSize={"2rem"}
                color="White"
              />
            </Box>
          </Box>

          {/* -------------- */}
        </Box>

        {/* ------  dashborad  ------ */}

        <Box>
          <Projectslider />
        </Box>

        <Text
          textAlign={{ base: "start", md: "start", lg: "start" }}
          fontSize={{ base: "1rem", md: "1.2rem", lg: "1.2rem" }}
          fontWeight={"600"}
          margin={"5"}
          ml="45"
          mt={{ base: "20px", lg: "-1%" }}
        >
          Department wise - Total Vs Closed
        </Text>

        {/* ------- Chart -------   */}

        <Box
          w={{ base: "95%", md: "60%", lg: "50%" }}
          h="330px"
          m={{ base: "auto", md: "10", lg: "10" }}
          mt={{ base: "40px" }}
        >
          <Chart />
        </Box>
      </Box>

      <Bottombar />
    </>
  );
};

export default Dashboard;
