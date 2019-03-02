import React, {Component, Fragment} from 'react';
import './AddNewContacts.css';
import {connect} from "react-redux";
import {addContacts} from "../../store/actions/action-new-contacts";

class AddNewContacts extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        photo: '',
    };

    backToContacts = (event) => {
        event.preventDefault();
        this.props.history.push('/contacts')
    };

    onChangeHandler = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value})
    };

    render() {

        const form = <form className="Form">
            <div className="form-group infoForm">
                <label htmlFor="name"><strong>Name</strong></label>
                <input value={this.state.name} onChange={(event) => this.onChangeHandler(event)}
                       type="text" className="form-control" id="name" name="name"/>
            </div>
            <div className="form-group infoForm">
                <label htmlFor="phone"><strong>Phone</strong></label>
                <input value={this.state.phone} onChange={(event) => this.onChangeHandler(event)}
                       type="number" name="phone" className="form-control" id="phone"/>
            </div>
            <div className="form-group infoForm">
                <label htmlFor="Email1"><strong>Email</strong></label>
                <input value={this.state.email}  onChange={(event) => this.onChangeHandler(event)}
                       name="email" type="email" className="form-control" id="Email1"/>
            </div>
            <div className="form-group infoForm">
                <label htmlFor="photoLink"><strong>Photo</strong></label>
                <input value={this.state.photo} onChange={(event) => this.onChangeHandler(event)}
                       type="email" className="form-control" id="photoLink" name="photo"/>
            </div>
        </form>;

        return (
            <Fragment>
                <div className="NewContactsFormBlock">
                    <h2>Add new Contacts</h2>
                    {form}

                    <div className="ImgShowBlock">
                        <img style={{width: '150px', height: '150px',}} src={this.state.photo} alt=""/>
                    </div>
                    <div className="buttonBlock">
                        <button onClick={() => this.props.addContacts(this.state)}
                            style={{margin: '0 10px 0 0'}} className="btn btn-info">Add</button>
                        <button onClick={this.backToContacts}
                            style={{margin: '0 10px'}} className="btn btn-dark">Back to contacts</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        newContacts: state.newContReducer.newContacts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addContacts: (contacts) => dispatch(addContacts(contacts))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewContacts);