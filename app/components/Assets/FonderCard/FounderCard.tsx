import { Link } from '@remix-run/react'
import React from 'react'

interface FounderCardProp {
    name: string,
    img: string,
    designation1: string
    designation2: string
}

const FounderCard = ({ name, img, designation1, designation2 }: FounderCardProp) => {
    return (
        <div className='rounded-lg border border-gray-400 bg-white px-4 py-6 flex flex-col gap-4'>
            <img src={img} alt="Loading..." className='rounded-md w-[100%]' />
            <div className='flex flex-col items-center'>
                <h1 className='mt-4 mb-2 font-semibold'>{name}</h1>
                <div className="flex items-center">
                    <div className="text-xs text-gray-500">{designation1}</div>
                    <div className="h-4 w-px mx-2 bg-gray-300"></div>
                    <div className="text-xs text-gray-500">{designation2}</div>
                </div>
                <div className="w-3/5 h-px bg-gray-300 my-3"></div>
                <Link to={'#'} target="_blank" rel="noreferrer">
                    <div className="text-sm font-semibold text-red-700">Know more
                        <span className="text-black"> about {name} </span>
                        <span className="text-black"> &gt; </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default FounderCard