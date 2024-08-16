import { Link } from "@remix-run/react"

const Hero = () => {
    return (
        <div className="relative overflow-hidden">
            <img src="/images/bg/banner.png" alt="loading.." className=" absolute -z-10" />
            <div className="py-[9rem]">
                <div className="bg-white min-w-[45rem] w-[50%] px-[3rem] py-[4rem] flex-col rounded-tr-[1.5rem] rounded-br-[1.5rem] grid gap-8">
                    <h1 className="font-semibold text-6xl ">India's  <br />reliable EV<br />charging platform</h1>
                    <div className="w-[100%] max-w-[35rem] ml-0">
                        <p className="text-xl mb-0">
                            We make hosting and managing chargers easy for organisations and destinations, and partner with fleet managers, vehicle manufacturers and hire-car providers to keep drivers moving.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {/* <Link to="#" target="_blank" className="flex justify-center items-center gap-3 rounded-[3.125rem] bg-[#00a181] text-white text-center py-[.75rem] px-[1.5rem] transition-all duration-300 ease-in hover:bg-[#00a181a5]">
                            <div className="w-[2rem] h-[2rem]">
                                <div className="flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 25 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.8462 6.56456C11.9594 6.66437 12.1104 6.71005 12.26 6.68972C13.2611 6.50512 14.1566 5.95209 14.77 5.13972C15.3664 4.38703 15.7156 3.46848 15.77 2.50972C15.7745 2.35084 15.7046 2.19896 15.5811 2.09896C15.4576 1.99895 15.2945 1.96226 15.14 1.99972C14.1751 2.25168 13.3121 2.79672 12.67 3.55972C12.0599 4.29679 11.7086 5.2137 11.67 6.16972C11.6686 6.32066 11.7329 6.46475 11.8462 6.56456ZM19.2025 9.22524C18.6109 9.78041 17.68 10.654 17.68 12.5098C17.6661 14.1667 18.576 15.6936 20.04 16.4698C20.2211 16.5516 20.3382 16.7311 20.34 16.9298C20.34 16.9998 18.24 21.9998 15.72 21.9998C15.1683 21.9998 14.8006 21.8259 14.3979 21.6355C13.91 21.4048 13.3705 21.1498 12.39 21.1498C11.4236 21.1498 10.8828 21.3975 10.3851 21.6255C9.96094 21.8198 9.56815 21.9998 8.97001 21.9998C6.65001 21.9998 3.50001 17.1398 3.50001 12.7498C3.46015 11.5098 3.76846 10.2835 4.39001 9.20972C5.26661 7.72405 6.82762 6.77469 8.55001 6.67972C9.36168 6.67972 10.0261 6.91862 10.6546 7.14459C11.2186 7.34736 11.7536 7.53972 12.34 7.53972C12.8999 7.53972 13.3517 7.3644 13.8473 7.17208C14.4495 6.93845 15.1163 6.67972 16.12 6.67972C17.95 6.67972 19.68 7.99972 19.68 8.58972C19.68 8.77719 19.4781 8.96668 19.2025 9.22524Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="font-semibold text-base">Download on iOS</div>
                        </Link> */}
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
                <div className="w-[21rem] max-w-[21rem] rounded-[2rem] backdrop-blur-[5px] bg-[#f0f0f0cc] absolute bottom-[5%] right-[5%] p-4 flex items-center flex-col gap-3">
                    <div className="pl-4 w-[100%]">
                        <div className="text-xl">I want to...</div>
                    </div>

                    <div className="bg-[#f8f9fb] rounded-[60px] w-[100%] px-6 py-3 pt-1 pb-1 transition-all duration-300 ease-out flex justify-between items-center group">
                        <div className="text-base">Download the app</div>
                        <div className="flex justify-between items-center gap-3 transition-[opacity] duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                            {/* <Link to="#" className="hover:text-[#00a181] w-[2.5rem] h-[2.5rem] p-1 transition-[text] duration-200 ease-out">
                                <div className="flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 25 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.8462 6.56456C11.9594 6.66437 12.1104 6.71005 12.26 6.68972C13.2611 6.50512 14.1566 5.95209 14.77 5.13972C15.3664 4.38703 15.7156 3.46848 15.77 2.50972C15.7745 2.35084 15.7046 2.19896 15.5811 2.09896C15.4576 1.99895 15.2945 1.96226 15.14 1.99972C14.1751 2.25168 13.3121 2.79672 12.67 3.55972C12.0599 4.29679 11.7086 5.2137 11.67 6.16972C11.6686 6.32066 11.7329 6.46475 11.8462 6.56456ZM19.2025 9.22524C18.6109 9.78041 17.68 10.654 17.68 12.5098C17.6661 14.1667 18.576 15.6936 20.04 16.4698C20.2211 16.5516 20.3382 16.7311 20.34 16.9298C20.34 16.9998 18.24 21.9998 15.72 21.9998C15.1683 21.9998 14.8006 21.8259 14.3979 21.6355C13.91 21.4048 13.3705 21.1498 12.39 21.1498C11.4236 21.1498 10.8828 21.3975 10.3851 21.6255C9.96094 21.8198 9.56815 21.9998 8.97001 21.9998C6.65001 21.9998 3.50001 17.1398 3.50001 12.7498C3.46015 11.5098 3.76846 10.2835 4.39001 9.20972C5.26661 7.72405 6.82762 6.77469 8.55001 6.67972C9.36168 6.67972 10.0261 6.91862 10.6546 7.14459C11.2186 7.34736 11.7536 7.53972 12.34 7.53972C12.8999 7.53972 13.3517 7.3644 13.8473 7.17208C14.4495 6.93845 15.1163 6.67972 16.12 6.67972C17.95 6.67972 19.68 7.99972 19.68 8.58972C19.68 8.77719 19.4781 8.96668 19.2025 9.22524Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </Link> */}
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
    )
}

export default Hero