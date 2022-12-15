import { Button, Grid, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProjectCards from "../components/ProjectCards";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [projectData, setProjectData]: any = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const request = await fetch(`/api/v1/project`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await request.json();
    console.log(data);
    
    // setProjectData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
  );
}

export default HomePage;