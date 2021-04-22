import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {
    constructor(props) {
       console.log('constructor');
       super(props);
       //this.state = { favoritecolor: "red" };
    }

    // static getDerivedStateFromProps(props, state) {
    //  console.log('getDerivedStateFromProps');
    //  return {favoritecolor: props.favcol };
    // }

    // componentDidMount() {
    //    console.log('componentDidMount');
    //    setTimeout(() => {
    //        this.setState({ favoritecolor: "yellow" })
    //    }, 1000)
    // }

    // shouldComponentUpdate() {
    //  return false;
    // }

    // changeColor = () => {
    //  this.setState({favoritecolor: "blue"});
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //  document.getElementById("div1").innerHTML =
    //    "Before the update, the favorite was " + prevState.favoritecolor;
    // }

    // componentDidUpdate() {
    //    document.getElementById("div2").innerHTML =
    //        "The updated favorite is " + this.state.favoritecolor;
    // }

    // componentWillUnmount() {        
    // }

    // shoot = (event, msg) => {
    //     alert(event.type);
    //     // alert(msg + ' Shot!');
    //     console.log(this);
    // }

    render() {
       console.log('render')
       return (
           <div className="App">
               <Form />
               {/* <button onClick={(ev) => this.shoot(ev ,"Nice")}>Take the shot!</button> */}
               {/* <h1>My favorite color is {this.state.favoritecolor}</h1> */}
               {/* <div id="div1"></div> */}
               {/* <div id="div2"></div> */}
               {/* <button onClick={this.changeColor}>Change color</button> */}
           </div>
       );
    }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
