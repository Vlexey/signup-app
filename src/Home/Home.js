import React from "react";
import "./home.css";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";

const Home = ({ isLogin, onLogout }) => {

  if(isLogin) {
      return (
         <div className="homePage">
         <h2>Wellcome to Home Page</h2>
         <p>Thank you for loggin</p>
         <div className="btnWrapper">
            <Button onClick={onLogout} color="primary"
                        variant="contained">Logout</Button>
         </div>
         </div>
      );
   }
   return <Redirect to="/auth" />
 
};

export default Home;
