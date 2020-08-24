import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";


function ClientDash (props) {
  return (
    <div>
      <h1>ClientDash</h1>
      <Link to="/client-dash">
        <Button color="danger" size="lg" type="submit">
          ClientDash
        </Button>
      </Link>
    </div>
  );
};

export default ClientDash;