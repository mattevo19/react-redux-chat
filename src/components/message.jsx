import React from 'react';

const Message = (props) => {
  const { author, content , created_at } = props.message;
  // const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <i className="author">
        <span>{author}</span>
        {/* <small>{time}</small> */}
      </i>
      <p>{content}</p>
    </div>
  );
}

export default Message;
