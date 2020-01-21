import React, { Component } from 'react';
import { Spinner } from '../Spinner';
import { SwapiService } from '../../services/swapi-servisec';
import './style.css';

export class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: []
    };

    componentDidMount() {
        this.swapiService.getAllPeople().then(peopleList => {
            this.setState({
                peopleList
            });
        });
    }

    renderItem(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                    className="list-group-item"
                >
                    {name}
                </li>
            );
        });
    }

    render() {
        const { peopleList } = this.state;
        const items = this.renderItem(peopleList);

        if (!peopleList) {
            return <Spinner />;
        }

        return <ul className="item-list list-group">{items}</ul>;
    }
}
