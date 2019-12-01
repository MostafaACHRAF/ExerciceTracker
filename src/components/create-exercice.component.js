import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

class CreateExercice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onDurationChange = this.onDurationChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            users: ['sasa'],
            username: 'sasa'
        });
    }

    onUsernameChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    onDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    onDurationChange(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onDateChange(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const exercice = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercice);

        axios.post('http://localhost:5000/exercices/add', exercice)
             .then(res => console.log(res.data));

        window.location = "/";
    }

    render() {
        return(
            <div>
                <h3>Create new exercice</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <select className="form-control"
                                required
                                value={this.state.username}
                                onChange={this.onUsernameChange}>
                            {
                                this.state.users.map(user => {
                                    return (
                                        <option key={user} value={user}>
                                            {user}
                                        </option>
                                    );
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"
                               required
                               className="form-control"
                               onChange={this.onDescriptionChange}
                               value={this.state.description} />
                    </div>
                    <div className="form-group">
                        <label>Duration:</label>
                        <input className="form-control"
                               type="text"
                               value={this.state.duration}
                               required
                               onChange={this.onDurationChange} />
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <DatePicker selected={this.state.date}
                                    onChange={this.onDateChange} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create exercice" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateExercice;