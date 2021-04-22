import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const myelement = (
//   <App mood="happy" />
// );
// ReactDOM.render(myelement, document.getElementById('root'));

// class Container extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { show: true };
//     }
//     delHeader = () => {
//         this.setState({ show: false });
//     }
//     render() {
//         let myheader;
//         if (this.state.show) {
//             myheader = <Child />;
//         };
//         return (
//             <div>
//                 {myheader}
//                 <button type="button" onClick={this.delHeader}>Delete Header</button>
//             </div>
//         );
//     }
// }

// class Child extends React.Component {
//     componentWillUnmount() {
//         alert("The component named Header is about to be unmounted.");
//     }
//     render() {
//         return (
//             <h1>Hello World!</h1>
//         );
//     }
// }

ReactDOM.render(
    <React.StrictMode>
        {/* <Container /> */}
        <App />
        {/* <App favcol="yellow" /> */}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
