import React from 'react'
import FounderCard from '~/components/Assets/FonderCard/FounderCard'

const OurVision = () => {
    return (
        <>
            <div className='px-[5rem] pt-[3rem] pb-[3rem]'>
                <div className='flex flex-col gap-8'>
                    <h1 className='font-semibold text-4xl text-zinc-700'>Our Vision</h1>
                    <p className='font-normal text-xl text-zinc-700 w-[100%]'>Our vision is to be the leader in EV charging in India and beyond, leveraging our capabilities in software and hardware. Our goal is to bring a seamless charging experience to the consumer, constantly enhancing the hardware and software solutions. By developing an EV ecosystem we can together bring down the emissions upto 75% .</p>
                </div>
                <div className='flex justify-center pt-[8rem]'>
                    <div className='w-[70%] grid grid-cols-3'>
                        <div className='flex flex-col items-center gap-8'>
                            <img src="/images/kazam/Our_Vision/icon1.png" alt="Loading..." className='h-[4rem] w-[4rem]' />
                            <h6 className='font-medium text-sm'>7000+ charge points</h6>
                        </div>
                        <div className='border-x border-gray-300 flex flex-col items-center gap-8 '>
                            <img src="/images/kazam/Our_Vision/icon2.png" alt="Loading..." className='h-[4rem] w-[4rem]' />
                            <h6 className='font-medium text-sm'>150000 kWh+ Consumption</h6>
                        </div>
                        <div className='flex flex-col items-center gap-8'>
                            <img src="/images/kazam/Our_Vision/icon3.png" alt="Loading..." className='h-[4rem] w-[4rem]' />
                            <h6 className='font-medium text-sm'>15000 hr of charging</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-[3rem] pb-[5rem]'>
                <div className='vision-bg-img flex justify-center'>
                    <div className='w-[50%] grid grid-cols-2 gap-16'>
                        <div className='col-span-1'>
                            <FounderCard
                                name='Aritra Ghosh'
                                img='/images/kazam/Our_Vision/founder01.jpg'
                                designation1='Founder'
                                designation2='CEO'
                            />
                        </div>
                        <div className='col-span-1'>
                            <FounderCard
                                name='Biswojit Patsahani'
                                img='/images/kazam/Our_Vision/founder02.jpg'
                                designation1='Co-Founder'
                                designation2='CEO'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurVision