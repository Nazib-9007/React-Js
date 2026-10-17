import { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handelCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    handelDec = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    resetCount = () => {
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.handelCount}>Increment (+)</button>
                <button onClick={this.handelDec}>Decrement (-)</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        )
    }
}
