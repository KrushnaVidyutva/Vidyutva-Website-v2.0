import React from 'react'

const WhatWeDo = () => {
    return (
        <div className='px-[4rem] py-[3rem]'>
            <div className='grid grid-cols-2 gap-8'>
                <div className='col-span-1 flex flex-col gap-8'>
                    <h1 className='font-semibold text-4xl text-zinc-700'>What we do ?</h1>
                    <p className='font-normal text-xl text-zinc-700 w-[80%]'>Kazam is an agnostic EV charging software platform building India's largest smart and affordable EV charging network. Through our partnerships with fleets, CPOs, RWAs and OEMs we have been able to create a robust charging network with over 7000 devices on our platform. Our vision is to be the leader in EV charging in India and beyond, leveraging our capabilities in software and hardware.</p>
                </div>
                <div className='col-span-1'>
                    <img src="/images/kazam/What_We_Do/image1.png" alt="Loading.." />
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo