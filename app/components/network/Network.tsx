import ImageCaurosel from '../imageCaurosel/ImageCaurosel'

const Network = () => {
    return (
        <div className='px-[5%] pt-[7rem] overflow-hidden'>
            <div className=''>
                <h1 className='font-semibold text-5xl w-[60%] pb-4'>One network. Many providers. Every EV.</h1>
                <p className='font-normal text-lg w-[35%]'>Access thousands of chargers from charging partners all over the country, regardless of the EV you drive.</p>
            </div>
            <ImageCaurosel />
        </div>
    )
}

export default Network