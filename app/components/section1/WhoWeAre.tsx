import { useState } from "react"

const WhoWeAre = () => {
    const [active, setActive] = useState(false)
    return (
        <div className='transition-[background-color] duration-500 ease-in-out'>
            <div className="px-[5%] pt-[5rem]">
                <div className="flex flex-col items-center gap-[5rem]">
                    <div className="text-center w-[100%] max-w-[48rem]" data-aos="fade-up" data-aos-offset="150" data-aos-duration="400">
                        <h1 className="font-semibold text-5xl">Who is Vidyutva?</h1>
                        <p className="pt-[1.5rem] text-xl">We’re India’s most reliable and advanced EV charging network. We’re dedicated to making charging simple, affordable, and fast for everyone—because easier charging means more EVs on the road, and that’s a great step towards a greener future.</p>
                    </div>
                    <div className="relative w-[100%] rounded-3xl overflow-hidden " onClick={() => setActive(true)}>
                        <img src="/images/thumbnail.png" alt="Loading..." className={`w-[100%] h-[100%] absolute top-0 left-0 ${active ? "-z-40" : " z-10"}`} />
                        <video src="/videos/WhoWeAre.mp4" className="w-[100%]" controls></video>
                    </div>
                    {/* <div className="text-center w-[100%] max-w-[48rem]">
                        <h1 className="font-semibold text-5xl">Bringing drivers and chargers together on one platform, built right here in India.</h1>
                    </div> */}

                    {/* <div className="grid grid-cols-4 gap-6">
                        <div className="flex flex-col items-center text-center gap-5">
                            <div className="min-h-[4.5rem]">
                                <div className="font-medium text-6xl">
                                    <span>170,000</span>+
                                </div>
                                <p className="font-semibold text-lg">App downloads</p>
                            </div>
                            <p className="font-medium text-base">Indian drivers across every make and model use the Vidyutva app to charge their vehicle.</p>
                        </div>

                        <div className="flex flex-col items-center text-center gap-5">
                            <div className="min-h-[4.5rem]">
                                <div className="font-medium text-6xl">
                                    <span>2200</span>+
                                </div>
                                <p className="font-semibold text-lg">Public charging plugs</p>
                            </div>
                            <p className="font-medium text-base">Public charging plugs are available on the network right across India with over 100 added every month.</p>
                        </div>

                        <div className="flex flex-col items-center text-center gap-5">
                            <div className="min-h-[4.5rem]">
                                <div className="font-medium text-6xl">
                                    <span>100</span>%
                                </div>
                                <p className="font-semibold text-lg">Indian</p>
                            </div>
                            <p className="font-medium text-base">Vidyutva is owned and operated by India’s largest network of roadside assist and insurance providers.</p>
                        </div>

                        <div className="flex flex-col items-center text-center gap-5">
                            <div className="min-h-[4.5rem]">
                                <div className="font-medium text-6xl">
                                    <span>5000</span>+
                                </div>
                                <p className="font-semibold text-lg">Chargers daily</p>
                            </div>
                            <p className="font-medium text-base">Every day thousands of drivers across India charge their vehicle on the Vidyutva network</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre