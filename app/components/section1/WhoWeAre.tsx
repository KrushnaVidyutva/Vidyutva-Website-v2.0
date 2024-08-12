// import { useEffect, useRef } from "react";

const WhoWeAre = () => {
    // const sectionRef = useRef(null);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.intersectionRatio > 0.3) {
    //                 entry.target.classList.add("bg-[#00a181]");
    //                 entry.target.classList.add("text-white");
    //             } else {
    //                 entry.target.classList.remove("bg-[#00a181]");
    //                 entry.target.classList.remove("text-white");
    //             }
    //         });
    //     }, {
    //         threshold: 0.3
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
        <div  className='transition-[background-color] duration-500 ease-in-out'>
            <div className="px-[5%]">
                <div className="flex flex-col items-center gap-[5rem]">
                    <div className="text-center w-[100%] max-w-[48rem]">
                        <h1 className="font-semibold text-5xl">Who is Vidyutva?</h1>
                        <p className="pt-[1.5rem] text-xl">We’re India’s largest and fastest growing EV charging network. We’re committed to making charging simple, affordable and fast for everyone - because simpler charging means more EVs on the road, and that’s a very good thing.</p>
                    </div>
                    <div className="w-[100%] rounded-3xl overflow-hidden">
                        <img src="/images/who.webp" alt="Loading..." className="w-[100%]" />
                    </div>
                    <div className="text-center w-[100%] max-w-[48rem]">
                        <h1 className="font-semibold text-5xl">Bringing drivers and chargers together on one platform, built right here in India.</h1>
                    </div>

                    <div className="grid grid-cols-4 gap-6">
                        <div className="flex flex-col items-center text-center gap-5">
                            <div className="min-h-[4.5rem]">
                                <div className="font-medium text-6xl">
                                    <span>170,000</span>+
                                </div>
                                <p className="font-semibold text-lg">App downloads</p>
                            </div>
                            <p className="font-medium text-base">Indian drivers across every make and model use the Chargefox app to charge their vehicle.</p>
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
                            <p className="font-medium text-base">Chargefox is owned and operated by India’s largest network of roadside assist and insurance providers.</p>
                        </div>

                        <div className="flex flex-col items-center text-center gap-5">
                            <div className="min-h-[4.5rem]">
                                <div className="font-medium text-6xl">
                                    <span>5000</span>+
                                </div>
                                <p className="font-semibold text-lg">Chargers daily</p>
                            </div>
                            <p className="font-medium text-base">Every day thousands of drivers across Australia charge their vehicle on the Chargefox network</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre