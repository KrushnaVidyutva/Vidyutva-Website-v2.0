import React from 'react'
import './card2.css'

const Card2 = () => {
    return (
        <div className="card">

            <div className="imgBox">
                <img src="/images/Evstand.png" alt="mouse corsair" className="mouse" />
            </div>

            <div className="contentBox">
                <h3>Vidyutva AC 3.3Kw</h3>
                <h2 className="price">61.<small>98</small>₹</h2>
                <a href="#" className="buy">Buy Now</a>
            </div>
        </div>
    )
}

export default Card2