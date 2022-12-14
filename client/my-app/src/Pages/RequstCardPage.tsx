import React, { useEffect, useState } from "react";
import RequstCard from "./RequstCard";

function RequstCardPage() {
    const [regustData, setRegustData]: any = useState([]);

    const fetchData = async () => {
      const request = await fetch(`/api/v1/`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await request.json();
      setRegustData(data);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
        < >
          {regustData.map((elm: any) => (
            <RequstCard
              key={elm.id}
              requestName={elm.requestName}
              requestBudget={elm.requestBudget}
              requestDiscription={elm.requestDiscription}
           
            />
          ))}
        </>
      );
}