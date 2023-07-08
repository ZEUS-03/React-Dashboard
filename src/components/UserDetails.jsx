import React from "react";
import { data } from "../helper";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const UserDetails = () => {
  const { userId } = useParams();

  // Find the user data based on the ID
  const user = data.find((user) => user.id === userId);
  console.log(userId);
  // Render the user details
  return (
    <>
      <Sidebar {...user} />
    </>
  );
};

export default UserDetails;
