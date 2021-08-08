import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/landing.css'

export class Landing extends Component {
    constructor(){
        super()
        this.state = {
            users: [
                {id: 0, name: "Mona" , backgroundColor: "blue"},
                {id: 1, name: "Jasmyne" , backgroundColor: "red"},
                {id: 2, name: "Aura" , backgroundColor: "green"},
                {id: 3, name: "Tina" , backgroundColor: "yellow"}
            ]
        }
    }
    render() {
        let users = this.state.users
        return (
                <div>
                    <h3>WHO'S WATCHING?</h3>
                    <div id="landing-container">
                        {users.map(user => <Link to={`/catalog`} ><div key={user.id} className={`users user-style-${user.id} ${user.backgroundColor}`}><div className="user-name">{user.name}</div></div></Link>)}
                    </div>
                </div>
        );
    }
}