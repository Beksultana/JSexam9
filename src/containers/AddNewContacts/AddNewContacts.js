import React, {Component, Fragment} from 'react';
import './AddNewContacts.css';

class AddNewContacts extends Component {

    backToContacts = (event) => {
        event.preventDefault();
        this.props.history.push('/contacts')
    };

    render() {
        return (
            <Fragment>
                <div className="NewContactsFormBlock">
                    <h2>Add new Contacts</h2>
                    <form className="Form">
                        <div className="form-group infoForm">
                            <label htmlFor="name"><strong>Name</strong></label>
                            <input type="name" className="form-control" id="name" name="name"/>
                        </div>
                        <div className="form-group infoForm">
                            <label htmlFor="phone"><strong>Phone</strong></label>
                            <input type="number" name="phone" className="form-control" id="phone"/>
                        </div>
                        <div className="form-group infoForm">
                            <label htmlFor="Email1"><strong>Email</strong></label>
                            <input  name="email" type="email" className="form-control" id="Email1"/>
                        </div>
                        <div className="form-group infoForm">
                            <label htmlFor="photoLink"><strong>Photo</strong></label>
                            <input type="email" className="form-control" id="photoLink"/>
                        </div>
                    </form>
                    <div className="buttonBlock">
                        <button style={{margin: '0 10px 0 0'}} className="btn">Add</button>
                        <button
                            onClick={this.backToContacts}
                            style={{margin: '0 10px'}} className="btn">Back to contacts</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AddNewContacts;