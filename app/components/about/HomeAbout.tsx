import { Link } from '@remix-run/react'

const HomeAbout = () => {

    return (
        <>
            <div className="hero bg-black" id='about'>
                <div className="heroh2 flex items-center justify-between  w-[100%] ">
                    <div className="px-28 max-sm:px-10" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <h4 className='font-bold text-3xl py-4 max-sm:text-xl'>User friendly & realiable EV charging network in India</h4>
                        <Link to="/aboutus" className='transition-all duration-300 ease-in-out'>
                            <button className='flex justify-between items-center gap-3 border border-white px-6 py-3 font-semibold text-base max-sm:text-sm rounded-full hover:bg-gray-100 hover:border-gray-100 hover:text-gray-800 transition-all duration-500 ease-in-out'>
                                <span className='mb-1'>About us</span>
                                <div className='h-[.9rem] w-[.9rem]'>
                                    <svg width="currentWidth" height="currentHeight" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.293 12.293L6.707 13.707L13.414 6.99997L6.707 0.292969L5.293 1.70697L9.586 5.99997H0V7.99997H9.586L5.293 12.293Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeAbout