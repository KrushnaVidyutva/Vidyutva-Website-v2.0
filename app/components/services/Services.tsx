import { Link } from "@remix-run/react"

const Services = () => {
    return (
        <div className="pt-[3rem] pb-[7rem] px-[5%]">
            <div className="min-[945px]:grid min-[945px]:grid-cols-2 max-[945px]:flex max-[945px]:flex-col gap-10 items-start">
                <div className="min-[945px]:col-span-1">
                    <h2 className="font-bold text-base">Services</h2>
                    <h1 className="pt-4 font-semibold text-5xl capitalize">The reliable and first charging solution</h1>
                </div>
                <div className="min-[945px]:col-span-1  flex flex-col gap-8">
                    <p className="text-lg text-[#2f3433]">Vidyuyva works with companies and government agencies across India to provide EV charger and vehicle management solutions, and to keep staff and customers charged.</p>
                    <div className="grid grid-rows-2 ">
                        <div className="row-span-1 grid grid-cols-2 gap-6">
                            <Link to="#" className="col-span-1" data-aos="zoom-in-up" data-aos-offset="150" data-aos-duration="400">
                                <div className="relative bg-[#e8ebed] rounded-[1.25rem] group hover:text-white transition-all duration-300 ease-in-out">
                                    <div className="flex flex-col p-6 gap-6">
                                        <div className="flex items-center justify-between">
                                            <h1 className="font-semibold text-lg z-10">White Label Software</h1>
                                        </div>
                                        <div className="z-10"><p className="font-normal text-base ">Lunch your own cms and mobile app with your brand via vidyutva.</p></div>
                                        <div className="flex justify-end items-center z-10">
                                            <div className="bg-[#00a181] text-white rounded-full p-[12px] group-hover:bg-white group-hover:text-[#00a181]">
                                                <div className="flex justify-center items-center">
                                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11V13Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 h-0 group-hover:h-[100%] bg-[#00a181] rounded-[1.25rem] transition-all duration-300 ease-in-out z-0"></div>
                                </div>
                            </Link>
                            <Link to="#" className="col-span-1" data-aos="zoom-in-up" data-aos-offset="150" data-aos-duration="600">
                                <div className="relative bg-[#e8ebed] rounded-[1.25rem] group hover:bg-[#00a181] hover:text-white transition-all duration-300 ease-in-out">
                                    <div className="flex flex-col p-6 gap-6">
                                        <div className="flex items-center justify-between">
                                            <h1 className="font-semibold text-lg z-10">Hosting Chargers</h1>
                                        </div>
                                        <div className="z-10"><p className="font-normal text-base">Attract new audiences, build loyalty and increase customer spend by hosting EV chargers.</p></div>
                                        <div className="flex justify-end items-center z-10">
                                            <div className="bg-[#00a181] text-white rounded-full p-[12px] group-hover:bg-white group-hover:text-[#00a181]">
                                                <div className="flex justify-center items-center">
                                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11V13Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 h-0 group-hover:h-[100%] bg-[#00a181] rounded-[1.25rem] transition-all duration-300 ease-in-out z-0"></div>
                                </div>
                            </Link>
                        </div>
                        <div className="row-span-1 grid grid-cols-2 gap-6">
                            <Link to="#" className="col-span-1" data-aos="zoom-in-up" data-aos-offset="150" data-aos-duration="400">
                                <div className="relative bg-[#e8ebed] rounded-[1.25rem] group hover:bg-[#00a181] hover:text-white transition-all duration-300 ease-in-out">
                                    <div className="flex flex-col p-6 gap-6">
                                        <div className="flex items-center justify-between">
                                            <h1 className="font-semibold text-lg z-10">Fleet and Rental Solutions</h1>
                                        </div>
                                        <div className="z-10">
                                            <p className="font-normal text-base">Simple, comprehensive solutions for fleet operators and rental car providers to transition to, manage, and charge an electric fleet.</p>
                                        </div>
                                        <div className="flex justify-end items-center z-10">
                                            <div className="bg-[#00a181] text-white rounded-full p-[12px] group-hover:bg-white group-hover:text-[#00a181]">
                                                <div className="flex justify-center items-center">
                                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11V13Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 h-0 group-hover:h-[100%] bg-[#00a181] rounded-[1.25rem] transition-all duration-300 ease-in-out z-0"></div>
                                </div>
                            </Link>
                            <Link to="#" className="col-span-1" data-aos="zoom-in-up" data-aos-offset="150" data-aos-duration="600">
                                <div className="relative bg-[#e8ebed] rounded-[1.25rem] group hover:bg-[#00a181] hover:text-white transition-all duration-300 ease-in-out">
                                    <div className="flex flex-col p-6 gap-6">
                                        <div className="flex items-center justify-between">
                                            <h1 className="font-semibold text-lg z-10">Pre-paid charger packs</h1>
                                        </div>
                                        <div className="z-10">
                                            <p className="font-normal text-base">Reward your customers and keep them moving with pre-paid EV charger credit valid nation-wide</p>
                                        </div>
                                        <div className="flex justify-end items-center z-10">
                                            <div className="bg-[#00a181] text-white rounded-full p-[12px] group-hover:bg-white group-hover:text-[#00a181]">
                                                <div className="flex justify-center items-center">
                                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11V13Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 h-0 group-hover:h-[100%] bg-[#00a181] rounded-[1.25rem] transition-all duration-300 ease-in-out z-0"></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services