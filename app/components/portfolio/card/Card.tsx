import React from 'react'
import './card.css'
import { LuInfo } from 'react-icons/lu'
import { FaArrowAltCircleRight } from 'react-icons/fa'

interface CardProps {
    img: string,
    name: string,
    design1: string
    design2: string
    design3: string
    connectivity1: string
    connectivity2: string
    connectivity3: string
    connectivity4: string
}

const Card = ({ img, name, design1, design2, design3, connectivity1, connectivity2, connectivity3, connectivity4 }: CardProps) => {
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
                            <div className='text-3xl text-[#00a181] hover:text-[#5ad9b6]'><FaArrowAltCircleRight /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inside">
                <div className="icon"><LuInfo /></div>
                <div className="contents">
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