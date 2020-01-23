import React, { Component } from 'react';
import { SwapiService } from '../../services/swapi-servisec';
import './style.css';
import { Spinner } from '../Spinner';
import { ErrorIncator } from '../ErrorIncator';

export class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        person: null,
        hesError: false
    };

    componentDidMount() {
        this.updatePersen();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePersen();
        }
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    updatePersen() {
        const { personId } = this.props;

        if (!personId) {
            return;
        }

        this.swapiService.getPerson(personId).then(person => {
            this.setState({
                person
            });
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIncator />;
        }

        if (!this.state.person) {
            return (
                <div className="d-flex flex-column justify-content-center text-center">
                    <h2>Select a person from a list</h2>
                    <Spinner />
                </div>
            );
        }

        const { id, name, gender, birthYear, eyeColor } = this.state.person;

        return (
            <div className="person-details card">
                <img
                    className="person-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt="character"
                />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
