import React from "react";

class Countdown extends React.Component {
  state = {
    count: 10,
  };
  componentDidMount() {
    // setTimeout(() => {
    //   console.log("mes");
    // }, 2000);
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        this.props.onTimesup();
      }
    }
  }
  render() {
    return (
      <>
        <div>{this.state.count}</div>
      </>
    );
  }
}
export default Countdown;
// const NewCountDow = () => {
//   const [count, setCount] = useState(30);
//   useEffect = (props) => {
//     setInterval(() => {
//       console.log("run");
//       setCount(count - 1);
//     }, 1000);
//   };
//   return (
//     <>
//       <div>{count} S</div>
//     </>
//   );
// };

// export { Countdown, NewCountDow };
