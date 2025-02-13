import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "Tarun Singh",
    email: "ts@gmail.com",
  },
});

export default UserContext;
