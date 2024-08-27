import React from 'react'
import OurStoryCard from '~/components/Assets/ourStory/OurStoryCard'

const OurStory = () => {
    return (
        <div className='py-[5rem]'>
            <div className='grid grid-cols-10'>
                <div className='col-span-3 flex justify-center items-center'>
                    <h1 className='font-semibold text-5xl text-zinc-700'>Our Story</h1>
                </div>
                <div className='col-span-7 bg-[#f3f4f6] overflow-x-scroll overflow-y-hidden h-[32rem] p-4 flex gap-4 custom-scrollbar'>
                    <div className='col-span-1'>
                        <OurStoryCard
                            img='/images/kazam/Our_Story/image1.png'
                            desc='We onboarded our 1st host in JP Nagar Bangalore on April 2021, currently we have more than 7000+ charging stations all over India'
                            date='April 2021'
                        />
                    </div>
                    <div className='col-span-1'>
                        <OurStoryCard
                            img='/images/kazam/Our_Story/image2.png'
                            desc='By August we launched 2 products which includes Kazam 3.3 kw AC charging stations for home and destination charging'
                            date='August 2021'
                        />
                    </div>
                    <div className='col-span-1'>
                        <OurStoryCard
                            img='/images/kazam/Our_Story/image3.png'
                            desc='We launched Kazam Charging Management Software  which will allow anyone to set up their own charging network without any software development hassleWe launched Kazam Charging Management Software  which will allow anyone to set up their own charging network without any software development hassle'
                            date='September 2021'
                        />
                    </div>
                    <div className='col-span-1'>
                        <OurStoryCard
                            img='/images/kazam/Our_Story/image4.png'
                            desc='Along way we have onboarded 7000+ charging station on our platform across mutiple cities in India'
                            date='Oct 2021'
                        />
                    </div>
                    <div className='col-span-1'>
                        <OurStoryCard
                            img='/images/kazam/Our_Story/image5.png'
                            desc='We also achievied milestones like empanelment by Delhi Government for managing 30,000 units and partnership with top fleet operators of India'
                            date='Dec 2021'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory