import { Grid, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectCards from "../components/ProjectCards";
import RequstCard from "../components/RequstCard";

function RequestsOfProject() {
  const [daata, setDaata]: any = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const fetchData = async () => {
    const request = await fetch(`/api/v1/project/request/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await request.json();
    setDaata(data[0].request);
    console.log(data[0].request);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <VStack w={"100%"}>
      {daata.map((elm: any) => (
        <RequstCard
          requestName={elm.requestName}
          requestBudget={elm.requestBudget}
          requestDiscription={elm.requestDiscription}
        />
      ))}
    </VStack>
  );
}

export default RequestsOfProject;
