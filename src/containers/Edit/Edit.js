import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {editContacts} from "../../store/actions/action-contacts";

class AddNewContacts extends Component {

    componentDidMount(){

    }

    render() {

        return (
            <Fragment>
                <div className="NewContactsFormBlock">
                    <h2>Add new Contacts</h2>

                    <form>
                        <div>
                            <label>Name</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label>Phone</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email"/>
                        </div>
                        <div>
                            <label>Photo</label>
                            <input type="text"/>
                        </div>
                    </form>
                    <div className="ImgShowBlock">

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
        contacts: state.contactsReducer.contacts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        editContacts: (id , contacts) => dispatch(editContacts(id ,contacts))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewContacts);