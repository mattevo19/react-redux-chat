// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// function mapStateToProps(state) {
//   return {
//     channels: state.channels,
//     selectedChannel: state.selectedChannel
//   };
// }

// class ChannelList extends Component {

//   renderChannel = (channel) => {
//     return (
//       <li
//         key={channel}
//         className={channel === this.props.selectedChannel ? 'active' : null}
//         onClick={() => this.handleClick(channel)}
//         role="presentation"
//       >
//         #{channel}
//       </li>
//     );
//   }

//   render() {
//     return (
//       <div className="channels-container">
//         {/* <span>Redux Chat</span>
//         <ul>
//           {this.props.channels.map(this.renderChannel)}
//         </ul> */}
//       </div>
//     );
//   }
// }

// export default connect(mapStateToProps)(ChannelList);