import React from "react";
import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { FiLogOut } from "react-icons/fi";
import Bottombar from "../components/Bottombar";
import ProjectForm from "../components/ProjectForm";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Createnav from "./Createnav";

const ProjectCreate = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Box height={"100%"} display={"flex"} justifyContent={"space-between"}>

      {
        !SmallScreen && <Box w={{ base: "10%", md: "7%", lg: "5%" }} >
          <Sidebar />
        </Box>
      }
        

        {/* ----------------------- */}

        <Box
          height={"100vh"}
          m="auto"
          w={{ base: "100%", md: "100%", lg: "100%" }}
        >

           {/* <Createnav/> */}

          <Box
            w={{ base: "100%", md: "100%", lg: "100%" }}
            mt={{ md: "-40px" }}
          >
            <Box
              h={{ base: "20vw", md: "200px", lg: "220px" }}
              w={{ base: "100%" }}
              backgroundRepeat={"no-repeat"}
              borderEndStartRadius={"50px"}
              // backgroundColor={"#0e1099"}
              bg="#0e3482"
              mb={{ base: "10px" }}
            >
              <Box
                w={{ base: "99%", md: "70%", lg: "70%" }}
                h={{ base: "15vh", md: "20vh", lg: "20vh" }}
                display={"flex"}
                justifyContent={"space-between"}
                p="1"
              >
                <Box p="2" mt={{ md: "20px" }}>
                  <Text
                    textAlign={"center"}
                    mt={{ base: "5", md: "10", lg: "10" }}
                    fontSize={{ base: "1rem", md: "1.5rem", lg: "1.5rem" }}
                    color={"#ffffff"}
                    fontWeight={"600"}
                  >
                    <ChevronLeftIcon />
                    Create Project{" "}
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
            </Box>
          </Box>


          <Box>
            <ProjectForm />
          </Box>

          {/* ------------ Bottom bar -------------- */}

          <Bottombar />
        </Box>
      </Box>
    </>
  );
};

export default ProjectCreate;
