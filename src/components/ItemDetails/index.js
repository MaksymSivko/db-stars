import React, { Component } from 'react';
import { SwapiService } from '../../services/swapi-servisec';
import { ErrorButton } from '../ErrorButton';
// import { Spinner } from '../Spinner';

import './style.css';

export const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId).then(item => {
            this.setState({
                item,
                image: getImageUrl(item)
            });
        });
    }

    render() {
        const { item, image } = this.state;

        if (!item) {
            return <span>Select a item from a list</span>;
        }

        const { name, gender, birthYear, eyeColor } = item;

        return (
            <div className="item-details card">
                <img className="item-image" src={image} alt="character" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {/* <li className="list-group-item">
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
                        </li> */}

                        {/* {this.props.children} */}
                        {React.Children.map(
                            this.props.children,
                            (child, indx) => {
                                return React.cloneElement(child, { item });
                            }
                        )}
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        );
    }
}
