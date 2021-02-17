import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message'

export class MessageList extends Component {
  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>channel #{this.props.selectedChannel}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {
            this.props.messages.map((message) => {
              return <Message key={message.id} message={message} />;
            })
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}


export default connect(mapStateToProps)(MessageList)
