import React from 'react';
import Card from './Card.js'
// import image1 from './images/itunes/itunes.jpg'
// import image2 from './images/nike/nike.jpg'
// import image3 from './images/panera/panera.jpg'
// import image4 from './images/starbucks/starbucks.jpg'

// import svg1 from './images/itunes/itunes.svg'
// import svg2 from './images/nike/nike.svg'
// import svg3 from './images/panera/panera.svg'
// import svg4 from './images/starbucks/starbucks.svg'

// comment out the above

class CardContainer extends React.Component {
    state = {
        pointer: 0
    };

    incrementNumber() {
        this.setState(state => ({
            pointer: (state.pointer + 1) % 4
        }));
    }

    componentDidMount() {
        setInterval(() => this.incrementNumber(), 1000);
    }

    render() {
        const assets = this.props.assets;
        const cards = assets.map((asset, index) => {
            return <Card asset={asset} active={index === this.state.pointer} key={index}/>
        })

        return (
            <div className="s3-carousel">{cards}</div>
        )
    }
}

export default CardContainer