import React, { Fragment, useContext } from "react";
import Create from "../Components/Create/Create";
import { useAuth } from "../contextStore/AuthContext";
import Login from "../Components/Login/Login";

const CreatePage = () => {
  const { user } = useAuth();

  return (
    <Fragment>
      {user ? (
        <Create />
      ) : (
        <>          
          {alert("You must login first")} <Login />
        </>
      )}
    </Fragment>
  );
};

export default CreatePage;
