import { Link } from "@remix-run/react"
import MapWithMarker from "../map/map"

const ChargingNetwork = () => {
    return (
        <div className="px-[5%] py-[7rem]">
            <div className="flex flex-col gap-[3rem]">
                <div className="w-[100%]">
                    <div className="flex flex-col gap-8">
                        <div className="font-semibold text-base">Charging Network</div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="col-span-1 flex flex-col gap-8" data-aos="fade-right" data-aos-duration="400">
                                <h1 className="font-semibold text-5xl">India’s reliable network</h1>
                                <p className="font-normal text-lg text-[#1d344f]">The Vidyutva platform brings together chargers operated by businesses and governments all over India, giving you access to the largest and fastest growing EV charging network - all in one place.</p>
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
                            <div className="col-span-1" data-aos="zoom-in-up" data-aos-duration="400">
                                <h2 className="font-semibold text-2xl my-4">Realtime Vidyutva Charging Locations.</h2>
                                <div className="rounded-md overflow-hidden">
                                    <MapWithMarker />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-[3rem] w-[100%] cn-main">
                    <div className="flex items-center">
                        <div className="cn-img overflow-hidden rounded-[2rem]" data-aos="fade-right" data-aos-offset="150" data-aos-duration="600">
                            <img src="/images/charging_network.jpg" alt="Loading..." className="rounded-[2rem]" />
                        </div>
                    </div>
                    <div className="cn-cards">
                        <div className="grid grid-rows-2 gap-8">
                            <div className="grid grid-cols-2 max-[860px]:grid-cols-1 row-span-1 gap-8">
                                <div className="bg-[#e8ebed] rounded-[1.25rem] overflow-hidden w-[23rem] max-[450px]:w-[100%] col-span-1" data-aos="fade-up" data-aos-offset="150" data-aos-duration="400">
                                    <div className="flex flex-col gap-6 p-6">
                                        <div className="flex w-8 h-8 ml-2">
                                            <img src="/images/icons/time.png" loading="lazy" alt="orange clock icon" />
                                        </div>
                                        <div >
                                            <h5 className="font-semibold text-2xl mb-4 ml-2">Reliable</h5>
                                            <ul className="list-disc flex flex-col gap-2 ml-6">
                                                <li>Preventive maintenance</li>
                                                <li>Real-time chargers status and availability.</li>
                                                <li>24/7 whatsapp chat support.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#e8ebed] rounded-[1.25rem] overflow-hidden w-[23rem] max-[450px]:w-[100%] h-[100%] col-span-1" data-aos="fade-up" data-aos-offset="150" data-aos-duration="400">
                                    <div className="flex flex-col gap-6 p-6">
                                        <div className="flex w-8 h-8 ml-2">
                                            <img src="/images/icons/check.png" loading="lazy" alt="orange check icon" />
                                        </div>
                                        <div >
                                            <h5 className="font-semibold text-2xl mb-4 ml-2">Available</h5>
                                            <ul className="list-disc flex flex-col gap-2 ml-6">
                                                <li>99% Availability of EV Chargers.</li>
                                                <li>Instantly available, plug-and-play.</li>
                                                <li>Available in odisha, india.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 max-[860px]:grid-cols-1 row-span-1 gap-8">
                                <div className="bg-[#e8ebed] rounded-[1.25rem] overflow-hidden w-[23rem] max-[450px]:w-[100%] col-span-1" data-aos="fade-up" data-aos-offset="150" data-aos-duration="400">
                                    <div className="flex flex-col gap-6 p-6">
                                        <div className="flex w-8 h-8 ml-2">
                                            <img src="/images/icons/venn-diagram.png" loading="lazy" alt="orange venn icon" />
                                        </div>
                                        <div >
                                            <h5 className="font-semibold text-2xl mb-4 ml-2">Inclusive & Unified</h5>
                                            <ul className="list-disc flex flex-col gap-2 ml-6">
                                                <li>Compatible with all EV brands and models.</li>
                                                <li>Integrating charger networks into a seamless user experience via the app.</li>
                                                <li>Offering various pricing options and charging speeds.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#e8ebed] rounded-[1.25rem] overflow-hidden w-[23rem] max-[450px]:w-[100%] h-[100%] col-span-1" data-aos="fade-up" data-aos-offset="150" data-aos-duration="400">
                                    <div className="flex flex-col gap-6 p-6">
                                        <div className="flex w-8 h-8 ml-2">
                                            <img src="/images/icons/power.png" loading="lazy" alt="orange leaf icon" />
                                        </div>
                                        <div >
                                            <h5 className="font-semibold text-2xl mb-4 ml-2">Sustainable</h5>
                                            <ul className="list-disc flex flex-col gap-2 ml-6">
                                                <li>Helping EV drivers transition to zero carbon emissions in India.</li>
                                                <li>Maximizing the use of renewable energy.</li>
                                                <li>Many locations powered by solar energy.</li>
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