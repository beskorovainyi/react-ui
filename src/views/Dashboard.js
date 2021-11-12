import React from "react";
import Comment from "../components/Comment/Comment";
import Message from "../components/Message/Message";

const Dashboard = () => {

  return(
      <>
        <div style={{textAlign: "center"}}>
          <h1>dashboard</h1>
          <div>
            <Comment />
            <Message />
          </div>
        </div>
      </>
  )
}

export default Dashboard