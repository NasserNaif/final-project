import { Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProjectCards from "../components/ProjectCards";

function HomePage() {
  const [projectData, setProjectData]: any = useState([]);
  // const [users, setusers] = useState([]);

  const fetchData = async () => {
    const request = await fetch(`/api/v1/project`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await request.json();
    setProjectData(data);
  };

  // const fetchUser = async () => {
  //   const request = await fetch(`/api/v1/project/user`, {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("token"),
  //     },
  //   });
  //   const data = await request.json();
  //   setusers(data);
  // };

  useEffect(() => {
    fetchData();
  }, []);


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
  );
}

export default HomePage;