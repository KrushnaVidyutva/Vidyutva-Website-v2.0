import { Link } from '@remix-run/react'
// import { useEffect, useRef } from 'react';
const HomeAbout = () => {
    // const sectionRef = useRef(null);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.intersectionRatio > 0.4) {
    //                 entry.target.classList.add("bg-[#00a181]");
    //                 entry.target.classList.add("text-white");
    //             } else {
    //                 entry.target.classList.remove("bg-[#00a181]");
    //                 entry.target.classList.remove("text-white");
    //             }
    //         });
    //     }, {
    //         threshold: 0.4
    //     });

    //     if (sectionRef.current) {
    //         observer.observe(sectionRef.current);
    //     }

    //     return () => {
    //         if (sectionRef.current) {
    //             observer.unobserve(sectionRef.current);
    //         }
    //     };

    // }, []);

    return (
        <>
            <div className='transition-[background-color] duration-500 ease-in-out'>
                <div className='px-[5%]'>
                    <div className='grid grid-cols-3 w-[100%] py-[9rem] gap-8'>
                        <div className='col-span-1'>
                            <div className='h-full w-full flex justify-center items-center'>
                                <img src="/images/ourteams/Team-1.webp" alt="Loading...." />
                            </div>
                        </div>
                        <div className='col-span-2 '>
                            {/* <h4 className='font-bold text-3xl py-4'>Every day thousands of drivers charge their vehicle on the Vidyutva network - the largest and fastest growing EV charging network in India.</h4> */}
                            <p className='font-medium text-base py-4'>We're owned and operated by the NRMA, RACV, RACQ, RAA, RAC and RACT. The same companies supporting drivers for over 100 years.</p>
                            <Link to="#" >
                                <button className='flex justify-between items-center gap-3 border border-white px-6 py-3 font-semibold text-base rounded-full hover:bg-gray-100 hover:border-gray-100 hover:text-gray-800 transition-all duration-300 ease-in-out'>
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
            </div>
        </>
    )
}

export default HomeAbout