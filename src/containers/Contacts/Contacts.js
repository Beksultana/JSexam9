import React, {Component, Fragment} from 'react';
import './Contacts.css';
import {connect} from "react-redux";
import {getContacts} from "../../store/actions/action-contacts";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class Contacts extends Component {
    state = {
        modal: false,
        contacts: {},
        id: ''
    };

    componentDidMount(){
        this.props.getContacts()
    }

    openAddNewContacts = (event) => {
        event.preventDefault();
        this.props.history.push('/addNewContacts')
    };

    toggle = (id, contact) => {
        this.setState({
            id: id,
            contacts: contact,
            modal: true,
        })
    };
    toggleFalse = () => {
        this.setState({
            modal: false,
        })
    };

    render() {
        console.log(this.props.contacts);
        const CONTACTS = this.props.contacts;
        const contactsInfo = Object.keys(CONTACTS).map((contactItem, index) => {
            return (
                <Fragment key={contactItem}>
                    <div onClick={() => this.toggle(CONTACTS[index], CONTACTS[contactItem])} className="ContactsItemDiv">
                        <img style={{width: '150px', height: '150px', borderRadius: '10px'}} src={CONTACTS[contactItem].photo} alt=""/>
                        <h3>{CONTACTS[contactItem].name}</h3>
                    </div>
                </Fragment>
            )
        });

        return (
            <div className="Contacts">
                <div className="headerInfo">
                    <h1>Contacts</h1>
                    <button onClick={this.openAddNewContacts} className="btn btn-info">Add new contacts</button>
                </div>
                <hr/>
                <div className="showContacts">
                    {contactsInfo}
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggleFalse}>Modal title</ModalHeader>
                    <ModalBody>
                        <img style={{width: '300px', height: '300px'}} src={this.state.contacts.photo} alt=""/>
                        <h3>{this.state.contacts.name}</h3>
                        <div>Phone: <a href="#">{this.state.contacts.phone}</a></div>
                        <div>Email: <a href="#">{this.state.contacts.email}</a></div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleFalse}>Edit</Button>{' '}
                        <Button color="secondary" onClick={this.toggleFalse}>Delete</Button>
                    </ModalFooter>
                </Modal>
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
        getContacts: () => dispatch(getContacts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);