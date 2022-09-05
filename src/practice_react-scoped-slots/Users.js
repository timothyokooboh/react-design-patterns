import { cloneElement } from "react";
const users = [
  {
    name: "tosin martins",
    location: "accra"
  },
  {
    name: "broda ume",
    location: "paris"
  },
  {
    name: "princess",
    location: "prague"
  }
];


const Users = ({ children }) => {
  return children.map((child) => {
     
    // check if child is a component
    if (typeof child.type === "function") {
      return users.map((user, index) => {
        return cloneElement(child, { user, key: index });
      });
    } else {
      return child;
    }
  });
};

export default Users;
