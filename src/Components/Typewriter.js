import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Electrical Engineering Student",
          "Research Assistant",
          "Amateur Photographer",
        ],
        autoStart: true,
        loop: true,
        delay: 40,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
