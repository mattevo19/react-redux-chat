import React from 'react';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container" />
      <MessageList />
    </div>
  );
};

export default App;
