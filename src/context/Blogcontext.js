import React, { useState, useEffect } from "react";

const Blogcontext = React.createContext();

export const Blogprovider = ({ children }) => {
  const [Blogpost, setBlogpost] = useState([]);

  //add new blog
  const AddBlog = ({ newtitle, newdesc }) => {
    setBlogpost([
      ...Blogpost,
      { title: newtitle, Description: newdesc, id: Blogpost.length },
    ]);
  };

  //edit existing blog
  const editblog = ({ newtitle, newDesc, id }) => {
    Blogpost.map((item) => {
      if (item.id != id) {
        return;
      } else {
        item.title = newtitle;
        item.Description = newDesc;
        const newdata = [...Blogpost];
        setBlogpost(newdata);
      }
    });
  };

  //delete blog

  const deleteblog = ({ item }) => {
    var removeIndex = Blogpost.map(function (iteam) {
      return iteam.id;
    }).indexOf(item.id);
    // remove object
    Blogpost.splice(removeIndex, 1);
    const newdata = [...Blogpost];
    setBlogpost(newdata);
  };

  return (
    <Blogcontext.Provider
      value={{
        data: Blogpost,
        addblog: AddBlog,
        editblog: editblog,
        deleteblog: deleteblog,
      }}
    >
      {children}
    </Blogcontext.Provider>
  );
};

export default Blogcontext;
