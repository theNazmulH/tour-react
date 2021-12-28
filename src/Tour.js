import React from 'react'

export default function Tour({image, name, price, address, description}) {
    return (
        <div className='singleTour'>
            <img src={image} />
            <div className="contnet">
                <h3>Event manager: {name}</h3>
                <h4>Cost: ${price}</h4>
                <span>Location: {address}</span>
                <p>Description: {description}</p>
            </div>
        </div>
    )
}
