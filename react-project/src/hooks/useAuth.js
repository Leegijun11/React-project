import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const useAuth = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("error");
  }

  return context;
};

export default useAuth;