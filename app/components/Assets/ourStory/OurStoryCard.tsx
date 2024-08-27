import "./ourstory.css"

interface OurStoryCardProps {
    img: string,
    desc: string,
    date: string
}

const OurStoryCard = ({ img, desc, date }: OurStoryCardProps) => {
    return (
        <div className='bg-white overflow-hidden rounded-lg w-[20rem] flex flex-col gap-4 pb-4 card-shadow'>
            <div className='relative h-[20rem] overflow-hidden  card-shadow'>
                <img src={img} alt="Loading..." />
                <div className="bg-black bg-opacity-70 rounded-lg text-lg font-normal text-white px-6 py-2 absolute top-2 left-2">{date}</div>
            </div>
            <div className='h-[6.5rem] p-2 px-4 overflow-y-scroll custom-scrollbar-card'>
                <div className='text-[1rem] font-normal text-zinc-700'>
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default OurStoryCard