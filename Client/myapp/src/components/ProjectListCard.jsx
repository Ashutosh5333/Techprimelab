import axios from "axios";
import React, { useEffect, useState } from "react";
import {Box,  Button,  Flex, Card, Input,  InputGroup,  InputLeftElement,Select,Text, useBreakpointValue,
} from "@chakra-ui/react";
import { Table,Thead,  Tbody, Tr,Th, Td, TableContainer,  } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";
import { GetProjectData } from './../Redux/AppReducer/Action';
import {useDispatch} from "react-redux"


const ProjectListCard = () => {
       const dispatch = useDispatch()
       const [inputdata ,SetInputData] = useState(" ")
       const [current,SetCurrent] = useState(1)
       const [Projectdata,SetProjectdata] =useState([])
       const [page ,SetPage] = useState(6)
       const  SmallScreen = useBreakpointValue({base:true,md:false,lg:false})
   
    
        
        useEffect(() =>{
          dispatch(GetProjectData)
        },[])

         useEffect(() =>{
          getdata()
         },[current,page])

            async function getdata(){
                 try{
                   const res = await fetch(`http://localhost:8000/project?page=${current}&limit=${page}`)
                   const data = await res.json();
                   SetProjectdata(data);
                 }catch(err){
                  console.log(err);
                 }
            }


         const handlecancel = async (id) =>{
             try{
               const res = await axios.patch(`http://localhost:8000/statuscancel/${id}`,
              );
               
              //  dispatch(GetProjectData)
              getdata()
             }
             catch(err){
              console.log(err)
             }
         }

         const handleClose = async (id) =>{
          try{
            const res = await axios.patch(`http://localhost:8000/statusclose/${id}`,
           );
           getdata()
            // dispatch( GetProjectData)
          }
          catch(err){
           console.log(err)
          }
      }

      const handleRunning = async (id) =>{
        try{
          const res = await axios.patch(`http://localhost:8000/statusrun/${id}`,
         );
         getdata()
          // dispatch( GetProjectData)
        }
        catch(err){
         console.log(err)
        }
    }


      

  return (
    <>
      <Box  boxShadow={"lg"}  height="120vh" rounded={"lg"}>
        {/* -------------  */}

        <Box display="flex" justifyContent={"space-between"} p="2">
          <Box borderBottom={"2px solid black"} p="2">
            <InputGroup position="relative">
              <InputLeftElement
                pointerEvents="none"
                position="absolute"
                top="1"
                children={<SearchIcon color="gray.400" boxSize={5} />}
              />
              <Input
                mt="3"
                onChange={(e) => SetInputData(e.target.value)}
                placeholder="Search"
                type="Search"
                variant={"unstyled"}
              />
            </InputGroup>
          </Box>

          <Box display={"flex"} w="200px" justifyContent={"space-evenly"} p="2">
            <Box w="10vw" m="auto">
              <Text fontSize="1rem" color="gray"> Sort By : </Text>
            </Box>

            <Select variant={"unstyled"} m="auto" ml=".5" border="none" >
              <option value="Priority">Priority</option>
              <option value="type">type</option>
              <option value="Location">Location </option>
              <option value="Status">Status</option>
              <option value="Reason">Reason</option>
              <option value="Category">Category </option>
            </Select>
            
          </Box>
        </Box>

        {/* ------ Serach bar ^^^ --------  */}

        <Box  w="99%" p="-5"  m="auto" >

      
        {

          !SmallScreen && ( <TableContainer h="80vh"  mb="10"  >
            <Table variant="simple">
         
              <Thead bg="blue.100" p="2"   display={{base:"none",md:"",lg:""}}>
                <Tr display={{base:"none",md:"",lg:""}}>
                  <Th fontsize="2rem" color="black">Project Name</Th>
                  <Th fontsize="2rem" color="black">Reason</Th>
                  <Th fontsize="2rem" color="black">Type</Th>
                  <Th fontsize="2rem" color="black">Division</Th>
                  <Th fontsize="2rem" color="black">Category</Th>
                  <Th fontsize="2rem" color="black">Priority</Th>
                  <Th fontsize="2rem" color="black">Dept</Th>
                  <Th fontsize="2rem" color="black">Location</Th>
                  <Th fontsize="2rem" color="black">Status</Th>
                  <Th> </Th>
                  <Th> </Th>
                  <Th> </Th>
                </Tr>
              </Thead>
              <Tbody p="4" h="10vh" >

              {
                Projectdata.length>0 ?
                
                 Projectdata.filter((value) =>{
                  if(inputdata == ""){
                           return value
                        }
                        else if ( value.Projecttheme.toLowerCase().includes(inputdata.toLowerCase())){
                       return value
                    }
                      else if ( value.Category.toLowerCase().includes(inputdata.toLowerCase())){
                      return value
                  }
                 
                 })
                 .map((el) =>{
                  return <Tr key={el._id}>
                  <Td  fontsize="2rem" fontWeight={"500"} >{el.Projecttheme} </Td>
                  <Td>{el.Reason} </Td>
                  <Td> {el.Type} </Td>
                  <Td>{el.Division} </Td>
                  <Td> {el.Category} </Td>
                  <Td> {el.Priority} </Td>
                  <Td>{el.Department} </Td>
                  <Td  > {el.Location} </Td>
                  <Td fontWeight={"600"}>{el.Status} </Td>
                  <Td > 
                      <Button bg="blue" p="5" color="#ffffff" 
                      borderRadius={"20px"}  onClick={() => handleRunning(el._id)}
                      >  Start</Button>
                  </Td>
                  <Td>  
                  <Button   borderRadius={"20px"} border={"1px solid blue"} bg="White" color="blue"  p="2" 
                     onClick={() => handleClose(el._id)}
                  > CLose </Button>
                   </Td>
                  <Td> 
                  <Button   borderRadius={"20px"}  border={"1px solid blue"} bg="White" color="blue"  p="2" 
                   onClick={() => handlecancel(el._id)}
                  > Cancel </Button>
                   </Td>
                </Tr>
                }) : 
                 <h1> Loading ......... </h1>

              }
                
                
              </Tbody>
            
            </Table>
          </TableContainer>)
        }
         
        </Box>

         {/* --------- Mobile View ------------ */}
           
           {
            SmallScreen  && (      <Box  w={{base:"95%"}} m="auto" mb="15"   >

{

Projectdata.length >0 && Projectdata.map((el) =>{
 return <Card  key={el._id} rounded={"lg"}  boxShadow="dark-lg" bg="#ffffff"  m="auto" p="5" gap="5" mb="5" mt="2"
  display={{base:"",md:"none",lg:"none"}} 
 >
   
      <Flex justifyContent={"space-between"}  >
        <Box>
          <Text textAlign={"start"} fontSize={"1.2rem"} fontWeight={"700"}>{el.Projecttheme}</Text>
           <Text textAlign={"start"}> {el.Startdate} to {el.Enddate}  </Text>
        </Box>
        <Box>
          <Text fontSize={"1.3rem"} fontWeight={"700"}> {el.Status} </Text>
        </Box>
      </Flex>
       
       {/* ----------  */}

       <Flex textAlign={"start"}  mt="5" >
        <Box>
          <Text textAlign={"start"} fontSize={"1rem"} mt="1" fontWeight={"500"}>{ `Reason : ${el.Reason} `} </Text> 
          <Text textAlign={"start"} fontSize={"1rem"} mt="1" fontWeight={"500"} > { `Type : ${el.Type} `} .  { `Category : ${el.Category} `} </Text>
          <Text textAlign={"start"} fontSize={"1rem"} mt="1" fontWeight={"500"} > { `Div : ${el.Division} `} .  { `Dept : ${el.Department} `} </Text>
        </Box>
      </Flex>
      <Box >
      <Text textAlign={"start"} fontSize={"1rem"} mt="1" fontWeight={"500"}>{ `Location : ${el.Location} `} </Text> 
      <Text textAlign={"start"} fontSize={"1rem"} mt="1" fontWeight={"500"}>{ `Priority : ${el.Priority} `} </Text> 
      </Box>
      
      <Flex justifyContent={"space-evenly"}  p="5" gap="5" >
        <Button  bg="blue" p="5" color="#ffffff"  onClick={() =>handleRunning(el._id)}
         borderRadius={"20px"} > Start </Button>
        <Button onClick={() =>handleClose(el._id)} borderRadius={"20px"} border={"1px solid blue"} bg="White" color="blue"  p="5" > Close </Button>
        <Button onClick={() =>handlecancel(el._id)} borderRadius={"20px"} border={"1px solid blue"} bg="White" color="blue"  p="5" > Cancel </Button>                    
      </Flex>

   </Card>
})

}
 
<Box  display={"flex"} mb={{base:"10px",lg:"10"}} 
          justifyContent={"center"}
       >  
          
       <Button disabled={page===1} onClick={()=>SetCurrent(current-1)}>Prev</Button>
       <Text textAlign={"center"} mt="2" >{current}</Text>
       <Button  onClick={()=>SetCurrent(current+1)}>Next</Button>
        
        </Box>

</Box>
)

           }
       
   

           {/*  Pagination  */}

       <Box border={"5px solid black"} display={"flex"} mb={{base:"10px",lg:"10"}} 
          justifyContent={"center"}
       >  
          
       <Button disabled={page===1} onClick={()=>SetCurrent(current-1)}>Prev</Button>
       <Text textAlign={"center"} mt="2" >{current}</Text>
       <Button  onClick={()=>SetCurrent(current+1)}>Next</Button>
        
        </Box>



      </Box>
    </>
  );
};

export default ProjectListCard;

