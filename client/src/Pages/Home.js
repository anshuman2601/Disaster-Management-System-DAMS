import React, { useState, useEffect } from "react";
import Disaster from "./Disaster";
import CreatePost from "./CreatePost";

function Home() {

  return (
    <div className="home-page">
      
      <CreatePost />
    </div>
  );
}

export default Home;

// https://www.bezkoder.com/react-material-ui-examples-crud/