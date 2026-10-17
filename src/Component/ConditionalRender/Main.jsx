import { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogedin: false
        }
    }
    render() {
        const { isLogedin } = this.state;
        let element;
        if (isLogedin) {
            element = <HomePage />
        }
        else {
            element = <LoginPage />
        }
        return (
            <div>
                {element}
            </div>
        )
    }
}
