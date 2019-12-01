import React from 'react';
import axios from 'axios';

class ExercicesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exercices:[],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercices')
             .then(res => {
                this.setState({
                    exercices: res.data,
                });
                console.log(res.data);
             });
    }



    render() {
        return(
            <div>
                <h3>Exercices list</h3>
                <table>
                    <tr>
                        <td>Username</td>
                        <td>Description</td>
                        <td>Duration</td>
                        <td>Date</td>
                    </tr>
                    {
                        this.state.exercices.map(exercice => {
                            return (
                                <tr>
                                    <td>{exercice.username}</td>
                                    <td>{exercice.description}</td>
                                    <td>{exercice.duration}</td>
                                    <td>{exercice.date}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        );
    }
}

export default ExercicesList;