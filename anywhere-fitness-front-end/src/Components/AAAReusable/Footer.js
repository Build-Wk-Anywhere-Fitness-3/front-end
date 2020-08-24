import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";


function Footer (props) {
  return (
    <div>
      <h1>Welcome</h1>
        <Button color="danger" size="lg" type="submit">
          Sign-In
        </Button>
    </div>
  );
};

export default Footer;