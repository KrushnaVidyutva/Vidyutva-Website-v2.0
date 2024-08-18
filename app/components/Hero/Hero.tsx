import { Link } from "@remix-run/react"

const Hero = () => {
    return (
        <div className="bg-img">
            <div className="min-[1080px]:py-[9rem] max-[1080px]:pt-[9rem] max-[1080px]:pb-[2rem] min-[1080px]:pr-[5%] grid min-[1080px]:grid-cols-3 max-[1080px]:grid-row-2 gap-[4rem] ">
                <div className="col-span-2 bg-white min-[1080px]:min-w-[45rem] min-[1080px]:w-[50%] max-[1080px]:w-[100%] px-[3rem] py-[4rem] flex-col min-[1080px]:rounded-tr-[1.5rem] min-[1080px]:rounded-br-[1.5rem] grid gap-8">
                    <h1 className="font-semibold text-6xl ">India's  <br />reliable EV<br />charging platform</h1>
                    <div className="w-[100%] max-w-[35rem] ml-0">
                        <p className="text-xl mb-0">
                            We make hosting and managing chargers easy for organisations and destinations, and partner with fleet managers, vehicle manufacturers and hire-car providers to keep drivers moving.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Link to="#" target="_blank" className="flex justify-center items-center gap-3 rounded-[3.125rem] bg-[#00a181] text-white text-center py-[.75rem] px-[1.5rem] transition-all duration-300 ease-in hover:bg-[#00a181a5]">
                            <div className="w-[2rem] h-[2rem]">
                                <div className="flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 25 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                        <path d="M21.5 11.7902C21.5 15.9402 19.29 21.0002 12.63 21.0002C7.62461 21.0334 3.53852 17.0055 3.5 12.0002C3.53852 6.99485 7.62461 2.96694 12.63 3.0002C14.7007 3.00788 16.7085 3.71237 18.33 5.0002C18.442 5.09173 18.5109 5.22581 18.52 5.3702C18.5206 5.51629 18.463 5.65661 18.36 5.7602C17.709 6.3554 17.0882 6.98285 16.5 7.6402C16.3289 7.8285 16.0422 7.85456 15.84 7.7002C14.9161 7.01648 13.7888 6.66418 12.64 6.7002C9.68528 6.7002 7.29 9.09548 7.29 12.0502C7.29 15.0049 9.68528 17.4002 12.64 17.4002C15.64 17.4002 16.91 16.1202 17.57 13.8502H13C12.7239 13.8502 12.5 13.6263 12.5 13.3502V10.7002C12.5 10.424 12.7239 10.2002 13 10.2002H21C21.2302 10.1987 21.4244 10.3713 21.45 10.6002C21.4871 10.9957 21.5038 11.3929 21.5 11.7902Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="font-semibold text-base">Download on Android</div>
                        </Link>
                    </div>
                </div>

                <div className="col-span-1 min-[1080px]:relative max-[1080px]:flex max-[1080px]:justify-center max-sm:items-center max-[1080px]:px-[5rem]">
                    <div className=" min-[1080px]:absolute min-[1080px]:-bottom-24 rounded-[2rem] backdrop-blur-[5px] bg-[#f0f0f0cc] p-4 flex items-center flex-col gap-3">
                        <div className="pl-4 w-[100%]">
                            <div className="text-xl">I want to...</div>
                        </div>
                        <div className="bg-[#f8f9fb] rounded-[60px] w-[100%] px-6 py-3 pt-1 pb-1 transition-all duration-300 ease-out flex justify-between items-center group">
                            <div className="text-base">Download the app</div>
                            <div className="flex justify-between items-center gap-3 transition-[opacity] duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                <Link to="#" className="hover:text-[#00a181] w-[2.5rem] h-[2.5rem] p-1 transition-[text] duration-200 ease-out">
                                    <div className="flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 25 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                            <path d="M21.5 11.7902C21.5 15.9402 19.29 21.0002 12.63 21.0002C7.62461 21.0334 3.53852 17.0055 3.5 12.0002C3.53852 6.99485 7.62461 2.96694 12.63 3.0002C14.7007 3.00788 16.7085 3.71237 18.33 5.0002C18.442 5.09173 18.5109 5.22581 18.52 5.3702C18.5206 5.51629 18.463 5.65661 18.36 5.7602C17.709 6.3554 17.0882 6.98285 16.5 7.6402C16.3289 7.8285 16.0422 7.85456 15.84 7.7002C14.9161 7.01648 13.7888 6.66418 12.64 6.7002C9.68528 6.7002 7.29 9.09548 7.29 12.0502C7.29 15.0049 9.68528 17.4002 12.64 17.4002C15.64 17.4002 16.91 16.1202 17.57 13.8502H13C12.7239 13.8502 12.5 13.6263 12.5 13.3502V10.7002C12.5 10.424 12.7239 10.2002 13 10.2002H21C21.2302 10.1987 21.4244 10.3713 21.45 10.6002C21.4871 10.9957 21.5038 11.3929 21.5 11.7902Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <Link to="#" className="max-w-[1005] inline-block bg-[#f8f9fb] rounded-[60px] w-[100%] px-6 py-3 transition-all duration-300 ease-out hover:bg-[#00a181] hover:text-white">
                            <div>Install / Host chargers</div>
                        </Link>

                        <Link to="#" className="max-w-[1005] inline-block bg-[#f8f9fb] rounded-[60px] w-[100%] px-6 py-3 transition-all duration-300 ease-out hover:bg-[#00a181] hover:text-white">
                            <div>Electrify my fleet</div>
                        </Link>

                        <Link to="#" className="max-w-[1005] inline-block bg-[#f8f9fb] rounded-[60px] w-[100%] px-6 py-3 transition-all duration-300 ease-out hover:bg-[#00a181] hover:text-white">
                            <div>Provide charging subscriptions</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero