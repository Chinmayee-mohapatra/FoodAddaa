import React from "react";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
// import { TypeAnimation } from "react-type-animation";
const TEXTS = [
  "Hungry?",
  "Unexpected Guests?",
  "Cooking Gone Wrong?",
  "Movie Marathon?",
  "Game Night?",
  "Late night at Office",
];

const Animmation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    // springConfig={presets.wobbly}
    <div>
      <TextTransition direction="up" translateValue="120%">
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </div>
  );
  /*
  return (
    <TypeAnimation
      sequence={[
        "Hungry?",
        2000,
        "Unexpected Guests?",
        2000,
        "Cooking Gone Wrong?",
        2000,
        "Movie Marathon?",
        2000,
        "Game Night?",
        2000,
        "Late night at Office",
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "48px", display: "inline-block" }}
    />
  );
  */
};

export default Animmation;
