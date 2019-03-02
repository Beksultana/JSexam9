import React, {Component} from 'react';
import './Contacts.css';

class Contacts extends Component {
    render() {
        return (
            <div className="Contacts">
                <div className="headerInfo">
                    <h1>Contacts</h1>
                    <button className="btn btn-dark">Add new contacts</button>
                </div>
            </div>
        );
    }
}

export default Contacts;