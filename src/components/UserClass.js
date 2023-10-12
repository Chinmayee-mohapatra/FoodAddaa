import React from "react";
import ChildUserClass from "./ChildUserClass";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };

    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");

    // API CALL

    const data = await fetch("https://api.github.com/users/hiteshchoudhary");
    const json = await data.json();
    console.log(json);
    // Now we want to update the json data onto the webpage.
    // We will create a state variable and it will update depending on the data from api.

    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("Component Did Update.");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;

    console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Age: 25</h4>
        {/* <ChildUserClass name={"3 Child "} /> */}
      </div>
    );
  }
}

export default UserClass;
