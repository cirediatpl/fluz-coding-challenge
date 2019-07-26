import React from 'react';
import Button from './Button.js'
// import { ReactComponent as Logo } from './images/itunes/itunes.svg';

class Card extends React.Component {
    render() {
        const active = this.props.active;
        const createClassName = `carousel__cell${active ? ' active' : ''}`
        return (
            <div className="car-wrap">
                <div className={createClassName}>
                    <Button />
                    <div className="container">
                        <img className="hard-img" src={this.props.asset.image} alt="Error" width="100%"/>
                        <p>You earned {this.props.asset.money}<br /> from {this.props.asset.user}</p>
                        <img className="logo" src={this.props.asset.svg} alt="Error" width="100%"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card