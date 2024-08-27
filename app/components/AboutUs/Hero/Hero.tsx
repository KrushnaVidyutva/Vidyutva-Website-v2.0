import { Link } from "@remix-run/react"
import Carousel from "~/components/Assets/carousel/Carousel"

const Hero = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <Carousel />
            </div>
            <div className="col-span-1 flex justify-center items-center bg-[#e0efec]">
                <div className="w-[65%] flex flex-col gap-4">
                    <h1 className="font-semibold text-5xl text-slate-950">ONE <span className="text-[#00a181]">QR</span> ONE <span className="text-[#00a181]">APP</span></h1>
                    <p className="font-medium text-base text-zinc-700 w-[90%]">Vidyutva is an advanced EV charging software platform building India's most reliable and unified EV charging station network.</p>
                    <div className="flex">
                        <Link to={"#"} className="flex justify-center items-center rounded-[3.125rem] border-[1.5px] border-black bg-[#e0efec] text-black py-[.75rem] px-[1.5rem] hover:bg-[#009085] hover:text-white hover:border-[#e0efec] bx-shadow2 transition-all duration-300 ease-in">
                            <div className="font-sans font-medium">Explore Now</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero