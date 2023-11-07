import React from "react";
import FOOD_INTRO from "../assests/foodIntro.png";
import FOOD_INTRO2 from "../assests/foodIntro2.png";

const About = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      {/* Quote */}
      <div className="flex flex-col items-center gap-6 bg-orange-400 px-4 py-8 text-white">
        <h1 className=" text-5xl font-bold">Greetings from FoodAddaa</h1>
        <p className="w-[70%] text-center text-2xl font-extralight">
          ❝ We aim to efficiently and quickly deliver restaurant meals to your
          door so you may be treated like a king or queen. Our adventure started
          with bridging the gap between patrons' favorite restaurants and hungry
          customers so they could fulfill their demands even at odd night hours.
          We go above and beyond to ensure your meal gets to you safely. ❞
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-3 p-8 bg-slate-900">
          <img
            src={FOOD_INTRO}
            alt="Food intro"
            className="w-1/2 h-[30rem] hover:scale-105 hover:border-slate-800 hover:border-2 duration-300"
          />
          <img
            src={FOOD_INTRO2}
            alt="Food intro"
            className="w-1/2 h-[30rem] hover:scale-105 hover:border-slate-800 hover:border-2 duration-300"
          />
        </div>
        <div className="absolute top-[40%] left-[35%] text-slate-900 text-4xl font-mono font-semibold p-6 bg-slate-200 shadow-slate-200 shadow-[0_20px_20px_-10px_rgba(0,0,0,0.6)] rounded-lg">
          Grab your favorite
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 bg-purple-700 px-4 py-8 text-white">
        <h2 className=" text-4xl font-bold">What's stored in the future?</h2>
        <p className="w-[70%] text-justify text-2xl font-extralight">
          FoodAddaa aspires to become the most adored regional player in India.
          With a range of service offerings, it seeks to redefine convenience in
          the nation and be the most approachable platform on the network.
        </p>
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import UserClass from "./UserClass";
// import UserContext from "../utils/UserContext";

// class About extends React.Component {
//   constructor(props) {
//     super(props);

//     // console.log("Parent Constructor");
//   }

//   componentDidMount() {
//     // console.log("Parent Component Did Mount");
//   }

//   render() {
//     // console.log("Parent Render");

//     return (
//       <div>
//         <h1> About </h1>
//         <div>
//           Logged In User
//           <UserContext.Consumer>
//             {({ loggedInUser }) => (
//               <h1 className="text-bold">{loggedInUser}</h1>
//             )}
//           </UserContext.Consumer>
//         </div>
//         <h2> This is Namaste React Web Series.</h2>
//         <UserClass name={"First "} location={"Hyderabad"} />
//         {/* <UserClass name={"Second "} location={"Hyderabad"} /> */}
//       </div>
//     );
//   }
// }

// export default About;
