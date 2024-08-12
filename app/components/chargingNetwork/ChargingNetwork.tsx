import { Link } from "@remix-run/react"

const ChargingNetwork = () => {
    return (
        <div className="px-[5%] py-[7rem]">
            <div className="flex flex-col gap-[3rem]">
                <div className="w-[100%] max-w-[35rem]">
                    <div className="flex flex-col gap-8">
                        <div className="font-semibold text-base">Charging Network</div>
                        <h1 className="font-semibold text-5xl">India’s largest network</h1>
                        <p className="font-normal text-lg text-[#1d344f]">The Vidyutva platform brings together chargers operated by businesses and governments all over Australia, giving you access to the largest and fastest growing EV charging network - all in one place.</p>
                        <div className="flex items-center flex-wrap">
                            <Link to={"#"} className="py-3 px-6 flex items-center rounded-[3.125rem] border border-zinc-800 text-center gap-[.8rem] transition-[bg] duration-300 ease-in-out hover:bg-[#e8ebed] hover:border-[#e8ebed]">
                                <span className="text-base font-normal">See the network</span>
                                <div className="w-4 h-4 flex justify-center items-center">
                                    <svg width="currentwidth" height="currentheight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11V13Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-[3rem] w-[100%] relative">
                    <div className="flex items-center gap-[4rem]">
                        <div className="w-[100%] max-w-[40rem] overflow-hidden aspect-[5/6] rounded-[2rem]">
                            <img src="/images/network.webp" alt="Loading..." />
                        </div>
                    </div>
                    <div className="absolute right-0 top-[20%] w-[70%]">
                        <div className="grid grid-rows-2 gap-8">
                            <div className="grid grid-cols-2 row-span-1 gap-8">
                                <div className="bg-[#e8ebed] rounded-[1.25rem] overflow-hidden w-[23rem] col-span-1">
                                    <div className="flex flex-col gap-6 p-6">
                                        <div className="flex w-8 h-8 ml-2">
                                            <img src="https://cdn.prod.website-files.com/651f461dff79ef9092702935/6527f7fcfa7bd4d2e99860fe_clock-icon-orange.png" loading="lazy" alt="orange clock icon" />
                                        </div>
                                        <div >
                                            <h5 className="font-semibold text-2xl mb-4 ml-2">Reliable</h5>
                                            <ul className="list-disc flex flex-col gap-2 ml-6">
                                                <li>99.9% app &amp; platform uptime.</li>
                                                <li>Real-time chargers status and availability.</li>
                                                <li>24/7 customer phone support.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#e8ebed] rounded-[1.25rem] overflow-hidden w-[23rem] h-[100%] col-span-1">
                                    <div className="flex flex-col gap-6 p-6">
                                        <div className="flex w-8 h-8 ml-2">
                                            <img src="https://cdn.prod.website-files.com/651f461dff79ef9092702935/6527f7fbd7301efb154f0873_check-icon-orange.png" loading="lazy" alt="orange check icon" />
                                        </div>
                                        <div >
                                            <h5 className="font-semibold text-2xl mb-4 ml-2">Reliable</h5>
                                            <ul className="list-disc flex flex-col gap-2 ml-6">
                                                <li>99.9% app &amp; platform uptime.</li>
                                                <li>Real-time chargers status and availability.</li>
                                                <li>24/7 customer phone support.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 row-span-1 gap-8">
                                <div className="bg-[#e8ebed] rounded-[1.25rem] overflow-hidden w-[23rem] col-span-1">
                                    <div className="flex flex-col gap-6 p-6">
                                        <div className="flex w-8 h-8 ml-2">
                                            <img src="https://cdn.prod.website-files.com/651f461dff79ef9092702935/6527f7fcb395c60c423f1042_venn-icon-orange.png" loading="lazy" alt="orange venn icon" />
                                        </div>
                                        <div >
                                            <h5 className="font-semibold text-2xl mb-4 ml-2">Reliable</h5>
                                            <ul className="list-disc flex flex-col gap-2 ml-6">
                                                <li>99.9% app &amp; platform uptime.</li>
                                                <li>Real-time chargers status and availability.</li>
                                                <li>24/7 customer phone support.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#e8ebed] rounded-[1.25rem] overflow-hidden w-[23rem] h-[100%] col-span-1">
                                    <div className="flex flex-col gap-6 p-6">
                                        <div className="flex w-8 h-8 ml-2">
                                            <img src="https://cdn.prod.website-files.com/651f461dff79ef9092702935/6527f7fc677560669b2065cd_leaf-charge-icon-orange.png" loading="lazy" alt="orange leaf icon" />
                                        </div>
                                        <div >
                                            <h5 className="font-semibold text-2xl mb-4 ml-2">Reliable</h5>
                                            <ul className="list-disc flex flex-col gap-2 ml-6">
                                                <li>99.9% app &amp; platform uptime.</li>
                                                <li>Real-time chargers status and availability.</li>
                                                <li>24/7 customer phone support.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChargingNetwork