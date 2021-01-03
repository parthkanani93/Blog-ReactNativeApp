import React, { useState, useEffect } from "react";

const Blogcontext = React.createContext();

export const Blogprovider = ({ children }) => {
  const [Blogpost, setBlogpost] = useState([]);

  const AddBlog = ({ title, desc }) => {
    setBlogpost([
      ...Blogpost,
      { title: title, Description: desc, id: Blogpost.length },
    ]);
  };

  return (
    <Blogcontext.Provider value={{ data: Blogpost, addblog: AddBlog }}>
      {children}
    </Blogcontext.Provider>
  );
};

export default Blogcontext;
