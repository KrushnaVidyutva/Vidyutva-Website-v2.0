import { Link } from "@remix-run/react"
import Questions from "./Questions"
const FAQ = () => {

    return (
        <div className="px-[5%] pb-[7rem]">
            <div className="bg-[#00a181aa] rounded-[1.5rem] px-[3.75rem] py-[6.25rem] min-[950px]:grid items-start min-[950px]:grid-cols-9 max-[950px]:flex max-[950px]:flex-col gap-[5rem]">
                <div className="min-[768px]:col-span-4 flex flex-col items-start gap-6 text-white">
                    <h2 className="font-semibold text-5xl">Got questions?</h2>
                    <p className="text-lg font-normal">Thinking about getting into your first EV or maybe you manage a fleet of hundreds. You’ve got questions and we’ve got answers.</p>
                    <div className="flex items-end flex-wrap gap-4">
                        <Link to={"#"} className="flex justify-center items-center text-zinc-800 text-center px-6 py-3 gap-3 rounded-[3.125rem] border border-white bg-white hover:bg-[#00a181] hover:text-white transition-all duration-300 ease-out">
                            <div className="font-normal text-base pb-1">See all FAQs</div>
                            <div className="flex justify-center items-center flex-col w-4 h-4">
                                <svg width="currentwidth" height="currentheight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11V13Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="min-[950px]:col-span-5 flex flex-col text-white ">
                    <Questions />
                    <Questions />
                    <Questions />
                    <Questions />
                    <Questions />
                    <Questions />
                    <Questions />
                    <div className="border-b border-green-50"></div>
                </div>
            </div>
        </div>
    )
}

export default FAQ