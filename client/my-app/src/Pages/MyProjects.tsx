import { AddIcon } from "@chakra-ui/icons";
import { Button, Grid, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCards from "../components/ProjectCards";

function MyProjects() {
  const [projectData, setProjectData]: any = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const request = await fetch(`/api/v1/project/myproject`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await request.json();
    setProjectData(data[0].project);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const requests = (id: any) => {
    navigate(`/requestofproject/${id}`);
  };
  return (
    <VStack w={"100%"} bg="#e6e3e4">
      <Button
        leftIcon={<AddIcon />}
        bg={"#000"}
        color={"#fff"}
        borderRadius={"3xl"}
        onClick={() => navigate("/newproject")}
      >
        add Project
      </Button>
      <Grid
        p="0 0 20vh 0px"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        w={"100%"}
      >
        {projectData.map((elm: any) => (
          <VStack>
            <ProjectCards
              key={elm.id}
              id={elm.id}
              projectname={elm.projectName}
              projectNumber={elm.id}
              dsubmit={elm.deadLine}
              dOpen={elm.deadLineOpningOffer}
              description={elm.projectDiscription}
              butten={"show requests"}
              onClick={() => requests(elm.id)}
            />
          </VStack>
        ))}
      </Grid>
    </VStack>
  );
}

export default MyProjects;
