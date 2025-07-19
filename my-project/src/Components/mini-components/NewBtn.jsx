import React from "react";

const NewBtn = ({ btnText, className }) => {
  return (
    <button className={`${className} rounded-md bg-babyBlue text-white`}>
      {btnText}
    </button>
  );
};

export default NewBtn;
