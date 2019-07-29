import React from 'react';
import Button from './Button.js'
// import { ReactComponent as Logo } from './images/itunes/itunes.svg';

class Card extends React.Component {
    render() {
        const active = this.props.active;
        const createClassName = `carousel__cell${active ? ' active' : ''}`
        const z_index = ((parseInt(this.props.z_index, 10) + parseInt(this.props.time, 10)) % 4)
        return (

                <div className={createClassName} style={{zIndex: `${z_index}`}}>
                    <Button />
                    <div className="container">
                        <img className="hard-img" src={this.props.asset.image} alt="Error"/>
                        <p>You earned {this.props.asset.money}<br /> from {this.props.asset.user}</p>
                        <img className="logo" src={this.props.asset.svg} alt="Error" width="100%"/>
                    </div>
                </div>

        )
    }
}

export default Card