import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

var store = ["1","2","4","5","6"];

class App extends React.Component {
    constructor() {
        super();
        this.state = { stor: store.map((tex,i) => <li>{tex}<span onClick={this.close.bind(this,i)}>x</span></li>) };
    }
    handleClick() {
        store.push(this.text);
        this.setState ({ stor: store.map((tex,i) => <li>{tex}<span onClick={this.close.bind(this,i)}>x</span></li>)}) ;
    }
    handleInput(e) {
        this.text = e.target.value;
    }
    close(i){
        store.splice(i,1);
        console.log(i);
        this.setState ({ stor: store.map((tex,i) => <li>{tex}<span onClick={this.close.bind(this,i)}>x</span></li>)}) ;
    }
    render() {
        return (
            <div id="main">
                <div id="note">
                    <header>
                      <h1>Note</h1>
                    </header>
                    <p>
                        - Add and Remove: Done <br/>
                        - Completed: Coming soon...<br/>
                        - Save On Page Load: Coming soon...<br/>
                    </p>
                </div>
                <div id="head">
                    <h1>My Todo List</h1>
                    <form>
                        <input type="text" placeholder="Title..." onChange={this.handleInput.bind(this)} />
                        <button type="button" onClick={this.handleClick.bind(this)}>Add</button>
                    </form>
                </div>
                <ul>
                    {this.state.stor}
                </ul>
            </div>
        )
    }


}

ReactDOM.render(<App/>,document.getElementById('root'));








