<<<<<<< HEAD
import { Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProjectCards from "../components/ProjectCards";

function HomePage() {
  const [projectData, setProjectData]: any = useState([]);
  // const [users, setusers] = useState([]);
=======
import { Button, Grid, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProjectCards from "../components/ProjectCards";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [projectData, setProjectData]: any = useState([]);
  const navigate = useNavigate();
>>>>>>> master

  const fetchData = async () => {
    const request = await fetch(`/api/v1/project`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await request.json();
    setProjectData(data);
  };

<<<<<<< HEAD
  // const fetchUser = async () => {
  //   const request = await fetch(`/api/v1/project/user`, {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("token"),
  //     },
  //   });
  //   const data = await request.json();
  //   setusers(data);
  // };

=======
>>>>>>> master
  useEffect(() => {
    fetchData();
  }, []);

<<<<<<< HEAD

  return (
    <Grid
      p="0 0 20vh 0px"
      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
      bg="#e6e3e4"
    >
      {projectData.map((elm: any) => (
        <ProjectCards
          key={elm.id}
          projectname={elm.projectName}
          projectNumber={elm.projectNumber}
          // companyName={""}
          dsubmit={elm.deadLine}
          dOpen={elm.deadLineOpningOffer}
          description={elm.projectDiscription}
        />
      ))}
    </Grid>
=======
  return (
    <VStack w={"100%"} bg="#e6e3e4">
      <Button onClick={() => navigate("/newproject")}>add Project</Button>
      <Grid
        p="0 0 20vh 0px"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        w={"100%"}
      >
        {projectData.map((elm: any) => (
          <ProjectCards
            key={elm.id}
            id={elm.id}
            projectname={elm.projectName}
            projectNumber={elm.id}
            // onClick={() => applyFunc(elm.id)}
            dsubmit={elm.deadLine}
            dOpen={elm.deadLineOpningOffer}
            description={elm.projectDiscription}
          />
        ))}
      </Grid>
    </VStack>
>>>>>>> master
  );
}

export default HomePage;