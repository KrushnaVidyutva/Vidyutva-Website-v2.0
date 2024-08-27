import React from 'react'

const WhoWeServe = () => {
    return (
        <div className='px-[4rem] py-[5rem]'>
            <div className='grid grid-cols-2 gap-8'>
                <div className='col-span-1 flex flex-col gap-8'>
                    <h1 className='font-semibold text-4xl text-zinc-700'>Who we serve ?</h1>
                    <p className='font-normal text-xl text-zinc-700 w-[80%]'>Our solutions are proudly used by individuals who own EVs, Charge point operators, Electric vehicle OEMs, RWAs, Energy distribution companies and many MSMEs</p>
                </div>
                <div className='col-span-1'>
                    <img src="/images/kazam/Who_We_Serve/image.png" alt="Loading.." />
                </div>
            </div>
        </div>
    )
}

export default WhoWeServe