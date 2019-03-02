import React, {Component} from 'react';
import './Contacts.css';
import {connect} from "react-redux";
import {addNewContacts} from "../../store/actions/action-contacts";

class Contacts extends Component {

    openAddNewContacts = (event) => {
        event.preventDefault();
        this.props.history.push('/addNewContacts')
    };

    render() {
        return (
            <div className="Contacts">
                <div className="headerInfo">
                    <h1>Contacts</h1>
                    <button
                        onClick={this.openAddNewContacts}
                        className="btn btn-dark">Add new contacts</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contactsReducer.contacts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addNewContacts: () => dispatch(addNewContacts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);