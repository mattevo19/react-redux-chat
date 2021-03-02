import React from 'react';
import ChannelList from '../containers/ChannelList';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container" />
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
