import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

var store = [];

window.onbeforeunload = function () {
    sessionStorage.setItem("1", JSON.stringify(store));
    return undefined;
};
window.onload = function () {
    store = JSON.parse(sessionStorage["1"]);
    ReactDOM.render(<App />, document.getElementById('root'));
}

class Span extends React.Component {
    close(e) {
        e.stopPropagation();

        this.props.close(this.props.ind);
    }
    render() {
        return (
            <span onClick={this.close.bind(this)}>x</span>
        )
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.state = { stor: store.map((obj, i) => <li onClick={this.handleComplete.bind(this, i)} class={(obj.completed === 1) ? "completed" : ""} >{obj.tex}<Span ind={i} close={this.close.bind(this, i)} /></li>) };
    }
    handleComplete(i, e) {
        e.target.classList.toggle("completed");
        if (store[i].completed == 0) store[i].completed = 1;
        else store[i].completed = 0;
        this.setState({ stor: store.map((obj, t) => <li onClick={this.handleComplete.bind(this, t)} class={(obj.completed === 1) ? "completed" : ""} >{obj.tex}<Span ind={t} close={this.close.bind(this, t)} /></li>) });

    }
    handleClick() {
        store.push({ tex: this.text, completed: 0 });
        this.setState({ stor: store.map((obj, i) => <li onClick={this.handleComplete.bind(this, i)} class={(obj.completed === 1) ? "completed" : ""} >{obj.tex}<Span ind={i} close={this.close.bind(this, i)} /></li>) });

    }
    handleInput(e) {
        this.text = e.target.value;
    }
    close(i) {
        store.splice(i, 1);
      
        this.setState({ stor: store.map((obj, t) => <li onClick={this.handleComplete.bind(this, t)} class={(obj.completed === 1) ? "completed" : ""} >{obj.tex}<Span ind={t} close={this.close.bind(this, t)} /></li>) });
      
    }
    render() {
        return (
            <div id="main">
                <div id="note">
                    <header>
                        <h1>Note</h1>
                    </header>
                    <p>
                        - ReactJS: Done<br />
                        - Add and Remove: Done <br />
                        - Completed: Done<br />
                        - Save On Page Load: Done
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










