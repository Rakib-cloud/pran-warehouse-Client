import React from "react";
import { IconContext } from "react-icons";
import { FcGoogle } from "react-icons/fc";
import "./Social.css";

const Social = ({ handleGoogleSignIn }) => {

  return (
    <IconContext.Provider value={{ size: "28px" }}>
      <div>
        <button
          onClick={()=> handleGoogleSignIn()}
          className="d-block mx-auto border rounded px-5 py-2"
        >
          <FcGoogle className=" mx-1" /> Continue with Google
        </button>
      </div>
    </IconContext.Provider>
  );
};

export default Social;
