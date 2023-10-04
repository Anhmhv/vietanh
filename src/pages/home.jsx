import React, { useState, useEffect } from "react";
import { auth } from "../server/firebase";
import HomeUI from "./layout/homeUI";
import VistlocationUI from "./layout/vistlocationUI";
const Home = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <HomeUI user={user} />
      <VistlocationUI />
    </>
  );
};

export default Home;
