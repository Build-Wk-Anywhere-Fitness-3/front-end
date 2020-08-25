import React from "react";
import { Button } from "reactstrap";
import { Route, NavLink } from "react-router-dom";

export default props => {
  return (
    <div>
      <div className="overviewContainer">
        <p className="overview">
          Welcome to ANYWHERE FITNESS. We hope that you enjoy our app and find
          yourself surrounded by fitness! Joe Anywhere opened the first Gold's
          Gym in August 1965, in Venice Beach, California, long before the
          modern day health club existed. Featuring homemade equipment and
          dubbed "the Mecca of bodybuilding", it was frequented by Arnold
          Schwarzenegger and Dave Draper and featured in the docudrama Pumping
          Iron (1977), which brought attention not only to the gym itself but
          also to bodybuilding and physique in general. To this day, Gold's Gym
          is considered a landmark in bodybuilding culture and has achieved cult
          status. In 1970, Gold sold the at-the-time failing gym to Bud Danits,
          an antique dealer, and Dave Saxe, a jeweler. They ran the gym for
          almost two years, and when they realized it was not feasible for them,
          they were going to close it and reopen the premises as an antiques
          shop. They offered it to a gym member, Ken Sprague, who purchased it
          in late 1971, and Gold's was saved as a gym. Sprague was the first
          owner of Gold's to actually sponsor and hold bodybuilding
          competitions, and his promotional skills and film industry contacts
          helped build the establishment's profile.
        </p>
      <Button>
        Confirm
      </Button>
      </div>
    </div>
  );
};
