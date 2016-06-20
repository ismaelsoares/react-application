import React from 'react';

let Timer = React.createClass({
  getInitialState(){
    return{
      secondsElapsed: 0
    };
  },
  tick(){
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1
    });
  },
  componentDidMount(){
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnMount(){
    clearInterval(this.interval);
  },
  render(){
    return(
        <div>{this.state.secondsElapsed}</div>
    );
  }
});
export default Timer;
