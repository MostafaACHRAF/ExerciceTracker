import React from 'react';
import axios from 'axios';

class CreateUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        };

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
             .then(res => console.log(res.data));

        this.setState({
            username: '',
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    render() {
        return(
            <div>
                <h3>Create new user</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text"
                           className="form-control"
                           required
                           value={this.state.username}
                           onChange={this.onChangeUsername}/>
                    
                </div>

                <div className="form-group">
                    <input type="submit" value="Create user" className="btn btn-primary" />
                </div>
            </form>
            </div>
            
        );
    }
}

export default CreateUser;