import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1> About </h1>
        <div>
          Logged In User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2> This is Namaste React Web Series.</h2>
        <UserClass name={"First "} location={"Hyderabad"} />
        {/* <UserClass name={"Second "} location={"Hyderabad"} /> */}
      </div>
    );
  }
}

export default About;
