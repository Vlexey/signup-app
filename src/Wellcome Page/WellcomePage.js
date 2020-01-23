import React from "react";
import "./WellcomePage.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const WellcomePage = () => {
  
    return (
      <div className="WellcomePage">
        <h2>Login or SignUp</h2>
        <p>For continue you should login</p>
        <Link to="/login">
          <Button color="primary" variant="contained">
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button color="primary" variant="contained">
            SignUp
          </Button>
        </Link>
      </div>
      
    );
 
};

export default WellcomePage;
