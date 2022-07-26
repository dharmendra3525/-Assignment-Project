import React from 'react'
import './Card.css';
import backIMG from '../../images/Background.jpg';

function Card({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        //console.log('d')
        if (!disabled) {
            //console.log('e')
            handleChoice(card)
        };
    };

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card front" />
                <img className="back" src={backIMG} onClick={handleClick} alt="cover" />
            </div>
        </div>
    )
};

export default Card;