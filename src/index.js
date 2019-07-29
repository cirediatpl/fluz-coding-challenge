import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer.js'
import ColumnContainer from './ColumnContainer.js'
import './index_test.css';

import image1 from './images/itunes/itunes.jpg'
import image2 from './images/nike/nike.jpg'
import image3 from './images/panera/panera.jpg'
import image4 from './images/starbucks/starbucks.jpg'

import svg1 from './images/itunes/itunes.svg'
import svg2 from './images/nike/nike.svg'
import svg3 from './images/panera/panera.svg'
import svg4 from './images/starbucks/starbucks.svg'


const ASSETS = [
    {image: image1, svg: svg1, money: "$1.12", user: "fluzmaster12"},
    {image: image2, svg: svg2, money: "$0.91", user: "highlife18"},
    {image: image3, svg: svg3, money: "$0.82", user: "breezy36"},
    {image: image4, svg: svg4, money: "$0.79", user: "connected76"}
];

function App() {
    return(
        <div className="flexbox">
            <CardContainer assets={ASSETS}/>
            <ColumnContainer/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );  