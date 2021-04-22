import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errorMessage: '',
            description: 'The content of a textarea goes in the value attribute',
            mycar: 'Volvo'
        };
    }
    // mySubmitHandler = (event) => {
    //     event.preventDefault();
    //     if (!Number(this.state.age)) {
        //         alert("Your age must be a number");
    //     }
    //     alert("You are submitting " + this.state.username + ' ' + this.state.age);
    // }
    myChangeHandler = (event) => {
        // let name = event.target.name;
    //     let val = event.target.value;
    //     let err = '';
    //     if (name === 'age' && !Number(val)) {
    //         err = <strong>Your age must be a number</strong>;
    //     }
    //     this.setState({ errorMessage: err });
    //     this.setState({ [name]: val });
    }
    render() {
        // let header = '';
        // if (this.state.username) {
        //     header = <h1>Hello {this.state.username} {this.state.age}</h1>;
        // }
        return (
            <div>
                {/* <form onSubmit={this.mySubmitHandler}> */}
                <form>
                    {/* {header}
                    <p>Enter your name:</p>
                    <input type='text' name='username' onChange={this.myChangeHandler} />
                    <p>Enter your age:</p>
                    <input type='text' name='age' onChange={this.myChangeHandler} />
                    <textarea value={this.state.description} /> */}
                    <select value={this.state.mycar} onChange={this.myChangeHandler}>
                        <option value="Ford">Ford</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Fiat">Fiat</option>
                    </select>
                    <input type='submit' />
                </form>
                {this.state.mycar}
                {this.state.errorMessage}
            </div>
        );
    }
}

export default Form;