import React from 'react'
import './card.css'
import { LuInfo } from 'react-icons/lu'
import { FaArrowRightLong } from 'react-icons/fa6'

interface CardProps {
    img: string,
    name: string,
    capacity: string
    design1: string
    design2: string
    design3: string
    connectivity1: string
    connectivity2: string
    connectivity3: string
    connectivity4: string
}

const Card = ({ img, name, capacity, design1, design2, design3, connectivity1, connectivity2, connectivity3, connectivity4 }: CardProps) => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="top py-4 flex justify-center items-center">
                    <img src={img} alt="Loading.." className='h-[100%]' />
                </div>
                <div className="bottom">
                    <div className="left">
                        <div className="details ">
                            <h1 className='font-semibold text-lg'>{name}</h1>
                            <p className='font-normal text-base'>{capacity}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inside">
                <div className="icon"><LuInfo /></div>
                <div className="contents">
                    {/* <div>
                        <p><span></span></p>
                    </div> */}
                    <table>
                        <div>
                            <tr>
                                <th className='font-semibold text-xl'>Design</th>
                            </tr>
                            <tr>
                                <td className='font-normal text-base'>
                                    <ul className='list-disc'>
                                        <li>{design1}</li>
                                        <li>{design2}</li>
                                        <li>{design3}</li>
                                    </ul>
                                </td>
                            </tr>
                        </div>
                        <div className='mt-4'>
                            <tr>
                                <th className='font-semibold text-xl'>Connectivity</th>
                            </tr>
                            <tr>
                                <td className='font-normal text-base'>
                                    <ul className='list-disc'>
                                        <li>{connectivity1}</li>
                                        <li>{connectivity2}</li>
                                        <li>{connectivity3}</li>
                                        <li>{connectivity4}</li>
                                    </ul>
                                </td>
                            </tr>
                        </div>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Card