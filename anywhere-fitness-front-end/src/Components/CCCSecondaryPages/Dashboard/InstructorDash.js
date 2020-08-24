import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";


function InstructorDash (props) {
  return (
    <div>
      <h1>InstructorDash</h1>
      <Link to="/instructor-dash">
        <Button color="danger" size="lg" type="submit">
          InstructorDash
        </Button>
      </Link>
    </div>
  );
};

export default InstructorDash;