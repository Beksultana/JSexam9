import React, {Component, Fragment} from 'react';
import './Contacts.css';
import {connect} from "react-redux";
import {deleteContacts, getContacts} from "../../store/actions/action-contacts";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class Contacts extends Component {
    state = {
        modal: false,
        contacts: {},
        ids: '',
        index: ''
    };

    componentDidMount(){
        this.props.getContacts()
    }

    openAddNewContacts = (event) => {
        event.preventDefault();
        this.props.history.push('/addNewContacts')
    };

    toggle = (index, contact, ids) => {
        this.setState({
            index: index,
            ids: ids,
            contacts: contact,
            modal: true,
        })
    };
    toggleFalse = () => {
        this.setState({
            modal: !this.state.modal,
        })
    };

    openEdit = (id, event) => {
        event.preventDefault();
        this.props.history.push(`/edit/:${id}`)
    };

    render() {
        console.log(this.state.ids);
        const CONTACTS = this.props.contacts;
        const contactsInfo = this.props.contacts ? Object.keys(CONTACTS).map((contactItem, index) => {
            return (
                <Fragment key={contactItem}>
                    <div onClick={() => this.toggle(CONTACTS[index], CONTACTS[contactItem], contactItem)} className="ContactsItemDiv">
                        <img style={{width: '150px', height: '150px',}} src={CONTACTS[contactItem].photo} alt=""/>
                        <h3>{CONTACTS[contactItem].name}</h3>
                    </div>
                </Fragment>
            )
        }) : null;

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

                <Modal isOpen={this.state.modal} toggle={this.toggleFalse} className={this.props.className}>
                    <ModalHeader toggle={this.toggleFalse}>Modal title</ModalHeader>
                    <ModalBody>
                        <img style={{width: '300px', height: '300px'}} src={this.state.contacts.photo} alt=""/>
                        <h3>{this.state.contacts.name}</h3>
                        <div>Phone:{this.state.contacts.phone}</div>
                        <div>Email:{this.state.contacts.email}></div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.openEdit.bind(this, this.state.ids)}>Edit</Button>
                        <Button color="secondary" onClick={this.props.deleteContacts.bind(this, this.state.ids)}>Delete</Button>
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
        getContacts: () => dispatch(getContacts()),
        deleteContacts: (id) => dispatch(deleteContacts(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);