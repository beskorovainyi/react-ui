import React from "react";
import {useState} from "react";

const Comment = () => {

  const [messages, setMessages] = useState({
    title: "",
    text: ""
  });


  const [comment, setComment] = useState({
    title: "",
    text: "",
    messages: [
      {
        title: "",
        text: "",
        id: new Date().getTime()
      }
    ]
  });
  
  const addComment = () => {
    // setMessages()
  }

  return (
      <>
        <div style={{textAlign: "center"}}>
          <h2>Comment</h2>
          <textarea
              value={comment.text}
              onChange={event => {

              }}
          />
        </div>
        <button onClick={addComment}>add comment</button>
      </>
  )
}

export default Comment