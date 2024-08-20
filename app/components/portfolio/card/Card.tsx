import React from 'react'
import './card.css'
import { LuInfo } from 'react-icons/lu'

const Card = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="top py-4 flex justify-center items-center">
                    <img src="/images/Evstand.png" alt="Loading.." className='h-[100%]' />
                </div>
                <div className="bottom">
                    <div className="left">
                        <div className="details ">
                            <h1 className='font-semibold text-lg'>Vidyutva AC 3.3Kw</h1>
                            <p className='font-normal text-base'>₹250</p>
                        </div>
                        {/* <div className="buy"><i className="material-icons">add_shopping_cart</i></div> */}
                    </div>
                    {/* <div className="right">
                        <div className="done"><i className="material-icons">done</i></div>
                        <div className="details">
                            <h1>Chair</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div className="remove"><i className="material-icons">clear</i></div>
                    </div> */}
                </div>
            </div>
            <div className="inside">
                <div className="icon"><LuInfo /></div>
                <div className="contents">
                    <table>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                        <tr>
                            <th>Width</th>
                            <th>Height</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Card